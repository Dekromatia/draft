import React, {useContext, useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import { Row } from "react-bootstrap";
import { Context } from '../index';
import ModelPage from '../pages/ModelPage';


// ПО ФАКТУ ЛИСТСТ С ИЗОБРАЖЕНИЯМИ КЛЕЙМ ИЗ ТАБЛИЦЫ Image НО НЕ СТАЛА ПЕРЕИМЕНОВЫВАТЬ
const ModelsList = observer(() => {
    const {stamp}=useContext(Context);


    useEffect(() => {
      const fetchData = async () => {
        await stamp.fetchModels();
      };
      fetchData();
    }, [stamp]);

    
    return (
      <Row className="d-flex">
        {stamp.models.map((model)=> 
          <ModelPage key={model.model_id} model_3d={model}/>
        )}
  
      </Row>
    );
  });
  
  export default ModelsList;