// app/page.js
import {CustomLink} from '@/components/Link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto my-12 px-4 min-h-screen">
      {/* Introduction */}
      <section className="text-center mb-12">
        <Image
          src="/profile.jpg" 
          alt="Laura Spina"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">Hi 👋, I'm Laura</h1>
        <p className="text-xl text-electricBlue">Frontend Developer @Christian Dior | Based in Paris 🇫🇷</p>
        <p className="text-lg text-electricBlue mt-2">
        React | Next.js | Vue | Nuxt | Node.js | GraphQL | Tailwind CSS
        </p>
      </section>

      {/* About Me */}
      <section className="bg-gray-800 text-white p-8 rounded-lg shadow-lg mb-12">
        <pre className="overflow-x-auto text-sm sm:text-base md:text-lg lg:text-xl">
          <code className="language-js break-words whitespace-pre-wrap">
                    {`const laura = {
            title: "Frontend Developer",
            location: "Paris, France",
            experience: [
              { company: "Valtech (Louis Vuitton)", role: "Frontend Developer", tech: ["Vue.js", "Nuxt", "Node.js"] },
              { company: "Bravoure", role: "Frontend Developer", tech: ["Next.js", "React", "Tailwind", "GraphQL"] },
              { company: "Openmind", role: "Frontend Developer", tech: ["JavaScript", "React"] },
              { company: "Avanade", role: "Junior Software Developer", tech: ["HTML", "CSS", "JavaScript"] }
            ],
            funFact: "I'm a really good cook! 🍝",
            learning: "Node.js",
          };`}
          </code>
        </pre>
      </section>

      {/* Blog Introduction and Quick Link */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Welcome to My Blog</h2>
        <p className="text-lg text-gray-600 mb-6">
          I write about all things frontend, from React and Vue.js to JavaScript, CSS, and more.
        </p>
        <CustomLink href="/blog" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
            Visit My Blog 🚀
        </CustomLink>
      </section>
    </div>
  );
}
