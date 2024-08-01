import Leaflet from "leaflet";

import MapPin from "/pin.svg";

export const MapIcon = Leaflet.icon({
  iconUrl: MapPin,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});
