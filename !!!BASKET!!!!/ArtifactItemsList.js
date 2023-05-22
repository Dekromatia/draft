import React, { useContext , useEffect} from 'react';
import {observer} from "mobx-react-lite";
import ListGroup from "react-bootstrap/ListGroup";
import { Context } from '../react-app/src/index';

const ArtifactItemsList = observer(() => {
    const {stamp}=useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
          await stamp.fetchArtifacts();
        };
        fetchData();
      }, [stamp]);

    return (
    <>
    <ListGroup>
        {stamp.artifacts.map((artifact) => (
            <ListGroup.Item
            style={{ cursor: 'pointer' }}
            active={artifact.id === stamp.selectedArtifact?.id}
            onClick={() => stamp.setSelectedArtifact(artifact)}
            key={artifact.id}
            >
            {artifact.year_exc}
            </ListGroup.Item>
        ))}
        </ListGroup>
    </>
    );
});


export default ArtifactItemsList