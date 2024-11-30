// app/page.js
import { ButtonLink } from '@/components/ButtonLink';
import {CustomLink} from '@/components/Link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container max-w-[900px] mx-auto my-12 px-4 min-h-screen">
      {/* Introduction */}
      <section className="text-center mb-12">
        <Image
          src="/profile.jpg" 
          alt="Laura Spina"
          width={150}
          height={150}
          className='mx-auto mb-4'
        />
        <h1 className="text-3xl font-bold mb-4">Hi, I'm Laura</h1>
        <p className="text-lg text-gray-600">Frontend Developer @Christian Dior 💄| Finance and Data enthusiast 📈 | Based in Paris 🇫🇷</p>
        <p className="text-md text-gray-500">
          React | Next.js | Vue | Nuxt | Node.js | Python | SQL | GraphQL | Tailwind CSS
        </p>
      </section>

        {/* About Me */}
     
        <section className="bg-gray-800 text-white p-8  shadow-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">A Little About Me</h2>
        <p className="text-lg text-gray-300 mb-4">
          My journey into software development wasn’t a straight path. I’ve worked in sales and insurance, studied finance, and have always been deeply enthusiastic about markets and investments. This non-traditional background has shaped me into a developer with a diverse range of influences and skills.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          I’m passionate about blending technology with real-world applications. Recently, I’ve been diving into data analysis with Python to broaden my programming abilities and explore how code can unlock insights in finance and beyond.
        </p>
      </section>

      {/* Latest Project Showcase */}
      <section className="bg-gray-100 p-8  shadow-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">My Latest Project</h2>
        <p className="text-lg text-gray-700 mb-4">
          Recently, I built a <strong>Compound Interest Calculator</strong> using Python. It’s a tool designed to help individuals better understand how their investments grow over time.
        </p>
        <div className="flex justify-center">
          <ButtonLink target='_blank' href="https://compound-interest-calculator-pndz.onrender.com/"  className="border w-auto border-black text-black px-6 py-3 text-lg font-semibold">
            View the Calculator 📊
          </ButtonLink>
        </div>
      </section>

    

      {/* Blog Introduction and Quick Link */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Welcome to My Blog</h2>
        <p className="text-lg text-gray-600 mb-6">
          I write about all things frontend, from React and Vue.js to JavaScript, CSS, and more.
        </p>
        <ButtonLink target="_blank" href="https://medium.com/@info.lauraspina" className="border border-black m-x-auto place-self-center w-fit text-black px-6 py-3 text-lg font-semibold ">
            Visit My Blog 🚀
        </ButtonLink>
      </section>
    </div>
  );
}
