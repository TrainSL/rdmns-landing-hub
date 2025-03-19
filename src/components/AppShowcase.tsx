
import { useEffect, useRef, useState } from "react";
import AnimatedText from "./AnimatedText";
import AnimatedImage from "./AnimatedImage";

const AppShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const intervalRef = useRef<number | null>(null);
  
  const screens = [
    {
      title: "Dashboard",
      description: "Access all your important information at a glance with our intuitive dashboard.",
      image: "/placeholder.svg"
    },
    {
      title: "Analytics",
      description: "Visualize your data with powerful charts and insightful analytics.",
      image: "/placeholder.svg"
    },
    {
      title: "Profiles",
      description: "Manage your profile and customize your experience with ease.",
      image: "/placeholder.svg"
    }
  ];
  
  useEffect(() => {
    // Auto-rotate through tabs
    intervalRef.current = window.setInterval(() => {
      setActiveTab((prev) => (prev + 1) % screens.length);
    }, 5000);
    
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [screens.length]);
  
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    // Reset interval when user clicks a tab
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        setActiveTab((prev) => (prev + 1) % screens.length);
      }, 5000);
    }
  };

  return (
    <section id="showcase" className="bg-rdmns-light py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-3 py-1 bg-rdmns-blue/10 rounded-full">
            <AnimatedText
              text="App Showcase"
              className="text-sm font-medium text-rdmns-blue"
              animation="fade-down"
              tag="span"
            />
          </div>
          
          <AnimatedText
            text="See RDMNS.LK in Action"
            className="text-3xl md:text-4xl font-bold mb-4 text-rdmns-dark text-balance"
            animation="fade-up"
            delay={200}
            tag="h2"
          />
          
          <AnimatedText
            text="Explore the intuitive interface and powerful features of our application"
            className="text-lg text-rdmns-gray max-w-2xl mx-auto text-pretty"
            animation="fade-up"
            delay={300}
            tag="p"
          />
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          <div className="w-full md:w-2/5 order-2 md:order-1">
            <div className="bg-white p-2 rounded-3xl shadow-lg relative overflow-hidden border border-rdmns-dark/5 aspect-[9/19] max-w-[280px] mx-auto">
              <div className="absolute top-0 left-0 right-0 h-6 bg-rdmns-dark rounded-t-3xl"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-rdmns-dark rounded-b-3xl"></div>
              <div className="rounded-3xl overflow-hidden h-full pt-6">
                <div className="relative h-full overflow-hidden bg-gradient-to-b from-rdmns-blue/5 to-purple-500/5">
                  {screens.map((screen, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 transform ${
                        activeTab === index 
                          ? "opacity-100 translate-x-0" 
                          : activeTab > index 
                            ? "opacity-0 -translate-x-full" 
                            : "opacity-0 translate-x-full"
                      }`}
                    >
                      <img 
                        src={screen.image} 
                        alt={screen.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5 order-1 md:order-2">
            <div className="mb-6">
              <div className="flex gap-2 mb-6">
                {screens.map((screen, index) => (
                  <button
                    key={index}
                    className={`flex-1 py-2.5 px-3 rounded-lg transition-all ${
                      activeTab === index
                        ? "bg-rdmns-blue text-white shadow-md"
                        : "bg-white text-rdmns-dark border border-rdmns-dark/5 hover:bg-rdmns-blue/10"
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    <span className="font-medium text-sm md:text-base">{screen.title}</span>
                  </button>
                ))}
              </div>
              
              {screens.map((screen, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-300 ${
                    activeTab === index ? "opacity-100" : "opacity-0 hidden"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2 text-rdmns-dark">{screen.title}</h3>
                  <p className="text-base text-rdmns-gray mb-4">{screen.description}</p>
                </div>
              ))}
              
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
                <div
                  className="bg-rdmns-blue h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${((activeTab + 1) / screens.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
