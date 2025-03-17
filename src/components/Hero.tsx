
import { ArrowDown } from "lucide-react";
import AnimatedText from "./AnimatedText";
import AnimatedImage from "./AnimatedImage";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-rdmns-light pt-16 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-block mb-3 px-3 py-1 bg-rdmns-blue/10 rounded-full">
              <AnimatedText
                text="Introducing RDMNS.LK"
                className="text-sm font-medium text-rdmns-blue"
                animation="fade-down"
                delay={300}
                tag="span"
              />
            </div>
            
            <AnimatedText
              text="The ultimate mobile experience"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-rdmns-dark text-balance"
              animation="fade-up"
              delay={400}
              tag="h1"
            />
            
            <AnimatedText
              text="Discover a revolutionary way to connect, explore, and engage with our intuitive and beautifully designed mobile application."
              className="text-lg md:text-xl text-rdmns-gray mb-8 max-w-lg mx-auto md:mx-0 text-pretty"
              animation="fade-up"
              delay={600}
              tag="p"
            />
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start opacity-0 animate-fade-up" style={{ animationDelay: "800ms" }}>
              <a 
                href="#download" 
                className="px-6 py-3 bg-rdmns-blue text-white rounded-full font-medium shadow-lg shadow-rdmns-blue/20 hover:shadow-xl hover:shadow-rdmns-blue/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Download Now
              </a>
              <a 
                href="#features" 
                className="px-6 py-3 border border-rdmns-dark/10 rounded-full font-medium text-rdmns-dark hover:bg-rdmns-dark hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-rdmns-blue/5 to-purple-500/5 rounded-full blur-3xl opacity-50 animate-pulse-soft"></div>
            <AnimatedImage
              src="/placeholder.svg"
              alt="RDMNS.LK App"
              className="relative mx-auto md:ml-auto"
              imgClassName="w-full max-w-xs md:max-w-sm object-contain"
              animation="float"
              delay={600}
            />
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-up" style={{ animationDelay: "1200ms" }}>
          <a 
            href="#features" 
            className="flex flex-col items-center text-rdmns-dark/70 hover:text-rdmns-blue transition-colors"
          >
            <span className="text-sm font-medium mb-2">Scroll to discover</span>
            <ArrowDown className="animate-bounce" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
