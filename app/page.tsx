// app/page.js
import { ButtonLink } from '@/components/ButtonLink';
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
      <section className="relative bg-white text-black font-semibold border border-black shadow-[2px_2px_0px_#000] p-6 text-center mb-12">
        <h2 className="text-xl font-semibold mb-4 text-center">A Little About Me</h2>
        <p className="text-md font-normal text-black mb-4">
          My journey into software development wasn’t a straight path. I’ve worked in sales and insurance, studied finance, and have always been deeply enthusiastic about markets and investments. This non-traditional background has shaped me into a developer with a diverse range of influences and skills.
        </p>
        <p className="text-md font-normal text-black mb-4">
          I’m passionate about blending technology with real-world applications. Recently, I’ve been diving into data analysis with Python to broaden my programming abilities and explore how code can unlock insights in finance and beyond.
        </p>
      </section>

      {/* Latest Project Showcase */}
      <section className="relative flex flex-col items-center bg-white text-black font-semibold border border-black shadow-[2px_2px_0px_#000] p-6 text-center mb-12">
        <h2 className="text-xl font-semibold mb-4 text-center">My Latest Project</h2>
        <p className="text-md font-normal text-black mb-4">
          Recently, I built a <strong>Compound Interest Calculator</strong> using Python. It’s a tool designed to help individuals better understand how their investments grow over time.
        </p>
          <ButtonLink target='_blank' href="https://compound-interest-calculator-pndz.onrender.com/"  className="border w-fit border-black text-black px-6 py-3 text-md font-semibold">
            View the Calculator 📊
          </ButtonLink>
      </section>

    

      {/* Blog Introduction and Quick Link */}
      <section className="relative flex flex-col items-center bg-white text-electricBlue font-semibold border border-electricBlue shadow-[2px_2px_0px_#2563eb] p-6 text-center mb-12">
        <h2 className="text-xl font-semibold mb-4">Welcome to My Blog</h2>
        <p className="text-md font-normal text-electricBlue mb-6">
        I share my thoughts on all things frontend, from React and Vue.js to JavaScript and CSS, as well as cool insights into finance, investments, and the fascinating intersection of technology and numbers.
        </p>
        <ButtonLink target="_blank" href="https://medium.com/@info.lauraspina" className="border border-electricBlue w-fit text-electricBlue px-6 py-3 text-md font-semibold ">
            Visit My Blog 🚀
        </ButtonLink>
      </section>
    </div>
  );
}
