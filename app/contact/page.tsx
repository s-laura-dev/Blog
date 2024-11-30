// app/page.js
import { ButtonLink } from '@/components/ButtonLink';
import { Icon } from '@/components/Icon';
import {CustomLink} from '@/components/Link';
import Image from 'next/image';

// app/contact/page.js
export default function Contact() {
  return (
    <div className="container mx-auto my-12 px-4 min-h-screen text-center">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>

      {/* Contact Information */}
      <p className="text-lg text-gray-600 mb-6">
        I’d love to hear from you! Whether it’s about frontend development, finance, or just a friendly hello.
      </p>

      {/* Email */}

     <ButtonLink  href="mailto:lauraspina.dev@gmail.com" className="border border-black m-x-auto place-self-center w-fit text-black px-6 py-3 text-md font-semibold ">
     lauraspina.dev@gmail.com  📧
        </ButtonLink>

      {/* Social Links */}
      <div className="flex justify-center space-x-8">
      </div>
    </div>
  );
}

