import Image from 'next/image';

export default function Platforms() {
  const platforms = [
    {
      title: "Programming with Maurya - Education",
      description: "Our flagship educational platform focused on programming and technology learning",
      features: [
        "Video tutorials and courses",
        "Live coding sessions",
        "Project-based learning",
        "Community support"
      ],
      details: [
        "200+ Video tutorials",
        "24/7 Discord community",
        "Weekly live sessions",
        "Hands-on projects"
      ],
      image: "https://placehold.co/600x400/png?text=Education+Platform",
      stats: {
        students: "1000+",
        courses: "15+",
        rating: "4.8/5"
      }
    },
    {
      title: "Programming with Maurya - Career",
      description: "Career guidance and professional development platform for tech enthusiasts",
      features: [
        "Career counselling",
        "Resume reviews",
        "Mock interviews",
        "Job placement assistance"
      ],
      details: [
        "One-on-one mentoring",
        "Industry expert sessions",
        "Interview preparation",
        "Career roadmap planning"
      ],
      image: "https://placehold.co/600x400/png?text=Career+Platform",
      stats: {
        placements: "100+",
        companies: "50+",
        satisfaction: "96%"
      }
    },
    {
      title: "Programming with Maurya - Development",
      description: "Professional development services and technical consulting",
      features: [
        "Web development",
        "Mobile apps",
        "Technical consulting",
        "Custom solutions"
      ],
      details: [
        "End-to-end development",
        "Technical architecture",
        "Code reviews",
        "Performance optimization"
      ],
      image: "https://placehold.co/600x400/png?text=Development+Platform",
      stats: {
        projects: "25+",
        clients: "20+",
        satisfaction: "98%"
      }
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Platforms</h1>
      
      <div className="space-y-12">
        {platforms.map((platform, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-[400px]">
                <Image
                  src={platform.image}
                  alt={platform.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">{platform.title}</h2>
                <p className="text-gray-600 mb-6">{platform.description}</p>
                
                <div className="grid grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Key Features:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {platform.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">What We Offer:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {platform.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Platform Statistics:</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(platform.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 