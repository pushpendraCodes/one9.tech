import React, { useState, useEffect } from 'react';

export default function HowWeWork1() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Discover &\nDesign",
      description: "We start by understanding your brand, goals, and audience. Our design team then crafts a clean, user-focused layout that aligns with your vision.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      rotation: "-rotate-3"
    },
    {
      number: "02",
      title: "Refine &\nDevelop",
      description: "Our developers bring the design to life — responsive, fast, and built with the latest technologies for flawless performance.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      rotation: "rotate-2"
    },
    {
      number: "03",
      title: "Launch &\nGrow",
      description: "Once everything is tested and approved, we launch your project and ensure everything runs smoothly. Your success is our next milestone.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      rotation: "-rotate-2"
    }
  ];

  // Auto-play slider on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % steps.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="min-h-screen border-y border-gray-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="mb-12 lg:mb-24">
          <div className="flex justify-center">
            <span className="inline-block px-5 py-2 bg-white border-2 border-gray-300 rounded-full text-sm font-medium text-gray-700 mb-6 lg:mb-8">
              How we work
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center lg:text-left">
            Here's what working together looks like
          </h2>
          <p className="text-base lg:text-lg text-gray-600 text-center lg:text-left">
            Explore our <span className="text-orange-600 font-semibold">Live Projects</span>, collaborate with innovation, and witness success stories from our vibrant portfolio.
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {steps.map((step) => (
                <div key={step.number} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-gray-200 max-w-sm mx-auto">
                    {/* Number */}
                    <div className="text-base font-semibold text-gray-400 mb-3">
                      {step.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 whitespace-pre-line">
                      {step.title}
                    </h3>

                    {/* Image */}
                    <div className="relative mb-6 rounded-xl overflow-hidden aspect-video shadow-md">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'w-8 bg-orange-600'
                    : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:block relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex justify-center">
                {/* Card with tilt */}
                <div className={`bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 w-full max-w-sm transition-transform duration-300 hover:scale-105 ${step.rotation}`}>
                  {/* Number */}
                  <div className="text-base font-semibold text-gray-400 mb-3">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 whitespace-pre-line">
                    {step.title}
                  </h3>

                  {/* Image */}
                  <div className="relative mb-6 rounded-xl overflow-hidden aspect-video shadow-md">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Curved Arrow SVG between cards */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/4 -right-10 w-32 h-32 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {index === 0 ? (
                        <>
                          <path
                            d="M 10 30 Q 50 50, 90 35"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="3"
                            className="animate-pulse"
                          />
                          <path
                            d="M 90 35 L 85 30 M 90 35 L 85 40"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </>
                      ) : (
                        <>
                          <path
                            d="M 10 70 Q 50 50, 90 65"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="3"
                            className="animate-pulse"
                          />
                          <path
                            d="M 90 65 L 85 60 M 90 65 L 85 70"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </>
                      )}
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}