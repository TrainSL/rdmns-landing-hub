
import { Smartphone, Shield, Zap, BarChart } from "lucide-react";
import AnimatedText from "./AnimatedText";

const features = [
  {
    icon: <Smartphone className="h-8 w-8 text-rdmns-blue" />,
    title: "Intuitive Design",
    description: "Experience our clean and user-friendly interface that makes navigation effortless and enjoyable.",
    delay: 200
  },
  {
    icon: <Shield className="h-8 w-8 text-rdmns-blue" />,
    title: "Secure & Private",
    description: "Your data is protected with industry-leading security features and privacy controls.",
    delay: 400
  },
  {
    icon: <Zap className="h-8 w-8 text-rdmns-blue" />,
    title: "Lightning Fast",
    description: "Optimized performance ensures the app runs smoothly and responds instantly to your actions.",
    delay: 600
  },
  {
    icon: <BarChart className="h-8 w-8 text-rdmns-blue" />,
    title: "Detailed Analytics",
    description: "Gain valuable insights with comprehensive data analysis and visualization tools.",
    delay: 800
  }
];

const Features = () => {
  return (
    <section id="features" className="bg-white py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-rdmns-blue/10 rounded-full">
            <AnimatedText
              text="Key Features"
              className="text-sm font-medium text-rdmns-blue"
              animation="fade-down"
              tag="span"
            />
          </div>
          
          <AnimatedText
            text="Why You'll Love Our App"
            className="text-3xl md:text-4xl font-bold mb-4 text-rdmns-dark text-balance"
            animation="fade-up"
            delay={200}
            tag="h2"
          />
          
          <AnimatedText
            text="Discover the powerful features that set RDMNS.LK apart from other applications"
            className="text-lg text-rdmns-gray max-w-2xl mx-auto text-pretty"
            animation="fade-up"
            delay={300}
            tag="p"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-up relative p-6 rounded-xl border border-rdmns-dark/5 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              <div className="p-3 mb-4 rounded-lg bg-rdmns-blue/5 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-rdmns-dark">{feature.title}</h3>
              <p className="text-rdmns-gray text-pretty">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
