import { Link } from "react-scroll";

const Footer = () => {
    const data = [
        {
          path: "home",
          name: "Home",
        },
        {
          path: "features",
          name: "Features",
        },
        {
          path: "testimonials",
          name: "Testimonials",
        },
        {
          path: "contact",
          name: "Contact",
        },
      ];
  return (
    <footer id="contact" className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-xl font-bold">LittleCoder</h2>
            <p className="text-sm mt-2 text-gray-400">
              Your AI-powered Python tutor, making coding fun and easy for kids!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
            {data.map((item, i) => {
                return (
                  <ul key={i}>
                    <Link className="cursor-pointer" to={item.path} smooth={true} duration={500}>
                    {item.name}
                    </Link>                      
                  </ul>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-blue-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-blue-600">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} LittleCoder . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
