import React, { useContext, useEffect } from 'react'
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import './BasePage.css';
import StampList from '../components/StampList';
import { fetchColors, fetchItems, fetchManufacts, fetchSites, fetchYears, fetchLocations, fetchGroups,
  fetchPositions, fetchPreservations, fetchReliefs, fetchContents, fetchShapes, fetchOrigins, fetchEarlys,
   fetchLates, fetchFinkelsteins, fetchGarlans} from '../http/stampAPI';
import SiteNameList from '../components/filters/SiteNameList';
import ManufactCenterList from '../components/filters/ManufactCenterList';
import YearList from '../components/filters/YearList';
import ArtifLocationList from '../components/filters/ArtifLocationList';
import ArtifGroupList from '../components/filters/ArtifGroupList';
import ColorList from '../components/filters/ColorList';
import PositionList from '../components/filters/PositionList';
import PreservationList from '../components/filters/PreservationList';
import ReliefTypeList from '../components/filters/ReliefTypeList';
import ContentTypeList from '../components/filters/ContentTypeList';
import ShapeTypeList from '../components/filters/ShapeTypeList';
import OriginTypeList from '../components/filters/OriginTypeList';
import EarlyList from '../components/filters/EarlyList';
import LateList from '../components/filters/LateList';
import GarlanList from '../components/filters/GarlanList';
import FinkelsteinList from '../components/filters/FinkelsteinList';
// import DualRangeSlider from '../components/forms/DualRangeSlider';
import EarlySlider from '../components/forms/EarlySlider';
import LateSlider from '../components/forms/LateSlider';

const BasePage = observer(() => {
  const { stamp } = useContext(Context);
  // возможно стоит перенести в компоненты непосредственно
  useEffect(() => {
    fetchSites().then(data => stamp.setSites(data));
    fetchManufacts().then(data => stamp.setManufacts(data));
    fetchYears().then(data => stamp.setYears(data));
    fetchLocations().then(data => stamp.setLocations(data));
    fetchGroups().then(data => stamp.setGroups(data));
    fetchColors().then(data => stamp.setColors(data));
    fetchPositions().then(data => stamp.setPositions(data));
    fetchPreservations().then(data => stamp.setPreservations(data));
    fetchReliefs().then(data => stamp.setReliefs(data));
    fetchContents().then(data => stamp.setContents(data));
    fetchShapes().then(data => stamp.setShapes(data));
    fetchOrigins().then(data => stamp.setOrigins(data));
    fetchEarlys().then(data => stamp.setEarlys(data));
    fetchLates().then(data => stamp.setLates(data));
    fetchFinkelsteins().then(data => stamp.setFinkelsteins(data));
    fetchGarlans().then(data => stamp.setGarlans(data));
  }, []);

  useEffect(() => {
    const site_id = stamp.selectedSite ? stamp.selectedSite.id : null;
    const manufact_id = stamp.selectedManufact ? stamp.selectedManufact.id : null;
    const year_exc = stamp.selectedYear ? stamp.selectedYear : null; // add selectedYear
    const artif_position = stamp.selectedLocation ? stamp.selectedLocation : null;
    const artif_g = stamp.selectedGroup ? stamp.selectedGroup : null;
    const munsell_name = stamp.selectedColor ? stamp.selectedColor : null;
    const stamp_position = stamp.selectedPosition ? stamp.selectedPosition : null; // add selectedStamp
    const stamp_preservation = stamp.selectedPreservation ? stamp.selectedPreservation : null;
    const relief_type = stamp.selectedRelief ? stamp.selectedRelief : null;
    const content_type = stamp.selectedContent ? stamp.selectedContent : null;
    const shape_type = stamp.selectedShape ? stamp.selectedShape : null;
    const origin_type = stamp.selectedOrigin ? stamp.selectedOrigin : null;
    const date_early = stamp.selectedEarly ? stamp.selectedEarly : null;
    const date_late = stamp.selectedLate ? stamp.selectedLate : null;
    const finkelstein = stamp.selectedFinkelstein ? stamp.selectedFinkelstein : null;
    const garlan = stamp.selectedGarlan ? stamp.selectedGarlan : null;

    fetchItems(site_id, manufact_id, year_exc, artif_position, artif_g, munsell_name,
       stamp_position, stamp_preservation, relief_type, content_type, shape_type, origin_type, date_early,
       date_late, finkelstein, garlan).then(data => stamp.setItems(data))
  }, [stamp.selectedSite, stamp.selectedManufact, stamp.selectedYear, stamp.selectedLocation, stamp.selectedGroup, stamp.selectedColor,
      stamp.selectedPosition, stamp.selectedPreservation, stamp.selectedRelief, stamp.selectedContent, stamp.selectedShape,
      stamp.selectedOrigin, stamp.selectedEarly, stamp.selectedLate, stamp.selectedFinkelstein, stamp.selectedGarlan]);


  return (
    <Container className="justify-content-center">
      <Row className='mt-3 item-text'>
        <Col md={3}>
          <Accordion eventKey="0" defaultActiveKey={['0']} alwaysOpen >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Памятник</Accordion.Header>
              <Accordion.Body>
                <SiteNameList />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Центр производства</Accordion.Header>
              <Accordion.Body>
                <ManufactCenterList />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Год раскопок</Accordion.Header>
              <Accordion.Body>
                <YearList />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Mесто находки</Accordion.Header>
              <Accordion.Body>
                <ArtifLocationList />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Тип сосуда</Accordion.Header>
              <Accordion.Body>
                <ArtifGroupList />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>Цвет</Accordion.Header>
              <Accordion.Body>
                <ColorList />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>Расположение клейма</Accordion.Header>
              <Accordion.Body>
                <PositionList />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>Сохранность</Accordion.Header>
              <Accordion.Body>
                <PreservationList />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>Тип рельефа</Accordion.Header>
              <Accordion.Body>
                <ReliefTypeList />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
              <Accordion.Header>Содержание</Accordion.Header>
              <Accordion.Body>
                <ContentTypeList />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="10">
              <Accordion.Header>Форма</Accordion.Header>
              <Accordion.Body>
                <ShapeTypeList />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="11">
              <Accordion.Header>Ранняя дата</Accordion.Header>
              <Accordion.Body>
                <EarlyList />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="12">
              <Accordion.Header>Поздняя дата</Accordion.Header>
              <Accordion.Body>
                <LateList />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="13">
              <Accordion.Header>Группа по Финкельштейну</Accordion.Header>
              <Accordion.Body>
                <FinkelsteinList />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="14">
              <Accordion.Header>Группа по Гарлану</Accordion.Header>
              <Accordion.Body>
                <GarlanList />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="15">
              <Accordion.Header>Происхождение</Accordion.Header>
              <Accordion.Body>
                <OriginTypeList />
              </Accordion.Body>
            </Accordion.Item>

            {/* <Accordion.Item eventKey="16">
              <Accordion.Header>Эмблема</Accordion.Header>
              <Accordion.Body>
                <EmblemList />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="17">
              <Accordion.Header>Размер по большой оси</Accordion.Header>
              <Accordion.Body>
                <AxisLargeList />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="18">
              <Accordion.Header>Размер по малой оси</Accordion.Header>
              <Accordion.Body>
                <AxisSmallList />
              </Accordion.Body>
            </Accordion.Item> */}

          </Accordion>
        </Col >

        <Col md={9}>
          {/* <Row><DualRangeSlider/></Row> */}
          {/* <EarlySlider/> */}
          {/* <LateSlider/> */}
          
          <Row><StampList /></Row>
          
          
        </Col>
      </Row>
    </Container>
  )
})

export default BasePage;






