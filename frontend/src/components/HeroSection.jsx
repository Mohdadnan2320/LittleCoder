import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/lesson");
  };

  return (
    <div id="home" className="w-full h-screen ">
    <div className="w-full h-full bg-[url('2.jpg')] bg-cover relative">
        <div className="w-full h-full bg-black opacity-70">
        </div>
        <div className="p-5 w-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]
        ">
            <h1 className="text-white text-6xl font-semibold sm:text-8xl  xl:text-9xl">
            Learn to Code with Your Smart AI Buddy!
            </h1>
            <p className="text-xl my-10 text-white sm:text-3xl">Master Python with interactive lessons and real-time feedback from your AI tutor. Tailored for children and beginners</p>
            <button onClick={handleClick} className="p-4 font-semibold bg-white rounded-full sm:text-xl">Start Learning Now</button>
        </div>

    </div>
</div>
  );
}

export default HeroSection;
