import React, { useContext,useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import StampItem from './StampItem';
import { Row } from "react-bootstrap";
import { Context } from '../index';
import {fetchItems} from '../http/stampAPI';




// ПО ФАКТУ ЛИСТСТ С ИЗОБРАЖЕНИЯМИ КЛЕЙМ ИЗ ТАБЛИЦЫ Image НО НЕ СТАЛА ПЕРЕИМЕНОВЫВАТЬ
const StampList = observer(() => {
  const { stamp } = useContext(Context);

  useEffect(() => {
    fetchItems().then(data => stamp.setItems(data))
  }, []);

  return (
    <Row className="d-flex">

      {stamp.items.slice().map((item) =>
        <StampItem key={item.id} item={item} />
      )}

    </Row>
  );
});

export default StampList;

/* {stamp.stamps.slice().reverse().map((stamp)=> 
          <StampItem key={stamp.id} stamp={stamp}/>
        )} */


  // useEffect(() => {
  //   const fetchData = async () => {
  //     await stamp.fetchImages();
  //   };
  //   fetchData();
  // }, [stamp]);
