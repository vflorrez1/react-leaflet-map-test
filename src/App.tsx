import "./App.css";
import React from "react";
import { Map, CircleMarker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "./data";
import Tooltipy from "./Tooltip";

const App: React.FC = () => {
  var centerLat = (data.minLat + data.maxLat) / 2;
  var distanceLat = data.maxLat - data.minLat;
  var bufferLat = distanceLat * 0.05;
  var centerLong = (data.minLong + data.maxLong) / 2;
  var distanceLong = data.maxLong - data.minLong;
  var bufferLong = distanceLong * 0.05;
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Most Populous Cities in Asia</h3>
      <Map
        style={{ height: "480px", width: "101" }}
        zoom={1}
        center={[centerLat, centerLong]}
        bounds={[
          [data.minLat - bufferLat, data.minLong - bufferLong],
          [data.maxLat + bufferLat, data.maxLong + bufferLong]
        ]}
      >
        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {data.city.map((city, k) => {
          return (
            <div>
              <CircleMarker
                key={k}
                center={[city["coordinates"][1], city["coordinates"][0]]}
                radius={20 * Math.log(city["population"] / 10000000)}
                fillOpacity={0.5}
                stroke={false}
              >
                <Tooltip
                  direction="right"
                  offset={[-8, -2]}
                  opacity={1}
                  permanent={true}
                >
                  <span>
                    <Tooltipy />
                  </span>
                </Tooltip>
              </CircleMarker>
            </div>
          );
        })}
      </Map>
    </div>
  );
};

export default App;
