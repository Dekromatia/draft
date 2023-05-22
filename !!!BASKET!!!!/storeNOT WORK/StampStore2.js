import axios from 'axios';
import { makeAutoObservable } from 'mobx';

export default function createStampStore() {
  return makeAutoObservable({
    _sitess: [],
    _manufactss: [],
    _artifactss: [],

    async fetchSitess() {
      try {
        const response = await axios.get('http://localhost:8000/get_manufacts');
        this._sitess = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    async fetchManufactss() {
      try {
        const response = await axios.get('/flask-api/manufactss');
        this._manufactss = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    async fetchArtifactss() {
      try {
        const response = await axios.get('/flask-api/artifactss');
        this._artifactss = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  });
}


// export default class StampStore {
//     constructor() {
//         this._sitess = [];
//         this._manufactss = [];
//         this._artifactss = [];
//         makeAutoObservable(this);
//     }

//     async fetchSitess() {
//         try {
//             const response = await axios.get("http://localhost:8000/get_manufacts");
//             this._sitess = response.data;
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     async fetchManufactss() {
//         try {
//             const response = await axios.get("/flask-api/manufactss");
//             this._manufactss = response.data;
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     async fetchArtifactss() {
//         try {
//             const response = await axios.get("/flask-api/artifactss");
//             this._artifactss = response.data;
//         } catch (error) {
//             console.error(error);
//         }
//     };