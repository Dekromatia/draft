import React, { useEffect, useState } from 'react';
import { Container, Col, Button, Row, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { BASE_ROUTE, MODEL_ROUTE } from '../utils/consts';
import { useNavigate, useParams } from 'react-router-dom';
import FullImageModal from '../components/modals/FullImageModal';
import { fetchOneItem } from '../http/stampAPI';
import coming from '../assets/coming.png';

function StampPage() {
  const [item, setItem] = useState({
    site_name: [], leader_exc: [], unit_exc: [],
    year_exc: [], artif_position: [], field_id: [],
    artif_depository: [], depository_id: [],
    artif_g: [], description: [], artif_preservation: [],
    munsell_hue: [], munsell_value: [], munsell_chroma: [], munsell_code: [], munsell_name: [],

    model_id: [], stamp_position: [], emblem: [], stamp_preservation: [],
    imanufact_center: [], magist_name: [], fabric_name: [], date_text: [],
    relief_type: [], content_type: [], shape_type: [], origin_type: [],
    axis_large: [], axis_small: [],
    finkelstein: [], garlan: [],
    xlink300px: '', xlink1000px: '', zlink1000px: '', zlink300px: '',
    glink1000px: '', glink300px: ''
  });

  const list1 = ['model_id', 'stamp_position', 'emblem', 'stamp_preservation',
    'manufact_center', 'magist_name', 'fabric_name', 
    'relief_type', 'content_type', 'shape_type', 'origin_type', 'axis_large',
    'axis_small', 'finkelstein', 'garlan','date_text'];

  const list = ['site_name', 'leader_exc', 'unit_exc', 'year_exc', 'artif_position', 'field_id',
    'artif_depository', 'depository_id', 'artif_g', 'artif_preservation',
    'munsell_name','munsell_code', 'munsell_hue', 'munsell_value', 'munsell_chroma'];


  const { id } = useParams();
  // console.log(params)

  useEffect(() => {
    fetchOneItem(id).then(data => setItem(data));
  }, []);


  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const handleClose = () => setShow(false);

  const handleImageClick = (src) => {
    setImageSrc(src);
    setShow(true);
  };

  return (
    <Container className="mt-2 d-flex justify-content-center align-items-flex-start"
      style={{ width: '100vw', height: '100vh' }}
    >

      <Col md={4} className="justify-content-center mt-2">
        {/* <CardGroup> */}
        <h4 className="bold">Иллюстрации</h4>
        <Image
          className='mt-2'
          variant="top"
          src={
            (item.xlink1000px && item.xlink300px && item.xlink1000px.startsWith('SF') && item.xlink300px.startsWith('SF'))
              ? coming
              : item.xlink300px
          }
          style={{
            width: 310,
            height: 205,
            cursor: (
              item.xlink1000px && item.xlink300px && item.xlink1000px.startsWith('SF') && item.xlink300px.startsWith('SF')
                ? 'default'
                : 'pointer'
            )
          }}
          onClick={() => {
            if (!(item.xlink1000px && item.xlink300px && item.xlink1000px.startsWith('SF') && item.xlink300px.startsWith('SF'))) {
              handleImageClick(item.xlink1000px);
            }
          }}
        />
        <Image
          className='mt-2'
          src={
            (item.zlink300px && item.zlink1000px)
              ? item.zlink300px
              : (item.zlink1000px ?? coming)
          }
          style={{
            width: 310,
            height: 205,
            cursor: (
              item.zlink300px && item.zlink1000px
                ? "pointer"
                : "default"
            )
          }}
          onClick={() => {
            if (item.zlink300px && item.zlink1000px) {
              handleImageClick(item.zlink1000px);
            }
          }}
        />
        <Image
          className='mt-2'
          src={
            (item.glink300px && item.glink1000px)
              ? item.glink300px : (item.glink1000px ?? coming)
          }
          style={{
            width: 310,
            height: 205,
            cursor: (item.glink300px && item.glink1000px
              ? "pointer"
              : "default"
            )
          }}
          onClick={() => {
            if (item.glink300px && item.glink1000px) {
              handleImageClick(item.glink1000px);
            }
          }}
        />
        {/* </CardGroup> */}
        <Row>
          <Card className="d-flex mt-2"
            border="secondary"
            // bg={'#0b0b0b'} 
            // text={'fcfcdb'}
            style={{
              width: 310, backgroundColor: "#0b0b0b"
              // , color: "#fcfcdb"
            }}
          >
            <Card.Header as="h5">Восстановленная легенда:</Card.Header>
            {/* <Card.Header border="secondary" bg={'black'} text={'fcfcdb'} as="h5">Восстановленная легенда</Card.Header> */}
            <Card.Body className="d-grid gap-2">
              <Card.Text>
                {item.stamp_legend}
              </Card.Text>
              <Button variant="secondary"
                onClick={() => navigate(MODEL_ROUTE + '/' + item.model_id)}
              // onClick={() => navigate(MODEL_ROUTE + '/' + model.model_id)} - если получать из отдельных табиц а не из общей
              >Посмотреть в 3D
              </Button>
              <Button variant="secondary"
                onClick={() => navigate(BASE_ROUTE)}
              >Назад к БД
              </Button>
            </Card.Body>
          </Card>
        </Row>
        {/* </CardGroup> */}
        <FullImageModal show={show} handleClose={handleClose} imageSrc={imageSrc} />
      </Col>


      <Col md={4} className="justify-content-center mt-2">
        <h4 className="bold">Общая информация</h4>
        <Row className='d-flex flex-column m-3'>
          {/* <h4>Общая информация</h4> */}
          {list.map((key) => {
            if (!item.hasOwnProperty(key)) {
              return null;
            }
            return (
              // (key !== 'model_id' && key !== 'stamp_position' && key !== 'emblem') && (
              <Row key={key} className="table-row">
                <Col>
                  {key === 'site_name' ? 'Памятник' :
                    key === 'leader_exc' ? 'Руководитель раскопок' :
                      key === 'unit_exc' ? 'Организация' :
                        key === 'year_exc' ? 'Год' :
                          key === 'artif_position' ? 'Место находки' :
                            key === 'field_id' ? 'Полевой шифр' :
                              key === 'artif_depository' ? 'Место хранения' :
                                key === 'depository_id' ? 'Инвентарный номер' :
                                  key === 'artif_g' ? 'Предмет' :
                                    // key === 'description' ? 'Описание' :
                                      key === 'artif_preservation' ? 'Сохранность' :
                                        key === 'munsell_name' ? 'Цвет по Манселлу' :
                                          key === 'munsell_code' ? 'Код по Манселлу' :
                                            key === 'munsell_hue' ? 'тон' :
                                              key === 'munsell_value' ? 'значение' :
                                                key === 'munsell_chroma' ? 'хром' :
                                                  key}
                </Col>
                <Col>{item[key]}</Col>
              </Row>
            );
          })}
        </Row>
      </Col>


      <Col md={4} className="justify-content-left mt-2">
      <h4 className="bold">О клейме</h4>
      <Row className='d-flex flex-column m-3'>
          {/* <h4>О клейме</h4> */}
          {list1.map((key) => {
            if (!item.hasOwnProperty(key)) {
              return null;
            }
            return (
              // (key !== 'model_id' && key !== 'stamp_position' && key !== 'emblem') && (
              <Row key={key} className="table-row">
                <Col>
                  {key === 'model_id' ? 'Идентификатор клейма' :
                    key === 'stamp_position' ? 'Расположние' :
                      key === 'emblem' ? 'Эмблема' :
                        key === 'stamp_preservation' ? 'Сохранность' :
                          key === 'manufact_center' ? 'Центр производства' :
                            key === 'magist_name' ? 'Магистрант' :
                              key === 'fabric_name' ? 'Фабрикант' :
                                key === 'relief_type' ? 'Тип по рельефу' :
                                  key === 'content_type' ? 'Тип по содержанию' :
                                    key === 'shape_type' ? 'Тип по форме' :
                                      key === 'origin_type' ? 'Тип по происхождению' :
                                        key === 'axis_large' ? 'Размер по большой оси' :
                                          key === 'axis_small' ? 'Размер по малой оси' :
                                            key === 'finkelstein' ? 'Группа по Финкельштейну' :
                                              key === 'garlan' ? 'Группа по Гарлану' :
                                                key === 'date_text' ? 'Датировка' :
                                                  key}
                </Col>
                <Col>{item[key]}</Col>
              </Row>
            );
          })}
        </Row>
      </Col>
</Container>
)}
export default StampPage


  // artif_depository: [], artif_g: [], artif_position: [], artif_preservation: [],
  // artifact_id: [], axis_large: [], axis_small: [], content_type: [], date_early: [], date_late: [], date_text: [],
  // depository_id: [], emblem: [], fabric_name: [],
  // field_id: [], finkelstein: [], frame_count: [], garlan: [], glink1000px: '', glink300px: '', leader_exc: [],
  // magist_name: [], manufact_center: [], manufact_id: [], manufact_latitude: [], manufact_longitude: [],
  // munsell_chroma: [], munsell_code: [], munsell_hue: [], munsell_name: [], munsell_value: [], origin_type: [],
  // polygon_count: [], polygon_size: [], polygon_sm: [], relief_type: [], shape_type: [],
  // site_id: [], site_name: [], stamp_comments: [], stamp_id: [], stamp_legend: [], stamp_legend_comment: [], stamp_position: [],
  // stamp_preservation: [], stamp_preservation_comm: [], xlink300px: '', xlink1000px: '', year_exc: [], zlink1000px: '', zlink300px: '',
  // model_id: []

  // camera:[], // lens:[],  // model_date:[],// model_link:[],// model_process:[],site_latitude:[],// site_longitude:[],

        {/* <Card border="darck"
          style={{ backgroundColor: "#0b0b0b" }}> */}
        {/* <Card border="darck"
          style={{backgroundColor: "#0b0b0b"}}>
            <Card.Body>
              <Card.Title className="bold" as="h4">Общая информация</Card.Title>
              <Card.Text className='mt-3' as="h5">
                <p>Археологический памятник: {item.site_name}</p>
                <h5 className="underlined">Раскопки</h5>
                <p>руководитель: {item.leader_exc}</p>
                <p>организация: {item.unit_exc}</p>
                <p>год раскопок: {item.year_exc}</p>
                <p>место находки: {item.artif_position}</p>
                <p>полевой шифр: {item.field_id}</p>
                <h5 className="underlined">Хранение</h5>
                <p>место: {item.artif_depository}</p>
                <p>инвентарный номер: {item.depository_id}</p>
                <h5 className="underlined">Артефакт</h5>
                <p>предмет: {item.artif_g}</p>
                <p>описание: {item.description}</p>
                <p>сохранность: {item.artif_preservation}</p>
                <h5 className="underlined">Цвет</h5>
                <p>тон: {item.munsell_hue}</p>
                <p>значение: {item.munsell_value}</p>
                <p>хром: {item.munsell_chroma}</p>
                <p>код по Манселлу: {item.munsell_code}</p>
                <p>название по Манселлу: {item.munsell_name}</p>
              </Card.Text>
            </Card.Body>
          </Card> */}


        {/* <Card border="darck" bg="black">
          <Card.Body>
            <Card.Title className="bold" as="h4">О клейме</Card.Title>
            <Card.Text className='mt-3' as="h5">
              <p>Идентификатор клейма: {item.model_id}</p>

              <p>расположние: {item.stamp_position}</p>
              <p>эмблема: {item.emblem}</p>
              <p>сохранность: {item.stamp_preservation}</p>

              <p>центр производства: {item.manufact_center}</p>
              <p>магистрант: {item.magist_name}</p>
              <p>фабрикант: {item.fabric_name}</p>
              <p>датировка: {item.date_text}</p>

              <h5 className="underlined">Тип по:</h5>
              <p>рельефу: {item.relief_type}</p>
              <p>содержанию: {item.content_type}</p>
              <p>форме:{item.shape_type}</p>
              <p>происхождению: {item.origin_type}</p>

              <h5 className="underlined">Размер клейма:</h5>
              <p>по большой оси: {item.axis_large}</p>
              <p>по малой оси: {item.axis_small}</p>

              <h5 className="underlined">Xронологическая группа:</h5>
              <p>по Финкельштейну:{item.finkelstein}</p>
              <p>по Гарлану:{item.garlan}</p>


            </Card.Text>
          </Card.Body>
        </Card> */}





// const item = {
//   artif_depository: "Восточно крымский...", artif_g: "амфора", artif_position: "P-1", artif_preservation: "частичная",
//   artifact_id: 354, axis_large: 10, axis_small: 5, date_early: -300, date_late: -100, date_text: "300 - 100 гг. днэ",
//   depository_id: "КП-189128", description: "описание артефакта", emblem: "афина на орле", fabric_name: "мистер фабрикант",
//   field_id: "ПАБ-15.1.73.к.о.32", finkelstein: "IIIa", frame_count: 37, garlan: "V МГ(А)", id: 356, image_description: null,
//   image_id: 1, image_type: null, leader_exc: "Ольховский С. В.", lens: "SEL90M28G",
//   link1000px: "https://rssdabase.su/RSSDA/imagery/ar/1000px/AR0535X.png",
//   link300px: "https://rssdabase.su/RSSDA/imagery/ar/300px/AR0535X.png",
//   Zlink1000px: "https://rssdabase.su/RSSDA/imagery/ar/1000px/AR0535Z.png",
//   Glink1000px: "https://rssdabase.su/RSSDA/imagery/ar/1000px/AR0535AS_GrSc-01.png",
//   magist_name: null, manufact_center: "Родос", manufact_id: 9, manufact_latitude: "36.16700", manufact_longitude: "28.00000",
//   munsell_chroma: 4, munsell_code: "2.5Y 6/4", munsell_hue: "2.5Y", munsell_name: "Light Yellowish Brown",
//   munsell_value: 6, origin_type: null, relief_type: "позитивное", shape_type: "подпрямоугольное",
//   site_id: 2, site_latitude: "45.26950", site_longitude: "36.96620", site_name: "Бухта Ак-Бурун",
//   stamp_comments: null, stamp_id: 356, stamp_legend_comment: null, stamp_position: "ручка", stamp_preservation: "полная",
//   stamp_preservation_comm: "Легенда плохо отпечаталась, имя не определяется.",
//   stamp_legend: "[ΑΣΤΥΝΟΜΟΥΝΤΟΣ] [ΠΟΣΙ]ΔΕΙ[ΟΥ] [ΤΟΥ ΘΕ]ΑΡΙΩΝΟΣ [ΗΡΑΚΛΕΙΔ]ΗΣ",
//   unit_exc: "Подводный отряд ИА РАН", year_exc: 2015,
//   model_id: "SF0001"
// };
// !!!!НЕНУЖНЫ НА ЭТОЙ СТРАНИЦЕ
// model_link: "https://rssda.su/auxil/ar0535.html",
// model_process: "фотограмметрия",
// model_date: "2021-06-07",
// polygon_count: 70 000,
// polygon_size: null,
// polygon_sm: null,
// camera: "Sony A7RII",
// content_type: null,

{/* <Row className='mt-2'>
            <Image width={250} height={190} src={item.link1000px} />
          </Row> */}
{/* <Row className='mt-2'>
            <Image width={250} height={190} src={item.Zlink1000px} />
          </Row>
          <Row className='mt-2'>
            <Image width={250} height={190} src={item.Glink1000px} />
          </Row> */}
{/* <Row className='mt-2'>
          <Card border="secondary" bg={'black'} text={'fcfcdb'} style={{ width: 400, height: 150 }}>
            <Card.Header as="h5">Восстановленная легенда</Card.Header>
            <Card.Body>
              <Card.Text>
                {item.stamp_legend}
              </Card.Text>
              <Button variant="secondary">Go TO MODEL!!!!ADD</Button>
            </Card.Body>
          </Card>
        </Row> */}