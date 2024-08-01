import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import MapPin from "/pin.svg";

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="fixed w-24 h-full px-6 py-8 flex flex-col justify-between items-center bg-landingGradient">
      <img
        className="w-12 cursor-pointer"
        src={MapPin}
        alt="Happy"
        onClick={() => navigate(-1)}
      />

      <footer className="w-12 h-12 flex justify-center items-center border-0 bg-landingGradient rounded-2xl cursor-pointer transition-all">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="hover:bg-royal-purple-darker"
        >
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  );
};
