// import { Chats, Clock } from "@phosphor-icons/react";
// import React from "react";
// import { Link } from "react-router-dom";

// const Transfer = ({ id, title, description, image, comments, tag, time }) => {
//   return (
//     <section className="w-full h-auto flex flex-col gap-8 lg:px-28 md:px-8 px-6 md:mt-16 mt-12">
//       <h1 className="font-bold md:text-4xl text-2xl capitalize text-gray-100">
//         Transfers
//       </h1>
//       <main className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-6">
//         <div className="flex flex-col h-auto gap-2 bg-gray-900">
//           <div className="w-full h-[250px]">
//             <img
//               src={image}
//               className="w-full h-full object-cover object-top"
//               alt="image"
//             />
//           </div>
//           <div className="flex flex-col gap-4 px-5 pt-4 pb-6">
//             <div className="flex gap-2">
//               <span className="border border-gray-100 px-3 py-1.5 text-xs text-gray-100">
//                 {tag}
//               </span>
//             </div>
//             <Link to={`/transfers/${id}`} className="text-gray-100">
//               {title}
//             </Link>
//             <div>
//               <p> {description}</p>
//             </div>
//             <div className="flex gap-3">
//               <span className="flex gap-1 text-gray-300 text-xs items-center">
//                 <Clock size={18} weight="light" />
//                 {time}
//               </span>
//               <span className="flex gap-1 text-gray-300 text-xs items-center">
//                 <Chats size={18} weight="light" />
//                 {comments}
//               </span>
//             </div>
//           </div>
//         </div>
//       </main>
//     </section>
//   );
// };

// export default Transfer;
