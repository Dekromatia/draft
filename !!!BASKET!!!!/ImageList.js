
import React, {useContext, useEffect} from 'react';
import { observer } from 'mobx-react-lite';
// import StampItem from './StampItem';
import { Row } from "react-bootstrap";
import { Context } from '../index';
import StampPage from '../pages/StampPage';


const ImageList = observer(() => {
    const {stamp}=useContext(Context);


    useEffect(() => {
      const fetchData = async () => {
        await stamp.fetchImages();
      };
      fetchData();
    }, [stamp]);

    
    return (
      <Row>
        {stamp.images.map((image)=> 
          <StampPage key={stamp.id} imstamp={image}/>
        )}
  
      </Row>
    );
  });
  
  export default ImageList;