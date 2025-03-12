'use client';
import arrowicon from "@/assets/icons/arrow-w.svg"
import Image from "next/image";
import cursorimg from '@/assets/images/cursor.png';
import messageimage from '@/assets/images/message.png'
import { MdArrowRightAlt } from "react-icons/md";
export default function SocialMedia() {

    return (
        <>
<section className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] relative overflow-hidden">
    <div className="container relative mx-auto px-4">
        <div className="flex items-center justify-center">
            <a href="#" className="border py-1 px-2 inline-flex gap-3 rounded-lg border-white/30">
                <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
                    Lorem ipsum dolor sit.
                </span>
                <span className="inline-flex items-center gap-1">
                    <span>Read More</span>
                    <MdArrowRightAlt />
                </span>
            </a>
        </div>
        
        {/* Ensure images do not cause overflow */}
        <div className="flex justify-center mt-8 relative">
            <div className="relative w-full max-w-5xl px-4">
                <Image src={cursorimg} alt="cursor" height={200} width={200} className="absolute right-[876px] top-[108px] hidden md:inline" />
                <Image src={messageimage} alt="message" height={200} width={200} className="absolute left-[85%] top-[106px] hidden md:inline" />
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-center">
                    Lorem ipsum dolor sit.
                </h1>
            </div>
        </div>
        
        <p className="text-center text-xl mt-8 max-w-md m-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci suscipit earum velit, tenetur sequi rem accusamus culpa totam animi nihil!
        </p>
        
        <div className="flex justify-center mt-6">
            <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">Get a quote</button>
        </div>
    </div>

    {/* Background Gradient Fix */}
    <div className="absolute h-[300px] w-[600px] md:w-[1200px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100% - 96px)] md:top-[calc(100% - 120px)]">
    </div>
</section>

        </>

    );
}