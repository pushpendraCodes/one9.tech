import { Globe, Smartphone, Code, Palette, TestTube, Wrench, ShoppingCart, Plug, Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Web Development",
      badge: "Web",
      badgeColor: "bg-blue-200 text-blue-800",
      description: "Build powerful, scalable web solutions tailored to your business needs.",
      features: [
        "Custom Website Development",
        "Web Application Development",
        "Progressive Web Apps (PWA)",
        "SaaS Product Development",
        "Admin Panels & Dashboards",
        "API Development & Integration"
      ],
      link: "Explore Web →",
      technologies: ["HTML", "CSS", "JS", "REACT JS", "NEXT JS", "NODE JS"]
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Mobile App Development",
      badge: "Mobile",
      badgeColor: "bg-purple-200 text-purple-800",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "Android App Development",
        "iOS App Development",
        "Cross-Platform Apps (React Native / Flutter)",
        "Enterprise Mobile Applications",
        "App Maintenance & Support"
      ],
      link: "Build Apps →",
      technologies: ["React Native", "FLUTTER"]
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Custom Software Development",
      badge: "Software",
      badgeColor: "bg-pink-200 text-pink-800",
      description: "Bespoke software solutions designed for your unique business processes.",
      features: [
        "Business Automation Software",
        "ERP / CRM Development",
        "Inventory & Billing Systems",
        "Custom Workflow Solutions",
        "Desktop Applications"
      ],
      link: "Get Custom →",
      technologies: ["HTML", "CSS", "JS", "REACT JS", "NEXT JS", "NODE JS","MONGO DB"]
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "UI/UX & Design Services",
      badge: "Design",
      badgeColor: "bg-orange-200 text-orange-800",
      description: "User-centered designs that create exceptional digital experiences.",
      features: [
        "UI/UX Research & Strategy",
        "Wireframing & Prototyping (Figma)",
        "Web & Mobile App Design",
        "Design Systems & Branding",
        "Landing Page Design",
        "Accessibility-Friendly Design"
      ],
      link: "See Designs →",
      technologies: ["FIGMA"]
    },
    {
      icon: <TestTube className="h-5 w-5" />,
      title: "Testing & Quality Assurance",
      badge: "QA",
      badgeColor: "bg-green-200 text-green-800",
      description: "Comprehensive testing to ensure flawless, high-performing applications.",
      features: [
        "Manual Testing",
        "Automated Testing",
        "Performance & Load Testing",
        "Security Testing",
        "Bug Fixing & Optimization"
      ],
      link: "Test Quality →"
    },
    {
      icon: <Wrench className="h-5 w-5" />,
      title: "Maintenance & Support",
      badge: "Support",
      badgeColor: "bg-cyan-200 text-cyan-800",
      description: "Ongoing maintenance and technical support to keep your systems running smoothly.",
      features: [
        "Application Maintenance",
        "Feature Enhancements",
        "Bug Fixing",
        "Performance Monitoring",
        "Technical Support",
        "Version Upgrades"
      ],
      link: "Get Support →"
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      title: "E-Commerce Solutions",
      badge: "E-commerce",
      badgeColor: "bg-yellow-200 text-yellow-800",
      description: "Complete e-commerce platforms with seamless payment and inventory management.",
      features: [
        "Custom E-Commerce Development",
        "Payment Gateway Integration",
        "Order & Inventory Management",
        "Subscription Systems",
        "Marketplace Platforms"
      ],
      link: "Start Selling →",
      technologies: ["HTML", "CSS", "JS", "REACT JS", "NEXT JS", "NODE JS"]
    },
    {
      icon: <Plug className="h-5 w-5" />,
      title: "Integration & API Services",
      badge: "Integration",
      badgeColor: "bg-indigo-200 text-indigo-800",
      description: "Seamlessly connect your systems with powerful API integrations.",
      features: [
        "Third-Party API Integration",
        "Payment APIs (Razorpay, Stripe, PayPal)",
        "SMS / Email / WhatsApp Integration",
        "CRM & ERP Integrations",
        "Data Migration"
      ],
      link: "Integrate Now →"
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Business & Digital Solutions",
      badge: "Consulting",
      badgeColor: "bg-teal-200 text-teal-800",
      description: "Strategic consulting and digital transformation for modern businesses.",
      features: [
        "Digital Transformation Consulting",
        "Software Architecture Consulting",
        "Startup MVP Development",
        "Product Scaling & Optimization",
        "Technical Documentation"
      ],
      link: "Transform Now →"
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isMobile, services.length]);

  // Split services into rows: 4, 3, 2
  const row1 = services.slice(0, 4);
  const row2 = services.slice(4, 7);
  const row3 = services.slice(7, 9);

  const ServiceCard = ({ service, isLastInRow, isLastRow }) => (
    <div
      className={`p-8 ${!isLastInRow ? 'border-r-2' : ''
        } ${!isLastRow ? 'border-b-2' : ''
        } border-gray-300 hover:bg-gray-50 transition-all duration-200 group`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
          {service.icon}
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${service.badgeColor}`}>
          {service.badge}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {service.title}
      </h3>

      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {service.description}
      </p>

      <div className="mb-4 pb-4 border-b border-gray-200">
        <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Services Include</p>
        <ul className="space-y-1.5">
          {service.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="text-xs text-gray-700 flex items-start">
              <span className="text-blue-500 mr-2 mt-0.5">•</span>
              <span>{feature}</span>
            </li>
          ))}
          {service.features.length > 4 && (
            <li className="text-xs text-gray-500 italic">+{service.features.length - 4} more...</li>
          )}
        </ul>
      </div>

      <div className="flex gap-2 flex-wrap">
        {service?.technologies?.map((item, idx) => 
          <p key={idx} className="text-xs border p-1 bg-amber-50 font-medium">{item}</p>
        )}
      </div>
    </div>
  );

  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <div className="flex justify-center">
            <span className="inline-block px-5 py-2 bg-white border-2 border-gray-300 rounded-full text-sm font-medium text-gray-700 mb-8">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Software Solutions
          </h2>
          <p className="text-lg text-gray-600">
            From concept to deployment, we deliver cutting-edge technology solutions tailored to your business needs.
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="border-2 border-gray-300 rounded-lg bg-white">
                    <ServiceCard service={service} isLastInRow={true} isLastRow={true} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:block border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {row1.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isLastInRow={index === row1.length - 1}
                isLastRow={false}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3">
            {row2.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isLastInRow={index === row2.length - 1}
                isLastRow={false}
              />
            ))}
          </div>

          <div className="grid grid-cols-2">
            {row3.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isLastInRow={index === row3.length - 1}
                isLastRow={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;