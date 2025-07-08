// // src/CancelButton.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function CancelButton() {
//   const navigate = useNavigate();

//   return (
//     <div className="flex justify-end mb-4">
//       <button
//         onClick={() => navigate('/home')}
//         className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg shadow"
//       >
//         Cancel
//       </button>
//     </div>
//   );
// }

// src/CancelButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CancelButton() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={() => navigate('/home')}
        className="text-white bg-gradient-to-r from-red-500 to-red-700 hover:bg-gradient-to-r hover:from-red-700 hover:to-red-500 transition-all duration-300 ease-in-out rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg transform hover:scale-105 focus:outline-none"
        title="Cancel"
      >
        &times;
      </button>
    </div>
  );
}


