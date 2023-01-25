import React from "react";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import axios from "axios";
const Mainmap = () => {
  const [apiData, setapiData] = useState([]);
  useEffect(() => {
    const getDatafromAPI = async () => {
      const response = await axios.get("http://localhost:8000/getdata");
      // console.log(response.data);
      setapiData(response.data);
    };
    getDatafromAPI();
  },[]);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {/* {apiData.map((data, index) => {
          console.log(data);
          return ( */}
        <MapContainer
          // key={index}
          center={[22,80]}
          zoom={5}
          scrollWheelZoom={false}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {apiData.map((data, index) => {

            // console.log();
            return ( 
              <Marker position={[data.coord.lat, data.coord.lon]} key={index}>
                <Popup>
                  <b>{data.name}</b> <br /> Easily customizable.
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
        {/* );
        })} */}
      </div>
    </>
  );
};

export default Mainmap;
