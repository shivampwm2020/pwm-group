export default function Journey() {
  return (
    <main className="container mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="text-center mb-16">
        <img src="/pwm_logo_no_bg.png" alt="PWM Logo" className="mx-auto mb-4 w-24 h-auto" />
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Our Evolution
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From a programming education platform to an AI innovation powerhouse
        </p>
      </div>
      
      {/* Previous Site Links */}
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Previous Site Archives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="https://shivam21maurya.wixsite.com/website-1" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Previous Site v1</h3>
            <p className="text-gray-600">Visit our first version of the website</p>
          </a>
          <a href="https://shivam21maurya.wixsite.com/my-site-3" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Previous Site v2</h3>
            <p className="text-gray-600">Explore our second iteration</p>
          </a>
          <a href="https://shivam21maurya.wixsite.com/programming-with-mau" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Previous Site v3</h3>
            <p className="text-gray-600">Check out our third version</p>
          </a>
          <a href="https://shivam21maurya.wixsite.com/website" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Previous Site v4</h3>
            <p className="text-gray-600">Browse through our fourth version</p>
          </a>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-20">
        {/* 2025 AI Era */}
        <div className="relative">
          <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600"></div>
          <div className="absolute -left-2 top-0 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
          <div className="ml-8">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4 shadow-sm">
              Present • 2025
            </span>
            <h2 className="text-3xl font-bold mb-4 text-blue-900">The AI Renaissance</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Transformed into a comprehensive AI ecosystem with three distinct platforms:
              Sarkari Samadhan, Aiution, and Goal Ninja.
            </p>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white border border-gray-100 p-8 rounded-xl shadow-md">
                <h3 className="font-semibold mb-4 text-blue-900 text-xl">Current Platforms</h3>
                <ul className="space-y-6">
                  <li className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-bold text-orange-800">Sarkari Samadhan</h4>
                    <p className="text-gray-600">Simplifying government services for every Indian citizen</p>
                  </li>
                  <li className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-bold text-blue-800">Aiution</h4>
                    <p className="text-gray-600">Enterprise AI integration and solutions platform</p>
                  </li>
                  <li className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-bold text-green-800">Goal Ninja</h4>
                    <p className="text-gray-600">AI-powered personal development and goal achievement platform</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 2024 Transition */}
        <div className="relative">
          <div className="absolute left-0 w-1 h-full bg-gray-300"></div>
          <div className="absolute -left-2 top-0 w-5 h-5 bg-gray-400 rounded-full border-4 border-white shadow-lg"></div>
          <div className="ml-8">
            <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full mb-4 shadow-sm">
              Transition • 2024
            </span>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Strategic Transformation</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              A year of reflection and reinvention, focusing on AI technology and innovation.
            </p>
          </div>
        </div>

        {/* 2023 - Programming with Maurya v4 */}
        <div className="relative">
          <div className="absolute left-0 w-1 h-full bg-gray-300"></div>
          <div className="absolute -left-2 top-0 w-5 h-5 bg-gray-400 rounded-full border-4 border-white shadow-lg"></div>
          <div className="ml-8">
            <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full mb-4 shadow-sm">
              2023 • Fourth Evolution
            </span>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Comprehensive Learning Hub</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Expanded into a full-fledged educational platform with multiple courses and career guidance.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced programming courses</li>
                <li>• Career counseling services</li>
                <li>• Industry collaboration programs</li>
                <li>• Live mentoring sessions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2022 - Programming with Maurya v3 */}
        <div className="relative">
          <div className="absolute left-0 w-1 h-full bg-gray-300"></div>
          <div className="absolute -left-2 top-0 w-5 h-5 bg-gray-400 rounded-full border-4 border-white shadow-lg"></div>
          <div className="ml-8">
            <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full mb-4 shadow-sm">
              2022 • Third Evolution
            </span>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Community-Focused Platform</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Enhanced the platform with community features and interactive learning elements.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Highlights</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Interactive coding challenges</li>
                <li>• Community forums</li>
                <li>• Project collaborations</li>
                <li>• Student showcase</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2021 - Programming with Maurya v2 */}
        <div className="relative">
          <div className="absolute left-0 w-1 h-full bg-gray-300"></div>
          <div className="absolute -left-2 top-0 w-5 h-5 bg-gray-400 rounded-full border-4 border-white shadow-lg"></div>
          <div className="ml-8">
            <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full mb-4 shadow-sm">
              2021 • Second Evolution
            </span>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Educational Content Platform</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Expanded the tutorial base and introduced structured learning paths.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Key Additions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Video tutorials</li>
                <li>• Programming courses</li>
                <li>• Practice exercises</li>
                <li>• Learning paths</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2020 - Initial Platform */}
        <div className="relative">
          <div className="absolute left-0 w-1 h-full bg-gray-300"></div>
          <div className="absolute -left-2 top-0 w-5 h-5 bg-gray-400 rounded-full border-4 border-white shadow-lg"></div>
          <div className="ml-8">
            <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full mb-4 shadow-sm">
              2020 • Beginning
            </span>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">The Foundation</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Started as a simple programming blog to share knowledge and experiences.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Initial Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Programming tutorials</li>
                <li>• Technical blogs</li>
                <li>• Code snippets</li>
                <li>• Basic resources</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="max-w-3xl mx-auto mt-24 text-center bg-gradient-to-r from-blue-600 to-blue-800 p-12 rounded-2xl shadow-lg text-white">
        <h2 className="text-3xl font-bold mb-6">Looking Forward</h2>
        <p className="text-xl leading-relaxed">
          From our humble beginnings as a programming education platform to our current 
          position as an AI innovation leader, we continue to evolve and adapt to serve 
          our users better. Our mission remains constant: empowering individuals and 
          organizations through technology.
        </p>
      </div>
    </main>
  );
} 