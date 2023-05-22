import { $host } from "./index";
// import jwt_decode from "jwt-decode";
export const fetchSites = async () => {
    const { data } = await $host.get("/get_sites");
    return data;
};

export const fetchManufacts = async () => {
    const { data } = await $host.get("/get_manufacts");
    return data;
};


// export const fetchArtifacts = async () => {
// const { data } = await $host.get("/get_artifacts");
// return data;
// };

// export const fetchStamps = async () => {
//     const { data } = await $host.get("/get_stamps");
//     return data;
//     };
// export const fetchOneStamp = async (id) => {
//     const { data } = await $host.get(`/get_stamps/${id}`);
//     return data;
//     };

export const fetchModels = async () => {
    const { data } = await $host.get("/get_models");
    return data;
};
export const fetchOneModel = async (model_id) => {
    const { data } = await $host.get(`/get_model/${model_id}`);
    return data;
};



export const fetchYears = async () => {
    const { data } = await $host.get("/get_years");
    return data;
};
export const fetchLocations = async () => {
    const { data } = await $host.get("/get_locations");
    return data;
};
export const fetchGroups= async () => {
    const { data } = await $host.get("/get_groups");
    return data;
};
export const fetchColors= async () => {
    const { data } = await $host.get("/get_colors");
    return data;
};
// stamp_position, stamp_preservation, relief_type, content_type, shape_type, origin_type, date_early,
//             date_late, finkelstein, garlan
export const fetchPositions= async () => {
    const { data } = await $host.get("/get_positions");
    return data;
};
export const fetchPreservations= async () => {
    const { data } = await $host.get("/get_preservations");
    return data;
};
export const fetchReliefs= async () => {
    const { data } = await $host.get("/get_reliefs");
    return data;
};
export const fetchContents= async () => {
    const { data } = await $host.get("/get_contents");
    return data;
};
export const fetchShapes= async () => {
    const { data } = await $host.get("/get_shapes");
    return data;
};
export const fetchOrigins= async () => {
    const { data } = await $host.get("/get_origins");
    return data;
};
export const fetchEarlys= async () => {
    const { data } = await $host.get("/get_earlys");
    return data;
};
export const fetchLates= async () => {
    const { data } = await $host.get("/get_lates");
    return data;
};
export const fetchFinkelsteins= async () => {
    const { data } = await $host.get("/get_fis");
    return data;
};
export const fetchGarlans= async () => {
    const { data } = await $host.get("/get_garlans");
    return data;
};




export const fetchItems = async (site_id, manufact_id, year_exc, artif_position, artif_g, munsell_name,
    stamp_position, stamp_preservation, relief_type, content_type, shape_type, origin_type, date_early, 
    date_late, finkelstein, garlan) => {
    const { data } = await $host.get("/get_all", {
        params: {
            site_id,
            manufact_id,
            year_exc, artif_position, artif_g, munsell_name,
            stamp_position, stamp_preservation, relief_type, 
            content_type, shape_type, origin_type, date_early,
            date_late, finkelstein, garlan
            // emblem??? axis_small??, axis_large??
        }
    });
    return data;
};
export const fetchOneItem = async (id) => {
    const { data } = await $host.get(`/get_item/${id}`);
    return data;
};

        // export const fetchItems = async (site_id, manufact_id) => {
    //     const { data } = await $host.get("/get_all", {
    //       params: {
    //         site_id,
    //         manufact_id
    //       }
    //     });
    //     return data;
    //   };



    // export const fetchImages = async () => {
//     const { data } = await $host.get("/get_images");
//     return data;
//     };

// export const fetchOneImage = async (image_id) => {
//     const { data } = await $host.get("/get_images" + image_id);
//     return data;
//     };