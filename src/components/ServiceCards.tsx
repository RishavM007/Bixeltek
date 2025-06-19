import React from 'react';
const cardData = [
  { id: 1, title: "Card 1", image:"https://cdn-icons-png.flaticon.com/512/5968/5968705.png", description: "AI Artificial Intelligence is a branch of computer science that focuses on the"},
  { id: 2, title: "Card 2", image:"https://cdn-icons-png.flaticon.com/512/5968/5968705.png", description: "AI Artificial Intelligence is a branch of computer science that focuses on the" },
  { id: 3, title: "Card 3", image:"https://cdn-icons-png.flaticon.com/512/5968/5968705.png", description: "AI Artificial Intelligence is a branch of computer science that focuses on the" },
  { id: 4, title: "Card 3", image:"https://cdn-icons-png.flaticon.com/512/5968/5968705.png", description: "AI Artificial Intelligence is a branch of computer science that focuses on the" },
  { id: 5, title: "Card 1", image:"https://cdn-icons-png.flaticon.com/512/5968/5968705.png", description: "AI Artificial Intelligence is a branch of computer science that focuses on the"},
  { id: 6, title: "Card 2", image:"https://cdn-icons-png.flaticon.com/512/5968/5968705.png", description: "AI Artificial Intelligence is a branch of computer science that focuses on the" },
  { id: 7, title: "Card 3", image:"https://cdn-icons-png.flaticon.com/512/5968/5968705.png", description: "AI Artificial Intelligence is a branch of computer science that focuses on the" },
  { id: 8, title: "Card 3", image:"https://cdn-icons-png.flaticon.com/512/5968/5968705.png", description: "AI Artificial Intelligence is a branch of computer science that focuses on the" },

];

const Card = ({ title, image, description, isEven }) => {
  const gradient = isEven
    ? "from-[#7028e4] to-[#1e1e1e]" // Purple to black for even cards
    : "from-[#1e1e1e] to-[#7028e4]"; // Black to purple for odd cards

  return (
    <div className={`w-60 relative p-[3px] m-4 rounded-xl  bg-gradient-to-b ${gradient} gap-15`}>
      <div className="bg-[#1e1e1e]  p-4  rounded-[10px] text-">
        <img src={image} alt ={title} className='w-25 h-20 object-cover rounded-md-3'/>
        <h2 className="text-lg font-semibold text-white-800 dark:text-gray-100">
          {title}
        </h2>
        <p className='w-40 font-semibold text-white-800 dark:text-blue-100'>{description}</p>
        <div className="text-sm font-semibold text-left text-white cursor-pointer">
              Read More <span className="text-[#7028e4]">→</span>
            </div>
      </div>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {cardData.map((card, index) => {
        const isEven = (index + 1) % 2 === 0;
        return <Card key={card.id} title={card.title} image={card.image} description={card.description} isEven={isEven} />;
      })}
    </div>
  );
};
export default CardList;

// export default function ServiceCards() {
    
//     return (
//         <div className="w-[80%] mx-auto grid grid-cols-3 justify-center items-center gap-10">
//             <div className=" relative">
//                 <div className={`absolute -inset-[3px] rounded-[0.875rem] bg-gradient-to- from-[#7028e4] via-[#381275] to-black z-0`}></div>

//                 <div className="relative z-10 bg-[#1e1e1e] text-white p-6 rounded-xl overflow-hidden">
//                     <div className="relative flex flex-col justify-left mb-4">
//                         <div>
//                             <img
//                                 src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
//                                 alt="google"
//                                 className="h-12"
//                             />
//                         </div>
//                         <h2 className="text-lg font-bold mb-2 text-left">Detectica</h2>
//                         <p className="text-sm text-left mb-4">
//                             "AI Artificial Intelligence is a branch of computer science that focuses on creating AI"
//                         </p>
//                         <div className="text-sm font-semibold text-left text-white cursor-pointer">
//                             Read More <span className="text-[#7028e4]">→</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className=" relative">
//                 <div className="absolute -inset-[3px] rounded-[0.875rem] bg-gradient-to-t from-[#7028e4] via-[#381275] to-black z-0"></div>

//                 <div className="relative z-10 bg-[#1e1e1e] text-white p-6 rounded-xl overflow-hidden">
//                     <div className="relative flex flex-col justify-left mb-4">
//                         <div>
//                             <img
//                                 src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
//                                 alt="google"
//                                 className="h-12"
//                             />
//                         </div>
//                         <h2 className="text-lg font-bold mb-2 text-left">Detectica</h2>
//                         <p className="text-sm text-left mb-4">
//                             "AI Artificial Intelligence is a branch of computer science that focuses on the"
//                         </p>
//                         <div className="text-sm font-semibold text-left text-white cursor-pointer">
//                             Read More <span className="text-[#7028e4]">→</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className=" relative">
//                 <div className="absolute -inset-[3px] rounded-[0.875rem] bg-gradient-to-b from-[#7028e4] via-[#381275] to-black z-0"></div>

//                 <div className="relative z-10 bg-[#1e1e1e] text-white p-6 rounded-xl overflow-hidden">
//                     <div className="relative flex flex-col justify-left mb-4">
//                         <div>
//                             <img
//                                 src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
//                                 alt="google"
//                                 className="h-12"
//                             />
//                         </div>
//                         <h2 className="text-lg font-bold mb-2 text-left">Detectica</h2>
//                         <p className="text-sm text-left mb-4">
//                             "AI Artificial Intelligence is a branch of computer science that focuses on the"
//                         </p>
//                         <div className="text-sm font-semibold text-left text-white cursor-pointer">
//                             Read More <span className="text-[#7028e4]">→</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className=" relative">
//                 <div className="absolute -inset-[2px] rounded-[0.875rem] bg-gradient-to-b from-[#7028e4] via-[#7028e4] to-black z-0"></div>

//                 <div className="relative z-10 bg-[#1e1e1e] text-white p-6 rounded-xl overflow-hidden">
//                     <div className="relative flex flex-col justify-left mb-4">
//                         <div>
//                             <img
//                                 src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
//                                 alt="google"
//                                 className="h-12"
//                             />
//                         </div>
//                         <h2 className="text-lg font-bold mb-2 text-left">Detectica</h2>
//                         <p className="text-sm text-left mb-4">
//                             "AI Artificial Intelligence is a branch of computer science that focuses on the"
//                         </p>
//                         <div className="text-sm font-semibold text-left text-white cursor-pointer">
//                             Read More <span className="text-[#7028e4]">→</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className=" relative">
//                 <div className="absolute -inset-[2px] rounded-[0.875rem] bg-gradient-to-b from-[#7028e4] via-[#7028e4] to-black z-0"></div>

//                 <div className="relative z-10 bg-[#1e1e1e] text-white p-6 rounded-xl overflow-hidden">
//                     <div className="relative flex flex-col justify-left mb-4">
//                         <div>
//                             <img
//                                 src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
//                                 alt="google"
//                                 className="h-12"
//                             />
//                         </div>
//                         <h2 className="text-lg font-bold mb-2 text-left">Detectica</h2>
//                         <p className="text-sm text-left mb-4">
//                             "AI Artificial Intelligence is a branch of computer science that focuses on the"
//                         </p>
//                         <div className="text-sm font-semibold text-left text-white cursor-pointer">
//                             Read More <span className="text-[#7028e4]">→</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="relative">
//                 <div className="absolute -inset-[2px] rounded-[0.875rem] bg-gradient-to-b from-[#7028e4] via-[#7028e4] to-black z-0"></div>

//                 <div className="relative z-10 bg-[#1e1e1e] text-white p-6 rounded-xl overflow-hidden">
//                     <div className="relative flex flex-col justify-left mb-4">
//                         <div>
//                             <img
//                                 src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
//                                 alt="google"
//                                 className="h-12"
//                             />
//                         </div>
//                         <h2 className="text-lg font-bold mb-2 text-left">Detectica</h2>
//                         <p className="text-sm text-left mb-4">
//                             "AI Artificial Intelligence is a branch of computer science that focuses on the"
//                         </p>
//                         <div className="text-sm font-semibold text-left text-white cursor-pointer">
//                             Read More <span className="text-[#7028e4]">→</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
