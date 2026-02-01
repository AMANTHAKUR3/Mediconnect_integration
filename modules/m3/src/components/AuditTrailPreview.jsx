
// export default function AuditTrailPreview({ items }) {
//   const recent = items.slice(0, 5)

//   // Minimalist action styling for preview mode
//   const getActionColor = (action) => {
//     const act = action.toLowerCase();
//     if (act.includes('delete') || act.includes('revoke')) return "text-rose-600";
//     if (act.includes('update') || act.includes('edit')) return "text-amber-600";
//     return "text-blue-600";
//   };

//   return (
//     <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col h-full">
//       {/* COMPACT HEADER */}
//       <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
//         <div className="flex items-center gap-2">
//           <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div>
//           <h3 className="font-black text-slate-800 text-sm tracking-tight uppercase">
//             Recent Activity Log
//           </h3>
//         </div>
//         <span className="text-[10px] font-bold text-slate-400 bg-white border border-slate-200 px-2 py-0.5 rounded-full shadow-sm">
//           Live Feed
//         </span>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-white">
//               <th className="px-5 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">User</th>
//               <th className="px-5 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Action</th>
//               <th className="px-5 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Time</th>
//               <th className="px-5 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Log Entry</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-slate-50">
//             {recent.map((row) => (
//               <tr key={row.id} className="hover:bg-slate-50 transition-colors">
//                 <td className="px-5 py-3">
//                   <span className="text-xs font-bold text-slate-700">{row.user}</span>
//                 </td>
//                 <td className="px-5 py-3">
//                   <span className={`text-[11px] font-black uppercase tracking-tighter ${getActionColor(row.action)}`}>
//                     {row.action}
//                   </span>
//                 </td>
//                 <td className="px-5 py-3">
//                   <div className="text-[10px] font-bold text-slate-500 whitespace-nowrap">
//                     {new Date(row.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                   </div>
//                 </td>
//                 <td className="px-5 py-3">
//                   <p className="text-xs text-slate-500 truncate max-w-[150px] italic">
//                     {row.details || 'System event'}
//                   </p>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* VIEW ALL CTA */}
//       <div className="mt-auto border-t border-slate-100 bg-slate-50/30 p-3 text-center">
//         {/* <button className="text-[11px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-widest transition-all">
//           View Full Security Audit →
//         </button> */}
//       </div>
//     </div>
//   )
// }

// import React, { useState } from 'react';

// export default function AuditTrailPreview({ items }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   // Dashboard view is strictly limited to 5 rows
//   const recent = items.slice(0, 5);
//   const hasMore = items.length > 5;

//   const getActionColor = (action) => {
//     const act = action.toLowerCase();
//     if (act.includes('delete') || act.includes('revoke')) return "text-rose-600";
//     if (act.includes('update') || act.includes('edit')) return "text-amber-600";
//     return "text-blue-600";
//   };

//   // Reusable Table Row Sub-component
//   const LogRow = ({ row }) => (
//     <tr className="hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0">
//       <td className="px-5 py-3">
//         <span className="text-xs font-bold text-slate-700">{row.user}</span>
//       </td>
//       <td className="px-5 py-3">
//         <span className={`text-[11px] font-black uppercase tracking-tighter ${getActionColor(row.action)}`}>
//           {row.action}
//         </span>
//       </td>
//       <td className="px-5 py-3">
//         <div className="text-[10px] font-bold text-slate-500 whitespace-nowrap">
//           {new Date(row.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//         </div>
//       </td>
//       <td className="px-5 py-3">
//         <p className="text-xs text-slate-500 truncate max-w-[180px] italic">
//           {row.details || 'System event'}
//         </p>
//       </td>
//     </tr>
//   );

//   return (
//     <>
//       <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col h-full max-w-4xl mx-auto w-full">
//         {/* COMPACT HEADER */}
//         <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 shrink-0">
//           <div className="flex items-center gap-2">
//             <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div>
//             <h3 className="font-black text-slate-800 text-sm tracking-tight uppercase">
//               Recent Activity Log
//             </h3>
//           </div>
//           <span className="text-[10px] font-bold text-slate-400 bg-white border border-slate-200 px-2 py-0.5 rounded-full shadow-sm">
//             Live Feed
//           </span>
//         </div>

//         {/* PREVIEW TABLE */}
//         <div className="overflow-hidden">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-white">
//                 <th className="px-5 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">User</th>
//                 <th className="px-5 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Action</th>
//                 <th className="px-5 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Time</th>
//                 <th className="px-5 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Log Entry</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-50">
//               {recent.map((row) => <LogRow key={row.id} row={row} />)}
//             </tbody>
//           </table>
//         </div>

//         {/* VIEW ALL CTA - Only visible if more than 5 items */}
//         {hasMore && (
//           <div className="mt-auto border-t border-slate-100 bg-slate-50/30 p-3 text-center shrink-0">
//             <button 
//               onClick={() => setIsModalOpen(true)}
//               className="text-[11px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-widest transition-all"
//             >
//               View Full Security Audit ({items.length}) →
//             </button>
//           </div>
//         )}
//       </div>

//       {/* FULL LOG MODAL */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
//           <div className="bg-white w-full max-w-4xl max-h-[80vh] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-white/20">
//             {/* MODAL HEADER */}
//             <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center shrink-0">
//               <div>
//                 <h2 className="text-xl font-black text-slate-900 tracking-tight">System Security Audit</h2>
//                 <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Full Trace History</p>
//               </div>
//               <button 
//                 onClick={() => setIsModalOpen(false)}
//                 className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all font-bold"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* MODAL BODY - Scrollable list of ALL items */}
//             <div className="overflow-y-auto flex-1 bg-white">
//               <table className="w-full text-left">
//                 <thead className="sticky top-0 bg-slate-50 z-10">
//                   <tr>
//                     <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">User</th>
//                     <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Action</th>
//                     <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Time</th>
//                     <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Log Entry</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-slate-100">
//                   {items.map((row) => (
//                     <LogRow key={row.id} row={row} />
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* MODAL FOOTER */}
//             <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center shrink-0">
//               <span className="text-[10px] font-black text-slate-400 uppercase">HIPAA Compliant Log</span>
//               <button 
//                  className="text-[10px] font-black text-slate-500 hover:text-slate-800 uppercase underline underline-offset-4 transition-all"
//                  onClick={() => window.print()}
//               >
//                 Download PDF
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// import React, { useState } from 'react';

// export default function AuditTrailPreview({ items }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   const recent = items.slice(0, 5);
//   const hasMore = items.length > 5;

//   const getActionColor = (action) => {
//     const act = action.toLowerCase();
//     if (act.includes('delete') || act.includes('revoke')) return "text-rose-600";
//     if (act.includes('update') || act.includes('edit')) return "text-amber-600";
//     return "text-blue-600";
//   };

//   const LogRow = ({ row }) => (
//     <tr className="hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0">
//       <td className="px-8 py-3"> {/* Increased padding for edge-to-edge feel */}
//         <span className="text-xs font-bold text-slate-700">{row.user}</span>
//       </td>
//       <td className="px-8 py-3">
//         <span className={`text-[11px] font-black uppercase tracking-tighter ${getActionColor(row.action)}`}>
//           {row.action}
//         </span>
//       </td>
//       <td className="px-8 py-3 text-center">
//         <div className="text-[10px] font-bold text-slate-500 whitespace-nowrap">
//           {new Date(row.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//         </div>
//       </td>
//       <td className="px-8 py-3 text-right">
//         <p className="text-xs text-slate-500 italic truncate max-w-md ml-auto">
//           {row.details || 'System event'}
//         </p>
//       </td>
//     </tr>
//   );

//   return (
//     <>
//       {/* Removed max-w-4xl and mx-auto to make it touch left/right */}
//       <div className="bg-white border-y md:border-x border-slate-200 md:rounded-2xl shadow-sm overflow-hidden flex flex-col h-full w-full">
        
//         {/* COMPACT HEADER */}
//         <div className="px-8 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 shrink-0">
//           <div className="flex items-center gap-2">
//             <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div>
//             <h3 className="font-black text-slate-800 text-sm tracking-tight uppercase">
//               Recent Activity Log
//             </h3>
//           </div>
//           <span className="text-[10px] font-bold text-slate-400 bg-white border border-slate-200 px-2 py-0.5 rounded-full shadow-sm">
//             Live Feed
//           </span>
//         </div>

//         {/* FULL WIDTH TABLE */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-white">
//                 <th className="px-8 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">User</th>
//                 <th className="px-8 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Action</th>
//                 <th className="px-8 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-center">Time</th>
//                 <th className="px-8 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Log Entry</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-50">
//               {recent.map((row) => <LogRow key={row.id} row={row} />)}
//             </tbody>
//           </table>
//         </div>

//         {/* FULL WIDTH CTA */}
//         {hasMore && (
//           <div className="mt-auto border-t border-slate-100 bg-slate-50/30 p-3 text-center shrink-0">
//             <button 
//               onClick={() => setIsModalOpen(true)}
//               className="text-[11px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-widest transition-all w-full"
//             >
//               View Full Security Audit ({items.length}) →
//             </button>
//           </div>
//         )}
//       </div>

//       {/* MODAL remains centered for usability */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md">
//           <div className="bg-white w-full max-w-6xl max-h-[85vh] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-white/20">
//             <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center shrink-0">
//               <h2 className="text-xl font-black text-slate-900 tracking-tight">Security Audit</h2>
//               <button onClick={() => setIsModalOpen(false)} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all font-bold">✕</button>
//             </div>
//             <div className="overflow-y-auto flex-1 bg-white">
//               <table className="w-full text-left">
//                 <tbody className="divide-y divide-slate-100">
//                   {items.map((row) => <LogRow key={row.id} row={row} />)}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// // }
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function AuditTrailPreview({ patientId }) {
//   const [items, setItems] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // Integration with your GET endpoint
//   useEffect(() => {
//     const fetchAuditLogs = async () => {
//       if (!patientId) return;
//       try {
//         setLoading(true);
//         // Using your specific port and endpoint
//         const response = await axios.get(`http://localhost:8083/api/ehr/patient-ehr?patientId=${patientId}`);
        
//         // This maps to your PatientEhrDataDto.getAuditHistory()
//         setItems(response.data.auditHistory || []);
//       } catch (error) {
//         console.error("Failed to fetch audit logs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAuditLogs();
//   }, [patientId]);

//   const recent = items.slice(0, 5);
//   const hasMore = items.length > 5;

//   const getActionColor = (action) => {
//     const act = (action || "").toLowerCase();
//     if (act.includes('delete') || act.includes('revoke')) return "text-rose-600";
//     if (act.includes('update') || act.includes('edit')) return "text-amber-600";
//     return "text-blue-600";
//   };

//   const LogRow = ({ row, idx }) => (
//     <tr key={idx} className="hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0">
//       <td className="px-8 py-3">
//         <span className="text-xs font-bold text-slate-700">{row.user}</span>
//       </td>
//       <td className="px-8 py-3">
//         <span className={`text-[11px] font-black uppercase tracking-tighter ${getActionColor(row.action)}`}>
//           {row.action}
//         </span>
//       </td>
//       <td className="px-8 py-3 text-center">
//         <div className="text-[10px] font-bold text-slate-500 whitespace-nowrap">
//           {/* row.time maps to LocalDateTime in your ActivityLogDto */}
//           {row.time ? new Date(row.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--'}
//         </div>
//       </td>
//       <td className="px-8 py-3 text-right">
//         <p className="text-xs text-slate-500 italic truncate max-w-md ml-auto">
//           {/* row.logEntry maps to String logEntry in your ActivityLogDto */}
//           {row.logEntry || 'System event'}
//         </p>
//       </td>
//     </tr>
//   );

//   return (
//     <div className="card shadow-sm border border-slate-200 rounded-2xl overflow-hidden bg-white">
//       <div className="px-8 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
//         <div className="flex items-center gap-2">
//           <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div>
//           <h3 className="font-black text-slate-800 text-sm tracking-tight uppercase">Activity Log</h3>
//         </div>
//         {loading && <div className="animate-spin h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full"></div>}
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full text-left">
//           <thead>
//             <tr className="bg-white">
//               <th className="px-8 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b">User</th>
//               <th className="px-8 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b">Action</th>
//               <th className="px-8 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b text-center">Time</th>
//               <th className="px-8 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b text-right">Entry</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-slate-50">
//             {recent.map((row, idx) => <LogRow key={idx} row={row} idx={idx} />)}
//             {!loading && items.length === 0 && (
//               <tr><td colSpan="4" className="text-center py-8 text-xs text-slate-400 italic">No activity recorded</td></tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {hasMore && (
//         <div className="border-t border-slate-100 p-3 text-center">
//           <button onClick={() => setIsModalOpen(true)} className="text-[11px] font-black text-blue-600 uppercase tracking-widest">
//             View Full Audit ({items.length}) →
//           </button>
//         </div>
//       )}

//       {/* Full Audit Modal (Simple Implementation) */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
//           <div className="bg-white w-full max-w-4xl max-h-[80vh] rounded-2xl flex flex-col overflow-hidden">
//             <div className="p-6 border-b flex justify-between items-center">
//               <h2 className="font-black text-slate-900">Security Audit History</h2>
//               <button onClick={() => setIsModalOpen(false)} className="text-slate-400">✕</button>
//             </div>
//             <div className="overflow-y-auto">
//               <table className="w-full">
//                 <tbody className="divide-y">
//                   {items.map((row, idx) => <LogRow key={idx} row={row} idx={idx} />)}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function AuditTrailPreview({ patientId }) {
//   const [items, setItems] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchAuditLogs = async () => {
//       // Ensure we have a valid ID before calling the API
//       if (!patientId) return;
      
//       try {
//         setLoading(true);
//         // GET request to your specific backend endpoint
//         const response = await axios.get(`http://localhost:8083/api/ehr/patient-ehr`, {
//           params: { patientId: patientId }
//         });
        
//         // Extract auditHistory from the PatientEhrDataDto response
//         setItems(response.data.auditHistory || []);
//       } catch (error) {
//         console.error("Failed to fetch audit logs from port 8083:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAuditLogs();
//   }, []);

//   const recent = items.slice(0, 5);
//   const hasMore = items.length > 5;

//   // Visual helper for action types
//   const getActionColor = (action) => {
//     const act = (action || "").toLowerCase();
//     if (act.includes('delete') || act.includes('revoke')) return "text-rose-600";
//     if (act.includes('update') || act.includes('edit')) return "text-amber-600";
//     return "text-blue-600";
//   };

//   const LogRow = ({ row, idx }) => (
//     <tr key={idx} className="hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0">
//       <td className="px-8 py-3 font-bold text-slate-700 text-xs">{row.user}</td>
//       <td className="px-8 py-3">
//         <span className={`text-[11px] font-black uppercase tracking-tighter ${getActionColor(row.action)}`}>
//           {row.action}
//         </span>
//       </td>
//       <td className="px-8 py-3 text-center text-[10px] font-bold text-slate-500">
//         {row.time ? new Date(row.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--'}
//       </td>
//       <td className="px-8 py-3 text-right text-xs text-slate-500 italic truncate max-w-md ml-auto">
//         {row.logEntry || 'System event'}
//       </td>
//     </tr>
//   );

//   return (
//     <div className="bg-white border-y md:border-x border-slate-200 md:rounded-2xl shadow-sm overflow-hidden flex flex-col h-full w-full">
//       <div className="px-8 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
//         <div className="flex items-center gap-2">
//           <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div>
//           <h3 className="font-black text-slate-800 text-sm tracking-tight uppercase">Recent Activity Log</h3>
//         </div>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-white">
//               <th className="px-8 py-3 text-[10px] font-black text-slate-400 uppercase border-b">User</th>
//               <th className="px-8 py-3 text-[10px] font-black text-slate-400 uppercase border-b">Action</th>
//               <th className="px-8 py-3 text-[10px] font-black text-slate-400 uppercase border-b text-center">Time</th>
//               <th className="px-8 py-3 text-[10px] font-black text-slate-400 uppercase border-b text-right">Log Entry</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-slate-50">
//             {recent.map((row, idx) => <LogRow key={idx} row={row} />)}
//             {!loading && items.length === 0 && (
//               <tr><td colSpan="4" className="text-center py-10 text-slate-400 italic text-xs">No activity records found.</td></tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {hasMore && (
//         <div className="mt-auto border-t border-slate-100 bg-slate-50/30 p-3 text-center">
//           <button onClick={() => setIsModalOpen(true)} className="text-[11px] font-black text-blue-600 uppercase tracking-widest">
//             View Full Security Audit ({items.length}) →
//           </button>
//         </div>
//       )}

//       {/* Modal logic remains for the "View Full Audit" feature */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md">
//           <div className="bg-white w-full max-w-6xl max-h-[85vh] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border">
//             <div className="px-8 py-6 border-b flex justify-between items-center shrink-0">
//               <h2 className="text-xl font-black text-slate-900">Security Audit</h2>
//               <button onClick={() => setIsModalOpen(false)} className="text-slate-400 font-bold">✕</button>
//             </div>
//             <div className="overflow-y-auto flex-1 p-4">
//               <table className="w-full text-left">
//                 <tbody>{items.map((row, idx) => <LogRow key={idx} row={row} />)}</tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AuditTrailPreview({ patientId, refreshKey }) {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAuditLogs = async () => {
      if (!patientId) return;
      
      try {
        setLoading(true);
        // GET request to fetch live audit history
        const response = await axios.get(`http://localhost:8083/api/ehr/patient-ehr`, {
          params: { patientId: patientId }
        });
        
        setItems(response.data.auditHistory || []);
      } catch (error) {
        console.error("Failed to fetch audit logs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuditLogs();
    
    // DEPENDENCIES: 
    // [] makes it run on page load.
    // [refreshKey] makes it run whenever a new result is added.
  }, [patientId, refreshKey]); 

  const recent = items.slice(0, 5);
  const hasMore = items.length > 5;

  const getActionColor = (action) => {
    const act = (action || "").toLowerCase();
    if (act.includes('delete')) return "text-rose-600";
    if (act.includes('update') || act.includes('add')) return "text-amber-600";
    return "text-blue-600";
  };

  const LogRow = ({ row, idx }) => (
    <tr key={idx} className="hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0">
      <td className="px-8 py-3 font-bold text-slate-700 text-xs">{row.user}</td>
      <td className="px-8 py-3">
        <span className={`text-[11px] font-black uppercase tracking-tighter ${getActionColor(row.action)}`}>
          {row.action}
        </span>
      </td>
      <td className="px-8 py-3 text-center text-[10px] font-bold text-slate-500">
        {row.time ? new Date(row.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--'}
      </td>
      <td className="px-8 py-3 text-right text-xs text-slate-500 italic">
        {row.logEntry || 'System event'}
      </td>
    </tr>
  );

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col w-full mt-4">
      <div className="px-8 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-4 bg-slate-800 rounded-full"></div>
          <h3 className="font-black text-slate-800 text-sm uppercase">Activity Audit</h3>
        </div>
        {loading && <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <tbody className="divide-y divide-slate-50">
            {recent.map((row, idx) => <LogRow key={idx} row={row} />)}
            {!loading && items.length === 0 && (
              <tr><td colSpan="4" className="text-center py-10 text-slate-400 italic text-xs">No records found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {hasMore && (
        <button 
          onClick={() => setIsModalOpen(true)}
          className="p-3 text-[11px] font-black text-blue-600 uppercase border-t border-slate-100 hover:bg-slate-50"
        >
          View Full Audit ({items.length}) →
        </button>
      )}

      {/* Full Audit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md">
          <div className="bg-white w-full max-w-4xl max-h-[80vh] rounded-3xl overflow-hidden flex flex-col">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="font-black">Full Security Audit</h2>
              <button onClick={() => setIsModalOpen(false)}>✕</button>
            </div>
            <div className="overflow-y-auto flex-1">
              <table className="w-full text-left">
                <tbody>{items.map((row, idx) => <LogRow key={idx} row={row} />)}</tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}