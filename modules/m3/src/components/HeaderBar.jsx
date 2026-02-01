
// export default function HeaderBar({ patient, onSave, onDiscard }) {
  
//   // Clinical Status Color Logic
//   const getStatusConfig = (status) => {
//     switch (status) {
//       case 'Inpatient':
//         return "bg-blue-50 text-blue-700 border-blue-200 ring-blue-500/20";
//       case 'Active':
//         return "bg-emerald-50 text-emerald-700 border-emerald-200 ring-emerald-500/20";
//       case 'Outpatient':
//         return "bg-indigo-50 text-indigo-700 border-indigo-200 ring-indigo-500/20";
//       case 'Discharged':
//         return "bg-slate-100 text-slate-600 border-slate-300 ring-slate-500/10";
//       case 'Inactive':
//         return "bg-slate-50 text-slate-400 border-slate-200 opacity-75 ring-transparent";
//       default:
//         return "bg-amber-50 text-amber-700 border-amber-200 ring-amber-500/20";
//     }
//   };

//   return (
//     <div className="bg-white border-b border-slate-200 px-6 py-5 flex flex-wrap items-center justify-between gap-6 sticky top-0 z-50 shadow-sm">
      
//       {/* PATIENT IDENTITY SECTION */}
//       <div className="flex items-center gap-5">
//         <div className="h-14 w-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-xl font-black shadow-lg shadow-slate-200">
//           {patient.name.charAt(0)}
//         </div>
        
//         <div className="space-y-1">
//           <div className="flex items-center gap-3">
//             <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
//               {patient.name}
//             </h1>
//             <span className="px-2 py-0.5 bg-slate-100 text-slate-500 font-mono text-[10px] font-bold rounded border border-slate-200 uppercase tracking-tighter">
//               ID: {patient.id}
//             </span>
//           </div>
          
//           <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">
//             <div className="flex items-center gap-1.5">
//               <span className="text-gray-950">DOB:</span>
//               <span className="text-slate-700">{patient.dob}</span>
//             </div>
//             <span className="text-slate-200">|</span>
//             <div className="flex items-center gap-1.5">
//               <span className="text-gray-950">GENDER:</span>
//               <span className="text-slate-700">{patient.sex}</span>
//             </div>
//             <span className="text-slate-200">|</span>
//             <div className="flex items-center gap-1.5">
//               <span className="text-gray-950">BLOOD:</span>
//               <span className="text-rose-600 font-black">{patient.bloodGroup}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* STATUS & ACTIONS */}
//       <div className="flex items-center gap-6">
//         {/* Dynamic Status Badge */}
//         <div className="flex flex-col items-end gap-1">
//           <span className="text-[9px] font-black text-gray-950 uppercase tracking-[0.2em] pr-1">Clinical Status</span>
//           <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ring-4 ${getStatusConfig(patient.status)}`}>
//             {patient.status}
//           </div>
//         </div>

//         <div className="h-10 w-[1px] bg-slate-200 mx-2 hidden md:block"></div>

//         {/* Action Buttons */}
//         <div className="flex items-center gap-3">
//           <button 
//             className="px-5 py-2.5 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all active:scale-95"
//             onClick={onDiscard}
//           >
//             Discard
//           </button>
          
//           <button 
//             className="px-6 py-2.5 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-blue-700 shadow-md shadow-blue-100 transition-all active:scale-95 flex items-center gap-2"
//             onClick={onSave}
//           >
//             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//             </svg>
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";

// export default function HeaderBar({ patient, onSave, onDiscard }) {
//   const [status, setStatus] = useState(patient.status || "");
  
//   // Clinical Status Color Logic
//   const getStatusConfig = (status) => {
//     switch (status) {
//       case "Inpatient":
//         return "bg-blue-50 text-blue-700 border-blue-200 ring-blue-500/20";
//       case "Active":
//         return "bg-emerald-50 text-emerald-700 border-emerald-200 ring-emerald-500/20";
//       case "Outpatient":
//         return "bg-indigo-50 text-indigo-700 border-indigo-200 ring-indigo-500/20";
//       case "Discharged":
//         return "bg-slate-100 text-slate-600 border-slate-300 ring-slate-500/10";
//       case "Inactive":
//         return "bg-slate-50 text-slate-400 border-slate-200 opacity-75 ring-transparent";
//       default:
//         return "bg-amber-50 text-amber-700 border-amber-200 ring-amber-500/20";
//     }
//   };

//   // Method to send status update to backend
//   const updateStatus = async () => {
//     try {
//       const response = await fetch(`/api/patients/${patient.id}/status`, {
//         method: "PATCH", // or "PUT"
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ status }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update status");
//       }

//       const data = await response.json();
//       console.log("Status updated:", data);
//       alert(`Status updated to: ${status}`);
//     } catch (error) {
//       console.error(error);
//       alert("Error updating status");
//     }
//   };

//   return (
//     <div className="bg-white border-b border-slate-200 px-6 py-5 flex flex-wrap items-center justify-between gap-6 sticky top-0 z-50 shadow-sm">
//       {/* PATIENT IDENTITY SECTION */}
//       <div className="flex items-center gap-5">
//         <div className="h-14 w-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-xl font-black shadow-lg shadow-slate-200">
//           {patient.name.charAt(0)}
//         </div>

//         <div className="space-y-1">
//           <div className="flex items-center gap-3">
//             <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
//               {patient.name}
//             </h1>
//             <span className="px-2 py-0.5 bg-slate-100 text-slate-500 font-mono text-[10px] font-bold rounded border border-slate-200 uppercase tracking-tighter">
//               ID: {patient.id}
//             </span>
//           </div>

//           <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">
//             <div className="flex items-center gap-1.5">
//               <span className="text-gray-950">DOB:</span>
//               <span className="text-slate-700">{patient.dob}</span>
//             </div>
//             <span className="text-slate-200">|</span>
//             <div className="flex items-center gap-1.5">
//               <span className="text-gray-950">GENDER:</span>
//               <span className="text-slate-700">{patient.sex}</span>
//             </div>
//             <span className="text-slate-200">|</span>
//             <div className="flex items-center gap-1.5">
//               <span className="text-gray-950">BLOOD:</span>
//               <span className="text-rose-600 font-black">{patient.bloodGroup}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* STATUS & ACTIONS */}
//       <div className="flex items-center gap-6">
//         {/* Status Selector */}
//         <div className="flex flex-col items-end gap-1">
//           <span className="text-[9px] font-black text-gray-950 uppercase tracking-[0.2em] pr-1">
//             Clinical Status
//           </span>
//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//             className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ring-4 cursor-pointer ${getStatusConfig(
//               status
//             )}`}
//           >
//             <option value="">Select Status</option>
//             <option value="Inpatient">Inpatient</option>
//             <option value="Outpatient">Outpatient</option>
//             <option value="Active">Active</option>
//             <option value="Discharged">Discharged</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//           <button
//             onClick={updateStatus}
//             className="mt-2 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold rounded hover:bg-blue-700 transition"
//           >
//             Update Status
//           </button>
//         </div>

//         <div className="h-10 w-[1px] bg-slate-200 mx-2 hidden md:block"></div>

//         {/* Action Buttons */}
//         <div className="flex items-center gap-3">
//           <button
//             className="px-5 py-2.5 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all active:scale-95"
//             onClick={onDiscard}
//           >
//             Discard
//           </button>

//           <button
//             className="px-6 py-2.5 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-blue-700 shadow-md shadow-blue-100 transition-all active:scale-95 flex items-center gap-2"
//             onClick={onSave}
//           >
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={3}
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//             </svg>
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React, { useState } from "react";

// export default function HeaderBar({ patient, onSave, onDiscard, pushAudit }) {
//   const [status, setStatus] = useState(patient.status || "");

//   // Clinical Status Color Logic
//   const getStatusConfig = (status) => {
//     switch (status) {
//       case "Inpatient":
//         return "bg-blue-50 text-blue-700 border-blue-200 ring-blue-500/20";
//       case "Active":
//         return "bg-emerald-50 text-emerald-700 border-emerald-200 ring-emerald-500/20";
//       case "Outpatient":
//         return "bg-indigo-50 text-indigo-700 border-indigo-200 ring-indigo-500/20";
//       case "Discharged":
//         return "bg-slate-100 text-slate-600 border-slate-300 ring-slate-500/10";
//       case "Inactive":
//         return "bg-slate-50 text-slate-400 border-slate-200 opacity-75 ring-transparent";
//       default:
//         return "bg-amber-50 text-amber-700 border-amber-200 ring-amber-500/20";
//     }
//   };

//   // Method to send status update to backend + audit
//   const updateStatus = async () => {
//     pushAudit({
//         user: "Dr. Patel",
//         action: "Update",
//         target: "Patient Status",
//         details: `Changed status of ${patient.name} to ${status}`,
//       });
//     try {
//       const response = await fetch(`/api/patients/${patient.id}/status`, {
//         method: "PATCH", // or "PUT"
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ status }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update status");
//       }

//       const data = await response.json();
//       console.log("Status updated:", data);

//       // Push audit entry
//       pushAudit({
//         user: "Dr. Patel",
//         action: "Update",
//         target: "Patient Status",
//         details: `Changed status of ${patient.name} to ${status}`,
//       });

//       alert(`Status updated to: ${status}`);
//     } catch (error) {
//       console.error(error);
//       alert("Error updating status");
//     }
//   };

//   return (
//     <div className="bg-white border-b border-slate-200 px-6 py-5 flex flex-wrap items-center justify-between gap-6 sticky top-0 z-50 shadow-sm">
//       {/* PATIENT IDENTITY SECTION */}
//       <div className="flex items-center gap-5">
//         <div className="h-14 w-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-xl font-black shadow-lg shadow-slate-200">
//           {patient.name.charAt(0)}
//         </div>

//         <div className="space-y-1">
//           <div className="flex items-center gap-3">
//             <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
//               {patient.name}
//             </h1>
//             <span className="px-2 py-0.5 bg-slate-100 text-slate-500 font-mono text-[10px] font-bold rounded border border-slate-200 uppercase tracking-tighter">
//               ID: {patient.id}
//             </span>
//           </div>

//           <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">
//             <div className="flex items-center gap-1.5">
//               <span className="text-gray-950">DOB:</span>
//               <span className="text-slate-700">{patient.dob}</span>
//             </div>
//             <span className="text-slate-200">|</span>
//             <div className="flex items-center gap-1.5">
//               <span className="text-gray-950">GENDER:</span>
//               <span className="text-slate-700">{patient.sex}</span>
//             </div>
//             <span className="text-slate-200">|</span>
//             <div className="flex items-center gap-1.5">
//               <span className="text-gray-950">BLOOD:</span>
//               <span className="text-rose-600 font-black">{patient.bloodGroup}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* STATUS & ACTIONS */}
//       <div className="flex items-center gap-6">
//         {/* Status Selector */}
//         <div className="flex flex-col items-end gap-1">
//           <span className="text-[9px] font-black text-gray-950 uppercase tracking-[0.2em] pr-1">
//             Clinical Status
//           </span>
//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//             className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ring-4 cursor-pointer ${getStatusConfig(
//               status
//             )}`}
//           >
//             <option value="">Select Status</option>
//             <option value="Inpatient">Inpatient</option>
//             <option value="Outpatient">Outpatient</option>
//             <option value="Active">Active</option>
//             <option value="Discharged">Discharged</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//           <button
//             onClick={updateStatus}
//             className="mt-2 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold rounded hover:bg-blue-700 transition"
//           >
//             Update Status
//           </button>
//         </div>

//         <div className="h-10 w-[1px] bg-slate-200 mx-2 hidden md:block"></div>

//         {/* Action Buttons */}
//         <div className="flex items-center gap-3">
//           <button
//             className="px-5 py-2.5 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all active:scale-95"
//             onClick={onDiscard}
//           >
//             Discard
//           </button>

//           <button
//             className="px-6 py-2.5 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-blue-700 shadow-md shadow-blue-100 transition-all active:scale-95 flex items-center gap-2"
//             onClick={onSave}
//           >
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={3}
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//             </svg>
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";

// export default function HeaderBar({ patient, onSave, onDiscard, pushAudit }) {
//   const [status, setStatus] = useState(patient.status || "");
//   const [progress, setProgress] = useState(patient.progress || "In-progress");

//   // Clinical Status Color Logic
//   const getStatusConfig = (status) => {
//     switch (status) {
//       case "Inpatient": return "bg-blue-50 text-blue-700 border-blue-200 ring-blue-500/20";
//       case "Active": return "bg-emerald-50 text-emerald-700 border-emerald-200 ring-emerald-500/20";
//       case "Outpatient": return "bg-indigo-50 text-indigo-700 border-indigo-200 ring-indigo-500/20";
//       case "Discharged": return "bg-slate-100 text-slate-600 border-slate-300 ring-slate-500/10";
//       case "Inactive": return "bg-slate-50 text-slate-400 border-slate-200 opacity-75 ring-transparent";
//       default: return "bg-amber-50 text-amber-700 border-amber-200 ring-amber-500/20";
//     }
//   };

//   // Progress Color Logic
//   const getProgressConfig = (val) => {
//     return val === "Recovered" 
//       ? "bg-emerald-600 text-white border-emerald-700 ring-emerald-500/20" 
//       : "bg-amber-400 text-amber-950 border-amber-500 ring-amber-500/20";
//   };

//   const updateStatus = async () => {
//     pushAudit({
//       user: "Dr. Patel",
//       action: "Update",
//       target: "Status/Progress",
//       details: `Changed: ${status} | ${progress}`,
//     });
//     // Add your existing fetch logic here...
//     alert(`Updated: ${status} - ${progress}`);
//   };

//   return (
//     <div className="bg-white border-b border-slate-200 px-6 py-5 flex flex-wrap items-center justify-between gap-6 sticky top-0 z-50 shadow-sm">
      
//       {/* PATIENT IDENTITY SECTION */}
//       <div className="flex items-center gap-5">
//         <div className="h-14 w-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-xl font-black shadow-lg shadow-slate-200">
//           {patient.name.charAt(0)}
//         </div>

//         <div className="space-y-1">
//           <div className="flex items-center gap-3">
//             <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
//               {patient.name}
//             </h1>
//             <span className="px-2 py-0.5 bg-slate-100 text-slate-500 font-mono text-[10px] font-bold rounded border border-slate-200 uppercase tracking-tighter">
//               ID: {patient.id}
//             </span>
//           </div>

//           <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">
//             <div className="flex items-center gap-1.5"><span className="text-gray-950">DOB:</span>{patient.dob}</div>
//             <span className="text-slate-200">|</span>
//             <div className="flex items-center gap-1.5"><span className="text-gray-950">GENDER:</span>{patient.sex}</div>
//             <span className="text-slate-200">|</span>
//             <div className="flex items-center gap-1.5"><span className="text-gray-950">BLOOD:</span><span className="text-rose-600 font-black">{patient.bloodGroup}</span></div>
//           </div>
//         </div>
//       </div>

//       {/* STATUS & ACTIONS */}
//       <div className="flex items-center gap-6">
        
//         {/* Admission Status */}
//         <div className="flex flex-col items-end gap-1">
//           <span className="text-[9px] font-black text-gray-950 uppercase tracking-[0.2em] pr-1">Clinical Admission</span>
//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//             className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ring-4 cursor-pointer transition-all ${getStatusConfig(status)}`}
//           >
//             <option value="">Select Status</option>
//             <option value="Inpatient">Inpatient</option>
//             <option value="Outpatient">Outpatient</option>
//             <option value="Active">Active</option>
//             <option value="Discharged">Discharged</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//         </div>

//         {/* Progress Status (NEW) */}
//         <div className="flex flex-col items-end gap-1">
//           <span className="text-[9px] font-black text-gray-950 uppercase tracking-[0.2em] pr-1">Progress Status</span>
//           <select
//             value={progress}
//             onChange={(e) => setProgress(e.target.value)}
//             className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ring-4 cursor-pointer transition-all ${getProgressConfig(progress)}`}
//           >
//             <option value="In-progress">In-progress</option>
//             <option value="Recovered">Recovered</option>
//           </select>
//         </div>

//         <button
//           onClick={updateStatus}
//           className="bg-slate-900 text-white p-2 rounded-xl hover:bg-slate-800 transition shadow-md self-end mb-0.5"
//           title="Update all statuses"
//         >
//           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
//              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//           </svg>
//         </button>

//         <div className="h-10 w-[1px] bg-slate-200 mx-2 hidden md:block"></div>

//         {/* Action Buttons */}
//         <div className="flex items-center gap-3">
//           <button className="px-5 py-2.5 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all" onClick={onDiscard}>Discard</button>
//           <button className="px-6 py-2.5 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-blue-700 shadow-md flex items-center gap-2" onClick={onSave}>
//             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";

// export default function HeaderBar({ patient, onSave, onDiscard, pushAudit }) {
//   // Syncing local state with patient data provided by parent
//   const [status, setStatus] = useState(patient.status || "");
//   const [progress, setProgress] = useState(patient.progress || "In-progress");

//   // Clinical Status Color Logic
//   const getStatusConfig = (status) => {
//     switch (status) {
//       case "Inpatient": return "bg-blue-50 text-blue-700 border-blue-200 ring-blue-500/20";
//       case "Active": return "bg-emerald-50 text-emerald-700 border-emerald-200 ring-emerald-500/20";
//       case "Outpatient": return "bg-indigo-50 text-indigo-700 border-indigo-200 ring-indigo-500/20";
//       case "Discharged": return "bg-slate-100 text-slate-600 border-slate-300 ring-slate-500/10";
//       case "Inactive": return "bg-slate-50 text-slate-400 border-slate-200 opacity-75 ring-transparent";
//       default: return "bg-slate-100 text-slate-600 border-slate-200 ring-slate-500/10";
//     }
//   };

//   // Progress Color Logic
//   const getProgressConfig = (val) => {
//     return val === "Recovered" 
//       ? "bg-emerald-600 text-white border-emerald-700 ring-emerald-500/20" 
//       : "bg-blue-600 text-white border-blue-700 ring-blue-500/20"; 
//   };

//   return (
//     <div className="bg-white border-b border-slate-200 px-6 py-5 flex flex-wrap items-center justify-between gap-6 sticky top-0 z-50 shadow-sm">
      
//       {/* PATIENT IDENTITY SECTION */}
//       <div className="flex items-center gap-5">
//         <div className="h-14 w-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-xl font-black shadow-lg shadow-slate-200">
//           {(patient.name || patient.fullName || "P").charAt(0)}
//         </div>

//         <div className="space-y-1">
//           <div className="flex items-center gap-3">
//             <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
//               {patient.name || patient.fullName}
//             </h1>
//             <span className="px-2 py-0.5 bg-slate-100 text-slate-500 font-mono text-[10px] font-bold rounded border border-slate-200 uppercase tracking-tighter">
//               ID: {patient.id || patient.patientId}
//             </span>
//           </div>

//           <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">
//             {/* UPDATED KEYS: patient.dob -> patient.dateOfBirth */}
//             <div className="flex items-center gap-1.5">
//               <span className="text-gray-950">DOB:</span>
//               {patient.dateOfBirth || patient.dob}
//             </div>
//             <span className="text-slate-200">|</span>
            
//             {/* UPDATED KEYS: patient.sex -> patient.gender */}
//             <div className="flex items-center gap-1.5">
//               <span className="text-gray-950">GENDER:</span>
//               {patient.gender || patient.sex}
//             </div>
//             <span className="text-slate-200">|</span>
            
//             {/* UPDATED KEYS: patient.bloodGroup -> patient.bloodType */}
//             <div className="flex items-center gap-1.5">
//               <span className="text-gray-950">BLOOD:</span>
//               <span className="text-rose-600 font-black">
//                 {patient.bloodType || patient.bloodGroup}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* STATUS & ACTIONS */}
//       <div className="flex items-center gap-6">
//         {/* Admission Status */}
//         <div className="flex flex-col items-end gap-1">
//           <span className="text-[9px] font-black text-gray-950 uppercase tracking-[0.2em] pr-1">Clinical Admission</span>
//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//             className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ring-4 cursor-pointer transition-all ${getStatusConfig(status)}`}
//           >
//             <option value="">Select Status</option>
//             <option value="Inpatient">Inpatient</option>
//             <option value="Outpatient">Outpatient</option>
//             <option value="Active">Active</option>
//             <option value="Discharged">Discharged</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//         </div>

//         {/* Progress Status */}
//         <div className="flex flex-col items-end gap-1">
//           <span className="text-[9px] font-black text-gray-950 uppercase tracking-[0.2em] pr-1">Progress Status</span>
//           <select
//             value={progress}
//             onChange={(e) => setProgress(e.target.value)}
//             className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ring-4 cursor-pointer transition-all ${getProgressConfig(progress)}`}
//           >
//             <option value="In-progress">In-progress</option>
//             <option value="Recovered">Recovered</option>
//           </select>
//         </div>

//         <div className="h-10 w-[1px] bg-slate-200 mx-2 hidden md:block"></div>

//         {/* Action Buttons */}
//         <div className="flex items-center gap-3">
//           <button 
//             className="px-5 py-2.5 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all" 
//             onClick={onDiscard}
//           >
//             Discard
//           </button>
          
//           <button 
//             className="px-6 py-2.5 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-100 flex items-center gap-2 transition-all active:scale-95" 
//             onClick={() => onSave({ status, progress })}
//           >
//             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//             </svg>
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function HeaderBar({ patient }) {
  // Syncing local state with patient data provided by parent
  const [status, setStatus] = useState(patient.status || "");
  const [progress, setProgress] = useState(patient.progress || "In-progress");

  // Clinical Status Color Logic
  const getStatusConfig = (status) => {
    switch (status) {
      case "Inpatient": return "bg-blue-50 text-blue-700 border-blue-200 ring-blue-500/20";
      case "Active": return "bg-emerald-50 text-emerald-700 border-emerald-200 ring-emerald-500/20";
      case "Outpatient": return "bg-indigo-50 text-indigo-700 border-indigo-200 ring-indigo-500/20";
      case "Discharged": return "bg-slate-100 text-slate-600 border-slate-300 ring-slate-500/10";
      case "Inactive": return "bg-slate-50 text-slate-400 border-slate-200 opacity-75 ring-transparent";
      default: return "bg-slate-100 text-slate-600 border-slate-200 ring-slate-500/10";
    }
  };

  // Progress Color Logic
  const getProgressConfig = (val) => {
    return val === "Recovered" 
      ? "bg-emerald-600 text-white border-emerald-700 ring-emerald-500/20" 
      : "bg-blue-600 text-white border-blue-700 ring-blue-500/20"; 
  };

  return (
    <div className="bg-white border-b border-slate-200 px-6 py-5 flex flex-wrap items-center justify-between gap-6 sticky top-0 z-50 shadow-sm">
      
      {/* PATIENT IDENTITY SECTION */}
      <div className="flex items-center gap-5">
        <div className="h-14 w-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-xl font-black shadow-lg shadow-slate-200">
          {(patient.name || patient.fullName || "P").charAt(0)}
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
              {patient.name || patient.fullName}
            </h1>
            <span className="px-2 py-0.5 bg-slate-100 text-slate-500 font-mono text-[10px] font-bold rounded border border-slate-200 uppercase tracking-tighter">
              ID: {patient.id || patient.patientId}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="text-gray-950">DOB:</span>
              {patient.dateOfBirth || patient.dob}
            </div>
            <span className="text-slate-200">|</span>
            
            <div className="flex items-center gap-1.5">
              <span className="text-gray-950">GENDER:</span>
              {patient.gender || patient.sex}
            </div>
            <span className="text-slate-200">|</span>
            
            <div className="flex items-center gap-1.5">
              <span className="text-gray-950">BLOOD:</span>
              <span className="text-rose-600 font-black">
                {patient.bloodType || patient.bloodGroup}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* STATUS SECTION ONLY */}
      <div className="flex items-center gap-6">
        {/* Admission Status */}
        <div className="flex flex-col items-end gap-1">
          <span className="text-[9px] font-black text-gray-950 uppercase tracking-[0.2em] pr-1">Clinical Admission</span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ring-4 cursor-pointer transition-all ${getStatusConfig(status)}`}
          >
            <option value="">Select Status</option>
            <option value="Inpatient">Inpatient</option>
            <option value="Outpatient">Outpatient</option>
            <option value="Active">Active</option>
            <option value="Discharged">Discharged</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Progress Status */}
        <div className="flex flex-col items-end gap-1">
          <span className="text-[9px] font-black text-gray-950 uppercase tracking-[0.2em] pr-1">Progress Status</span>
          <select
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
            className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ring-4 cursor-pointer transition-all ${getProgressConfig(progress)}`}
          >
            <option value="In-progress">In-progress</option>
            <option value="Recovered">Recovered</option>
          </select>
        </div>
      </div>
    </div>
  );
}