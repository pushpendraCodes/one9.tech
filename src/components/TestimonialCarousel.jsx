import React, { useEffect, useRef, useState } from 'react';

export default function TestimonialCarousel() {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      company: "Bagherwal Samaj Trust",
      logo: "https://res.cloudinary.com/dbj8skjba/image/upload/v1761631407/file_tmvx2y.jpg",
      text: "Bagherwal Samaj Trust is highly satisfied with the services provided. The team was professional, responsive, and delivered quality work beyond expectations. Highly recommended.",
      author: "Ninad NandGaonakar",
      position: "President",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leo"
    },
    {
      company: "Icchhapurti",
      logo: "https://icchhapurti.com/logo-black.png",
      text: "The Ichhapurti platform was delivered exactly as required. Professional team, smooth execution, and excellent support.",
      author: "Puneet Jain",
      position: "Owner",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leo"
    },
    {
      company: "FarmHouse Kitchen",
      logo: "https://farmhouse-kitchen-website-frontend.vercel.app/logo.jpg",
      text: "Professional team with a clear understanding of restaurant needs. The final result exceeded our expectations..",
      author: "FarmHouse Kitchen",
      position: "Owner",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leo"
    },
    {
      company: "Maa Anusaya Urban",
      logo: "https://banking-frontend-webiste.vercel.app/assets/logo2-Bvw1hDGd.png",
      text: "Ma Anusaya Urban appreciates the quality services and technical support provided by the company. Their structured approach, timely execution, and commitment to excellence ensured successful implementation of our requirements.",
      author: "Maa Anusaya Urban",
      position: "Owner",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leo"
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll for mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isMobile, testimonials.length]);

  // Continuous scroll for desktop
  useEffect(() => {
    if (isMobile) return;
    
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;

      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isMobile]);

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-2 mb-6">
        <img className='w-10 h-10 rounded-full object-cover' src={testimonial.logo} alt="logo" />
        <span className="font-bold text-lg text-gray-900">{testimonial.company}</span>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8">
        {testimonial.text}
      </p>

      <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.author}
          className="w-12 h-12 rounded-full bg-gray-100"
        />
        <div>
          <div className="font-semibold text-gray-900">{testimonial.author}</div>
          <div className="text-sm text-gray-500">{testimonial.position}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="border-t border-gray-200 py-10 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <div className="flex -space-x-2">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=leader1" 
                alt="Leader" 
                className="w-6 h-6 rounded-full border-2 border-white"
              />
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=leader2" 
                alt="Leader" 
                className="w-6 h-6 rounded-full border-2 border-white"
              />
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=leader3" 
                alt="Leader" 
                className="w-6 h-6 rounded-full border-2 border-white"
              />
            </div>
            <span className="text-sm font-medium text-gray-700">Trusted by Clients</span>
          </div>
          
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900">
            Feedback that speaks for itself
          </h2>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
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

        {/* Desktop Continuous Scroll */}
        <div className="hidden md:block relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[350px]">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}