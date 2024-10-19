import { Icon } from "./Icon";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 left-0 w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Laura Spina. All rights reserved.</p>
        </div>
        <div className="flex">
          <a 
            href="https://github.com/s-laura-dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mx-4 text-blue-400 hover:underline w-6 h-6 flex-shrink-0"
            
          >
            <Icon name="github" className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/laura-spina-80aa3b172/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mx-4 text-blue-400 hover:underline w-6 h-6 flex-shrink-0"
          >
            <Icon name="linkedin" className="w-6 h-6"/>
          </a>
        </div>
      </div>
    </footer>
  );
}
