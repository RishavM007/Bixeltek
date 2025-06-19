import React from 'react';
import Image from 'next/image';
import reacticon from '@/assets/7423888_react_react native_icon.png'

interface CardData {
    id: Number;
    title: String;
    image: any;
    description: String;
}

interface CardProps {
    title: String;
    image:  string;
    description: String;
    isEven: boolean;
}


const cardData: CardData[] = [
    { id: 1, title: "Card 1", image: reacticon, description: "AI Artificial Intelligence is a branch of computer science that focuses on the" },
    { id: 2, title: "Card 1", image: reacticon, description: "AI Artificial Intelligence is a branch of computer science that focuses on the" },
    { id: 3, title: "Card 1", image: reacticon, description: "AI Artificial Intelligence is a branch of computer science that focuses on the" },
    { id: 4, title: "Card 1", image: reacticon, description: "AI Artificial Intelligence is a branch of computer science that focuses on the" },
    { id: 5, title: "Card 1", image: reacticon, description: "AI Artificial Intelligence is a branch of computer science that focuses on the" },
    { id: 6, title: "Card 1", image: reacticon, description: "AI Artificial Intelligence is a branch of computer science that focuses on the" },
]

const Card: React.FC<CardProps> = ({ title, image, description, isEven }) => {
    const gradient = isEven
        ? "from-[#7028e4] to-[#1e1e1e]" //Purple to black for even cards
        : "from-[#1e1e1e] to-[#7028e4]"; // Black to purple for odd cards

    return (
        <div className={`w-full relative p-[3px] m-4 rounded-xl  bg-gradient-to-b ${gradient} gap-15`}>
            <div className="bg-[#1e1e1e]  p-4  rounded-[10px] text-">
                <div>
                <Image src={image} width={50} height={50} alt='' />

                </div>
                <h2 className="text-lg font-semibold text-white-800 dark:text-gray-100">
                    {title}
                </h2>
                <p className=' font-semibold text-white-800 dark:text-blue-100'>{description}</p>
                <div className="text-sm font-semibold text-left text-white cursor-pointer">
                    Read More <span className="text-[#7028e4]">→</span>
                </div>
            </div>
        </div>
    );
};

const CardList = () => {
    return (
        <div className=" max-w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center p-4">
            {cardData.map((card, index) => {
                const isEven = (index + 1) % 2 === 0;
                return <Card key={index} title={card.title} image={card.image} description={card.description} isEven={isEven} />;
            })}
        </div>
    );
};
export default CardList;

// export default function ServiceCards() {

//     return (
//         <div className="w-[80%] mx-auto grid grid-cols-3 justify-center items-center gap-10">
//             {cardData.map((data, index) => {
//                 return (
//                     <div key={index} className="relative">
//                         <div className={index % 2 ? `absolute -inset-[3px] rounded-[0.875rem] bg-gradient-to-b from-[#7028e4] via-[#381275] to-black z-0` : `absolute -inset-[3px] rounded-[0.875rem] bg-gradient-to-t from-[#7028e4] via-[#381275] to-black z-0`}>
//                         </div>
//                         <div className="relative z-10 bg-[#1e1e1e] text-white p-6 rounded-xl overflow-hidden">
//                             <div className="relative flex flex-col justify-left mb-4">
//                                 <div>
//                                     <Image
//                                         src={data.image}
//                                         alt="google"
//                                         width={50}
//                                         height={50}
//                                         className="h-12"
//                                     />
//                                 </div>
//                                 <h2 className="text-lg font-bold mb-2 text-left">{data.title}</h2>
//                                 <p className="text-sm text-left mb-4">
//                                     {data.description}
//                                 </p>
//                                 <div className="text-sm font-semibold text-left text-white cursor-pointer">
//                                     Read More <span className="text-[#7028e4]">→</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             })}

//         </div>
//     );
// }
