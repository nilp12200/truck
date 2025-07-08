// import React, { useState } from 'react';
// import axios from 'axios';
// import truckImage from './assets/Truck.png.png';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function TruckSchedule() {
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [status, setStatus] = useState('All');
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const fetchData = async (selectedStatus) => {
//     if (!fromDate || !toDate) {
//       setError('Please select dates');
//       return;
//     }

//     setLoading(true);
//     setError('');
//     setStatus(selectedStatus);

//     try {
//       const res = await axios.get(`${API_URL}/api/truck-schedule`, {
//         params: {
//           fromDate,
//           toDate,
//           status: selectedStatus,
//         },
//       });
//       setData(res.data);
//     } catch (err) {
//       console.error(err);
//       setError('Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 p-4 flex flex-col items-center">
//       <h1 className="text-3xl font-bold text-indigo-700 mb-6">🚚 Truck Schedule</h1>

//       <div className="flex flex-wrap gap-4 items-center bg-white p-4 rounded-xl shadow-lg mb-6 w-full max-w-4xl">
//         <div>
//           <label className="block text-sm font-medium">From</label>
//           <input
//             type="date"
//             value={fromDate}
//             onChange={(e) => setFromDate(e.target.value)}
//             className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">To</label>
//           <input
//             type="date"
//             value={toDate}
//             onChange={(e) => setToDate(e.target.value)}
//             className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />
//         </div>

//         <div className="flex gap-2 mt-6 sm:mt-0">
//           {['Dispatched', 'InTransit', 'CheckedOut', 'All'].map((btn) => (
//             <button
//               key={btn}
//               onClick={() => fetchData(btn)}
//               className={`px-4 py-2 rounded-lg font-semibold ${
//                 status === btn ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700'
//               } hover:bg-indigo-200`}
//             >
//               {btn}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="relative bg-white shadow-xl rounded-2xl p-6 w-full max-w-5xl text-center">
//       <img src={truckImage} alt="Truck" className="mx-auto h-40 mb-4" />


//         {loading && <p className="text-indigo-600 font-medium">Loading...</p>}
//         {error && <p className="text-red-500 font-medium">{error}</p>}
//         {!loading && data.length === 0 && !error && (
//           <p className="text-gray-500">No trucks found for selected filters</p>
//         )}

//         {data.length > 0 && (
//           <table className="min-w-full mt-4 border border-gray-300 rounded-xl overflow-hidden text-left">
//             <thead className="bg-indigo-100 text-indigo-700">
//               <tr>
//                 <th className="px-4 py-2">Truck No.</th>
//                 <th className="px-4 py-2">Plant</th>
//                 <th className="px-4 py-2">Check-In Time</th>
//                 <th className="px-4 py-2">Check-Out Time</th>
//                 <th className="px-4 py-2">Loading Slip</th>
//                 <th className="px-4 py-2">Qty</th>
//                 <th className="px-4 py-2">Freight</th>
//                 <th className="px-4 py-2">Priority</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item, i) => (
//                 <tr key={i} className="odd:bg-gray-50">
//                   <td className="px-4 py-2">{item.truckNo || '—'}</td>
//                   <td className="px-4 py-2">{item.plantName || '—'}</td>
//                   <td className="px-4 py-2">
//                     {item.checkInTime ? new Date(item.checkInTime).toLocaleString() : '—'}
//                   </td>
//                   <td className="px-4 py-2">
//                     {item.checkOutTime ? new Date(item.checkOutTime).toLocaleString() : '—'}
//                   </td>
//                   <td className="px-4 py-2">{item.loadingSlipNo || '—'}</td>
//                   <td className="px-4 py-2">{item.qty ?? '—'}</td>
//                   <td className="px-4 py-2">{item.freight ?? '—'}</td>
//                   <td className="px-4 py-2">{item.priority ?? '—'}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }

/////////////////////////



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import truckImage from './assets/Truck.png.png';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function TruckSchedule() {
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [status, setStatus] = useState('All');
//   const [selectedPlants, setSelectedPlants] = useState([]);
//   const [plantList, setPlantList] = useState([]);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     axios.get(`${API_URL}/api/plants`).then((res) => {
//       setPlantList(res.data);
//       setSelectedPlants(res.data.map((p) => p.name)); // Default select all
//     });
//   }, []);

//   const handleSelectAll = () => {
//     setSelectedPlants(plantList.map((p) => p.name));
//   };

//   const handleDeselectAll = () => {
//     setSelectedPlants([]);
//   };

//   const handleCheckboxChange = (plantName) => {
//     setSelectedPlants((prev) =>
//       prev.includes(plantName)
//         ? prev.filter((p) => p !== plantName)
//         : [...prev, plantName]
//     );
//   };

//   const fetchData = async (selectedStatus) => {
//     if (!fromDate || !toDate) {
//       setError('Please select dates');
//       return;
//     }

//     setLoading(true);
//     setError('');
//     setStatus(selectedStatus);

//     try {
//       const res = await axios.get(`${API_URL}/api/truck-schedule`, {
//         params: {
//           fromDate,
//           toDate,
//           status: selectedStatus,
//           plants: selectedPlants.join(',')
//         },
//       });
//       setData(res.data);
//     } catch (err) {
//       console.error(err);
//       setError('Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 p-4 flex flex-col items-center">
//       <h1 className="text-3xl font-bold text-indigo-700 mb-6">🚚 Truck Schedule</h1>

//       <div className="flex flex-wrap gap-4 items-center bg-white p-4 rounded-xl shadow-lg mb-4 w-full max-w-5xl">
//         <div>
//           <label className="block text-sm font-medium">From</label>
//           <input
//             type="date"
//             value={fromDate}
//             onChange={(e) => setFromDate(e.target.value)}
//             className="border rounded-lg px-3 py-2"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">To</label>
//           <input
//             type="date"
//             value={toDate}
//             onChange={(e) => setToDate(e.target.value)}
//             className="border rounded-lg px-3 py-2"
//           />
//         </div>
//         <div className="flex gap-2 mt-6 sm:mt-0">
//           {['Dispatched', 'InTransit', 'CheckedOut', 'All'].map((btn) => (
//             <button
//               key={btn}
//               onClick={() => fetchData(btn)}
//               className={`px-4 py-2 rounded-lg font-semibold ${
//                 status === btn ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700'
//               }`}
//             >
//               {btn}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-5xl mb-4">
//         <h2 className="text-lg font-semibold mb-2">Select Plants</h2>
//         <div className="flex gap-4 mb-2">
//           <button onClick={handleSelectAll} className="bg-green-500 text-white px-4 py-2 rounded-lg">Select All</button>
//           <button onClick={handleDeselectAll} className="bg-red-500 text-white px-4 py-2 rounded-lg">Deselect</button>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-48 overflow-y-auto">
//           {plantList.map((plant, i) => (
//             <label key={i} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={selectedPlants.includes(plant.name)}
//                 onChange={() => handleCheckboxChange(plant.name)}
//               />
//               {plant.name}
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="relative bg-white shadow-xl rounded-2xl p-6 w-full max-w-5xl text-center">
//         <img src={truckImage} alt="Truck" className="mx-auto h-40 mb-4" />

//         {loading && <p className="text-indigo-600 font-medium">Loading...</p>}
//         {error && <p className="text-red-500 font-medium">{error}</p>}
//         {!loading && data.length === 0 && !error && (
//           <p className="text-gray-500">No trucks found for selected filters</p>
//         )}

//         {data.length > 0 && (
//           <table className="min-w-full mt-4 border border-gray-300 rounded-xl overflow-hidden text-left">
//             <thead className="bg-indigo-100 text-indigo-700">
//               <tr>
//                 <th className="px-4 py-2">Truck No.</th>
//                 <th className="px-4 py-2">Plant</th>
//                 <th className="px-4 py-2">Check-In Time</th>
//                 <th className="px-4 py-2">Check-Out Time</th>
//                 <th className="px-4 py-2">Loading Slip</th>
//                 <th className="px-4 py-2">Qty</th>
//                 <th className="px-4 py-2">Freight</th>
//                 <th className="px-4 py-2">Priority</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item, i) => (
//                 <tr key={i} className="odd:bg-gray-50">
//                   <td className="px-4 py-2">{item.truckNo || '—'}</td>
//                   <td className="px-4 py-2">{item.plantName || '—'}</td>
//                   <td className="px-4 py-2">{item.checkInTime ? new Date(item.checkInTime).toLocaleString() : '—'}</td>
//                   <td className="px-4 py-2">{item.checkOutTime ? new Date(item.checkOutTime).toLocaleString() : '—'}</td>
//                   <td className="px-4 py-2">{item.loadingSlipNo || '—'}</td>
//                   <td className="px-4 py-2">{item.qty ?? '—'}</td>
//                   <td className="px-4 py-2">{item.freight ?? '—'}</td>
//                   <td className="px-4 py-2">{item.priority ?? '—'}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }

///////////////


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import truckImage from './assets/Truck.png.png';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function TruckSchedule() {
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [status, setStatus] = useState('All');
//   const [selectedPlants, setSelectedPlants] = useState([]);
//   const [plantList, setPlantList] = useState([]);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     axios.get(`${API_URL}/api/plants`, {
//       headers: {
//         userid: localStorage.getItem('userId'),
//         role: localStorage.getItem('role'),
//       },
//     }).then((res) => {
//       setPlantList(res.data);
//       setSelectedPlants(res.data.map((p) => p.plantid.toString())); // ✅ default all IDs
//     });
//   }, []);

//   const handleSelectAll = () => {
//     setSelectedPlants(plantList.map((p) => p.plantid.toString()));
//   };

//   const handleDeselectAll = () => {
//     setSelectedPlants([]);
//   };

//   const handleCheckboxChange = (plantId) => {
//     setSelectedPlants((prev) =>
//       prev.includes(plantId)
//         ? prev.filter((id) => id !== plantId)
//         : [...prev, plantId]
//     );
//   };

//   const fetchData = async (selectedStatus) => {
//     if (!fromDate || !toDate || selectedPlants.length === 0) {
//       setError('Please select all filters');
//       return;
//     }

//     setLoading(true);
//     setError('');
//     setStatus(selectedStatus);

//     try {
//       const res = await axios.get(`${API_URL}/api/truck-schedule`, {
//         params: {
//           fromDate,
//           toDate,
//           status: selectedStatus,
//           plant: JSON.stringify(selectedPlants),
//         },
//       });
//       setData(res.data);
//     } catch (err) {
//       console.error(err);
//       setError('Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 p-4 flex flex-col items-center">
//       <h1 className="text-3xl font-bold text-indigo-700 mb-6">🚚 Truck Schedule</h1>

//       <div className="flex flex-wrap gap-4 items-center bg-white p-4 rounded-xl shadow-lg mb-4 w-full max-w-5xl">
//         <div>
//           <label className="block text-sm font-medium">From</label>
//           <input
//             type="date"
//             value={fromDate}
//             onChange={(e) => setFromDate(e.target.value)}
//             className="border rounded-lg px-3 py-2"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">To</label>
//           <input
//             type="date"
//             value={toDate}
//             onChange={(e) => setToDate(e.target.value)}
//             className="border rounded-lg px-3 py-2"
//           />
//         </div>
//         <div className="flex gap-2 mt-6 sm:mt-0">
//           {['Dispatched', 'InTransit', 'CheckedOut', 'All'].map((btn) => (
//             <button
//               key={btn}
//               onClick={() => fetchData(btn)}
//               className={`px-4 py-2 rounded-lg font-semibold ${
//                 status === btn ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700'
//               }`}
//             >
//               {btn}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-5xl mb-4">
//         <h2 className="text-lg font-semibold mb-2">Select Plants</h2>
//         <div className="flex gap-4 mb-2">
//           <button onClick={handleSelectAll} className="bg-green-500 text-white px-4 py-2 rounded-lg">Select All</button>
//           <button onClick={handleDeselectAll} className="bg-red-500 text-white px-4 py-2 rounded-lg">Deselect</button>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-48 overflow-y-auto">
//           {plantList.map((plant, i) => (
//             <label key={i} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={selectedPlants.includes(plant.plantid.toString())}
//                 onChange={() => handleCheckboxChange(plant.plantid.toString())}
//               />
//               {plant.plantname}
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="relative bg-white shadow-xl rounded-2xl p-6 w-full max-w-5xl text-center">
//         <img src={truckImage} alt="Truck" className="mx-auto h-40 mb-4" />

//         {loading && <p className="text-indigo-600 font-medium">Loading...</p>}
//         {error && <p className="text-red-500 font-medium">{error}</p>}
//         {!loading && data.length === 0 && !error && (
//           <p className="text-gray-500">No trucks found for selected filters</p>
//         )}

//         {data.length > 0 && (
//           <table className="min-w-full mt-4 border border-gray-300 rounded-xl overflow-hidden text-left">
//             <thead className="bg-indigo-100 text-indigo-700">
//               <tr>
//                 <th className="px-4 py-2">Truck No.</th>
//                 <th className="px-4 py-2">Plant</th>
//                 <th className="px-4 py-2">Check-In Time</th>
//                 <th className="px-4 py-2">Check-Out Time</th>
//                 <th className="px-4 py-2">Loading Slip</th>
//                 <th className="px-4 py-2">Qty</th>
//                 <th className="px-4 py-2">Freight</th>
//                 <th className="px-4 py-2">Priority</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item, i) => (
//                 <tr key={i} className="odd:bg-gray-50">
//                   <td className="px-4 py-2">{item.truckNo || '—'}</td>
//                   <td className="px-4 py-2">{item.plantName || '—'}</td>
//                   <td className="px-4 py-2">{item.checkInTime ? new Date(item.checkInTime).toLocaleString() : '—'}</td>
//                   <td className="px-4 py-2">{item.checkOutTime ? new Date(item.checkOutTime).toLocaleString() : '—'}</td>
//                   <td className="px-4 py-2">{item.loadingSlipNo || '—'}</td>
//                   <td className="px-4 py-2">{item.qty ?? '—'}</td>
//                   <td className="px-4 py-2">{item.freight ?? '—'}</td>
//                   <td className="px-4 py-2">{item.priority ?? '—'}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }
///////////////////////////////////////////final working code today 


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import truckImage from './assets/Truck.png.png'; // अपनी इमेज पथ के अनुसार बदलें

// const API_URL = import.meta.env.VITE_API_URL;

// export default function TruckSchedule() {
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [status, setStatus] = useState('All');
//   const [truckSearch, setTruckSearch] = useState('');
//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlants, setSelectedPlants] = useState([]);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     axios.get(`${API_URL}/api/plants`, {
//       headers: {
//         userid: localStorage.getItem('userId'),
//         role: localStorage.getItem('role'),
//       },
//     })
//     .then(res => {
//       setPlantList(res.data);
//       setSelectedPlants(res.data.map(p => p.plantid.toString())); // default all select
//     })
//     .catch(() => setError('प्लांट लोड करने में त्रुटि'));
//   }, []);

//   const togglePlant = id =>
//     setSelectedPlants(prev =>
//       prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
//     );
//   const selectAll = () =>
//     setSelectedPlants(plantList.map(p => p.plantid.toString()));
//   const deselectAll = () => setSelectedPlants([]);

//   const fetchData = async (st, tr = '') => {
//     if (!fromDate || !toDate || selectedPlants.length === 0) {
//       setError('कृपया सभी फिल्टर चुनें');
//       return;
//     }
//     setLoading(true);
//     setError('');
//     setStatus(st);

//     try {
//       const res = await axios.get(`${API_URL}/api/truck-schedule`, {
//         params: {
//           fromDate,
//           toDate,
//           status: st,
//           plant: JSON.stringify(selectedPlants),
//           truckNo: tr || undefined,
//         },
//       });

//       let fetched = res.data;
//       if (tr) {
//         fetched = fetched.filter(item =>
//           item.truckNo?.toLowerCase().includes(tr.toLowerCase())
//         ); // frontend fallback filter :contentReference[oaicite:1]{index=1}
//       }
//       setData(fetched);
//     } catch {
//       setError('डेटा लाने में समस्या');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen flex flex-col items-center">
//       <h1 className="text-3xl font-bold text-indigo-700 mb-6">🚚 ट्रक अनुसूची</h1>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-4 items-end bg-white p-4 rounded-lg shadow w-full max-w-5xl mb-4">
//         <div>
//           <label className="block">From</label>
//           <input type="date" value={fromDate} onChange={e => setFromDate(e.target.value)}
//                  className="border rounded px-3 py-2"/>
//         </div>
//         <div>
//           <label className="block">To</label>
//           <input type="date" value={toDate} onChange={e => setToDate(e.target.value)}
//                  className="border rounded px-3 py-2"/>
//         </div>
//         <div className="flex gap-2">
//           {['Dispatched','InTransit','CheckedOut','All'].map(btn => (
//             <button key={btn}
//               onClick={() => fetchData(btn, truckSearch)}
//               className={`px-4 py-2 rounded font-semibold ${
//                 status === btn ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700'
//               }`}>
//               {btn}
//             </button>
//           ))}
//         </div>
//         <input type="text" placeholder="Truck No."
//                value={truckSearch} onChange={e => setTruckSearch(e.target.value)}
//                className="border rounded px-3 py-2 w-32"/>
//         <button onClick={() => fetchData(status, truckSearch)}
//                 className="px-4 py-2 bg-indigo-500 text-white rounded">
//           Search
//         </button>
//       </div>

//       {/* Plant selector */}
//       <div className="bg-white p-4 rounded-lg shadow w-full max-w-5xl mb-4">
//         <h2 className="text-lg font-semibold mb-2">Select Plants</h2>
//         <div className="flex gap-2 mb-2">
//           <button onClick={selectAll} className="bg-green-500 text-white px-4 py-2 rounded">
//             सब चुनें
//           </button>
//           <button onClick={deselectAll} className="bg-red-500 text-white px-4 py-2 rounded">
//             रद्द करें
//           </button>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-48 overflow-y-auto">
//           {plantList.map(p => (
//             <label key={p.plantid} className="flex items-center gap-2">
//               <input type="checkbox"
//                      checked={selectedPlants.includes(p.plantid.toString())}
//                      onChange={() => togglePlant(p.plantid.toString())}/>
//               {p.plantname}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Data display */}
//       <div className="bg-white p-6 shadow rounded-2xl w-full max-w-5xl overflow-x-auto">
//         <img src={truckImage} alt="Truck" className="mx-auto h-40 mb-4"/>

//         {loading && <p className="text-indigo-600">लोड हो रहा है…</p>}
//         {error && <p className="text-red-500">{error}</p>}
//         {!loading && !error && data.length === 0 && (
//           <p className="text-gray-500">कोई ट्रक नहीं मिला</p>
//         )}

//         {data.length > 0 && (
//           <table className="min-w-full table-auto border-collapse block md:table">
//             <thead className="bg-indigo-100 hidden md:table-header-group">
//               <tr className="table-row">
//                 {['Truck No','Plant','Check‑In','Check‑Out','Slip','Qty','Freight','Priority'].map(h => (
//                   <th key={h} className="px-4 py-2 text-left font-medium">{h}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="block md:table-row-group">
//               {data.map((it,i) => (
//                 <tr key={i} className="bg-white md:bg-transparent md:table-row block mb-4 md:mb-0 rounded md:rounded-none">
//                   {['truckNo','plantName','checkInTime','checkOutTime','loadingSlipNo','qty','freight','priority'].map((k,idx) => {
//                     const val = k.includes('Time') && it[k] ? new Date(it[k]).toLocaleString() : it[k] ?? '—';
//                     const label = ['Truck No','Plant','Check‑In','Check‑Out','Slip','Qty','Freight','Priority'][idx];
//                     return (
//                       <td key={k} className="px-4 py-2 block md:table-cell whitespace-normal lg:whitespace-nowrap">
//                         <span className="font-semibold md:hidden">{label}: </span>{val}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }

//////////////////////


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import truckImage from './assets/Truck.png.png'; // update path if needed

// const API_URL = import.meta.env.VITE_API_URL;

// export default function TruckSchedule() {
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [status, setStatus] = useState('All');
//   const [truckSearch, setTruckSearch] = useState('');
//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlants, setSelectedPlants] = useState([]);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     axios.get(`${API_URL}/api/plants`, {
//       headers: {
//         userid: localStorage.getItem('userId'),
//         role: localStorage.getItem('role'),
//       }
//     })
//     .then(res => {
//       setPlantList(res.data);
//       setSelectedPlants(res.data.map(p => p.plantid.toString())); // default select all
//     })
//     .catch(() => setError('Failed to load plants'));
//   }, []);

//   const togglePlant = id =>
//     setSelectedPlants(prev =>
//       prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
//     );
//   const selectAll = () =>
//     setSelectedPlants(plantList.map(p => p.plantid.toString()));
//   const deselectAll = () => setSelectedPlants([]);

//   const fetchData = async (st, tr = '') => {
//     if (!fromDate || !toDate || selectedPlants.length === 0) {
//       setError('Please select all filters');
//       return;
//     }
//     setLoading(true);
//     setError('');
//     setStatus(st);

//     try {
//       const res = await axios.get(`${API_URL}/api/truck-schedule`, {
//         params: {
//           fromDate,
//           toDate,
//           status: st,
//           plant: JSON.stringify(selectedPlants),
//           truckNo: tr || undefined,
//         },
//       });
//       let fetched = res.data;
//       if (tr) {
//         fetched = fetched.filter(item =>
//           item.truckNo?.toLowerCase().includes(tr.toLowerCase())
//         );
//       }
//       setData(fetched);
//     } catch {
//       setError('Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen flex flex-col items-center">
//       <h1 className="text-3xl font-bold text-indigo-700 mb-6">🚚 Truck Schedule</h1>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-4 items-end bg-white p-4 rounded-lg shadow w-full max-w-5xl mb-4">
//         <div>
//           <label className="block">From</label>
//           <input
//             type="date"
//             value={fromDate}
//             onChange={e => setFromDate(e.target.value)}
//             className="border rounded px-3 py-2"
//           />
//         </div>
//         <div>
//           <label className="block">To</label>
//           <input
//             type="date"
//             value={toDate}
//             onChange={e => setToDate(e.target.value)}
//             className="border rounded px-3 py-2"
//           />
//         </div>
//         <div className="flex gap-2">
//           {['Dispatched', 'InTransit', 'CheckedOut', 'All'].map(btn => (
//             <button
//               key={btn}
//               onClick={() => fetchData(btn, truckSearch)}
//               className={`px-4 py-2 rounded font-semibold ${
//                 status === btn
//                   ? 'bg-indigo-600 text-white'
//                   : 'bg-indigo-100 text-indigo-700'
//               }`}
//             >
//               {btn}
//             </button>
//           ))}
//         </div>
//         <input
//           type="text"
//           placeholder="Truck No."
//           value={truckSearch}
//           onChange={e => setTruckSearch(e.target.value)}
//           className="border rounded px-3 py-2 w-32"
//         />
//         <button
//           onClick={() => fetchData(status, truckSearch)}
//           className="px-4 py-2 bg-indigo-500 text-white rounded"
//         >
//           Search
//         </button>
//       </div>

//       {/* Plant selector */}
//       <div className="bg-white p-4 rounded-lg shadow w-full max-w-5xl mb-4">
//         <h2 className="text-lg font-semibold mb-2">Select Plants</h2>
//         <div className="flex gap-2 mb-2">
//           <button
//             onClick={selectAll}
//             className="bg-green-500 text-white px-4 py-2 rounded"
//           >
//             Select All
//           </button>
//           <button
//             onClick={deselectAll}
//             className="bg-red-500 text-white px-4 py-2 rounded"
//           >
//             Deselect
//           </button>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-48 overflow-y-auto">
//           {plantList.map(p => (
//             <label key={p.plantid} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={selectedPlants.includes(p.plantid.toString())}
//                 onChange={() => togglePlant(p.plantid.toString())}
//               />
//               {p.plantname}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Table / cards display */}
//       <div className="bg-white p-6 shadow rounded-2xl w-full max-w-5xl overflow-x-auto">
//         <img src={truckImage} alt="Truck" className="mx-auto h-40 mb-4" />

//         {loading && <p className="text-indigo-600">Loading...</p>}
//         {error && <p className="text-red-500">{error}</p>}
//         {!loading && !error && data.length === 0 && (
//           <p className="text-gray-500">No trucks found</p>
//         )}

//         {data.length > 0 && (
//           <table className="min-w-full table-auto border-collapse block md:table">
//             <thead className="bg-indigo-100 hidden md:table-header-group">
//               <tr className="table-row">
//                 {[
//                   'Truck No',
//                   'Plant',
//                   'Check‑In',
//                   'Check‑Out',
//                   'Slip',
//                   'Qty',
//                   'Freight',
//                   'Priority'
//                 ].map(h => (
//                   <th
//                     key={h}
//                     className="px-4 py-2 text-left font-medium"
//                   >
//                     {h}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="block md:table-row-group">
//               {data.map((item, idx) => (
//                 <tr
//                   key={idx}
//                   className="bg-white md:bg-transparent md:table-row block mb-4 md:mb-0 rounded md:rounded-none"
//                 >
//                   {[
//                     'truckNo',
//                     'plantName',
//                     'checkInTime',
//                     'checkOutTime',
//                     'loadingSlipNo',
//                     'qty',
//                     'freight',
//                     'priority'
//                   ].map((key, i) => {
//                     const raw = item[key];
//                     const value =
//                       key.includes('Time') && raw
//                         ? new Date(raw).toLocaleString()
//                         : raw ?? '—';
//                     const label = [
//                       'Truck No',
//                       'Plant',
//                       'Check‑In',
//                       'Check‑Out',
//                       'Slip',
//                       'Qty',
//                       'Freight',
//                       'Priority'
//                     ][i];
//                     return (
//                       <td
//                         key={key}
//                         className="px-4 py-2 block md:table-cell whitespace-normal lg:whitespace-nowrap"
//                       >
//                         <span className="font-semibold md:hidden">
//                           {label}:{' '}
//                         </span>
//                         {value}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }

///////////////////working code


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import truckImage from './assets/Truck.png.png'; // Update path if needed

// const API_URL = import.meta.env.VITE_API_URL;

// export default function TruckSchedule() {
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [status, setStatus] = useState('All');
//   const [truckSearch, setTruckSearch] = useState('');
//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlants, setSelectedPlants] = useState([]);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     axios.get(`${API_URL}/api/plants`, {
//       headers: {
//         userid: localStorage.getItem('userId'),
//         role: localStorage.getItem('role'),
//       }
//     })
//     .then(res => {
//       setPlantList(res.data);
//       setSelectedPlants(res.data.map(p => p.plantid.toString()));
//     })
//     .catch(() => setError('Failed to load plants'));
//   }, []);

//   const togglePlant = id =>
//     setSelectedPlants(prev =>
//       prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
//     );

//   const selectAll = () =>
//     setSelectedPlants(plantList.map(p => p.plantid.toString()));

//   const deselectAll = () => setSelectedPlants([]);

//   const fetchData = async (st, tr = '') => {
//     if (!fromDate || !toDate || selectedPlants.length === 0) {
//       setError('Please select all filters');
//       return;
//     }
//     setLoading(true);
//     setError('');
//     setStatus(st);

//     try {
//       const res = await axios.get(`${API_URL}/api/truck-schedule`, {
//         params: {
//           fromDate,
//           toDate,
//           status: st,
//           plant: JSON.stringify(selectedPlants),
//           truckNo: tr || undefined,
//         },
//       });
//       let fetched = res.data;
//       if (tr) {
//         fetched = fetched.filter(item =>
//           item.truckNo?.toLowerCase().includes(tr.toLowerCase())
//         );
//       }
//       setData(fetched);
//     } catch {
//       setError('Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen flex flex-col items-center w-full">
//       <h1 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 text-center">🚚 Truck Schedule</h1>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-3 justify-center items-end bg-white p-3 rounded-lg shadow w-full max-w-5xl mb-4">
//         <div className="flex flex-col">
//           <label className="text-sm">From</label>
//           <input
//             type="date"
//             value={fromDate}
//             onChange={e => setFromDate(e.target.value)}
//             className="border rounded px-2 py-1 text-sm"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="text-sm">To</label>
//           <input
//             type="date"
//             value={toDate}
//             onChange={e => setToDate(e.target.value)}
//             className="border rounded px-2 py-1 text-sm"
//           />
//         </div>
//         <div className="flex gap-1 flex-wrap">
//           {['Dispatched', 'InTransit', 'CheckedOut', 'All'].map(btn => (
//             <button
//               key={btn}
//               onClick={() => fetchData(btn, truckSearch)}
//               className={`px-3 py-1 rounded font-semibold text-xs ${
//                 status === btn
//                   ? 'bg-indigo-600 text-white'
//                   : 'bg-indigo-100 text-indigo-700'
//               }`}
//             >
//               {btn}
//             </button>
//           ))}
//         </div>
//         <input
//           type="text"
//           placeholder="Truck No."
//           value={truckSearch}
//           onChange={e => setTruckSearch(e.target.value)}
//           className="border rounded px-2 py-1 text-sm w-24"
//         />
//         <button
//           onClick={() => fetchData(status, truckSearch)}
//           className="px-3 py-1 bg-indigo-500 text-white rounded text-sm"
//         >
//           Search
//         </button>
//       </div>

//       {/* Plant selector */}
//       <div className="bg-white p-3 rounded-lg shadow w-full max-w-5xl mb-4">
//         <h2 className="text-base font-semibold mb-2">Select Plants</h2>
//         <div className="flex gap-2 mb-2 flex-wrap">
//           <button
//             onClick={selectAll}
//             className="bg-green-500 text-white px-3 py-1 rounded text-sm"
//           >
//             Select All
//           </button>
//           <button
//             onClick={deselectAll}
//             className="bg-red-500 text-white px-3 py-1 rounded text-sm"
//           >
//             Deselect
//           </button>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-40 overflow-y-auto">
//           {plantList.map(p => (
//             <label key={p.plantid} className="flex items-center gap-1 text-sm">
//               <input
//                 type="checkbox"
//                 checked={selectedPlants.includes(p.plantid.toString())}
//                 onChange={() => togglePlant(p.plantid.toString())}
//               />
//               {p.plantname}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Table / cards display */}
//       <div className="bg-white p-3 shadow rounded-2xl w-full max-w-5xl overflow-x-auto">
//         <img src={truckImage} alt="Truck" className="mx-auto h-24 sm:h-40 mb-3" />

//         {loading && <p className="text-indigo-600 text-center">Loading...</p>}
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         {!loading && !error && data.length === 0 && (
//           <p className="text-gray-500 text-center">No trucks found</p>
//         )}

//         {data.length > 0 && (
//           <table className="min-w-[600px] table-auto border-collapse block md:table text-sm">
//             <thead className="bg-indigo-100 hidden md:table-header-group">
//               <tr className="table-row">
//                 {['Truck No', 'Plant', 'Check‑In', 'Check‑Out', 'Slip', 'Qty', 'Freight', 'Priority'].map(h => (
//                   <th key={h} className="px-3 py-2 text-left font-medium">{h}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="block md:table-row-group">
//               {data.map((item, idx) => (
//                 <tr key={idx} className="bg-white md:bg-transparent md:table-row block mb-3 md:mb-0 rounded md:rounded-none shadow md:shadow-none p-2 md:p-0">
//                   {['truckNo', 'plantName', 'checkInTime', 'checkOutTime', 'loadingSlipNo', 'qty', 'freight', 'priority'].map((key, i) => {
//                     const raw = item[key];
//                     const value = key.includes('Time') && raw
//                       ? new Date(raw).toLocaleString()
//                       : raw ?? '—';
//                     const label = ['Truck No', 'Plant', 'Check‑In', 'Check‑Out', 'Slip', 'Qty', 'Freight', 'Priority'][i];
//                     return (
//                       <td key={key} className="px-3 py-2 block md:table-cell break-words">
//                         <span className="font-semibold md:hidden">{label}: </span>
//                         {value}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import truckImage from './assets/Truck.png.png'; 


// const API_URL = import.meta.env.VITE_API_URL;

// export default function TruckSchedule() {
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [status, setStatus] = useState('All');
//   const [truckSearch, setTruckSearch] = useState('');
//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlants, setSelectedPlants] = useState([]);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     axios.get(`${API_URL}/api/plants`, {
//       headers: {
//         userid: localStorage.getItem('userId'),
//         role: localStorage.getItem('role'),
//       }
//     })
//     .then(res => {
//       setPlantList(res.data);
//       setSelectedPlants(res.data.map(p => p.plantid.toString()));
//     })
//     .catch(() => setError('Failed to load plants'));
//   }, []);

//   const togglePlant = id =>
//     setSelectedPlants(prev =>
//       prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
//     );

//   const selectAll = () =>
//     setSelectedPlants(plantList.map(p => p.plantid.toString()));

//   const deselectAll = () => setSelectedPlants([]);

//   const fetchData = async (st, tr = '') => {
//     if (!fromDate || !toDate || selectedPlants.length === 0) {
//       setError('Please select all filters');
//       return;
//     }
//     setLoading(true);
//     setError('');
//     setStatus(st);

//     try {
//       const res = await axios.get(`${API_URL}/api/truck-schedule`, {
//         params: {
//           fromDate,
//           toDate,
//           status: st,
//           plant: JSON.stringify(selectedPlants),
//           truckNo: tr || undefined,
//         },
//       });
//       let fetched = res.data;
//       if (tr) {
//         fetched = fetched.filter(item =>
//           item.truckNo?.toLowerCase().includes(tr.toLowerCase())
//         );
//       }
//       setData(fetched);
//     } catch {
//       setError('Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen flex flex-col items-center w-full">
   
//       <h1 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 text-center">🚚 Truck Schedule</h1>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-3 justify-center items-end bg-white p-3 rounded-lg shadow w-full max-w-5xl mb-4">
//         <div className="flex flex-col">
//           <label className="text-sm">From</label>
//           <input
//             type="date"
//             value={fromDate}
//             onChange={e => setFromDate(e.target.value)}
//             className="border rounded px-2 py-1 text-sm"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="text-sm">To</label>
//           <input
//             type="date"
//             value={toDate}
//             onChange={e => setToDate(e.target.value)}
//             className="border rounded px-2 py-1 text-sm"
//           />
//         </div>
//         <div className="flex gap-1 flex-wrap">
//           {['Dispatched', 'InTransit', 'CheckedOut', 'All'].map(btn => (
//             <button
//               key={btn}
//               onClick={() => fetchData(btn, truckSearch)}
//               className={`px-3 py-1 rounded font-semibold text-xs ${
//                 status === btn
//                   ? 'bg-indigo-600 text-white'
//                   : 'bg-indigo-100 text-indigo-700'
//               }`}
//             >
//               {btn}
//             </button>
//           ))}
//         </div>
//         <input
//           type="text"
//           placeholder="Truck No."
//           value={truckSearch}
//           onChange={e => setTruckSearch(e.target.value)}
//           className="border rounded px-2 py-1 text-sm w-24"
//         />
//         <button
//           onClick={() => fetchData(status, truckSearch)}
//           className="px-3 py-1 bg-indigo-500 text-white rounded text-sm"
//         >
//           Search
//         </button>
//       </div>

//       {/* Plant selector */}
//       <div className="bg-white p-3 rounded-lg shadow w-full max-w-5xl mb-4">
//         <h2 className="text-base font-semibold mb-2">Select Plants</h2>
//         <div className="flex gap-2 mb-2 flex-wrap">
//           <button
//             onClick={selectAll}
//             className="bg-green-500 text-white px-3 py-1 rounded text-sm"
//           >
//             Select All
//           </button>
//           <button
//             onClick={deselectAll}
//             className="bg-red-500 text-white px-3 py-1 rounded text-sm"
//           >
//             Deselect
//           </button>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-40 overflow-y-auto">
//           {plantList.map(p => (
//             <label key={p.plantid} className="flex items-center gap-1 text-sm">
//               <input
//                 type="checkbox"
//                 checked={selectedPlants.includes(p.plantid.toString())}
//                 onChange={() => togglePlant(p.plantid.toString())}
//               />
//               {p.plantname}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Table / cards display */}
//       <div className="bg-white p-3 shadow rounded-2xl w-full max-w-5xl overflow-x-auto">
//         <img src={truckImage} alt="Truck" className="mx-auto h-24 sm:h-40 mb-3" />

//         {loading && <p className="text-indigo-600 text-center">Loading...</p>}
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         {!loading && !error && data.length === 0 && (
//           <p className="text-gray-500 text-center">No trucks found</p>
//         )}

//         {/* Desktop Table */}
//         {data.length > 0 && (
//           <div className="hidden md:block">
//             <table className="w-full table-auto border border-gray-300 text-sm">
//               <thead className="bg-indigo-100">
//                 <tr>
//                   {['Truck No', 'Plant', 'Check‑In', 'Check‑Out', 'Slip', 'Qty', 'Freight', 'Priority'].map(h => (
//                     <th key={h} className="px-3 py-2 border border-gray-300 text-left">{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((item, idx) => (
//                   <tr key={idx} className="hover:bg-gray-50">
//                     {['truckNo', 'plantName', 'checkInTime', 'checkOutTime', 'loadingSlipNo', 'qty', 'freight', 'priority'].map((key) => {
//                       const raw = item[key];
//                       const value = key.includes('Time') && raw
//                         ? new Date(raw).toLocaleString()
//                         : raw ?? '—';
//                       return (
//                         <td key={key} className="px-3 py-2 border border-gray-300">{value}</td>
//                       );
//                     })}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* Mobile Card View */}
//         {data.length > 0 && (
//           <div className="block md:hidden space-y-3">
//             {data.map((item, idx) => (
//               <div key={idx} className="border border-gray-300 rounded p-2 shadow-sm bg-white">
//                 {['Truck No', 'Plant', 'Check‑In', 'Check‑Out', 'Slip', 'Qty', 'Freight', 'Priority'].map((label, i) => {
//                   const key = ['truckNo', 'plantName', 'checkInTime', 'checkOutTime', 'loadingSlipNo', 'qty', 'freight', 'priority'][i];
//                   const raw = item[key];
//                   const value = key.includes('Time') && raw
//                     ? new Date(raw).toLocaleString()
//                     : raw ?? '—';
//                   return (
//                     <p key={key} className="text-sm">
//                       <span className="font-semibold">{label}:</span> {value}
//                     </p>
//                   );
//                 })}
//               </div>
//             ))}
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import truckImage from './assets/Truck.png.png';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function TruckSchedule() {
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [status, setStatus] = useState('All');
//   const [truckSearch, setTruckSearch] = useState('');
//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlants, setSelectedPlants] = useState([]);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     axios.get(`${API_URL}/api/plants`, {
//       headers: {
//         userid: localStorage.getItem('userId'),   // UserId bhej rahe
//         role: localStorage.getItem('role')
//       }
//     })
//     .then(res => {
//       setPlantList(res.data);
//       setSelectedPlants(res.data.map(p => p.plantid.toString()));
//     })
//     .catch(() => setError('Failed to load plants'));
//   }, []);

//   const togglePlant = id =>
//     setSelectedPlants(prev =>
//       prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
//     );

//   const selectAll = () =>
//     setSelectedPlants(plantList.map(p => p.plantid.toString()));

//   const deselectAll = () => setSelectedPlants([]);

//   const fetchData = async (st, tr = '') => {
//     if (!fromDate || !toDate || selectedPlants.length === 0) {
//       setError('Please select all filters');
//       return;
//     }
//     setLoading(true);
//     setError('');
//     setStatus(st);

//     try {
//       const res = await axios.get(`${API_URL}/api/truck-schedule`, {
//         params: {
//           fromDate,
//           toDate,
//           status: st,
//           plant: JSON.stringify(selectedPlants),
//           truckNo: tr || undefined,
//         },
//       });
//       let fetched = res.data;
//       if (tr) {
//         fetched = fetched.filter(item =>
//           item.truckNo?.toLowerCase().includes(tr.toLowerCase())
//         );
//       }
//       setData(fetched);
//     } catch {
//       setError('Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen flex flex-col items-center w-full">
   
//       <h1 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 text-center">🚚 Truck Schedule</h1>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-3 justify-center items-end bg-white p-3 rounded-lg shadow w-full max-w-5xl mb-4">
//         <div className="flex flex-col">
//           <label className="text-sm">From</label>
//           <input
//             type="date"
//             value={fromDate}
//             onChange={e => setFromDate(e.target.value)}
//             className="border rounded px-2 py-1 text-sm"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="text-sm">To</label>
//           <input
//             type="date"
//             value={toDate}
//             onChange={e => setToDate(e.target.value)}
//             className="border rounded px-2 py-1 text-sm"
//           />
//         </div>
//         <div className="flex gap-1 flex-wrap">
//           {['Dispatched', 'InTransit', 'CheckedOut', 'All'].map(btn => (
//             <button
//               key={btn}
//               onClick={() => fetchData(btn, truckSearch)}
//               className={`px-3 py-1 rounded font-semibold text-xs ${
//                 status === btn
//                   ? 'bg-indigo-600 text-white'
//                   : 'bg-indigo-100 text-indigo-700'
//               }`}
//             >
//               {btn}
//             </button>
//           ))}
//         </div>
//         <input
//           type="text"
//           placeholder="Truck No."
//           value={truckSearch}
//           onChange={e => setTruckSearch(e.target.value)}
//           className="border rounded px-2 py-1 text-sm w-24"
//         />
//         <button
//           onClick={() => fetchData(status, truckSearch)}
//           className="px-3 py-1 bg-indigo-500 text-white rounded text-sm"
//         >
//           Search
//         </button>
//       </div>

//       {/* Plant selector */}
//       <div className="bg-white p-3 rounded-lg shadow w-full max-w-5xl mb-4">
//         <h2 className="text-base font-semibold mb-2">Select Plants</h2>
//         <div className="flex gap-2 mb-2 flex-wrap">
//           <button
//             onClick={selectAll}
//             className="bg-green-500 text-white px-3 py-1 rounded text-sm"
//           >
//             Select All
//           </button>
//           <button
//             onClick={deselectAll}
//             className="bg-red-500 text-white px-3 py-1 rounded text-sm"
//           >
//             Deselect
//           </button>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-40 overflow-y-auto">
//           {plantList.map(p => (
//             <label key={p.plantid} className="flex items-center gap-1 text-sm">
//               <input
//                 type="checkbox"
//                 checked={selectedPlants.includes(p.plantid.toString())}
//                 onChange={() => togglePlant(p.plantid.toString())}
//               />
//               {p.plantname}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Table / cards display */}
//       <div className="bg-white p-3 shadow rounded-2xl w-full max-w-5xl overflow-x-auto">
//         <img src={truckImage} alt="Truck" className="mx-auto h-24 sm:h-40 mb-3" />

//         {loading && <p className="text-indigo-600 text-center">Loading...</p>}
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         {!loading && !error && data.length === 0 && (
//           <p className="text-gray-500 text-center">No trucks found</p>
//         )}

//         {/* Desktop Table */}
//         {data.length > 0 && (
//           <div className="hidden md:block">
//             <table className="w-full table-auto border border-gray-300 text-sm">
//               <thead className="bg-indigo-100">
//                 <tr>
//                   {['Truck No', 'Plant', 'Check‑In', 'Check‑Out', 'Slip', 'Qty', 'Freight', 'Priority'].map(h => (
//                     <th key={h} className="px-3 py-2 border border-gray-300 text-left">{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((item, idx) => (
//                   <tr key={idx} className="hover:bg-gray-50">
//                     {['truckNo', 'plantName', 'checkInTime', 'checkOutTime', 'loadingSlipNo', 'qty', 'freight', 'priority'].map((key) => {
//                       const raw = item[key];
//                       const value = key.includes('Time') && raw
//                         ? new Date(raw).toLocaleString()
//                         : raw ?? '—';
//                       return (
//                         <td key={key} className="px-3 py-2 border border-gray-300">{value}</td>
//                       );
//                     })}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* Mobile Card View */}
//         {data.length > 0 && (
//           <div className="block md:hidden space-y-3">
//             {data.map((item, idx) => (
//               <div key={idx} className="border border-gray-300 rounded p-2 shadow-sm bg-white">
//                 {['Truck No', 'Plant', 'Check‑In', 'Check‑Out', 'Slip', 'Qty', 'Freight', 'Priority'].map((label, i) => {
//                   const key = ['truckNo', 'plantName', 'checkInTime', 'checkOutTime', 'loadingSlipNo', 'qty', 'freight', 'priority'][i];
//                   const raw = item[key];
//                   const value = key.includes('Time') && raw
//                     ? new Date(raw).toLocaleString()
//                     : raw ?? '—';
//                   return (
//                     <p key={key} className="text-sm">
//                       <span className="font-semibold">{label}:</span> {value}
//                     </p>
//                   );
//                 })}
//               </div>
//             ))}
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }////////////////////////



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import truckImage from './assets/Truck.png.png';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function TruckSchedule() {
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [status, setStatus] = useState('All');
//   const [truckSearch, setTruckSearch] = useState('');
//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlants, setSelectedPlants] = useState([]);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const userId = localStorage.getItem('userId');
//     const role = localStorage.getItem('role') || 'admin';
//     const allowedPlantsRaw = localStorage.getItem('allowedPlants') || '';
//     const allowedPlants = allowedPlantsRaw.split(',').map(p => p.trim()).filter(Boolean);

//     axios.get(`${API_URL}/api/plants`, {
//       headers: { userid: userId, role }
//     })
//       .then(res => {
//         const filtered = res.data.filter(plant => {
//           const pid = String(plant.PlantID || plant.PlantId || plant.plantid || '');
//           return allowedPlants.includes(pid) || role.toLowerCase() === 'admin';
//         });
//         setPlantList(filtered);
//         setSelectedPlants(filtered.map(p => String(p.plantid)));
//       })
//       .catch(() => setError('Failed to load plants'));
//   }, []);

//   const togglePlant = id =>
//     setSelectedPlants(prev =>
//       prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
//     );

//   const selectAll = () =>
//     setSelectedPlants(plantList.map(p => String(p.plantid)));

//   const deselectAll = () => setSelectedPlants([]);

//   const fetchData = async (st, tr = '') => {
//     if (!fromDate || !toDate || selectedPlants.length === 0) {
//       setError('Please select all filters');
//       return;
//     }
//     setLoading(true);
//     setError('');
//     setStatus(st);

//     try {
//       const res = await axios.get(`${API_URL}/api/truck-schedule`, {
//         params: {
//           fromDate,
//           toDate,
//           status: st,
//           plant: JSON.stringify(selectedPlants),
//           truckNo: tr || undefined,
//         },
//       });
//       let fetched = res.data;
//       if (tr) {
//         fetched = fetched.filter(item =>
//           item.truckNo?.toLowerCase().includes(tr.toLowerCase())
//         );
//       }
//       setData(fetched);
//     } catch {
//       setError('Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen flex flex-col items-center w-full">
//       <h1 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 text-center">🚚 Truck Schedule</h1>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-3 justify-center items-end bg-white p-3 rounded-lg shadow w-full max-w-5xl mb-4">
//         <div className="flex flex-col">
//           <label className="text-sm">From</label>
//           <input
//             type="date"
//             value={fromDate}
//             onChange={e => setFromDate(e.target.value)}
//             className="border rounded px-2 py-1 text-sm"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="text-sm">To</label>
//           <input
//             type="date"
//             value={toDate}
//             onChange={e => setToDate(e.target.value)}
//             className="border rounded px-2 py-1 text-sm"
//           />
//         </div>
//         <div className="flex gap-1 flex-wrap">
//           {['Dispatched', 'InTransit', 'CheckedOut', 'All'].map(btn => (
//             <button
//               key={btn}
//               onClick={() => fetchData(btn, truckSearch)}
//               className={`px-3 py-1 rounded font-semibold text-xs ${
//                 status === btn ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700'
//               }`}
//             >
//               {btn}
//             </button>
//           ))}
//         </div>
//         <input
//           type="text"
//           placeholder="Truck No."
//           value={truckSearch}
//           onChange={e => setTruckSearch(e.target.value)}
//           className="border rounded px-2 py-1 text-sm w-24"
//         />
//         <button
//           onClick={() => fetchData(status, truckSearch)}
//           className="px-3 py-1 bg-indigo-500 text-white rounded text-sm"
//         >
//           Search
//         </button>
//       </div>

//       {/* Plant selector */}
//       <div className="bg-white p-3 rounded-lg shadow w-full max-w-5xl mb-4">
//         <h2 className="text-base font-semibold mb-2">Select Plants</h2>
//         <div className="flex gap-2 mb-2 flex-wrap">
//           <button
//             onClick={selectAll}
//             className="bg-green-500 text-white px-3 py-1 rounded text-sm"
//           >
//             Select All
//           </button>
//           <button
//             onClick={deselectAll}
//             className="bg-red-500 text-white px-3 py-1 rounded text-sm"
//           >
//             Deselect
//           </button>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-40 overflow-y-auto">
//           {plantList.map(p => (
//             <label key={p.plantid} className="flex items-center gap-1 text-sm">
//               <input
//                 type="checkbox"
//                 checked={selectedPlants.includes(String(p.plantid))}
//                 onChange={() => togglePlant(String(p.plantid))}
//               />
//               {p.plantname}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Table / cards display */}
//       <div className="bg-white p-3 shadow rounded-2xl w-full max-w-5xl overflow-x-auto">
//         <img src={truckImage} alt="Truck" className="mx-auto h-24 sm:h-40 mb-3" />

//         {loading && <p className="text-indigo-600 text-center">Loading...</p>}
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         {!loading && !error && data.length === 0 && (
//           <p className="text-gray-500 text-center">No trucks found</p>
//         )}

//         {/* Desktop Table */}
//         {data.length > 0 && (
//           <div className="hidden md:block">
//             <table className="w-full table-auto border border-gray-300 text-sm">
//               <thead className="bg-indigo-100">
//                 <tr>
//                   {['Truck No', 'Plant', 'Check‑In', 'Check‑Out', 'Slip', 'Qty', 'Freight', 'Priority'].map(h => (
//                     <th key={h} className="px-3 py-2 border border-gray-300 text-left">{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((item, idx) => (
//                   <tr key={idx} className="hover:bg-gray-50">
//                     {['truckNo', 'plantName', 'checkInTime', 'checkOutTime', 'loadingSlipNo', 'qty', 'freight', 'priority'].map((key) => {
//                       const raw = item[key];
//                       const value = key.includes('Time') && raw
//                         ? new Date(raw).toLocaleString()
//                         : raw ?? '—';
//                       return (
//                         <td key={key} className="px-3 py-2 border border-gray-300">{value}</td>
//                       );
//                     })}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* Mobile Card View */}
//         {data.length > 0 && (
//           <div className="block md:hidden space-y-3">
//             {data.map((item, idx) => (
//               <div key={idx} className="border border-gray-300 rounded p-2 shadow-sm bg-white">
//                 {['Truck No', 'Plant', 'Check‑In', 'Check‑Out', 'Slip', 'Qty', 'Freight', 'Priority'].map((label, i) => {
//                   const key = ['truckNo', 'plantName', 'checkInTime', 'checkOutTime', 'loadingSlipNo', 'qty', 'freight', 'priority'][i];
//                   const raw = item[key];
//                   const value = key.includes('Time') && raw
//                     ? new Date(raw).toLocaleString()
//                     : raw ?? '—';
//                   return (
//                     <p key={key} className="text-sm">
//                       <span className="font-semibold">{label}:</span> {value}
//                     </p>
//                   );
//                 })}
//               </div>
//             ))}
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import truckImage from './assets/Truck.png.png';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function TruckSchedule() {
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [status, setStatus] = useState('All');
//   const [truckSearch, setTruckSearch] = useState('');
//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlants, setSelectedPlants] = useState([]);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const userId = localStorage.getItem('userId');
//     const role = localStorage.getItem('role');
//     const allowedPlantsRaw = localStorage.getItem('allowedPlants') || '';
//     const allowedPlants = allowedPlantsRaw.split(',').map(p => p.trim()).filter(Boolean);

//     axios.get(`${API_URL}/api/plants`, {
//       headers: { userid: userId, role }
//     })
//     .then(res => {
//       const filtered = res.data.filter(plant => {
//         const pid = String(plant.plantid || '');
//         return allowedPlants.includes(pid) || role?.toLowerCase() === 'admin';
//       });
//       setPlantList(filtered);
//       setSelectedPlants(filtered.map(p => p.plantid.toString()));
//     })
//     .catch(() => setError('Failed to load plants'));
//   }, []);

//   const togglePlant = id =>
//     setSelectedPlants(prev =>
//       prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
//     );

//   const selectAll = () =>
//     setSelectedPlants(plantList.map(p => p.plantid.toString()));

//   const deselectAll = () => setSelectedPlants([]);

//   const fetchData = async (st, tr = '') => {
//     if (!fromDate || !toDate || selectedPlants.length === 0) {
//       setError('Please select all filters');
//       return;
//     }
//     setLoading(true);
//     setError('');
//     setStatus(st);

//     try {
//       const res = await axios.get(`${API_URL}/api/truck-schedule`, {
//         params: {
//           fromDate,
//           toDate,
//           status: st,
//           plant: JSON.stringify(selectedPlants),
//           truckNo: tr || undefined,
//         },
//       });
//       let fetched = res.data;
//       if (tr) {
//         fetched = fetched.filter(item =>
//           item.truckNo?.toLowerCase().includes(tr.toLowerCase())
//         );
//       }
//       setData(fetched);
//     } catch {
//       setError('Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen flex flex-col items-center w-full">
//       <h1 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 text-center">🚚 Truck Schedule</h1>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-3 justify-center items-end bg-white p-3 rounded-lg shadow w-full max-w-5xl mb-4">
//         <div className="flex flex-col">
//           <label className="text-sm">From</label>
//           <input
//             type="date"
//             value={fromDate}
//             onChange={e => setFromDate(e.target.value)}
//             className="border rounded px-2 py-1 text-sm"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="text-sm">To</label>
//           <input
//             type="date"
//             value={toDate}
//             onChange={e => setToDate(e.target.value)}
//             className="border rounded px-2 py-1 text-sm"
//           />
//         </div>
//         <div className="flex gap-1 flex-wrap">
//           {['Dispatched', 'InTransit', 'CheckedOut', 'All'].map(btn => (
//             <button
//               key={btn}
//               onClick={() => fetchData(btn, truckSearch)}
//               className={`px-3 py-1 rounded font-semibold text-xs ${
//                 status === btn
//                   ? 'bg-indigo-600 text-white'
//                   : 'bg-indigo-100 text-indigo-700'
//               }`}
//             >
//               {btn}
//             </button>
//           ))}
//         </div>
//         <input
//           type="text"
//           placeholder="Truck No."
//           value={truckSearch}
//           onChange={e => setTruckSearch(e.target.value)}
//           className="border rounded px-2 py-1 text-sm w-24"
//         />
//         <button
//           onClick={() => fetchData(status, truckSearch)}
//           className="px-3 py-1 bg-indigo-500 text-white rounded text-sm"
//         >
//           Search
//         </button>
//       </div>

//       {/* Plant selector */}
//       <div className="bg-white p-3 rounded-lg shadow w-full max-w-5xl mb-4">
//         <h2 className="text-base font-semibold mb-2">Select Plants</h2>
//         <div className="flex gap-2 mb-2 flex-wrap">
//           <button
//             onClick={selectAll}
//             className="bg-green-500 text-white px-3 py-1 rounded text-sm"
//           >
//             Select All
//           </button>
//           <button
//             onClick={deselectAll}
//             className="bg-red-500 text-white px-3 py-1 rounded text-sm"
//           >
//             Deselect
//           </button>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-40 overflow-y-auto">
//           {plantList.map(p => (
//             <label key={p.plantid} className="flex items-center gap-1 text-sm">
//               <input
//                 type="checkbox"
//                 checked={selectedPlants.includes(p.plantid.toString())}
//                 onChange={() => togglePlant(p.plantid.toString())}
//               />
//               {p.plantname}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Table / cards display */}
//       <div className="bg-white p-3 shadow rounded-2xl w-full max-w-5xl overflow-x-auto">
//         <img src={truckImage} alt="Truck" className="mx-auto h-24 sm:h-40 mb-3" />

//         {loading && <p className="text-indigo-600 text-center">Loading...</p>}
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         {!loading && !error && data.length === 0 && (
//           <p className="text-gray-500 text-center">No trucks found</p>
//         )}

//         {/* Desktop Table */}
//         {data.length > 0 && (
//           <div className="hidden md:block">
//             <table className="w-full table-auto border border-gray-300 text-sm">
//               <thead className="bg-indigo-100">
//                 <tr>
//                   {['Truck No', 'Plant', 'Check‑In', 'Check‑Out', 'Slip', 'Qty', 'Freight', 'Priority'].map(h => (
//                     <th key={h} className="px-3 py-2 border border-gray-300 text-left">{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((item, idx) => (
//                   <tr key={idx} className="hover:bg-gray-50">
//                     {['truckNo', 'plantName', 'checkInTime', 'checkOutTime', 'loadingSlipNo', 'qty', 'freight', 'priority'].map((key) => {
//                       const raw = item[key];
//                       const value = key.includes('Time') && raw
//                         ? new Date(raw).toLocaleString()
//                         : raw ?? '—';
//                       return (
//                         <td key={key} className="px-3 py-2 border border-gray-300">{value}</td>
//                       );
//                     })}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* Mobile Card View */}
//         {data.length > 0 && (
//           <div className="block md:hidden space-y-3">
//             {data.map((item, idx) => (
//               <div key={idx} className="border border-gray-300 rounded p-2 shadow-sm bg-white">
//                 {['Truck No', 'Plant', 'Check‑In', 'Check‑Out', 'Slip', 'Qty', 'Freight', 'Priority'].map((label, i) => {
//                   const key = ['truckNo', 'plantName', 'checkInTime', 'checkOutTime', 'loadingSlipNo', 'qty', 'freight', 'priority'][i];
//                   const raw = item[key];
//                   const value = key.includes('Time') && raw
//                     ? new Date(raw).toLocaleString()
//                     : raw ?? '—';
//                   return (
//                     <p key={key} className="text-sm">
//                       <span className="font-semibold">{label}:</span> {value}
//                     </p>
//                   );
//                 })}
//               </div>
//             ))}
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }////////////////////////// final working hai date issuu


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import truckImage from './assets/Truck.png.png';

// const API_URL = import.meta.env.VITE_API_URL;

// export default function TruckSchedule() {
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [status, setStatus] = useState('All');
//   const [truckSearch, setTruckSearch] = useState('');
//   const [plantList, setPlantList] = useState([]);
//   const [selectedPlants, setSelectedPlants] = useState([]);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const userId = localStorage.getItem('userId');
//     const role = localStorage.getItem('role');
//     const allowedPlantsRaw = localStorage.getItem('allowedPlants') || '';
//     const allowedPlants = allowedPlantsRaw.split(',').map(p => p.trim()).filter(Boolean);

//     axios.get(`${API_URL}/api/plants`, {
//       headers: { userid: userId, role }
//     })
//     .then(res => {
//       const filtered = res.data.filter(plant => {
//         const pid = String(plant.plantid || '');
//         return allowedPlants.includes(pid) || role?.toLowerCase() === 'admin';
//       });
//       setPlantList(filtered);
//       setSelectedPlants(filtered.map(p => p.plantid.toString()));
//     })
//     .catch(() => setError('Failed to load plants'));
//   }, []);

//   const togglePlant = id =>
//     setSelectedPlants(prev =>
//       prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
//     );

//   const selectAll = () =>
//     setSelectedPlants(plantList.map(p => p.plantid.toString()));

//   const deselectAll = () => setSelectedPlants([]);

//   const fetchData = async (st, tr = '') => {
//     if (!fromDate || !toDate || selectedPlants.length === 0) {
//       setError('Please select all filters');
//       return;
//     }
//     setLoading(true);
//     setError('');
//     setStatus(st);

//     try {
//       const res = await axios.get(`${API_URL}/api/truck-schedule`, {
//         params: {
//           fromDate,
//           toDate,
//           status: st,
//           plant: JSON.stringify(selectedPlants),
//           truckNo: tr || undefined,
//         },
//       });
//       let fetched = res.data;
//       if (tr) {
//         fetched = fetched.filter(item =>
//           item.truckNo?.toLowerCase().includes(tr.toLowerCase())
//         );
//       }
//       setData(fetched);
//     } catch {
//       setError('Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen flex flex-col items-center w-full">
//       <h1 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 text-center">🚚 Truck Schedule</h1>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-3 justify-center items-end bg-white p-3 rounded-lg shadow w-full max-w-5xl mb-4">
//         <div className="flex flex-col">
//           <label className="text-sm">From</label>
//           <input
//             type="date"
//             value={fromDate}
//             onChange={e => setFromDate(e.target.value)}
//             className="border rounded px-2 py-1 text-sm"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="text-sm">To</label>
//           <input
//             type="date"
//             value={toDate}
//             onChange={e => setToDate(e.target.value)}
//             className="border rounded px-2 py-1 text-sm"
//           />
//         </div>
//         <div className="flex gap-1 flex-wrap">
//           {['Dispatched', 'InTransit', 'CheckedOut', 'All'].map(btn => (
//             <button
//               key={btn}
//               onClick={() => fetchData(btn, truckSearch)}
//               className={`px-3 py-1 rounded font-semibold text-xs ${
//                 status === btn
//                   ? 'bg-indigo-600 text-white'
//                   : 'bg-indigo-100 text-indigo-700'
//               }`}
//             >
//               {btn}
//             </button>
//           ))}
//         </div>
//         <input
//           type="text"
//           placeholder="Truck No."
//           value={truckSearch}
//           onChange={e => setTruckSearch(e.target.value)}
//           className="border rounded px-2 py-1 text-sm w-24"
//         />
//         <button
//           onClick={() => fetchData(status, truckSearch)}
//           className="px-3 py-1 bg-indigo-500 text-white rounded text-sm"
//         >
//           Search
//         </button>
//       </div>

//       {/* Plant selector */}
//       <div className="bg-white p-3 rounded-lg shadow w-full max-w-5xl mb-4">
//         <h2 className="text-base font-semibold mb-2">Select Plants</h2>
//         <div className="flex gap-2 mb-2 flex-wrap">
//           <button
//             onClick={selectAll}
//             className="bg-green-500 text-white px-3 py-1 rounded text-sm"
//           >
//             Select All
//           </button>
//           <button
//             onClick={deselectAll}
//             className="bg-red-500 text-white px-3 py-1 rounded text-sm"
//           >
//             Deselect
//           </button>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-40 overflow-y-auto">
//           {plantList.map(p => (
//             <label key={p.plantid} className="flex items-center gap-1 text-sm">
//               <input
//                 type="checkbox"
//                 checked={selectedPlants.includes(p.plantid.toString())}
//                 onChange={() => togglePlant(p.plantid.toString())}
//               />
//               {p.plantname}
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Table / cards display */}
//       <div className="bg-white p-3 shadow rounded-2xl w-full max-w-5xl overflow-x-auto">
//         <img src={truckImage} alt="Truck" className="mx-auto h-24 sm:h-40 mb-3" />

//         {loading && <p className="text-indigo-600 text-center">Loading...</p>}
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         {!loading && !error && data.length === 0 && (
//           <p className="text-gray-500 text-center">No trucks found</p>
//         )}

//         {/* Desktop Table */}
//         {data.length > 0 && (
//           <div className="hidden md:block">
//             <table className="w-full table-auto border border-gray-300 text-sm">
//               <thead className="bg-indigo-100">
//                 <tr>
//                   {['Truck No', 'Plant', 'Check‑In', 'Check‑Out', 'Slip', 'Qty', 'Freight', 'Priority'].map(h => (
//                     <th key={h} className="px-3 py-2 border border-gray-300 text-left">{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((item, idx) => (
//                   <tr key={idx} className="hover:bg-gray-50">
//                     {['truckNo', 'plantName', 'checkInTime', 'checkOutTime', 'loadingSlipNo', 'qty', 'freight', 'priority'].map((key) => {
//                       const raw = item[key];
//                       const value = key.includes('Time') && raw
//                         ? raw
//                         : raw ?? '—';
//                       return (
//                         <td key={key} className="px-3 py-2 border border-gray-300">{value}</td>
//                       );
//                     })}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* Mobile Card View */}
//         {data.length > 0 && (
//           <div className="block md:hidden space-y-3">
//             {data.map((item, idx) => (
//               <div key={idx} className="border border-gray-300 rounded p-2 shadow-sm bg-white">
//                 {['Truck No', 'Plant', 'Check‑In', 'Check‑Out', 'Slip', 'Qty', 'Freight', 'Priority'].map((label, i) => {
//                   const key = ['truckNo', 'plantName', 'checkInTime', 'checkOutTime', 'loadingSlipNo', 'qty', 'freight', 'priority'][i];
//                   const raw = item[key];
//                   const value = key.includes('Time') && raw
//                     ? raw
//                     : raw ?? '—';
//                   return (
//                     <p key={key} className="text-sm">
//                       <span className="font-semibold">{label}:</span> {value}
//                     </p>
//                   );
//                 })}
//               </div>
//             ))}
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiTruck, FiCalendar, FiFilter, FiSearch, FiCheckCircle, FiXCircle, FiRefreshCw } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CancelButton from './CancelButton';

const API_URL = import.meta.env.VITE_API_URL;

export default function TruckSchedule() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [status, setStatus] = useState('All');
  const [truckSearch, setTruckSearch] = useState('');
  const [plantList, setPlantList] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPlantFilter, setShowPlantFilter] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const role = localStorage.getItem('role');
    const allowedPlantsRaw = localStorage.getItem('allowedPlants') || '';
    const allowedPlants = allowedPlantsRaw.split(',').map(p => p.trim()).filter(Boolean);

    axios.get(`${API_URL}/api/plants`, {
      headers: { userid: userId, role }
    })
    .then(res => {
      const filtered = res.data.filter(plant => {
        const pid = String(plant.plantid || '');
        return allowedPlants.includes(pid) || role?.toLowerCase() === 'admin';
      });
      setPlantList(filtered);
      setSelectedPlants(filtered.map(p => p.plantid.toString()));
      toast.success('Plants loaded successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
      });
    })
    .catch(() => {
      setError('Failed to load plants');
      toast.error('Failed to load plants', {
        position: "top-right",
        autoClose: 3000,
      });
    });
  }, []);

  const togglePlant = (id) => {
    setSelectedPlants(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
    toast.info('Plant selection updated', {
      position: "top-right",
      autoClose: 1500,
    });
  };

  const selectAll = () => {
    setSelectedPlants(plantList.map(p => p.plantid.toString()));
    toast.success('All plants selected', {
      position: "top-right",
      autoClose: 1500,
    });
  };

  const deselectAll = () => {
    setSelectedPlants([]);
    toast.info('All plants deselected', {
      position: "top-right",
      autoClose: 1500,
    });
  };

  const fetchData = async (st, tr = '') => {
    if (!fromDate || !toDate || selectedPlants.length === 0) {
      setError('Please select all filters');
      toast.error('Please select all filters', {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    
    setLoading(true);
    setError('');
    setStatus(st);
    toast.info('Fetching truck data...', {
      position: "top-right",
      autoClose: 1000,
    });

    try {
      const res = await axios.get(`${API_URL}/api/truck-schedule`, {
        params: {
          fromDate,
          toDate,
          status: st,
          plant: JSON.stringify(selectedPlants),
          truckNo: tr || undefined,
        },
      });
      let fetched = res.data;
      if (tr) {
        fetched = fetched.filter(item =>
          item.truckNo?.toLowerCase().includes(tr.toLowerCase())
        );
      }
      setData(fetched);
      toast.success(`Loaded ${fetched.length} trucks`, {
        position: "top-right",
        autoClose: 2000,
      });
    } catch {
      setError('Failed to fetch data');
      toast.error('Failed to fetch truck data', {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDateTime = (dateTimeStr) => {
    if (!dateTimeStr) return '—';
    const date = new Date(dateTimeStr);
    return date.toLocaleString();
  };

  // Format for real-time or current time
  const formatRealTime = (time) => {
    if (!time) return '—';
    const now = new Date();
    const timeDiff = now - new Date(time); // Difference from the real-time
    const formattedTime = new Date(time);
    return `${formattedTime.toLocaleDateString()} ${formattedTime.toLocaleTimeString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-4 md:p-6">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
              <FiTruck className="text-blue-600" />
              Truck Schedule Dashboard
            </h1>
            <p className="text-gray-600">Track and manage your fleet vehicles</p>
          </div>
        </div>
        
        <CancelButton />

        {/* Filters Card */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-6 border border-gray-100 backdrop-blur-sm bg-opacity-90">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">From Date</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiCalendar className="text-gray-400" />
                </div>
                <input
                  type="date"
                  value={fromDate}
                  onChange={e => setFromDate(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">To Date</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiCalendar className="text-gray-400" />
                </div>
                <input
                  type="date"
                  value={toDate}
                  onChange={e => setToDate(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Truck Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search truck..."
                  value={truckSearch}
                  onChange={e => setTruckSearch(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => fetchData(status, truckSearch)}
                className="w-full md:w-auto bg-blue-600 text-white rounded-lg px-6 py-2 flex items-center gap-2 justify-center"
              >
                <FiSearch /> Search
              </button>
            </div>
          </div>

          <div className="mt-4">
            <div>
              <button
                onClick={selectAll}
                className="bg-blue-600 text-white rounded-lg px-4 py-2"
              >
                Select All Plants
              </button>
              <button
                onClick={deselectAll}
                className="bg-red-600 text-white rounded-lg px-4 py-2 ml-4"
              >
                Deselect All Plants
              </button>
            </div>
          </div>
        </div>

        {/* Truck Data Table */}
        <div className="overflow-hidden bg-white shadow-md rounded-lg border border-gray-100">
          {loading ? (
            <div className="p-6 text-center">Loading...</div>
          ) : error ? (
            <div className="p-6 text-center text-red-600">{error}</div>
          ) : (
            <table className="min-w-full bg-white border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left">Truck Number</th>
                  <th className="px-6 py-4 text-left">Check-In</th>
                  <th className="px-6 py-4 text-left">Check-Out</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.truckNo} className="border-b">
                    <td className="px-6 py-4 text-sm text-gray-700">{item.truckNo}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{formatRealTime(item.checkInTime)}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{formatRealTime(item.checkOutTime)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

