import "leaflet/dist/leaflet.css";

import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import MapPin from "/pin.svg";

import { MapIcon } from "../components/";
import type { OrphanagePoint } from "../types/";
import { defaultCenter, defaultZoom } from "../constants/";

const env = import.meta.env;

export default function OrphanagesMap() {
  const orphanages: OrphanagePoint[] = [
    {
      id: "66aab94c4fc33c3c39d51110",
      name: "Orf. Esperança",
      latitude: -20.261465,
      longitude: -40.264118,
    },
    {
      id: "66aab94c4fc33c3c39d51111",
      name: "Coração de Maria",
      latitude: -20.261,
      longitude: -40.26,
    },
    {
      id: "66aab94c4fc33c3c39d51112",
      name: "Another One",
      latitude: -20.26,
      longitude: -40.25,
    },
  ];

  return (
    <div className="w-[100vw] h-[100vh] relative flex">
      <aside className="w-[440px] p-[80px] flex flex-col justify-between bg-landingGradient z-10">
        <header>
          <img src={MapPin} alt="Happy" />

          <h2 className="text-4xl font-extrabold mt-16">
            Pick an orphanage on the map
          </h2>

          <p className="leading-7 mt-6">Kids are waiting for your visit :)</p>
        </header>

        <footer className="flex flex-col leading-6">
          <strong>Vitória</strong>
          <span>Espírito Santo</span>
        </footer>
      </aside>

      <MapContainer
        zoom={defaultZoom}
        center={defaultCenter}
        style={{ width: "100%", height: "100%" }}
        className="w-full h-full"
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/{z}/{x}/{y}@2x?access_token=${env.VITE_MAPBOX_TOKEN}`}
        />

        {orphanages.map((orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={MapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              keyboard={true}
              shadowPane={orphanage.name}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="orphanage-pin"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      <Link
        to="/orphanages/create"
        className="z-[9999] absolute right-10 bottom-10 flex justify-center items-center w-16 h-16 bg-royal-purple-darker rounded-3xl transition-all"
      >
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}
