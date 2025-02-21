import Image from "next/image";

export default function Courses() {
  const courses = [
    {
      title: "Web Development Fundamentals",
      description: "Learn the basics of HTML, CSS, and JavaScript",
      duration: "8 weeks",
      level: "Beginner",
      topics: ["HTML5", "CSS3", "JavaScript Basics", "Responsive Design"],
      price: "$99",
      image: "/courses/web-fundamentals.jpg"
    },
    {
      title: "Advanced JavaScript",
      description: "Master modern JavaScript concepts and frameworks",
      duration: "10 weeks",
      level: "Intermediate",
      topics: ["ES6+", "Async Programming", "React", "Node.js"],
      price: "$149",
      image: "/courses/advanced-js.jpg"
    },
    {
      title: "Full Stack Development",
      description: "Build complete web applications from scratch",
      duration: "12 weeks",
      level: "Advanced",
      topics: ["MERN Stack", "API Development", "Database Design", "Deployment"],
      price: "$199",
      image: "/courses/full-stack.jpg"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Available Courses</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="space-y-2">
                <p><span className="font-semibold">Duration:</span> {course.duration}</p>
                <p><span className="font-semibold">Level:</span> {course.level}</p>
                <p><span className="font-semibold">Price:</span> {course.price}</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Topics Covered:</h3>
                <ul className="list-disc list-inside">
                  {course.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 