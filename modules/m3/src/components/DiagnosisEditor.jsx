

// import { useState } from 'react'

// export default function DiagnosisEditor({ activeItems, onAdd, onResolve }){
//   const [form, setForm] = useState({ name:'', code:'', severity:'', onset:'', notes:'' })

//   function submit(){
//     if(!form.name) return;
//     onAdd({ 
//       id: 'd'+Math.random().toString(36).slice(2), 
//       name: form.name, 
//       code: form.code || '—', 
//       severity: form.severity || '—', 
//       onset: form.onset || '—', 
//       notes: form.notes || '', 
//       date: form.onset || new Date().toISOString().slice(0,10), 
//       clinician: 'Dr. Patel', 
//       facility: 'City Hospital', 
//       type: 'Chronic' 
//     })
//     setForm({ name:'', code:'', severity:'', onset:'', notes:'' })
//   }

//   return (
//     <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
//       {/* CRISP HEADER */}
//       <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
//         <h3 className="font-bold text-slate-900">Diagnosis Management</h3>
//         <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">Record Entry</span>
//       </div>

//       <div className="p-6 space-y-6">
//         {/* INPUT GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
//           <div className="space-y-1.5">
//             <label className="text-xs font-bold text-slate-900">Diagnosis Name</label>
//             <input 
//               className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none transition-colors" 
//               placeholder="Search ICD-10..." 
//               value={form.name} 
//               onChange={e=>setForm(f=>({...f, name:e.target.value}))} 
//             />
//           </div>
          
//           <div className="space-y-1.5">
//             <label className="text-xs font-bold text-slate-900">ICD Code</label>
//             <input 
//               className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm font-mono focus:border-blue-500 outline-none transition-colors" 
//               value={form.code} 
//               onChange={e=>setForm(f=>({...f, code:e.target.value}))} 
//             />
//           </div>

//           <div className="space-y-1.5">
//             <label className="text-xs font-bold text-slate-900">Severity</label>
//             <select 
//               className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none bg-white"
//               value={form.severity} 
//               onChange={e=>setForm(f=>({...f, severity:e.target.value}))}
//             >
//               <option value="">Select Level</option>
//               <option>Mild</option>
//               <option>Moderate</option>
//               <option>Severe</option>
//             </select>
//           </div>

//           <div className="space-y-1.5">
//             <label className="text-xs font-bold text-slate-900">Onset Date</label>
//             <input 
//               type="date" 
//               className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500" 
//               value={form.onset} 
//               onChange={e=>setForm(f=>({...f, onset:e.target.value}))} 
//             />
//           </div>
//         </div>

//         {/* FULL WIDTH NOTES */}
//         <div className="space-y-1.5">
//           <label className="text-xs font-bold text-slate-900">Notes</label>
//           <textarea 
//             className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors" 
//             rows="2" 
//             value={form.notes} 
//             onChange={e=>setForm(f=>({...f, notes:e.target.value}))}
//           ></textarea>
//         </div>

//         {/* ACTION BUTTON */}
//         <div className="flex justify-end pt-2">
//           <button 
//             className="bg-blue-600 text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
//             onClick={submit}
//           >
//             Add Diagnosis
//           </button>
//         </div>

//         {/* ACTIVE LIST */}
//         <div className="pt-6 border-t border-slate-100">
//           <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Current Active</h4>
//           <div className="flex flex-wrap gap-2">
//             {activeItems.map(d => (
//               <div key={d.id} className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
//                 <span className="text-xs font-bold text-slate-700">{d.name}</span>
//                 <button 
//                   className="text-[10px] text-rose-600 font-bold hover:underline" 
//                   onClick={()=>onResolve(d)}
//                 >
//                   Resolve
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// import { useState } from 'react'

// // Sample ICD-10 Database
// const ICD_10_LIBRARY = [
//   { name: 'Essential (primary) hypertension', code: 'I10' },
//   { name: 'Type 2 diabetes mellitus without complications', code: 'E11.9' },
//   { name: 'Acute appendicitis with localized peritonitis', code: 'K35.3' },
//   { name: 'Low back pain, unspecified', code: 'M54.5' },
//   { name: 'Atherosclerotic heart disease', code: 'I25.1' },
// ];

// export default function DiagnosisEditor({ activeItems, onAdd, onResolve }){
//   const [form, setForm] = useState({ name:'', code:'', severity:'', onset:'', notes:'' })
//   const [showSuggestions, setShowSuggestions] = useState(false)

//   // Filter suggestions based on what the user types
//   const filteredSuggestions = ICD_10_LIBRARY.filter(item => 
//     item.name.toLowerCase().includes(form.name.toLowerCase()) || 
//     item.code.toLowerCase().includes(form.name.toLowerCase())
//   ).slice(0, 5); // Limit to top 5 results

//   function selectSuggestion(item) {
//     setForm(f => ({ ...f, name: item.name, code: item.code }));
//     setShowSuggestions(false);
//   }

//   function submit(){
//     if(!form.name) return;
//     onAdd({ 
//       id: 'd'+Math.random().toString(36).slice(2), 
//       name: form.name, 
//       code: form.code || '—', 
//       severity: form.severity || '—', 
//       onset: form.onset || '—', 
//       notes: form.notes || '', 
//       date: form.onset || new Date().toISOString().slice(0,10), 
//       clinician: 'Dr. Patel', 
//       facility: 'City Hospital', 
//       type: 'Chronic' 
//     })
//     setForm({ name:'', code:'', severity:'', onset:'', notes:'' })
//   }

//   return (
//     <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
//       <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
//         <h3 className="font-bold text-slate-900">Diagnosis Management</h3>
//         <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">Record Entry</span>
//       </div>

//       <div className="p-6 space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          
//           {/* DIAGNOSIS NAME WITH SEARCH SUGGESTIONS */}
//           <div className="space-y-1.5 relative">
//             <label className="text-xs font-bold text-slate-900">Diagnosis Name</label>
//             <input 
//               className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none transition-colors" 
//               placeholder="Start typing (e.g. Diabetes)..." 
//               value={form.name} 
//               onFocus={() => setShowSuggestions(true)}
//               onChange={e => {
//                 setForm(f => ({ ...f, name: e.target.value }));
//                 setShowSuggestions(true);
//               }} 
//             />
            
//             {/* SUGGESTION DROPDOWN */}
//             {showSuggestions && form.name.length > 1 && filteredSuggestions.length > 0 && (
//               <div className="absolute z-50 w-full bg-white border border-slate-200 rounded-lg shadow-xl mt-1 overflow-hidden">
//                 {filteredSuggestions.map((item, index) => (
//                   <button
//                     key={index}
//                     className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 flex justify-between items-center transition-colors"
//                     onClick={() => selectSuggestion(item)}
//                   >
//                     <span className="font-medium text-slate-700">{item.name}</span>
//                     <span className="text-[10px] font-mono font-black text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">{item.code}</span>
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
          
//           <div className="space-y-1.5">
//             <label className="text-xs font-bold text-slate-900">ICD Code (Auto-filled)</label>
//             <input 
//               className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm font-mono bg-slate-50 text-slate-500 outline-none" 
//               value={form.code} 
//               readOnly 
//               placeholder="E11.9"
//             />
//           </div>

//           <div className="space-y-1.5">
//             <label className="text-xs font-bold text-slate-900">Severity</label>
//             <select 
//               className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none bg-white"
//               value={form.severity} 
//               onChange={e=>setForm(f=>({...f, severity:e.target.value}))}
//             >
//               <option value="">Select Level</option>
//               <option>Mild</option>
//               <option>Moderate</option>
//               <option>Severe</option>
//             </select>
//           </div>
// {/* 
//           <div className="space-y-1.5">
//             <label className="text-xs font-bold text-slate-900">Onset Date</label>
//             <input 
//               type="date" 
//               className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500" 
//               value={form.onset} 
//               onChange={e=>setForm(f=>({...f, onset:e.target.value}))} 
//             />
//           </div> */}
//         </div>

//         <div className="space-y-1.5">
//           <label className="text-xs font-bold text-slate-900">Notes</label>
//           <textarea 
//             className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors" 
//             rows="2" 
//             value={form.notes} 
//             onChange={e=>setForm(f=>({...f, notes:e.target.value}))}
//           ></textarea>
//         </div>

//         <div className="flex justify-end pt-2">
//           <button 
//             className="bg-blue-600 text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
//             onClick={submit}
//           >
//             Add Diagnosis
//           </button>
//         </div>

//         <div className="pt-6 border-t border-slate-100">
//           <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Current Active Problems</h4>
//           <div className="flex flex-wrap gap-2">
//             {activeItems.map(d => (
//               <div key={d.id} className="flex items-center gap-3 bg-white border border-slate-200 pl-3 pr-2 py-1.5 rounded-lg shadow-sm">
//                 <div className="flex flex-col">
//                     <span className="text-xs font-black text-slate-900">{d.name}</span>
//                     <span className="text-[9px] font-mono font-bold text-blue-500">{d.code}</span>
//                 </div>
//                 <button 
//                   className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-rose-50 text-slate-300 hover:text-rose-600 transition-colors" 
//                   onClick={()=>onResolve(d)}
//                 >
//                   ✕
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////

// import { useState } from 'react'

// const ICD_10_LIBRARY = [
//   { name: 'Essential (primary) hypertension', code: 'I10' },
//   { name: 'Type 2 diabetes mellitus without complications', code: 'E11.9' },
//   { name: 'Acute appendicitis with localized peritonitis', code: 'K35.3' },
//   { name: 'Low back pain, unspecified', code: 'M54.5' },
//   { name: 'Atherosclerotic heart disease', code: 'I25.1' },
// ];

// export default function DiagnosisEditor({ activeItems, onAdd, onResolve }){
//   const [form, setForm] = useState({ name:'', code:'', severity:'', onset:'', notes:'' })
//   const [showSuggestions, setShowSuggestions] = useState(false)

//   const filteredSuggestions = ICD_10_LIBRARY.filter(item => 
//     item.name.toLowerCase().includes(form.name.toLowerCase()) || 
//     item.code.toLowerCase().includes(form.name.toLowerCase())
//   ).slice(0, 5);

//   function selectSuggestion(item) {
//     setForm(f => ({ ...f, name: item.name, code: item.code }));
//     setShowSuggestions(false);
//   }

//   function submit(){
//     if(!form.name) return;
//     onAdd({ 
//       id: 'd'+Math.random().toString(36).slice(2), 
//       name: form.name, 
//       code: form.code || '—', 
//       severity: form.severity || '—', 
//       onset: form.onset || '—', 
//       notes: form.notes || '', 
//       date: new Date().toISOString().slice(0,10), 
//       clinician: 'Dr. Patel', 
//       facility: 'City Hospital', 
//       type: 'Chronic' 
//     })
//     setForm({ name:'', code:'', severity:'', onset:'', notes:'' })
//   }

//   const inputStyle = "w-full border-2 border-slate-300 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-700 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:font-normal placeholder:text-slate-400 shadow-sm";

//   return (
//     <div className="bg-white border-2 border-slate-200 rounded-[2rem] overflow-hidden shadow-xl">
//       <div className="px-8 py-5 border-b-2 border-slate-100 flex justify-between items-center bg-slate-50/50">
//         <div>
//            <h3 className="font-black text-slate-900 text-lg tracking-tight">Diagnosis Management</h3>
//            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">Clinical Protocol Entry</p>
//         </div>
//         <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest bg-blue-100 border-2 border-blue-200 px-3 py-1 rounded-full">Record Entry</span>
//       </div>

//       <div className="p-8 space-y-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
//           <div className="space-y-2 relative">
//             <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Diagnosis Name</label>
//             <input 
//               className={inputStyle}
//               placeholder="Start typing (e.g. Diabetes)..." 
//               value={form.name} 
//               onFocus={() => setShowSuggestions(true)}
//               onChange={e => {
//                 setForm(f => ({ ...f, name: e.target.value }));
//                 setShowSuggestions(true);
//               }} 
//             />
            
//             {showSuggestions && form.name.length > 1 && filteredSuggestions.length > 0 && (
//               <div className="absolute z-50 w-full bg-white border-2 border-slate-200 rounded-2xl shadow-2xl mt-2 overflow-hidden animate-in slide-in-from-top-2">
//                 {filteredSuggestions.map((item, index) => (
//                   <button
//                     key={index}
//                     className="w-full text-left px-5 py-3 text-sm hover:bg-slate-50 flex justify-between items-center transition-colors border-b border-slate-50 last:border-none"
//                     onClick={() => selectSuggestion(item)}
//                   >
//                     <span className="font-bold text-slate-800">{item.name}</span>
//                     <span className="text-[10px] font-mono font-black text-blue-600 bg-blue-50 border border-blue-100 px-2 py-1 rounded-md">{item.code}</span>
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
          
//           <div className="space-y-2">
//             <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">ICD Code</label>
//             <input 
//               className={`${inputStyle} bg-slate-50 border-dashed text-slate-400 cursor-not-allowed`}
//               value={form.code} 
//               readOnly 
//               placeholder="E11.9"
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Severity Level</label>
//             <select 
//               className={`${inputStyle} appearance-none cursor-pointer`}
//               value={form.severity} 
//               onChange={e=>setForm(f=>({...f, severity:e.target.value}))}
//             >
//               <option value="">Select Level</option>
//               <option>Mild</option>
//               <option>Moderate</option>
//               <option>Severe</option>
//             </select>
//           </div>

//           <div className="space-y-2">
//             <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Notes</label>
//             <input 
//               className={inputStyle}
//               placeholder="Additional clinical context..."
//               value={form.notes} 
//               onChange={e=>setForm(f=>({...f, notes:e.target.value}))}
//             />
//           </div>
//         </div>

//         <div className="flex justify-end">
//           <button 
//             className="bg-slate-900 text-white text-xs font-black px-8 py-3.5 rounded-xl hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-slate-200 uppercase tracking-widest"
//             onClick={submit}
//           >
//             Add Diagnosis
//           </button>
//         </div>

//         <div className="pt-8 border-t-2 border-slate-100">
//           <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-5">Current Active Problems</h4>
          
//           {/* UPDATED: flex-wrap and gap to handle the grid layout */}
//           <div className="flex flex-wrap gap-4">
//             {activeItems.map(d => (
//               /* UPDATED: Added fixed width (w-[280px]) and min-height (min-h-[100px]) for uniform boxes */
//               <div 
//                 key={d.id} 
//                 className="flex items-start justify-between bg-white border-2 border-slate-200 p-4 rounded-2xl shadow-md hover:border-blue-400 transition-colors group w-[280px] min-h-[110px]"
//               >
//                 <div className="flex flex-col space-y-1">
//                   <span className="text-[10px] font-black text-slate-900 uppercase tracking-tight leading-tight line-clamp-2">
//                     {d.name}
//                   </span>
//                   <span className="text-[10px] font-mono font-black text-blue-500 uppercase">
//                     {d.code}
//                   </span>
//                   <span className="text-[10px] font-mono font-black text-blue-400 uppercase italic line-clamp-2">
//                     {d.notes || '—'}
//                   </span>
//                 </div>
                
//                 <button 
//                   className="cursor-pointer w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full bg-slate-50 group-hover:bg-rose-50 text-slate-300 group-hover:text-rose-600 transition-all font-bold ml-2" 
//                   onClick={() => onResolve(d)}
//                 >
//                   ✕
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// // }
// import { useState } from 'react'

// const ICD_10_LIBRARY = [
//   { name: 'Hypertension', code: 'I10' },
//   { name: 'Type 2 Diabetes', code: 'E11.9' },
//   { name: 'Acute Appendicitis', code: 'K35.3' },
//   { name: 'Lower Back Pain', code: 'M54.5' },
//   { name: 'Heart Disease', code: 'I25.1' },
//   { name: 'Acute Bronchitis', code: 'J20.9' },
//   { name: 'Hypothyroidism', code: 'E03.9' },
//   { name: 'Hyperlipidemia', code: 'E78.5' },
//   { name: 'Osteoarthritis', code: 'M19.9' },
//   { name: 'Asthma (Mild)', code: 'J45.20' },
// ];

// export default function DiagnosisEditor({ activeItems, onAdd, onResolve }){
//   const [form, setForm] = useState({ name:'', code:'', severity:'', onset:'', notes:'' })
//   const [showSuggestions, setShowSuggestions] = useState(false)

//   const filteredSuggestions = ICD_10_LIBRARY.filter(item => 
//     item.name.toLowerCase().includes(form.name.toLowerCase()) || 
//     item.code.toLowerCase().includes(form.name.toLowerCase())
//   ).slice(0, 5);

//   function selectSuggestion(item) {
//     setForm(f => ({ ...f, name: item.name, code: item.code }));
//     setShowSuggestions(false);
//   }

//   function submit(){
//     if(!form.name) return;
//     onAdd({ 
//       id: 'd'+Math.random().toString(36).slice(2), 
//       name: form.name, 
//       code: form.code || '—', 
//       severity: form.severity || '—', 
//       onset: form.onset || '—', 
//       notes: form.notes || '', 
//       date: new Date().toISOString().slice(0,10), 
//       clinician: 'Dr. Patel', 
//       facility: 'City Hospital', 
//       type: 'Chronic' 
//     })
//     setForm({ name:'', code:'', severity:'', onset:'', notes:'' })
//   }

//   const inputStyle = "w-full border-2 border-slate-300 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-700 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:font-normal placeholder:text-slate-400 shadow-sm";

//   return (
//     <div className="bg-white border-2 border-slate-200 rounded-[2rem] overflow-hidden shadow-xl">
//       <div className="px-8 py-5 border-b-2 border-slate-100 flex justify-between items-center bg-slate-50/50">
//         <div>
//            <h3 className="font-black text-slate-900 text-lg tracking-tight">Diagnosis Management</h3>
//            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">Clinical Protocol Entry</p>
//         </div>
//         <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest bg-blue-100 border-2 border-blue-200 px-3 py-1 rounded-full">Record Entry</span>
//       </div>

//       <div className="p-8 space-y-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
//           <div className="space-y-2 relative">
//             <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Diagnosis Name</label>
//             <input 
//               className={inputStyle}
//               placeholder="Search Diagnosis..." 
//               value={form.name} 
//               onFocus={() => setShowSuggestions(true)}
//               onChange={e => {
//                 setForm(f => ({ ...f, name: e.target.value }));
//                 setShowSuggestions(true);
//               }} 
//             />
            
//             {showSuggestions && form.name.length > 1 && filteredSuggestions.length > 0 && (
//               <div className="absolute z-50 w-full bg-white border-2 border-slate-200 rounded-2xl shadow-2xl mt-2 overflow-hidden">
//                 {filteredSuggestions.map((item, index) => (
//                   <button
//                     key={index}
//                     className="w-full text-left px-5 py-3 text-sm hover:bg-slate-50 flex justify-between items-center transition-colors border-b border-slate-50 last:border-none"
//                     onClick={() => selectSuggestion(item)}
//                   >
//                     <span className="font-bold text-slate-800">{item.name}</span>
//                     <span className="text-[10px] font-mono font-black text-blue-600 bg-blue-50 border border-blue-100 px-2 py-1 rounded-md">{item.code}</span>
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
          
//           <div className="space-y-2">
//             <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">ICD Code</label>
//             <input 
//               className={`${inputStyle} bg-slate-50 border-dashed text-slate-400 cursor-not-allowed`}
//               value={form.code} 
//               readOnly 
//               placeholder="Code"
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Severity</label>
//             <select 
//               className={`${inputStyle} appearance-none cursor-pointer`}
//               value={form.severity} 
//               onChange={e=>setForm(f=>({...f, severity:e.target.value}))}
//             >
//               <option value="">Select Level</option>
//               <option>Mild</option>
//               <option>Moderate</option>
//               <option>Severe</option>
//             </select>
//           </div>

//           <div className="space-y-2">
//             <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Clinical Notes</label>
//             <input 
//               className={inputStyle}
//               placeholder="Notes..."
//               value={form.notes} 
//               onChange={e=>setForm(f=>({...f, notes:e.target.value}))}
//             />
//           </div>
//         </div>

//         <div className="flex justify-end">
//           <button 
//             className="bg-slate-900 text-white text-xs font-black px-8 py-3.5 rounded-xl hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-slate-200 uppercase tracking-widest"
//             onClick={submit}
//           >
//             Add Diagnosis
//           </button>
//         </div>

//         <div className="pt-8 border-t-2 border-slate-100">
//           <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-5">Current Active Problems</h4>
          
//           <div className="flex flex-wrap gap-4">
//             {activeItems.map(d => (
//               <div 
//                 key={d.id} 
//                 className="flex items-start justify-between bg-white border-2 border-slate-200 p-4 rounded-2xl shadow-md hover:border-blue-400 transition-colors group w-[280px] min-h-[110px]"
//               >
//                 <div className="flex flex-col space-y-1">
//                   <span className="text-[11px] font-black text-slate-900 uppercase tracking-tight leading-tight">
//                     {d.name}
//                   </span>
//                   <span className="text-[10px] font-mono font-black text-blue-500 uppercase">
//                     {d.code}
//                   </span>
//                   <span className="text-[10px] font-mono font-black text-slate-400 uppercase italic line-clamp-2">
//                     {d.notes || 'No Notes'}
//                   </span>
//                 </div>
                
//                 <button 
//                   className="cursor-pointer w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full bg-slate-50 group-hover:bg-rose-50 text-slate-300 group-hover:text-rose-600 transition-all font-bold ml-2" 
//                   onClick={() => onResolve(d)}
//                 >
//                   ✕
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// import { useState } from 'react'

// const ICD_10_LIBRARY = [
//   { name: 'Hypertension', code: 'I10' },
//   { name: 'Type 2 Diabetes', code: 'E11.9' },
//   { name: 'Acute Appendicitis', code: 'K35.3' },
//   { name: 'Lower Back Pain', code: 'M54.5' },
//   { name: 'Heart Disease', code: 'I25.1' },
//   { name: 'Acute Bronchitis', code: 'J20.9' },
//   { name: 'Hypothyroidism', code: 'E03.9' },
//   { name: 'Hyperlipidemia', code: 'E78.5' },
//   { name: 'Osteoarthritis', code: 'M19.9' },
//   { name: 'Asthma (Mild)', code: 'J45.20' },
// ];

// export default function DiagnosisEditor({ onAdd }){
//   const [form, setForm] = useState({ name:'', code:'', severity:'', onset:'', notes:'' })
//   const [showSuggestions, setShowSuggestions] = useState(false)

//   const filteredSuggestions = ICD_10_LIBRARY.filter(item => 
//     item.name.toLowerCase().includes(form.name.toLowerCase()) || 
//     item.code.toLowerCase().includes(form.name.toLowerCase())
//   ).slice(0, 5);

//   function selectSuggestion(item) {
//     setForm(f => ({ ...f, name: item.name, code: item.code }));
//     setShowSuggestions(false);
//   }

//   function submit(){
//     if(!form.name) return;
//     onAdd({ 
//       id: 'd'+Math.random().toString(36).slice(2), 
//       name: form.name, 
//       code: form.code || '—', 
//       severity: form.severity || '—', 
//       onset: form.onset || '—', 
//       notes: form.notes || '', 
//       date: new Date().toISOString().slice(0,10), 
//       clinician: 'Dr. Patel', 
//       facility: 'City Hospital', 
//       type: 'Chronic' 
//     })
//     setForm({ name:'', code:'', severity:'', onset:'', notes:'' })
//   }

//   const inputStyle = "w-full border-2 border-slate-300 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-700 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:font-normal placeholder:text-slate-400 shadow-sm";

//   return (
//     <div className="bg-white border-2 border-slate-200 rounded-[2rem] overflow-hidden shadow-xl">
//       <div className="px-8 py-5 border-b-2 border-slate-100 flex justify-between items-center bg-slate-50/50">
//         <div>
//            <h3 className="font-black text-slate-900 text-lg tracking-tight">Diagnosis Management</h3>
//            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">Clinical Protocol Entry</p>
//         </div>
//         <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest bg-blue-100 border-2 border-blue-200 px-3 py-1 rounded-full">Record Entry</span>
//       </div>

//       <div className="p-8 space-y-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
//           <div className="space-y-2 relative">
//             <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Diagnosis Name</label>
//             <input 
//               className={inputStyle}
//               placeholder="Search Diagnosis..." 
//               value={form.name} 
//               onFocus={() => setShowSuggestions(true)}
//               onChange={e => {
//                 setForm(f => ({ ...f, name: e.target.value }));
//                 setShowSuggestions(true);
//               }} 
//             />
            
//             {showSuggestions && form.name.length > 1 && filteredSuggestions.length > 0 && (
//               <div className="absolute z-50 w-full bg-white border-2 border-slate-200 rounded-2xl shadow-2xl mt-2 overflow-hidden">
//                 {filteredSuggestions.map((item, index) => (
//                   <button
//                     key={index}
//                     className="w-full text-left px-5 py-3 text-sm hover:bg-slate-50 flex justify-between items-center transition-colors border-b border-slate-50 last:border-none"
//                     onClick={() => selectSuggestion(item)}
//                   >
//                     <span className="font-bold text-slate-800">{item.name}</span>
//                     <span className="text-[10px] font-mono font-black text-blue-600 bg-blue-50 border border-blue-100 px-2 py-1 rounded-md">{item.code}</span>
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
          
//           <div className="space-y-2">
//             <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">ICD Code</label>
//             <input 
//               className={`${inputStyle} bg-slate-50 border-dashed text-slate-400 cursor-not-allowed`}
//               value={form.code} 
//               readOnly 
//               placeholder="Code"
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Severity</label>
//             <select 
//               className={`${inputStyle} appearance-none cursor-pointer`}
//               value={form.severity} 
//               onChange={e=>setForm(f=>({...f, severity:e.target.value}))}
//             >
//               <option value="">Select Level</option>
//               <option>Mild</option>
//               <option>Moderate</option>
//               <option>Severe</option>
//             </select>
//           </div>

//           <div className="space-y-2">
//             <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Clinical Notes</label>
//             <input 
//               className={inputStyle}
//               placeholder="Notes..."
//               value={form.notes} 
//               onChange={e=>setForm(f=>({...f, notes:e.target.value}))}
//             />
//           </div>
//         </div>

//         <div className="flex justify-end">
//           <button 
//             className="bg-slate-900 text-white text-xs font-black px-8 py-3.5 rounded-xl hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-slate-200 uppercase tracking-widest"
//             onClick={submit}
//           >
//             Add Diagnosis
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// import { useState } from 'react'
// import axios from 'axios'

// const ICD_10_LIBRARY = [
//   { name: 'Hypertension', code: 'I10' },
//   { name: 'Type 2 Diabetes', code: 'E11.9' },
//   { name: 'Acute Appendicitis', code: 'K35.3' },
//   { name: 'Lower Back Pain', code: 'M54.5' },
//   { name: 'Heart Disease', code: 'I25.1' },
//   { name: 'Acute Bronchitis', code: 'J20.9' },
//   { name: 'Hypothyroidism', code: 'E03.9' },
//   { name: 'Hyperlipidemia', code: 'E78.5' },
//   { name: 'Osteoarthritis', code: 'M19.9' },
//   { name: 'Asthma (Mild)', code: 'J45.20' },
// ];

// export default function DiagnosisEditor({ onAdd, patientId = 1 }) {
//   const [form, setForm] = useState({ name: '', code: '', severity: '', onset: new Date().toISOString().slice(0, 10), notes: '' })
//   const [showSuggestions, setShowSuggestions] = useState(false)
//   const [loading, setLoading] = useState(false)

//   const filteredSuggestions = ICD_10_LIBRARY.filter(item =>
//     item.name.toLowerCase().includes(form.name.toLowerCase()) ||
//     item.code.toLowerCase().includes(form.name.toLowerCase())
//   ).slice(0, 5);

//   function selectSuggestion(item) {
//     setForm(f => ({ ...f, name: item.name, code: item.code }));
//     setShowSuggestions(false);
//   }

//   async function submit() {
//     if (!form.name) {
//       alert("Please select or enter a diagnosis name.");
//       return;
//     }

//     setLoading(true);

//     const payload = {
//       recordId: null,
//       patientId: patientId,
//       doctorId: 1,
//       recordType: "DIAGNOSIS",
//       data: {
//         diagnosisName: form.name,
//         icdCode: form.code || "N/A",
//         severity: form.severity || "Mild",
//         onsetDate: form.onset,
//         notes: form.notes
//       }
//     };

//     try {
//       const response = await axios.post("http://localhost:8083/api/ehr/upsert-record", payload);
      
//       // Notify parent to update local UI state
//       if (onAdd) {
//         onAdd({
//           id: 'd' + Math.random().toString(36).slice(2),
//           name: form.name,
//           code: form.code || '—',
//           severity: form.severity || '—',
//           onset: form.onset,
//           notes: form.notes,
//           date: new Date().toISOString().slice(0, 10),
//           clinician: 'Dr. Patel',
//           facility: 'City Hospital',
//           type: 'Chronic'
//         });
//       }

//       // Reset Form
//       setForm({ name: '', code: '', severity: '', onset: new Date().toISOString().slice(0, 10), notes: '' });
//       alert("Diagnosis recorded successfully.");
      
//     } catch (error) {
//       console.error("Diagnosis submission failed:", error);
//       alert("Server Error: Could not save diagnosis.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   const inputStyle = "w-full border-2 border-slate-300 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-700 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:font-normal placeholder:text-slate-400 shadow-sm";

//   return (
//     <div className="bg-white border-2 border-slate-200 rounded-[2rem] overflow-hidden shadow-xl">
//       <div className="px-8 py-5 border-b-2 border-slate-100 flex justify-between items-center bg-slate-50/50">
//         <div>
//           <h3 className="font-black text-slate-900 text-lg tracking-tight">Diagnosis Management</h3>
//           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">Clinical Protocol Entry</p>
//         </div>
//         <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest bg-blue-100 border-2 border-blue-200 px-3 py-1 rounded-full">Record Entry</span>
//       </div>

//       <div className="p-8 space-y-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
//           {/* Diagnosis Name with Suggestions */}
//           <div className="space-y-2 relative">
//             <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Diagnosis Name</label>
//             <input
//               className={inputStyle}
//               placeholder="Search Diagnosis..."
//               value={form.name}
//               onFocus={() => setShowSuggestions(true)}
//               onChange={e => {
//                 setForm(f => ({ ...f, name: e.target.value }));
//                 setShowSuggestions(true);
//               }}
//             />

//             {showSuggestions && form.name.length > 1 && filteredSuggestions.length > 0 && (
//               <div className="absolute z-50 w-full bg-white border-2 border-slate-200 rounded-2xl shadow-2xl mt-2 overflow-hidden">
//                 {filteredSuggestions.map((item, index) => (
//                   <button
//                     key={index}
//                     className="w-full text-left px-5 py-3 text-sm hover:bg-slate-50 flex justify-between items-center transition-colors border-b border-slate-50 last:border-none"
//                     onClick={() => selectSuggestion(item)}
//                   >
//                     <span className="font-bold text-slate-800">{item.name}</span>
//                     <span className="text-[10px] font-mono font-black text-blue-600 bg-blue-50 border border-blue-100 px-2 py-1 rounded-md">{item.code}</span>
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="space-y-2">
//             <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">ICD Code</label>
//             <input
//               className={`${inputStyle} bg-slate-50 border-dashed text-slate-400 cursor-not-allowed`}
//               value={form.code}
//               readOnly
//               placeholder="Code"
//             />
//           </div>

//           <div className="space-y-2">
//             <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Severity</label>
//             <select
//               className={`${inputStyle} appearance-none cursor-pointer`}
//               value={form.severity}
//               onChange={e => setForm(f => ({ ...f, severity: e.target.value }))}
//             >
//               <option value="">Select Level</option>
//               <option>Mild</option>
//               <option>Moderate</option>
//               <option>Severe</option>
//             </select>
//           </div>

//           <div className="space-y-2">
//             <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Onset Date</label>
//             <input 
//               type="date"
//               className={inputStyle}
//               value={form.onset}
//               onChange={e => setForm(f => ({ ...f, onset: e.target.value }))}
//             />
//           </div>

//           <div className="space-y-2 md:col-span-2">
//             <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Clinical Notes</label>
//             <textarea 
//               className={`${inputStyle} h-24 resize-none`}
//               placeholder="Enter patient complaints or observations..."
//               value={form.notes}
//               onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
//             />
//           </div>
//         </div>

//         <div className="flex justify-end">
//           <button
//             disabled={loading}
//             className={`${loading ? 'bg-slate-400' : 'bg-slate-900 hover:bg-blue-600'} text-white text-xs font-black px-8 py-3.5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-slate-200 uppercase tracking-widest`}
//             onClick={submit}
//           >
//             {loading ? 'Submitting...' : 'Add Diagnosis'}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// import { useState } from 'react'
// import axios from 'axios'

// const ICD_10_LIBRARY = [
//   { name: 'Hypertension', code: 'I10' },
//   { name: 'Type 2 Diabetes', code: 'E11.9' },
//   { name: 'Acute Appendicitis', code: 'K35.3' },
//   { name: 'Acute Bronchitis', code: 'J20.9' },
// ];

// export default function DiagnosisEditor({ onAdd, patientId }) {
//   const [form, setForm] = useState({ name: '', code: '', severity: '', onset: new Date().toISOString().slice(0, 10), notes: '' })
//   const [loading, setLoading] = useState(false)
//   const [showSuggestions, setShowSuggestions] = useState(false)

//   async function submit() {
//     if (!form.name) return alert("Select a diagnosis");
//     setLoading(true);

//     const payload = {
//       recordId: null,
//       patientId: patientId, // Now uses the dynamic ID from props
//       doctorId: 1,
//       recordType: "DIAGNOSIS",
//       data: {
//         diagnosisName: form.name,
//         icdCode: form.code || "N/A",
//         severity: form.severity || "Mild",
//         onsetDate: form.onset,
//         notes: form.notes
//       }
//     };

//     try {
//       await axios.post("http://localhost:8083/api/ehr/upsert-record", payload);
//       onAdd({ ...form, id: Date.now() });
//       setForm({ name: '', code: '', severity: '', onset: new Date().toISOString().slice(0, 10), notes: '' });
//       alert("Diagnosis added!");
//     } catch (e) {
//       alert("Error saving to database.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="bg-white border-2 border-slate-200 rounded-[2rem] p-8 shadow-xl">
//        <h3 className="font-black text-lg mb-6 text-slate-900">Add Diagnosis for Patient ID: {patientId}</h3>
//        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <input 
//             className="w-full border-2 p-3 rounded-xl font-bold"
//             placeholder="Diagnosis Name"
//             value={form.name}
//             onChange={e => setForm({...form, name: e.target.value})}
//           />
//           <select 
//             className="w-full border-2 p-3 rounded-xl font-bold"
//             value={form.severity}
//             onChange={e => setForm({...form, severity: e.target.value})}
//           >
//             <option value="">Severity</option>
//             <option>Mild</option>
//             <option>Moderate</option>
//             <option>Severe</option>
//           </select>
//           <textarea 
//             className="col-span-2 border-2 p-3 rounded-xl h-24"
//             placeholder="Clinical Notes"
//             value={form.notes}
//             onChange={e => setForm({...form, notes: e.target.value})}
//           />
//        </div>
//        <div className="mt-6 flex justify-end">
//           <button 
//             onClick={submit}
//             disabled={loading}
//             className="bg-slate-900 text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all"
//           >
//             {loading ? "Submitting..." : "Add Diagnosis"}
//           </button>
//        </div>
//     </div>
//   )
// }

import { useState } from 'react'
import axios from 'axios'

const ICD_10_LIBRARY = [
  { name: 'Hypertension', code: 'I10' },
  { name: 'Type 2 Diabetes', code: 'E11.9' },
  { name: 'Acute Appendicitis', code: 'K35.3' },
  { name: 'Lower Back Pain', code: 'M54.5' },
  { name: 'Heart Disease', code: 'I25.1' },
  { name: 'Acute Bronchitis', code: 'J20.9' },
  { name: 'Hypothyroidism', code: 'E03.9' },
  { name: 'Hyperlipidemia', code: 'E78.5' },
  { name: 'Osteoarthritis', code: 'M19.9' },
  { name: 'Asthma (Mild)', code: 'J45.20' },
];

export default function DiagnosisEditor({ onAdd, patientId }) {
  const [form, setForm] = useState({ name: '', code: '', severity: '', onset: new Date().toISOString().slice(0, 10), notes: '' })
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [loading, setLoading] = useState(false)

  const filteredSuggestions = ICD_10_LIBRARY.filter(item =>
    item.name.toLowerCase().includes(form.name.toLowerCase()) ||
    item.code.toLowerCase().includes(form.name.toLowerCase())
  ).slice(0, 5);

  function selectSuggestion(item) {
    setForm(f => ({ ...f, name: item.name, code: item.code }));
    setShowSuggestions(false);
  }

  async function submit() {
    if (!form.name) {
      alert("Please select or enter a diagnosis name.");
      return;
    }

    setLoading(true);

    const payload = {
      recordId: null,
      patientId: patientId, // DYNAMIC ID FROM URL
      doctorId: 1,
      recordType: "DIAGNOSIS",
      data: {
        diagnosisName: form.name,
        icdCode: form.code || "N/A",
        severity: form.severity || "Mild",
        onsetDate: form.onset,
        notes: form.notes
      }
    };

    try {
      await axios.post("http://localhost:8083/api/ehr/upsert-record", payload);
      
      if (onAdd) {
        onAdd({
          id: 'd' + Math.random().toString(36).slice(2),
          name: form.name,
          code: form.code || '—',
          severity: form.severity || '—',
          onset: form.onset,
          notes: form.notes,
          date: new Date().toISOString().slice(0, 10),
          clinician: 'Dr. Patel',
          facility: 'City Hospital',
          type: 'Chronic'
        });
      }

      setForm({ name: '', code: '', severity: '', onset: new Date().toISOString().slice(0, 10), notes: '' });
      alert("Diagnosis recorded successfully.");
      
    } catch (error) {
      console.error("Diagnosis submission failed:", error);
      alert("Server Error: Could not save diagnosis.");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = "w-full border-2 border-slate-300 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-700 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:font-normal placeholder:text-slate-400 shadow-sm";

  return (
    <div className="bg-white border-2 border-slate-200 rounded-[2rem] overflow-hidden shadow-xl">
      <div className="px-8 py-5 border-b-2 border-slate-100 flex justify-between items-center bg-slate-50/50">
        <div>
          <h3 className="font-black text-slate-900 text-lg tracking-tight">Diagnosis Management</h3>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">Clinical Protocol Entry</p>
        </div>
        <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest bg-blue-100 border-2 border-blue-200 px-3 py-1 rounded-full">Record Entry</span>
      </div>

      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="space-y-2 relative">
            <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Diagnosis Name</label>
            <input
              className={inputStyle}
              placeholder="Search Diagnosis..."
              value={form.name}
              onFocus={() => setShowSuggestions(true)}
              onChange={e => {
                setForm(f => ({ ...f, name: e.target.value }));
                setShowSuggestions(true);
              }}
            />

            {showSuggestions && form.name.length > 1 && filteredSuggestions.length > 0 && (
              <div className="absolute z-50 w-full bg-white border-2 border-slate-200 rounded-2xl shadow-2xl mt-2 overflow-hidden">
                {filteredSuggestions.map((item, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-5 py-3 text-sm hover:bg-slate-50 flex justify-between items-center transition-colors border-b border-slate-50 last:border-none"
                    onClick={() => selectSuggestion(item)}
                  >
                    <span className="font-bold text-slate-800">{item.name}</span>
                    <span className="text-[10px] font-mono font-black text-blue-600 bg-blue-50 border border-blue-100 px-2 py-1 rounded-md">{item.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">ICD Code</label>
            <input
              className={`${inputStyle} bg-slate-50 border-dashed text-slate-400 cursor-not-allowed`}
              value={form.code}
              readOnly
              placeholder="Code"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Severity</label>
            <select
              className={`${inputStyle} appearance-none cursor-pointer`}
              value={form.severity}
              onChange={e => setForm(f => ({ ...f, severity: e.target.value }))}
            >
              <option value="">Select Level</option>
              <option>Mild</option>
              <option>Moderate</option>
              <option>Severe</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Onset Date</label>
            <input 
              type="date"
              className={inputStyle}
              value={form.onset}
              onChange={e => setForm(f => ({ ...f, onset: e.target.value }))}
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">Clinical Notes</label>
            <textarea 
              className={`${inputStyle} h-24 resize-none`}
              placeholder="Enter patient complaints or observations..."
              value={form.notes}
              onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            disabled={loading}
            className={`${loading ? 'bg-slate-400' : 'bg-slate-900 hover:bg-blue-600'} text-white text-xs font-black px-8 py-3.5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-slate-200 uppercase tracking-widest`}
            onClick={submit}
          >
            {loading ? 'Submitting...' : 'Add Diagnosis'}
          </button>
        </div>
      </div>
    </div>
  )
}