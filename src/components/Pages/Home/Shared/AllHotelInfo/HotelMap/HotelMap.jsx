import React from "react";
import { Map, Marker } from "pigeon-maps";

const HotelMap = ({ location }) => {
  const { latitude, longitude } = location;

  return (
    <div className="border-[3px] rounded-xl p-[2px] border-teal-300 shadow-2xl lg:h-96 xl:h-[500px]">
      <Map defaultCenter={[latitude, longitude]} defaultZoom={11}>
        <Marker width={40} anchor={[latitude, longitude]} />
      </Map>
    </div>
  );
};

export default HotelMap;
