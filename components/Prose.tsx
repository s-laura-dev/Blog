import { ReactNode } from "react";

export const Prose = ({ children }: { children: ReactNode }) => {
  return (
    <div className="prose max-w-none">
      {children}
    </div>
  );
};


