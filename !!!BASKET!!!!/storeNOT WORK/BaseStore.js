import { makeAutoObservable } from 'mobx';
import axios from 'axios';

export default class BaseStore {
    constructor() {
        this._sites = [];
        this._manufacts = [];
        this._artifacts = [];
        makeAutoObservable(this);
    }

    async fetchSites() {
        try {
            const response = await axios.get("http://localhost:8000/get_sites"); // Replace "/api/sitess" with the appropriate API endpoint on your Flask backend
            this._sites = response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async fetchManufacts() {
        try {
            const response = await axios.get("http://localhost:8000/get_manufacts"); // Replace "/api/manufactss" with the appropriate API endpoint on your Flask backend
            this._manufacts = response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async fetchArtifacts() {
        try {
            const response = await axios.get("http://localhost:8000/get_artifacts"); // Replace "/api/artifactss" with the appropriate API endpoint on your Flask backend
            this._artifacts = response.data;
        } catch (error) {
            console.error(error);
        }
    }

const baseStore = new BaseStore();

export default baseStore;