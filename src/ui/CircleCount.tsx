import { ReactNode } from "react";

function CircleCount({ children }: { children: ReactNode }): React.JSX.Element {
  return (
    <span className="absolute flex justify-center transform translate-x-[-35%] translate-y-[10%] top-[-50%] right-[-50%] items-center w-[40px] h-[40px] bg-purpleprime-500 rounded-full text-white ">
          {children}

    </span>
  );
}

export default CircleCount;
