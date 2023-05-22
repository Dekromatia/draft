import { makeAutoObservable } from 'mobx';
import { observable, action } from 'mobx';

export default class StampStore {
    constructor() {
        this._items = [];
        this._sites = [];
        this._manufacts = [];
        this._models = [];
        // this._stamps = [];
        // this._artifacts = [];
        // this._images = [];
        this._years = [];
        this._locations = [];
        this._groups = [];
        this._colors = [];
        this._positions = [];
        this._preservations = [];
        this._reliefs = [];
        this._contents = [];
        this._shapes = [];
        this._origins = [];
        this._earlys = [];
        this._lates = [];
        this._finkelsteins = [];
        this._garlans = [];

        this._selectedSite = {};
        this._selectedSites = [];

        this._selectedManufact = {};
        this._selectedModel = {};
        this._selectedItem = {};
        // this._selectedImage = {};
        // this._selectedArtifact = {};
        // this._selectedStamp = {};
        this._selectedYear = {};
        this._selectedLocation = {};
        this._selectedGroup = {};
        this._selectedColor = {};
        this._selectedPosition = {};
        this._selectedPreservation = {};
        this._selectedRelief = {};
        this._selectedContent = {};
        this._selectedShape = {};
        this._selectedOrigin = {};
        this._selectedEarly = {};
        this._selectedLate = {};
        this._selectedFinkelstein = {};
        this._selectedGarlan = {};

        // this._filters = {
        //     stamp_position: null,
        //     year_exc: null,
        //   };
        makeAutoObservable(this);
    }
    

    setStamps(stamps) {
        this._stamps = stamps;
    }
    setArtifacts(artifacts) {
        this._artifacts = artifacts;
    }
    setItems(items) {
        this._items = items;
    }
    setSites(sites) {
        this._sites = sites;
    }
    setSelectedSites(sites) {
        this._selectedSites = sites;
      }

    setManufacts(manufacts) {
        this._manufacts = manufacts;
    }
    setModels(models) {
        this._models = models;
    }
    setYears(years) {
        this._years = years;
    }
    setLocations(locations) {
        this._locations = locations;
    }
    setGroups(groups) {
        this._groups = groups;
    }
    setColors(colors) {
        this._colors = colors;
    }
    setPositions(positions) {
        this._positions = positions;
    }
    setPreservations(preservations) {
        this._preservations = preservations;
    }
    setReliefs(reliefs) {
        this._reliefs = reliefs;
    }
    setContents(contents) {
        this._contents = contents;
    }
    setShapes(shapes) {
        this._shapes = shapes;
    }
    setOrigins(origins) {
        this._origins = origins;
    }
    setEarlys(earlys) {
        this._earlys = earlys;
    }
    setLates(lates) {
        this._lates = lates;
    }
    setFinkelsteins(finkelsteins) {
        this._finkelsteins = finkelsteins;
    }
    setGarlans(garlans) {
        this._garlans = garlans;
    }


    setSelectedStamp(stamp) {
        this._selectedStamp = stamp;
    }
    setSelectedArtifact(artifact) {
        this._selectedArtifact = artifact;
    }
    setSelectedSite(site) {
        this._selectedSite = site;
    }
    setSelectedManufact(manufact) {
        this._selectedManufact = manufact;
    }
    setSelectedModel(model) {
        this._selectedModel = model;
    }
    setSelectedItem(item) {
        this._selectedItem = item;
    }
    setSelectedYear(year) {
        this._selectedYear = year;
    }
    setSelectedLocation(location) {
        this._selectedLocation = location;
    }
    setSelectedGroup(group) {
        this._selectedGroup = group;
    }
    setSelectedColor(color) {
        this._selectedColor = color;
    }
    setSelectedPosition(position) {
        this._selectedPosition = position;
    }
    setSelectedPreservation(preservation) {
        this._selectedPreservation = preservation;
    }
    setSelectedRelief(relief) {
        this._selectedRelief = relief;
    }
    setSelectedContent(content) {
        this._selectedContent = content;
    }
    setSelectedShape(shape) {
        this._selectedShape = shape;
    }
    setSelectedOrigin(origin) {
        this._selectedOrigin = origin;
    }
    setSelectedEarly(early) {
        this._selectedEarly = early;
    }
    setSelectedLate(late) {
        this._selectedLate = late;
    }
    setSelectedFinkelstein(finkelstein) {
        this._selectedFinkelstein = finkelstein;
    }
    setSelectedGarlan(garlan) {
        this._selectedGarlan = garlan;
    }

    get stamps() {
        return this._stamps;
    }
    get artifacts() {
        return this._artifacts;
    }
    get sites() {
        return this._sites;
    }
    get manufacts() {
        return this._manufacts;
    }
    get models() {
        return this._models;
    }
    get items() {
        return this._items;
    }
    get years() {
        return this._years;
    }
    get locations() {
        return this._locations;
    }
    get groups() {
        return this._groups;
    }
    get colors() {
        return this._colors;
    }
    get positions() {
        return this._positions;
    }
    get preservations() {
        return this._preservations;
    }
    get reliefs() {
        return this._reliefs;
    }
    get contents() {
        return this._contents;
    }
    get shapes() {
        return this._shapes;
    }
    get origins() {
        return this._origins;
    }
    get earlys() {
        return this._earlys;
    }
    get lates() {
        return this._lates;
    }
    get finkelsteins() {
        return this._finkelsteins;
    }
    get garlans() {
        return this._garlans;
    }


    get selectedStamp() {
        return this._selectedStamp;
    }
    get selectedArtifact() {
        return this._selectedArtifact;
    }
    get selectedSite() {
        return this._selectedSite;
    }
    get selectedSites() { // change this to a regular getter
        return this._selectedSites;
      }



    get selectedManufact() {
        return this._selectedManufact;
    }
    get selectedModel() {
        return this._selectedModel;
    }
    get selectedItem() {
        return this._selectedItem;
    }
    get selectedYear() {
        return this._selectedYear;
    }
    get selectedLocation() {
        return this._selectedLocation;
    }
    get selectedGroup() {
        return this._selectedGroup;
    }
    get selectedColor() {
        return this._selectedColor;
    }
    get selectedPosition() {
        return this._selectedPosition;
    }
    get selectedPreservation() {
        return this._selectedPreservation;
    }
    get selectedRelief() {
        return this._selectedRelief;
    }
    get selectedContent() {
        return this._selectedContent;
    }
    get selectedShape() {
        return this._selectedShape;
    }
    get selectedOrigin() {
        return this._selectedOrigin;
    }
    get selectedEarly() {
        return this._selectedEarly;
    }
    get selectedLate() {
        return this._selectedLate;
    }
    get selectedFinkelstein() {
        return this._selectedFinkelstein;
    }
    get selectedGarlan() {
        return this._selectedGarlan;
    }

}

    // setSearchQuery(query) {
    //     this._searchQuery = query;
    // }

//     get searchResults() {
//         const { _searchQuery, _items } = this;

//         if (!_searchQuery) {
//             return _items;
//         }

//         const normalizedQuery = _searchQuery.toLowerCase().trim();

//         return _items.filter((item) => {
//             const { name, description } = item;
//             const normalizedName = name.toLowerCase();
//             const normalizedDescription = description ? description.toLowerCase() : '';

//             return (
//                 normalizedName.includes(normalizedQuery) ||
//                 normalizedDescription.includes(normalizedQuery)
//             );
//         });
//     }

// }



    // setSelectedImage(image) {
    //     this._selectedImage = image;
    //   }

    // get images() {
    //     return this._images;
    // }

    // get selectedImage() {
    //     return this._selectedImage;
    // }


// import axios from "axios";
// import { renderModel } from "./renderModel.js";