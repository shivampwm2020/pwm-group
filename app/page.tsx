import Link from "next/link";

export default function Home() {
  const solutions = [
    {
      title: "Sarkari Samadhan",
      description: "Simplifying government services access for every Indian citizen.",
      icon: "🏛️",
      link: "https://sarkarisamadhan.in"
    },
    {
      title: "Aiution",
      description: "Enterprise AI integration and automation solutions.",
      icon: "🤖",
      link: "/aiution"
    },
    {
      title: "Goal Ninja",
      description: "AI-powered personal development and career guidance.",
      icon: "🎯",
      link: "/goal-ninja"
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <img src="/pwm_logo_no_bg.png" alt="PWM Logo" className="mb-4 w-24 h-auto" />
            <span className="text-neutral-500 mb-4 block">PWM Group Presents</span>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Innovation for
              <span className="text-indigo-600"> Tomorrow&apos;s India</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-2xl">
              A technology conglomerate building AI-powered solutions across government services, 
              enterprise solutions, and personal development.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full hover:bg-neutral-900 transition-colors"
            >
              Partner with Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-neutral-500 mb-4 block">Our Companies</span>
            <h2 className="text-4xl font-bold mb-12">
              Three ventures, one vision: transforming India through technology
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {solutions.map((solution, index) => (
              <Link 
                key={index} 
                href={solution.link}
                className="group hover:bg-neutral-50 p-6 rounded-2xl transition-colors"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-neutral-600 mb-4">{solution.description}</p>
                <span className="text-indigo-600 font-medium inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "3", label: "Companies" },
              { number: "35+", label: "Past Contributors" },
              { number: "1000+", label: "Lives Impacted" },
              { number: "Pan India", label: "Presence" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-black mb-1">{stat.number}</div>
                <div className="text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-neutral-500 mb-4 block">Join PWM Group</span>
            <h2 className="text-4xl font-bold mb-6">Let&apos;s Build Together</h2>
            <p className="text-xl text-neutral-600 mb-8">
              Whether you&apos;re a business looking to innovate, or an individual seeking growth,
              PWM Group has the right solution for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full hover:bg-neutral-900 transition-colors"
            >
              Connect with Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
