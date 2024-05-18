import Image from "next/image";

export default function Homepage() {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* image container */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image
          src="/hero.png"
          alt="hero"
          fill
          className="object-contain z-50"
        />
      </div>
      {/* text container */}
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center">
      
        <h2 className="text-4xl md:text-6xl font-bold">Crafting Digital Experience</h2>
        <p className="md:text-xl">
          Welcome to my digital canvas , where innovation and creativity
          converge . with keen eye for aesthetics and a mastery of code , my
          portfolio showcase a diverse collection of project that reflect my
          commitment to excellece
        </p>
        {/* button */}
        <div className="flex gap-4 w-full">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
        </div>
      </div>
    </div>
  );
}
