import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import axios from "axios";
// import StampStore from "./StampStore";

#надо переписать под мой код

const stampStore = new StampStore();

const StampStore() => {
  useEffect(() => {
    stampStore.fetchSitess("/get_sites");
    stampStore.fetchManufactss("/get_manufacts");
    stampStore.fetchArtifactss('/get_artifacts');
  }, []);

  return (
    <div>
      <h1>Sitess:</h1>
      <ul>
        {stampStore.sitess.map((site) => (
          <li key={site.id}>
            {site.site_name}
            {site.site_latitude}
            {site.site_longitude}
          </li>
        ))}
      </ul>
      <h1>Manufactss:</h1>
      <ul>
        {stampStore.manufactss.map((manufact) => (
          <li key={manufact.id}>
            {manufact.manufact_center}
            {manufact.manufact_latitude}
            {manufact.manufact_longitude}
          </li>
        ))}
      </ul>
      <h1>Artifactss:</h1>
      <ul>
        {stampStore.artifactss.map((artifact) => (
          <li key={artifact.id}>
            {artifact.site_id}
            {artifact.manufact_id}
            {artifact.unit_exc}
            {artifact.leader_exc}
            {artifact.artif_position}
            {artifact.field_id}
            {artifact.artif_depository}
            {artifact.depository_id}
            {artifact.description}
            {artifact.artif_g}
            {artifact.artif_preservation}
            {artifact.munsell_hue}
            {artifact.munsell_value}
            {artifact.munsell_chroma}
            {artifact.munsell_code}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default StampStore;


// !!!! КАК В ВИДЕО метод 1!!!!!!!!!!!!!!!!

import {makeAutoObservable} from "mobx";

export default class StampStore {
constructor() {
this._sitess = [
{id: 1, site_name: "Бухта Ак-Бурун",site_latitude: 45.31778,site_longitude: 36.49361},
{id: 2, site_name: "Фанагория", site_latitude: 45.26950,site_longitude: 36.96620}
]
this._manufactss = [
{id: 1, manufact_center:"Аканф", manufact_latitude:40.39396, manufact_longitude:23.88598},
{id: 2, manufact_center:"Аканф", manufact_latitude:40.39396, manufact_longitude:23.88598}
]
this._artifactss = [
{id:1, site_id:1,
manufact_id:2,
year_exc: 2015,
unit_exc:"Подводный отряд ИА РАН",
leader_exc:"Ольховский",
artif_position:"Р-1",
field_id:"ПАБ-15.1.73.к.о.32",
artif_depository :"Восточно-Крымский ИКМЗ",
depository_id:"depo ID 191919191",
description:"ОПИСАНИЕ АРТЕФАКТА",
artif_g:"АМФОРА",
artif_preservation :"фрагмент",
munsell_hue:"2.5YЭ",
munsell_value:6,
munsell_chroma:4,
munsell_code:"2.5Y 6/4",
munsell_name:"Yellowish Brown"
},
{id:2, site_id:2,
manufact_id:1,
year_exc: 2016,
unit_exc:"Подводный отряд ИА РАН",
leader_exc:"Ольховский",
artif_position:"Р-16",
field_id:"ПАБ-15.1.73.к.о.66",
artif_depository:"Восточно-Крымский ИКМЗ",
depository_id:"depo ID 000000095598",
description:"ОПИСАНИЕ АРТЕФАКТА",
artif_g:"АМФОРА",
artif_preservation :"фрагмент",
munsell_hue:"2.5YЭ",
munsell_value:6,
munsell_chroma:4,
munsell_code:"2.5Y 6/4",
munsell_name:"Yellowish Brown"}
]
makeAutoObservable(this)
}
}

setSitess(sitess) {
this._sitess = sitess
}
setManufactss(manufactss) {
this._manufactss = manufactss
}
setArtifactss(artifactss) {
this._artifactss = _artifactss
}
get sitess() {
return this._sitess
}
get manufactss() {
return this._manufactss
}
get artifactss() {
return this._artifactss
}



// !!!!!!!!!!!!ЭТОТ НОВЕЕ метод 2


import { makeAutoObservable } from "mobx";
import axios from "axios";

export default class StampStore {
constructor() {
this._sitess = [];
this._manufactss = [];
this._artifactss = [];
makeAutoObservable(this);
}

async fetchSitess() {
try {
const response = await axios.get("/flask-api/sitess"); // Replace "/api/sitess" with the appropriate API endpoint on your Flask backend
this._sitess = response.data;
} catch (error) {
console.error(error);
}
}

async fetchManufactss() {
try {
const response = await axios.get("/api/manufactss"); // Replace "/api/manufactss" with the appropriate API endpoint on your Flask backend
this._manufactss = response.data;
} catch (error) {
console.error(error);
}
}

async fetchArtifactss() {
try {
const response = await axios.get("/api/artifactss"); // Replace "/api/artifactss" with the appropriate API endpoint on your Flask backend
this._artifactss = response.data;
} catch (error) {
console.error(error);
}
}

// Оба этих фрагмента кода определяют класс StampStore, который использует MobX для управления состоянием. 
// Однако между ними есть некоторые различия в том, как определяется начальное состояние и как извлекаются данные.

// Первый фрагмент кода определяет начальное состояние магазина, присваивая массивам _sitess, 
// _manufactss и _artifactss некоторые жестко заданные значения. Он также определяет три метода 
// установки («setSitess», «setManufactss» и «setArtifactss») и три метода получения («sitess», «manufactss» и 
//   «artifactss») для обновления и получения состояния.

// Второй фрагмент кода определяет пустое начальное состояние для хранилища и использует асинхронные 
// методы («fetchSitess», «fetchManufactss» и «fetchArtifactss») для получения данных из конечной точки API.
//  Затем данные сохраняются в массивах _sitess, _manufactss и _artifactss с использованием наблюдаемых свойств MobX.

// С точки зрения функциональности оба фрагмента кода достигают одной и той же цели управления состоянием 
// с помощью MobX. Однако второй фрагмент кода является более гибким, поскольку он позволяет динамически
//  извлекать данные из конечной точки API, что может быть полезно в ситуациях, когда начальное состояние 
//  хранилища неизвестно или его необходимо часто обновлять.