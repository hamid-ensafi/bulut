import { CiUser } from "react-icons/ci";

function Avatar(): React.JSX.Element {
  return (
    <div className="flex items-center gap-4">
      <span className="w-[40px] h-[40px] bg-dark-100 flex justify-center items-center rounded-full">
        <CiUser size={20} color="#6E21FF" />
      </span>
      <span className="text-sm text-dark-700"> حمید انصافی اذر </span>
    </div>
  );
}

export default Avatar;
