import { HeroIcon } from "../heroIcon/HeroIcon";
import { useState } from "react";

export const Field: Component.Field = ({ icon, type = "text", isPassword = false, ...props }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="relative group">
      <input
        {...props}
        type={isVisible ? "text" : isPassword ? "password" : type}
        className="w-full p-3 bg-slate-100 border border-solid border-slate-200 rounded-md placeholder-slate-400 outline-none group-hover:border-slate-400 duration-200"
      />
      <span
        className="flex items-center absolute top-0 bottom-0 my-auto right-3"
        onClick={() => setIsVisible((prev) => !prev)}>
        <HeroIcon
          name={icon}
          size={16}
          className={`text-slate-400 group-hover:text-slate-600 duration-200 ${
            isPassword ? "cursor-pointer" : "cursor-default"
          }`}
        />
      </span>
    </div>
  );
};
