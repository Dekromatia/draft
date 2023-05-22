import React from 'react';
import { Col, Card} from 'react-bootstrap';
import soon from '../assets/soon.png';
import { useNavigate } from 'react-router-dom';
import { STAMP_ROUTE } from '../utils/consts';

const StampItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Col md={3} className={"mt-2"} onClick={() => navigate(STAMP_ROUTE + '/' + item.id)}>
      <Card style={{ width: 240, cursor: 'pointer', background:'#0b0b0b'}} text={'fcfcdb'} >

      <Card.Img width={240} height={170} 
                src={item.xlink300px.startsWith('SF') ? soon : item.xlink300px} 
                alt="Card image"
      />
      {/* <Card.ImgOverlay>
        <Card.Title>{item.id}</Card.Title>
      </Card.ImgOverlay> */}
        {/* <Image width={200} height={160} src={imageSrc} /> */}
        {/* <div>клеймо</div> */}
      </Card>
    </Col>
  );
};

export default StampItem;


  // console.log(navigate);

  // const isXLink = image.link300px.endsWith('X.png');
  // const isSFLink = image.link300px.startsWith('SF');

  // if (!isXLink && !isSFLink) {
  //   return null;
  // }

  // const imageSrc = isXLink ? image.link300px : soon;

  // const isXLink = stamp.xlink300px.endsWith('X.png');
  // const isSFLink = stamp.xlink300px.startsWith('SF');

  // if (!isXLink && !isSFLink) {
  //   return null;
  // }

  // const imageSrc = isXLink ? stamp.xlink300px : soon;