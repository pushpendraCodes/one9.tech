import { Code, Database, Layers, Smartphone, Globe, Zap } from "lucide-react";

const TechFlowchart = () => {
  const leftTech = [
    { name: "React & Next.js", icon: <Code className="h-5 w-5" />, color: "border-blue-500" },
    { name: "UI/UX Design", icon: <Layers className="h-5 w-5" />, color: "border-pink-500" },
    { name: "Database Systems", icon: <Database className="h-5 w-5" />, color: "border-green-500" }
  ];

  const rightTech = [
    { name: "Node.js", icon: <Zap className="h-5 w-5" />, color: "border-yellow-500" },
    { name: "Mobile Apps", icon: <Smartphone className="h-5 w-5" />, color: "border-purple-500" },
    { name: "Cloud & DevOps", icon: <Globe className="h-5 w-5" />, color: "border-cyan-500" }
  ];

  return (
    <section className="relative py-20 overflow-hidden ">
      {/* Gradient Overlays */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-blue-500/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-green-500/5"></div> */}

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT SIDE - Technologies */}
          <div className="lg:col-span-3 space-y-6">
            {leftTech.map((tech, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 bg-white/5 backdrop-blur-sm border ${tech.color} rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white">
                  {tech.icon}
                </div>
                <span className="text-white font-medium">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* CENTER - Main Visual */}
          <div className="lg:col-span-6 relative">
            {/* SVG Flowing Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {/* Left to Center Lines */}
              <path
                d="M 0 30 Q 150 30, 250 150"
                stroke="rgba(236, 72, 153, 0.3)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M 0 150 Q 100 150, 250 150"
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />
              <path
                d="M 0 270 Q 150 270, 250 150"
                stroke="rgba(34, 197, 94, 0.3)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: '1s' }}
              />

              {/* Center to Right Lines */}
              <path
                d="M 350 150 Q 500 30, 650 30"
                stroke="rgba(234, 179, 8, 0.3)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: '0.3s' }}
              />
              <path
                d="M 350 150 Q 550 150, 650 150"
                stroke="rgba(168, 85, 247, 0.3)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: '0.7s' }}
              />
              <path
                d="M 350 150 Q 500 270, 650 270"
                stroke="rgba(6, 182, 212, 0.3)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: '1.2s' }}
              />
            </svg>

            {/* Center Image/Content */}
            <div className="relative z-10 mx-auto max-w-md">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-white/20 p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center">
                    <Code className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Full Stack Development
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Building scalable solutions with modern technology stack
                  </p>
                </div>

                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-pink-500 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 left-4 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Technologies */}
          <div className="lg:col-span-3 space-y-6">
            {rightTech.map((tech, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 bg-white/5 backdrop-blur-sm border ${tech.color} rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white">
                  {tech.icon}
                </div>
                <span className="text-white font-medium">{tech.name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechFlowchart;