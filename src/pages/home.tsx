import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import Logo from "/logo.png";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-landingGradient">
      <div className="relative w-full max-w-[1100px] h-full max-h-[600px] flex flex-col items-start justify-between bg-contain bg-landing bg-no-repeat bg-[80%_center]">
        <img src={Logo} alt="Logo Happy" />

        <main className="max-w-[350px]">
          <h1 className="text-6xl font-black leading-18">
            Bring happiness to the world
          </h1>
          <p className="mt-10 text-xl leading-9">
            Visit foster care homes and brighten the day for many children.
          </p>
        </main>

        <div className="absolute right-0 top-0 text-2xl leading-9 flex flex-col text-right">
          <strong>Vitória</strong>
          <span>Espírito Santo</span>
        </div>

        <Link
          to="/map"
          className="flex items-center justify-center transition-colors absolute right-0 bottom-0 w-[80px] h-[80px] bg-yellow-main rounded-3xl hover:bg-royal-purple"
        >
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}
