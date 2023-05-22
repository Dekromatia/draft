import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import baseStore from '../react-app/src/store/BaseStore';

const BaseList = observer(({ fetchAction, renderItem }) => {
    useEffect(() => {
        baseStore[fetchAction]();
    }, [fetchAction]);

    let items = [];
    switch (fetchAction) {
        case 'fetchSites':
            items = baseStore._sites;
            break;
        case 'fetchManufacts':
            items = baseStore._manufacts;
            break;
        case 'fetchArtifacts':
            items = baseStore._artifacts;
            break;
        default:
            break;
    }

    return (
        <div>
            {items.map((item) => {
                return renderItem(item);
            })}
        </div>
    );
});

export default BaseList;


// const BaseList = observer(() => {
//   useEffect(() => {
//     baseStore.fetchSites();
//   }, []);

//   return (
//     <div>
//       {sitesStore.sites.map((site) => {
//         return (
//           <div key={site.id}>
//             <h2>{site.site_name}</h2>
//             <p>{site.site_latitude}</p>
//             <p>{site.site_longitude}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// });

// export default SitesList;