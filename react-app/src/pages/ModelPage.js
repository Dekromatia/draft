import React, { useState, useEffect } from 'react';
import { Container, Col, Button, Row } from 'react-bootstrap';
import { BASE_ROUTE, STAMP_ROUTE } from '../utils/consts';
import { useNavigate, useParams } from 'react-router-dom';
import './ModelPage.css';
import { fetchOneModel } from '../http/stampAPI';
import soon from '../assets/soon.png'
// import ModelViewer from '../components/ModelViewer';

// import ModelsList from '../components/MdesList';
// function ModelPage({ model_3d }) {

function ModelPage() {
  const navigate = useNavigate();
  const [model, setModel] = useState({
    model_id: [], model_link: [], model_process: [], model_date: [],
    polygon_count: [], polygon_size: [], polygon_sm: [], frame_count: [], camera: [], lens: [], stamp_id: []
  });
  const { model_id } = useParams();

  useEffect(() => {
    fetchOneModel(model_id).then(data => {
      // console.log(Object.keys(data));
      // console.log(data);
      setModel(data);
    });
  }, [model_id]);


  return (
    <Container className="mt-2 d-flex justify-content-center align-items-flex"
      style={{ width: '100vw', height: '100vh' }}>
      {/* <Col md={8} className="justify-content-center mt-4">
        <h4>Модель</h4>
        {model.model_link && <ModelViewer modelLink={model.model_link} />}
      </Col> */}
      <Col md={8} className="justify-content-center mt-3">
        <Row><h4>Модель</h4></Row>
        <Row>
          {model.model_link ? (
            <iframe
              src={model.model_link}
              title={`Model ${model.model_id}`}
              width="100%"
              height="600px"
            />
          ) : (
            <img
              src={soon}
              alt="Coming Soon"
              width="100%"
              height="600px"
            />
          )}
        </Row>
      </Col>

      <Col md={4} className="justify-content-center mt-3">
        <Row><h4>Характеристики</h4></Row>
        <Row className='d-flex flex-column m-5'>
          {Object.keys(model).map((key) => (
            (key !== 'content_type' && key !== 'model_link' && key !== 'stamp_id') && (
              <Row key={key} className="table-row">
                <Col>
                  {key === 'model_id' ? 'Шифр' :
                    key === 'camera' ? 'Камера' :
                      key === 'lens' ? 'Объектив' :
                        key === 'frame_count' ? 'Кол-во снимков' :
                          key === 'polygon_count' ? 'Кол-во полигонов' :
                            key === 'polygon_sm' ? 'Детальность' :
                              key === 'polygon_size' ? 'Дискретность' :
                                key === 'model_process' ? 'Способ формирования' :
                                  key === 'model_date' ? 'Дата' :
                                    key}
                </Col>
                <Col>{model[key]}</Col>
              </Row>
            )
          ))}
        </Row>
        <Row className="d-grid gap-2 d-flex flex-column m-2">
          <Button className="mb-4"
            variant="outline-light"
            onClick={() => navigate(STAMP_ROUTE + '/' + model.stamp_id)}>
            Назад к клейму
          </Button>
        </Row>
        <Row className="d-grid gap-2 d-flex flex-column m-2">
          <Button className="mb-4"
            variant="outline-light"
            onClick={() => navigate(BASE_ROUTE)}>
            Назад к базе
          </Button>
        </Row>


      </Col>
    </Container>
  )
}

export default ModelPage

/* <Button className="mb-4"
            variant="secondary"
            onClick={() => navigate(STAMP_ROUTE + '/' + model.stamp_id)}>
            Назад
          </Button> */

  // const model = {
  //   model_id: "SF0001",
  //   model_link: "https://rssda.su/auxil/ar0535.html",
  //   model_process: "фотограмметрия",
  //   model_date: "2021-06-07",
  //   polygon_count: 70000,
  //   polygon_size: null,
  //   polygon_sm: null,
  //   frame_count: 100,
  //   camera: "Sony A7RII",
  //   lens: "SEL90M28G",
  //   stamp_id: 356
  // };
