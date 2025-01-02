// app/page.js

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Valtech @Christian Dior',
    location: 'Paris',
    date: 'Jan 2025 - present',
    description: 
      `- Leading the A/B test team for a global luxury brand.
      - Developed and maintained user interfaces with Vue.js, TypeScript, and JavaScript.
      - Implemented and analyzed A/B tests using Qubit to optimize performance and user engagement.
      - Conducted unit tests and web performance monitoring.,
`,
  },
  {
    title: 'Frontend Developer',
    company: 'Valtech @Louis Vuitton',
    location: 'Paris',
    date: 'Feb 2024 - Jan 2025',
    description: 
      `- Leading the A/B test team for a global luxury brand.
      - Developed and maintained user interfaces with Vue.js, TypeScript, and JavaScript.
      - Implemented and analyzed A/B tests using Qubit to optimize performance and user engagement.
      - Conducted unit tests and web performance monitoring.,
`,
  },
  {
    title: 'Frontend Developer',
    company: 'Bravoure',
    location: 'Amsterdam',
    date: 'Jan 2022 - Jan 2024',
    description: 
      `- Mentored junior and medior developers.
      - Built websites and web applications for multiple clients using TypeScript, React, and Next.js.
      - Enhanced visual UI/UX designs with framer motion and Tailwind CSS.
      - Collaborated with development and design teams to ensure the quality of final products.
    `,
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Openmind (part of Accenture)',
    location: 'Milan',
    date: 'Feb 2020 - Jan 2022',
    description: 
      `- Maintained existing jQuery code and launched new features in Vue.js.
      - Built a powerful search configuration with Algolia.
      - Created an innovative product search tool with Vue.js.
    `,
  },
  {
    title: 'Life insurance agent',
    company: 'Generali',
    location: 'Cagliari',
    date: 'Sep 2019 - Jan 2020',
    description: 
    `- Provided personalized financial solutions to clients, specializing in life insurance products.
      - Developed strong client relationships through tailored advice and effective communication.
    `,
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto my-12 px-4 max-w-[900px]">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      {/* Experience Cards */}
      <div className="flex flex-col md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white relative text-black font-semibold border border-black
                  transition-all duration-300 ease-in-out transform 
                  md:hover:-translate-x-0.5 md:hover:-translate-y-0.5 p-6 hover:shadow-xl md:hover:shadow-[2px_2px_0px_#000]"
          >
            <h2 className="text-xl font-bold mb-2">{exp.title}</h2>
            <h3 className="text-lg text-gray-600 mb-1">{exp.company}</h3>
            <p className="text-sm text-gray-500 mb-4">
              {exp.location} | {exp.date}
            </p>
            <p className="text-gray-700 whitespace-pre-line">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

