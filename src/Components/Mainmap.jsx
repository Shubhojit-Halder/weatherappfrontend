import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import axios from "axios";
import Button from "@mui/material/Button";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import MapStyling from "./styles/mainmap.styled";
const Mainmap = () => {
  const [apiData, setapiData] = useState([]);
  const [pageno, setpageno] = useState(0);
  const [center, setCenter] = useState({ lat: 20, lon: 80 });
  const ZOOM_LEVEL = 5;
  const mapRef = useRef();

  useEffect(() => {
    //fetching data from database and changing map position here

    const getDatafromAPI = async () => {
      const response = await axios.get(
        `https://weatheroo.onrender.com/get?page=${pageno}`
      );
      setapiData(response.data);
      mapRef.current.flyTo(
        [response.data[0].coord.lat, response.data[0].coord.lon],
        ZOOM_LEVEL,
        {
          animate: true,
        }
      );
    };
    getDatafromAPI();
  }, [pageno]);

  return (
    <>
      <MapStyling>
        <div className="upperDiv">
          <div>
            <b className="name">Weatheroo</b>
          </div>
          <div>
            <Button
              disabled={pageno === 0}
              onClick={() => {
                setpageno(pageno - 1);
              }}
            >
              <ArrowBackIosNewRoundedIcon className="icons" />
            </Button>
            <Button
              disabled={pageno === 2}
              onClick={() => {
                setpageno(pageno + 1);
              }}
            >
              <ArrowForwardIosRoundedIcon className="icons" />
            </Button>
          </div>
        </div>

        <div>
          <div className="map-container-div">
            <MapContainer
              center={center}
              zoom={ZOOM_LEVEL}
              ref={mapRef}
              scrollWheelZoom={false}
              style={{ height: "100vh", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {apiData.map((data, i) => {
                return (
                  <Marker position={[data.coord.lat, data.coord.lon]} key={i}>
                    <Popup>
                      <b style={{ fontSize: "20px" }}>{data.name}</b> <br />{" "}
                      <b style={{ fontSize: "15px" }}>
                        {data.main.temp}&#xb0;C
                      </b>
                      <br />
                      <b style={{ fontSize: "12px" }}>
                        {data.main.temp_max}&#xb0; / {data.main.temp_min}
                        &#xb0; Feels like {data.main.feels_like}&#xb0;
                        <br />
                        Humidity: {data.main.humidity}%
                        <br />
                        {data.weather.description}
                      </b>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
        </div>
      </MapStyling>
    </>
  );
};

export default Mainmap;
