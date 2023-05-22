import React from 'react'

function ModelList() {

import React, {useContext, useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import StampItem from './StampItem';
import { Row } from "react-bootstrap";
import { Context } from '../index';


const StampList = observer(() => {
    const {stamp}=useContext(Context);


    useEffect(() => {
      const fetchData = async () => {
        await stamp.fetchM();
      };
      fetchData();
    }, [stamp]);

    
    return (
      <Row className="d-flex">
        {stamp.images.map((image)=> 
          <StampItem key={image.image_id} image={image}/>
        )}
  
      </Row>
    );
  });
  
  export default StampList;

  return (
    <div>ModelList</div>
  )
}

export default ModelList