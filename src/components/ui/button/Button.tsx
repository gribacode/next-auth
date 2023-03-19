import Image from "next/image";

export const Button: Component.Button = ({ title, image, ...props }) => {
  return (
    <button
      className={`w-full py-3 rounded-md font-medium outline-none select-none flex items-center justify-center gap-x-2 ${
        image
          ? "bg-white border border-solid border-slate-200 text-gray-800 hover:border-slate-400"
          : "bg-blue-500 text-white hover:opacity-95"
      }`}
      {...props}>
      {title}
      {image && <Image src={image} alt={image?.slice(1)} width={20} height={20} className="shrink-0" />}
    </button>
  );
};
