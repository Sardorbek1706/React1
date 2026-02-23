import logo from "../assets/Group 27.png"
import Illustration from "../assets/Illustration.png"

export default function Wrapper() {
  return (
    <>
      <div className="w-[35%] h-full">
        <img className="ml-6 mt-6 w-7.5 h-10" src={logo} alt="logo" />
        <h2 className="m-6 text-[45px] font-bold text-white">
          Stay on top of time tracking
        </h2>
      </div>
      <img
        className="absolute w-85 h-85 top-65 left-30"
        src={Illustration}
        alt="Illustration"
      />
    </>
  );
}