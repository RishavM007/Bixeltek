import Image from 'next/image';
import Bixeltek from '@/assets/BixelTek LOGO-01.png'
export const Header = () => {
  return (
    <header className="px-3 py-5 max-w-7xl mx-auto sticky top-0 z-[60] ">
      <div className="container bg-black flex justify-between items-center border-white/15 border-solid border-2 rounded-xl shadow-purple-custom backdrop:blur-3xl">
        <div className="text-white">
        <Image src={Bixeltek} alt="Bixeltek Logo" width={70} height={40}/>
        </div>
        <div className="hidden md:block text-sm tracking-widest">
          <nav className="flex gap-8 font-sans">
            <a href="#" className="text-white/70 hover:text-white transition">
              Home
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              Our Services <i className="fa-solid fa-chevron-down text-xs ml-1"></i>
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
             Industries
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              Case Studies <i className="fa-solid fa-chevron-down text-xs ml-1"></i>
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              Blog 
            </a>
            <a href="#" className="text-white/70 hover:text-white transition hidden lg:inline">
              About Us 
            </a>
          </nav>
        </div>
        <div className="flex justify-center items-center gap-5 py-4">
          <button className="bg-gradient-to-t from-[#4a208a] to-[#13012e] border border-[#8a45f2] text-white font-normal text-sm py-2 px-4 rounded-lg shadow-custom">
            <span>Contact Us</span>
          </button>
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline md:hidden"
          >
            <path
              d="M28.5 16C28.5 16.2652 28.3946 16.5196 28.2071 16.7071C28.0196 16.8946 27.7652 17 27.5 17H5.5C5.23478 17 4.98043 16.8946 4.79289 16.7071C4.60536 16.5196 4.5 16.2652 4.5 16C4.5 15.7348 4.60536 15.4804 4.79289 15.2929C4.98043 15.1054 5.23478 15 5.5 15H27.5C27.7652 15 28.0196 15.1054 28.2071 15.2929C28.3946 15.4804 28.5 15.7348 28.5 16ZM5.5 9H27.5C27.7652 9 28.0196 8.89464 28.2071 8.70711C28.3946 8.51957 28.5 8.26522 28.5 8C28.5 7.73478 28.3946 7.48043 28.2071 7.29289C28.0196 7.10536 27.7652 7 27.5 7H5.5C5.23478 7 4.98043 7.10536 4.79289 7.29289C4.60536 7.48043 4.5 7.73478 4.5 8C4.5 8.26522 4.60536 8.51957 4.79289 8.70711C4.98043 8.89464 5.23478 9 5.5 9ZM27.5 23H5.5C5.23478 23 4.98043 23.1054 4.79289 23.2929C4.60536 23.4804 4.5 23.7348 4.5 24C4.5 24.2652 4.60536 24.5196 4.79289 24.7071C4.98043 24.8946 5.23478 25 5.5 25H27.5C27.7652 25 28.0196 24.8946 28.2071 24.7071C28.3946 24.5196 28.5 24.2652 28.5 24C28.5 23.7348 28.3946 23.4804 28.2071 23.2929C28.0196 23.1054 27.7652 23 27.5 23Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};
