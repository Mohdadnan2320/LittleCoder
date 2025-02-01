
const FeaturesSection = () => {
    const data = [
        {
            No: 1,
            title: "Personalized Learning Experience",
            description:
                "Our AI adjusts lessons based on your progress, ensuring you stay challenged and engaged at every step."
        },
        {
            No: 2,
            title: "Interactive Python Coding Challenges",
            description:
                "Practice real coding by solving problems directly in the editor, with hints and feedback from the AI tutor."
        },
        {
            No: 3,
            title: "Instant Feedback",
            description:
                "Get real-time feedback and corrections as you code, helping you improve your skills faster."
        },
        {
            No: 4,
            title: "Child-Friendly Interface",
            description:
                "Designed with kids in mind – fun, easy-to-use, and motivating for young learners."
        },
        {
            No: 5,
            title: "Customizable AI Tutor",
            description:
                "Make learning even more fun with customizable characters that match your interests!"
        }
    ]


  return (
    <div id="features" className="w-full p-5">
      <h2 className="text-xl font-semibold sm:text-4xl sm:mt-5 ">Why Choose Our AI Tutor?</h2>
      
      <div className="w-full my-10 rounded-lg overflow-hidden md:min-h-96 lg:w-4/6 lg:mx-auto">
        <video className="w-full" autoPlay loop muted >
            <source  src="/large.mp4"  type="video/mp4" />
        </video>
      </div>
      <div className=" lg:flex lg:gap-10 lg:flex-wrap lg:justify-start">
        {
            data.map((feature, index) => (
                <div key={index} className="w-full border-2 rounded-2xl p-5 border-gray-400  my-5 lg:w-[400px]">
                <h1 className="my-2 inline-block h-14 w-14 p-2 text-center text-4xl bg-black rounded-full text-white  font-medium">{feature.No}</h1>
                <h3 className="text3xl font-semibold">{feature.title}</h3>
                <p className="my-2 leading-snug">{feature.description}</p>
            </div>
            ))
        }
      </div>

    </div>
  );
}

export default FeaturesSection;
