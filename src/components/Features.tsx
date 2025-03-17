
import { Smartphone, Shield, Zap, BarChart, Globe, Clock, Users, Settings } from "lucide-react";
import AnimatedText from "./AnimatedText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Smartphone className="h-8 w-8 text-rdmns-blue" />,
    title: "Intuitive Design",
    description: "Experience our clean and user-friendly interface that makes navigation effortless and enjoyable.",
    extendedDescription: "Our app's thoughtful layout and intuitive controls make it accessible for users of all tech levels. We've invested in user testing to ensure that every interaction feels natural and straightforward.",
    delay: 200
  },
  {
    icon: <Shield className="h-8 w-8 text-rdmns-blue" />,
    title: "Secure & Private",
    description: "Your data is protected with industry-leading security features and privacy controls.",
    extendedDescription: "We implement end-to-end encryption, secure authentication methods, and regular security audits to ensure your information remains protected. You maintain full control over your privacy settings.",
    delay: 400
  },
  {
    icon: <Zap className="h-8 w-8 text-rdmns-blue" />,
    title: "Lightning Fast",
    description: "Optimized performance ensures the app runs smoothly and responds instantly to your actions.",
    extendedDescription: "Built with the latest technologies and optimized for speed, our app delivers real-time responsiveness across all devices. Advanced caching and lazy loading techniques minimize wait times.",
    delay: 600
  },
  {
    icon: <BarChart className="h-8 w-8 text-rdmns-blue" />,
    title: "Detailed Analytics",
    description: "Gain valuable insights with comprehensive data analysis and visualization tools.",
    extendedDescription: "Transform raw data into actionable insights with our powerful analytics dashboard. Create custom reports, export data in multiple formats, and set up automated alerts for important metrics.",
    delay: 800
  },
  {
    icon: <Globe className="h-8 w-8 text-rdmns-blue" />,
    title: "Global Accessibility",
    description: "Access your data from anywhere in the world with our cloud-synchronized platform.",
    extendedDescription: "Whether you're at home, in the office, or traveling abroad, your data stays in sync across all your devices. Our platform works seamlessly across different time zones and regions.",
    delay: 1000
  },
  {
    icon: <Clock className="h-8 w-8 text-rdmns-blue" />,
    title: "Time-Saving Automation",
    description: "Automate repetitive tasks and workflows to focus on what truly matters.",
    extendedDescription: "Set up custom automation rules based on triggers and actions specific to your needs. Schedule recurring tasks, create conditional workflows, and integrate with your favorite services.",
    delay: 1200
  },
  {
    icon: <Users className="h-8 w-8 text-rdmns-blue" />,
    title: "Seamless Collaboration",
    description: "Work together with your team in real-time with powerful collaboration tools.",
    extendedDescription: "Share projects, assign tasks, comment on work, and track changes all in one place. Our permissions system ensures team members can access exactly what they need.",
    delay: 1400
  },
  {
    icon: <Settings className="h-8 w-8 text-rdmns-blue" />,
    title: "Customizable Experience",
    description: "Tailor the app to your specific needs with extensive customization options.",
    extendedDescription: "From theming to workflow configurations, make the app truly yours. Save custom templates, create personalized dashboards, and configure notifications to match your preferences.",
    delay: 1600
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
        
        {/* Main features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.slice(0, 4).map((feature, index) => (
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

        {/* Additional features in cards */}
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "900ms" }}>
          <AnimatedText
            text="More Powerful Features"
            className="text-2xl font-bold mb-8 text-rdmns-dark"
            animation="fade-up"
            delay={900}
            tag="h3"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.slice(4).map((feature, index) => (
              <Card key={index} className="opacity-0 animate-fade-up border-rdmns-dark/5 hover:shadow-md transition-all duration-300" style={{ animationDelay: `${1000 + index * 200}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-rdmns-blue/5 inline-block">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-rdmns-dark">{feature.title}</h3>
                      <p className="text-rdmns-gray text-pretty mb-3">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Feature details accordion */}
        <div className="mt-16 opacity-0 animate-fade-up max-w-3xl mx-auto" style={{ animationDelay: "1200ms" }}>
          <AnimatedText
            text="Detailed Feature Breakdown"
            className="text-2xl font-bold mb-8 text-rdmns-dark text-center"
            animation="fade-up"
            delay={1200}
            tag="h3"
          />
          
          <Accordion type="single" collapsible className="w-full">
            {features.map((feature, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-rdmns-dark hover:text-rdmns-blue">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-rdmns-blue/5 inline-block">
                      {feature.icon}
                    </div>
                    <span>{feature.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-rdmns-gray">
                  {feature.extendedDescription}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Features;
