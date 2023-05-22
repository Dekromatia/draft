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