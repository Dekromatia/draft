import About from "./pages/About";
import BasePage from "./pages/BasePage";
import InfoPage from "./pages/InfoPage";
import MapPage from "./pages/MapPage";
import ModelPage from "./pages/ModelPage";
import StampPage from "./pages/StampPage";
import {ABOUT_ROUTE, BASE_ROUTE, INFO_ROUTE, MAP_ROUTE, MODEL_ROUTE, STAMP_ROUTE} from "./utils/consts";


export function publicRoutes () {
    return [
        {
            path: ABOUT_ROUTE,
            Component: () => <About/>
        },
        {
            path: BASE_ROUTE,
            Component: () => <BasePage/>
        },
        {
            path: INFO_ROUTE,
            Component: () => <InfoPage/>
        },
        {
            path: MAP_ROUTE,
            Component: () => <MapPage/>
        },
        {
            path: MODEL_ROUTE + '/:model_id',
            Component: () => <ModelPage/>
        },
        {
            path: STAMP_ROUTE + '/:id',
            Component: () => <StampPage/>
        }
    ];
}