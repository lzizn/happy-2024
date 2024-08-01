import { Marker, useMapEvents } from "react-leaflet";

import { MapIcon } from "./MapIcon";

export interface LocationMarkerProps {
  position: null | { latitude: number; longitude: number };
  setPosition: React.Dispatch<null | { latitude: number; longitude: number }>;
}
export const LocationMarker = (props: LocationMarkerProps) => {
  const { position, setPosition } = props;

  const map = useMapEvents({
    click(e) {
      map.locate();
      setPosition({
        latitude: e.latlng.lat,
        longitude: e.latlng.lng,
      });

      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker icon={MapIcon} position={[position.latitude, position.longitude]} />
  );
};
