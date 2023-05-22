import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import ListGroup from "react-bootstrap/ListGroup";
import { Context } from '../../index';


// const SiteNameList = observer(() => {
//     const { stamp } = useContext(Context);
  
//     const handleSiteClick = (site) => {
//       if (stamp.selectedSites.includes(site)) {
//         stamp.setSelectedSites(stamp.selectedSites.filter((s) => s !== site));
//       } else {
//         stamp.setSelectedSites([...stamp.selectedSites, site]);
//       }
//     };
  
//     return (
//       <ListGroup>
//         {stamp.sites.map((site) => (
//           <ListGroup.Item
//             key={site.id}
//             style={{ cursor: 'pointer' }}
//             onClick={() => handleSiteClick(site)}
//             active={stamp.selectedSites.includes(site)}
//             variant="dark"
//           >
//             {site.site_name}
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     );
//   });

const SiteNameList = observer(() => {
    const {stamp} = useContext(Context);
    return (
    <ListGroup>
        {stamp.sites.map((site) => (
            <ListGroup.Item 
                style={{ cursor: 'pointer' }}
                active={site.id === stamp.selectedSite?.id}
                // onClick={() => stamp.setSelectedSite(site)}
                onClick={() => {
                    if (site === stamp.selectedSite) {
                      stamp.setSelectedSite(null);
                    } else {
                      stamp.setSelectedSite(site);
                    }
                }}
                key={site.id}
                variant="dark"
            >
                {site.site_name}
            </ListGroup.Item>
        ))}
    </ListGroup>
    );
});
export default SiteNameList;
// import Dropdown from 'react-bootstrap/Dropdown';
            {/* <Dropdown>
        <Dropdown.Toggle variant="secondary" id="site-dropdown">
            Памятник
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {stamp.sites.map((site) => (
            <Dropdown.Item
                key={site.id}
                active={site.id === stamp.selectedSite?.id}
                onClick={() => stamp.setSelectedSite(site)}
            >
                {site.site_name}
            </Dropdown.Item>
            ))}
        </Dropdown.Menu>
        </Dropdown> */}


// {stamp.manufacts.map((manufact =>
//     <ListGroup.Item key={manufact.id}>
//         {manufact.manufact_center}
//     </ListGroup.Item>
//     ))}

    // useEffect(() => {
    //     const fetchData = async () => {
    //         await stamp.fetchSites();
    //     };
    //     fetchData();
    // }, [stamp]);
