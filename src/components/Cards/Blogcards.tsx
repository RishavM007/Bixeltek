import { HiOutlineArrowLongRight } from "react-icons/hi2";

interface BlogCardProps {
  title: string;
  description: string;
  glowcolor: string;
}

export const Blogcards: React.FC<BlogCardProps> = ({ title, description,glowcolor }) => {
  return (
    <div>
      <div className="relative z-0 p-8 max-w-lg max-h-lg group">     
        <div className="absolute inset-0 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)] bg-zinc-800"></div>
       
        <div className={`absolute size-16 rounded-xl z-[-20] ${glowcolor} top-1.5 right-1.5 group-hover:${glowcolor} transition duration-300`}></div>
        <div className={`absolute size-16 rounded-xl z-[-20] ${glowcolor} top-1.5 right-1.5 blur-lg opacity-0 group-hover:opacity-100 transition duration-300`}></div>
        <h3 className="font-heading text-white font-black text-3xl mt-12">{title}</h3>
        <p className="text-lg text-zinc-400 mt-4">{description}</p>
        <div className="flex justify-between mt-12">
          <button className="text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500">Learn More</button>
          <HiOutlineArrowLongRight className="group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0" />
        </div>
      </div>
    </div>
  );
};

