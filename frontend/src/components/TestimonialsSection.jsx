const TestimonialsSection = () => {
  const testimonialData = [
    {
      No: 1,
      description:
        "My 10-year-old daughter loved learning Python with your app! She enjoys the interactive coding challenges and how the AI helps her when she's stuck.",
      name: "Sarah, Student",
      img: "/6.jpg",
    },
    {
      No: 2,
      description:
        "I've been using your app to teach my kids Python for the first time. They've loved it so far and are enjoying the interactive lessons!",
      name: "John, Parent",
      img: "/5.jpg",
    },
    {
      No: 3,
      description:
        "I've always struggled with Python, and I'm glad I found your app. It's helped me learn and improve my skills!",
      name: "Emily, Student",
      img: "/7.jpg",
    },
  ];

  return (
    <div id="testimonials" className="w-full p-5 ">
      <h2 className="text-xl font-semibold sm:text-4xl">Young Coders&apos; Success</h2>
      <div>
        <div className="w-full lg:flex lg:gap-10">
          {testimonialData.map((item, index) => (
            <div key={index} className="w-full mt-5 mb-10 flex flex-col justify-center items-center text-center gap-2 lg:mt-10 lg:text-left lg:items-start ">
              <div className="rounded-full overflow-hidden w-24 h-24 ">
                <img
                  className="w-full h-full object-cover"
                  src={item.img}
                  alt=""
                />
              </div>
              <div>
                <h3 className=" my-2 text-xl font-semibold">
                  {item.name}
                </h3>
                <p className="leading-snug">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
