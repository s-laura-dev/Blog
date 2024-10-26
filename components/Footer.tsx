import { ButtonLink } from "./ButtonLink";
import { Icon } from "./Icon";

export const Footer = () => {
  return (
    <footer className="bg-electricBlue text-beige py-4 left-0 w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Laura Spina. All rights reserved.</p>
        </div>
        <div className="flex gap-2">
          <ButtonLink
            href="https://github.com/s-laura-dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            variant="dark"
            className=" px-2 py-2 flex-shrink-0"
          >
            <Icon name="github" className="w-6 h-6" />
          </ButtonLink>
          <ButtonLink 
            href="https://www.linkedin.com/in/laura-spina-80aa3b172/" 
            target="_blank" 
            rel="noopener noreferrer" 
            variant="dark"
            className=" px-2 py-2 flex-shrink-0"
          >
            <Icon name="linkedin" className="w-6 h-6"/>
          </ButtonLink>
        </div>
      </div>
    </footer>
  );
}
