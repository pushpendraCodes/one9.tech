import { Lightbulb, Palette, Settings, Play, Globe } from "lucide-react";

const HowWeWork = () => {
  const features = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation-Driven",
      description: "We dive deep into understanding your business, audience, and goals."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design Excellence",
      description: "Our designers create intuitive and engaging interfaces focused on delivering the best user experience."
    },
    {
      icon: (
        <div className="flex items-center gap-1">
          <Settings className="h-6 w-6" />
          <Play className="h-4 w-4" />
        </div>
      ),
      title: "Seamless Development",
      description: "Using modern technologies, we bring designs to life with clean, scalable, and secure code."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach",
      description: "Once your project is live, we provide ongoing support and optimization to keep it performing at its best."
    }
  ];

  return (
    <section className="py-20  relative overflow-hidden">
      {/* Decorative element top right */}
      <div className="absolute top-8 right-8 flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-cyan-500"></div>
          <div className="w-3 h-3 bg-cyan-500"></div>
          <div className="w-3 h-3 bg-cyan-500"></div>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="w-3 h-3 bg-cyan-500"></div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Our process is designed to turn your vision into a functional, beautiful, and high-performing digital product.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Icon container */}
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gray-800/50 border border-gray-700/50 text-cyan-400">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;