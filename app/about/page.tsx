// app/page.js
import {CustomLink} from '@/components/Link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-4 min-h-screen">
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
    </div>
  );
}
