
import { Apple, Download, Smartphone } from "lucide-react";
import AnimatedText from "./AnimatedText";
import { Button } from "./ui/button";

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 bg-gradient-to-b from-white to-rdmns-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-rdmns-blue/5 to-purple-500/5 opacity-50"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block mb-3 px-3 py-1 bg-rdmns-blue/10 rounded-full">
            <AnimatedText
              text="Get Started Today"
              className="text-sm font-medium text-rdmns-blue"
              animation="fade-down"
              tag="span"
            />
          </div>
          
          <AnimatedText
            text="Download RDMNS.LK Now"
            className="text-3xl md:text-4xl font-bold mb-4 text-rdmns-dark text-balance"
            animation="fade-up"
            delay={200}
            tag="h2"
          />
          
          <AnimatedText
            text="Experience the full power of our application on your iOS, Android or Huawei device"
            className="text-lg text-rdmns-gray max-w-2xl mx-auto text-pretty"
            animation="fade-up"
            delay={300}
            tag="p"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <a 
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer" 
            className="animate-fade-up flex items-center justify-center gap-3 py-4 px-6 bg-black text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            style={{ animationDelay: "400ms" }}
          >
            <Apple size={28} className="group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-xs font-medium">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </a>
          
          <a 
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fade-up flex items-center justify-center gap-3 py-4 px-6 bg-black text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            style={{ animationDelay: "600ms" }}
          >
            <Smartphone size={28} className="group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-xs font-medium">GET IT ON</div>
              <div className="text-lg font-semibold">Google Play</div>
            </div>
          </a>
          
          <a 
            href="https://appgallery.huawei.com"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fade-up flex items-center justify-center gap-3 py-4 px-6 bg-[#00C6FF] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            style={{ animationDelay: "800ms" }}
          >
            <Download size={28} className="group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-xs font-medium">EXPLORE IT ON</div>
              <div className="text-lg font-semibold">AppGallery</div>
            </div>
          </a>
        </div>
        
        <div className="mt-16 text-center">
          <div className="animate-fade-up py-5 px-8 bg-white rounded-xl shadow-md inline-block border border-rdmns-dark/5" style={{ animationDelay: "1000ms" }}>
            <div className="flex items-center gap-2 text-sm text-rdmns-gray font-medium">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rdmns-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rdmns-blue"></span>
              </span>
              <span>Join over 10,000+ happy users already using RDMNS.LK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
