import Image from "next/image";

export const LiveImage = () => {
  return (
    <div className="relative h-full w-full overflow-hidden select-none flex items-center">
      <Image src="/bike.png" alt="Bike image" width={344} height={356} className="z-10 absolute left-0 right-0 mx-auto" />
      <Image
        src="/cloud.png"
        alt="Cloud image"
        width={171}
        height={91}
        className="absolute z-0 top-8 left-0 animate-slide"
      />
      <Image
        src="/cloud.png"
        alt="Cloud image"
        width={171}
        height={91}
        className="absolute top-32 left-80 z-0 animate-slide"
      />
    </div>
  );
};
