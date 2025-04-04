// "use client";

// import { useEffect, useState } from "react";
// import { grid } from "ldrs";

// if (typeof window !== "undefined") {
//   grid.register();
// }

// export const Preloader=({
//   children,
// }: {
//   children: React.ReactNode;
// })=> {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div style={preloaderStyles}>
//         <l-grid size="100" speed="1.5" color="white"></l-grid>
//       </div>
//     );
//   }

//   return <>{children}</>;
// }

// const preloaderStyles: React.CSSProperties = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "black",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   zIndex: 9999,
// };
