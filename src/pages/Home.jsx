import React from "react";
import ServicesCarousel from "../component/ServicesCarousel";




const Home = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-900">
      <section
        className={`w-full py-8 md:py-22 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">

          <section className="text-center px-4">
            <h2 className="text-4xl md:text-7xl font-extrabold mb-6 pt-7 md:pt-0">
              Infrastructure Intelligence for Modern Projects
            </h2>
            <p className="text-lg md:text-2xl text-gray-600">
              Site Monitoring | Spatial Reporting | Visual Documentation
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <a href="/contact" className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                Get Started
              </a>
              <a href="/contact" className="px-8 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                Contact Us
              </a>
            </div>
          </section>
          <section className="mt-5 md:mt-20">
            <ServicesCarousel />

          </section>


        </div>
      </section>
    </main>
  );
};

export default Home;
