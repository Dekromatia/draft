import { makeAutoObservable } from 'mobx';
import axios from "axios";


export default class ItemStore {
    constructor() {
        this._items = [];
        this._selectedItem = {};
        makeAutoObservable(this);
    }

    async fetchItems() {
        try {
            const response = await axios.get("http://localhost:8000/get_all");
            this._items = response.data;
        } catch (error) {
            console.error(error);
        }
    }

    setItems(items) {
        this._items = items;
    }

    get items() {
        return this._items;
    }

    setSelectedItem(item){
        this._selectedItem = item;
    }

    get selectedItem() {
        return this._selectedItem;
    }


}