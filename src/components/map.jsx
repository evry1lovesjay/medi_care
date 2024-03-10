// import { useEffect, useRef, useMemo } from "react";
// import { Loader } from "@googlemaps/js-api-loader";
// function Map({ address }) {
//   const mapRef = useRef(null);
// const geocoder = useMemo(() => new google.maps.Geocoder(), []);
// useEffect(() => {
//     const loader = new Loader({
//       apiKey: process.env.API_KEY,
//       version: "weekly",
//     });
// loader.load().then(() => {
//       geocoder.geocode({ address: address }, (results, status) => {
//         if (status === "OK") {
//           const map = new google.maps.Map(mapRef.current, {
//             center: results[0].geometry.location,
//             zoom: 8,
//           });
// const marker = new google.maps.Marker({
//             map: map,
//             position: results[0].geometry.location,
//           });
//         } else {
//           console.error(`Geocode was not successful for the following reason: ${status}`);
//         }
//       });
//     });
//   }, [address, geocoder]);
// return <div style={{ height: "400px" }} ref={mapRef} />;
// }
// export default Map;



// import { useEffect, useRef, useState } from "react";
// import { Loader } from "@googlemaps/js-api-loader";

// function Map({ address }) {
// const mapRef = useRef(null);
// const [geocoder, setGeocoder] = useState(null);

// useEffect(() => {
// const loader = new Loader({
// apiKey: process.env.API_KEY,
// version: "weekly",
// });
// loader.load().then(() => {
// // Initialize the geocoder after the API is loaded
// setGeocoder(new google.maps.Geocoder());
// // Rest of your code...
// });
// }, []);

// useEffect(() => {
// // Ensure geocoder and address are available
// if (!geocoder || !address) return;
// geocoder.geocode({ address: address }, (results, status) => {
// if (status === "OK") {
// const map = new google.maps.Map(mapRef.current, {
// center: results[0].geometry.location,
// zoom: 8,
// });
// const marker = new google.maps.Marker({
// map: map,
// position: results[0].geometry.location,
// });
// } else {
// console.error(`Geocode was not successful for the following reason: ${status}`);
// }
// });
// }, [address, geocoder]);


// return <div style={{ height: "400px" }} ref={mapRef} />;
// }

// export default Map;

import Image from "next/image";

const Map =()   =>{
    
    return (
        
        <Image
        className=""
        src="/pexels-catarina-sousa-68704.jpg"
        alt="Homepage image"
        width={1400}
        height={500}
        priority
        />
)
}

export default Map;