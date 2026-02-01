// import { useMemo, useState } from 'react'
// import Modal from './Modal'
// import { LAB_TESTS, getDefaultsFor } from '../data/tests'

// export default function LabResults({ items, onAdd, onFlag, doctors = [] }) {
//   const [open, setOpen] = useState(false)
//   const [filter, setFilter] = useState('All')
  
//   // PDF Viewer State
//   const [viewerOpen, setViewerOpen] = useState(false)
//   const [viewerFileUrl, setViewerFileUrl] = useState(null)

//   // Form state
//   const [form, setForm] = useState({ 
//     name: '', value: '', units: '', refRange: '', date: '', 
//     orderingDoctor: '', lab: 'Central Lab', notes: '' 
//   })

//   // Filtering logic
//   const filteredItems = useMemo(() => {
//     if (filter === 'Flagged') return items.filter(i => i.flagged)
//     if (filter === 'Unflagged') return items.filter(i => !i.flagged)
//     return items
//   }, [items, filter])

//   // --- FILE HANDLING ---
//   function handleFileUpload(e, item) {
//     const file = e.target.files[0]
//     if (!file) return
    
//     // Assign single file to the item object
//     item.file = file
//     alert(`Report attached to ${item.name}`)
//     // Trigger re-render by updating a local state if necessary
//     setFilter(prev => prev) 
//   }

//   function removeFile(item) {
//     if (window.confirm(`Are you sure you want to remove the PDF for ${item.name}?`)) {
//       delete item.file
//       setFilter(prev => prev)
//     }
//   }

//   function openFileViewer(file) {
//     const url = URL.createObjectURL(file)
//     setViewerFileUrl(url)
//     setViewerOpen(true)
//   }

//   function closeFileViewer() {
//     if (viewerFileUrl) URL.revokeObjectURL(viewerFileUrl)
//     setViewerFileUrl(null)
//     setViewerOpen(false)
//   }

//   // --- FORM SUBMISSION ---
//   function submit() {
//     if (!form.name || !form.value || !form.units || !form.date) { 
//         alert('Please fill required fields'); return 
//     }

//     let calculatedStatus = 'Normal';
//     const val = parseFloat(form.value);
//     const rangeNumbers = form.refRange.match(/(\d+(\.\d+)?)/g);
//     const upperLimit = rangeNumbers ? parseFloat(rangeNumbers[rangeNumbers.length - 1]) : null;

//     if (!isNaN(val) && upperLimit !== null) {
//       if (val > upperLimit) {
//         calculatedStatus = 'Dangerous';
//       } else if (val >= upperLimit * 0.95) {
//         calculatedStatus = 'Cautious';
//       }
//     }

//     onAdd({
//       id: 'l' + Math.random().toString(36).slice(2),
//       ...form,
//       orderingDoctor: form.orderingDoctor || '—',
//       lab: form.lab || 'Central Lab',
//       file: null, // Initialized as null
//       flagged: calculatedStatus === 'Dangerous',
//       status: calculatedStatus 
//     })
    
//     setOpen(false)
//     setForm({ name: '', value: '', units: '', refRange: '', date: '', orderingDoctor: '', lab: 'Central Lab', notes: '' })
//   }

//   function onTestChange(name) {
//     const defs = getDefaultsFor(name)
//     setForm(f => ({ ...f, name, units: defs.units, refRange: defs.refRange }))
//   }

//   return (
//     <div className="card shadow-sm border border-slate-200 rounded-2xl overflow-hidden animate-in fade-in duration-500">
//       {/* HEADER SECTION */}
//       <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white">
//         <div>
//           <h3 className="text-lg font-black text-slate-900 tracking-tight">Lab Results</h3>
//           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Diagnostic History & Reports</p>
//         </div>
//         <div className="flex items-center gap-3">
//           <div className="flex bg-slate-100 p-1 rounded-xl">
//             {['All', 'Flagged'].map(t => (
//               <button 
//                 key={t} 
//                 onClick={() => setFilter(t)} 
//                 className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${filter === t ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
//               >
//                 {t}
//               </button>
//             ))}
//           </div>
//           <button className="btn-primary" onClick={() => setOpen(true)}>
//             Add New Result
//           </button>
//         </div>
//       </div>
      
//       {/* TABLE SECTION */}
//       <div className="overflow-x-auto">
//         <table className="table w-full">
//           <thead>
//             <tr>
//               <th className="th px-6 py-4">Test Name</th>
//               <th className="th px-6 py-4">Result</th>
//               <th className="th px-6 py-4 text-center">Reference Range</th>
//               <th className="th px-6 py-4 text-center">Date</th>
//               <th className="th px-6 py-4">Status</th>
//               <th className="th px-6 py-4 text-right">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-slate-50">
//             {filteredItems.map(item => (
//               <tr key={item.id} className={`hover:bg-slate-50/50 transition-colors ${item.status === 'Dangerous' ? 'bg-red-50/30' : ''}`}>
//                 <td className="td px-6 py-5">
//                   <div className="font-black text-slate-900">{item.name}</div>
//                   <div className="text-[10px] font-bold text-blue-600 uppercase tracking-tight">{item.lab}</div>
//                 </td>
//                 <td className="td px-6 py-5">
//                   <div className="flex items-baseline gap-1">
//                     <span className="text-base font-black text-slate-950">{item.value}</span>
//                     <span className="text-[10px] font-bold text-slate-400 uppercase">{item.units}</span>
//                   </div>
//                 </td>
//                 <td className="td px-6 py-5 text-center">
//                   <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs font-mono font-bold">
//                     {item.refRange}
//                   </span>
//                 </td>
//                 <td className="td px-6 py-5 text-center text-xs font-bold text-slate-600 font-mono">
//                   {item.date}
//                 </td>
//                 <td className="td px-6 py-5">
//                   {item.status === 'Dangerous' ? (
//                     <span className="badge-red px-2 py-1 bg-red-600 text-white rounded text-[10px] font-black uppercase animate-pulse">Dangerous</span>
//                   ) : item.status === 'Cautious' ? (
//                     <span className="badge-yellow px-2 py-1 bg-amber-400 text-amber-950 rounded text-[10px] font-black uppercase">Cautious</span>
//                   ) : (
//                     <span className="badge-gray px-2 py-1 bg-slate-100 text-slate-500 rounded text-[10px] font-black uppercase">Normal</span>
//                   )}
//                 </td>
//                 <td className="td px-6 py-5">
//                   <div className="flex justify-end items-center gap-2">
//                     {/* PDF Logic: Upload or View/Remove */}
//                     {!item.file ? (
//                       <label className="p-2 bg-slate-100 text-slate-500 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer" title="Upload PDF">
//                         <input type="file" accept="application/pdf" className="hidden" onChange={(e) => handleFileUpload(e, item)} />
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
//                       </label>
//                     ) : (
//                       <div className="flex items-center gap-1 bg-blue-50 p-1 rounded-xl border border-blue-100">
//                         <button className="px-3 py-1.5 text-[10px] font-black uppercase text-blue-700 hover:bg-white rounded-lg transition-all" onClick={() => openFileViewer(item.file)}>
//                           View PDF
//                         </button>
//                         <button className="p-1.5 text-rose-500 hover:bg-rose-100 rounded-lg transition-colors" onClick={() => removeFile(item)}>
//                           <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"/></svg>
//                         </button>
//                       </div>
//                     )}

//                     <button 
//                       className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${item.flagged ? 'bg-rose-100 text-rose-700 border border-rose-200' : 'bg-slate-100 text-slate-400 hover:text-rose-600'}`} 
//                       onClick={() => onFlag(item)}
//                     >
//                       {item.flagged ? 'Flagged' : 'Flag'}
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* ADD LAB MODAL */}
//       <Modal open={open} onClose={() => setOpen(false)} title="Add Lab Result">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
//           <div className="space-y-1">
//             <label className="label">Test Name*</label>
//             <select className="select" value={form.name} onChange={e => onTestChange(e.target.value)}>
//               <option value="">Select a test</option>
//               {LAB_TESTS.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
//             </select>
//           </div>
//           <div className="space-y-1">
//             <label className="label">Result Value*</label>
//             <input type="number" step="any" className="input" value={form.value} onChange={e => setForm(f => ({ ...f, value: e.target.value }))} placeholder="0.00" />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Units</label>
//             <input className="input bg-slate-50 text-slate-400" value={form.units} readOnly />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Reference Range</label>
//             <input className="input bg-slate-50 text-slate-400" value={form.refRange} readOnly />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Result Date*</label>
//             <input type="date" className="input" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
//           </div>
//           {/* <div className="space-y-1">
//             <label className="label">Ordering Physician</label>
//             <select className="select" value={form.orderingDoctor} onChange={e => setForm(f => ({ ...f, orderingDoctor: e.target.value }))}>
//               <option value="">Select Physician</option>
//               {doctors.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
//             </select>
//           </div> */}
//           {/* <div className="md:col-span-2 space-y-1">
//             <label className="label">Clinical Notes</label>
//             <textarea className="input" rows="2" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} placeholder="Enter any additional observations..."></textarea>
//           </div> */}
//         </div>
//         <div className="mt-8 flex justify-end gap-3 border-t border-slate-100 pt-6">
//           <button className="btn-secondary" onClick={() => setOpen(false)}>Cancel</button>
//           <button className="btn-primary" onClick={submit}>Finalize Result</button>
//         </div>
//       </Modal>

//       {/* PDF VIEWER MODAL */}
//       <Modal open={viewerOpen} onClose={closeFileViewer} title="Laboratory Report">
//         {viewerFileUrl ? (
//           <div className="w-full h-[75vh] animate-in zoom-in-95 duration-300">
//             <iframe 
//               src={viewerFileUrl} 
//               className="w-full h-full border rounded-xl shadow-inner bg-slate-100" 
//               title="Report Content" 
//             />
//           </div>
//         ) : (
//           <div className="p-20 text-center text-slate-400 font-bold uppercase text-xs tracking-widest">Document unavailable.</div>
//         )}
//       </Modal>
//     </div>
//   )
// }
// import { useMemo, useState } from 'react'
// import Modal from './Modal'
// import { LAB_TESTS, getDefaultsFor } from '../data/tests'

// export default function LabResults({ items, onAdd, onFlag, doctors = [] }) {
//   const [open, setOpen] = useState(false)
//   const [filter, setFilter] = useState('All')
  
//   // Form state
//   const [form, setForm] = useState({ 
//     name: '', value: '', units: '', refRange: '', date: '', 
//     orderingDoctor: '', lab: 'Central Lab', notes: '' 
//   })

//   // Filtering logic
//   const filteredItems = useMemo(() => {
//     if (filter === 'Flagged') return items.filter(i => i.flagged)
//     return items
//   }, [items, filter])

//   // --- FORM SUBMISSION ---
//   function submit() {
//     if (!form.name || !form.value || !form.units || !form.date) { 
//         alert('Please fill required fields'); return 
//     }

//     let calculatedStatus = 'Normal';
//     const val = parseFloat(form.value);
//     const rangeNumbers = form.refRange.match(/(\d+(\.\d+)?)/g);
//     const upperLimit = rangeNumbers ? parseFloat(rangeNumbers[rangeNumbers.length - 1]) : null;

//     if (!isNaN(val) && upperLimit !== null) {
//       if (val > upperLimit) {
//         calculatedStatus = 'Dangerous';
//       } else if (val >= upperLimit * 0.95) {
//         calculatedStatus = 'Cautious';
//       }
//     }

//     onAdd({
//       id: 'l' + Math.random().toString(36).slice(2),
//       ...form,
//       orderingDoctor: form.orderingDoctor || '—',
//       lab: form.lab || 'Central Lab',
//       flagged: calculatedStatus === 'Dangerous',
//       status: calculatedStatus 
//     })
    
//     setOpen(false)
//     setForm({ name: '', value: '', units: '', refRange: '', date: '', orderingDoctor: '', lab: 'Central Lab', notes: '' })
//   }

//   function onTestChange(name) {
//     const defs = getDefaultsFor(name)
//     setForm(f => ({ ...f, name, units: defs.units, refRange: defs.refRange }))
//   }

//   return (
//     <div className="card shadow-sm border border-slate-200 rounded-2xl overflow-hidden animate-in fade-in duration-500">
//       {/* HEADER SECTION */}
//       <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white">
//         <div>
//           <h3 className="text-lg font-black text-slate-900 tracking-tight">Lab Results</h3>
//           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Diagnostic History Tracker</p>
//         </div>
//         <div className="flex items-center gap-3">
//           <div className="flex bg-slate-100 p-1 rounded-xl">
//             {['All', 'Flagged'].map(t => (
//               <button 
//                 key={t} 
//                 onClick={() => setFilter(t)} 
//                 className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${filter === t ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
//               >
//                 {t}
//               </button>
//             ))}
//           </div>
//           <button className="btn-primary" onClick={() => setOpen(true)}>
//             Add Result
//           </button>
//         </div>
//       </div>
      
//       {/* TABLE SECTION */}
//       <div className="overflow-x-auto">
//         <table className="table w-full">
//           <thead>
//             <tr>
//               <th className="th px-6 py-4 text-[11px] font-black text-slate-400 uppercase">Test Name</th>
//               <th className="th px-6 py-4 text-[11px] font-black text-slate-400 uppercase">Result</th>
//               <th className="th px-6 py-4 text-center text-[11px] font-black text-slate-400 uppercase">Ref Range</th>
//               <th className="th px-6 py-4 text-center text-[11px] font-black text-slate-400 uppercase">Date</th>
//               <th className="th px-6 py-4 text-[11px] font-black text-slate-400 uppercase">Status</th>
//               <th className="th px-6 py-4 text-right text-[11px] font-black text-slate-400 uppercase">Action</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-slate-50">
//             {filteredItems.map(item => (
//               <tr key={item.id} className={`hover:bg-slate-50/50 transition-colors ${item.status === 'Dangerous' ? 'bg-red-50/30' : ''}`}>
//                 <td className="td px-6 py-5">
//                   <div className="font-black text-slate-900">{item.name}</div>
//                   <div className="text-[10px] font-bold text-blue-600 uppercase tracking-tight">{item.lab}</div>
//                 </td>
//                 <td className="td px-6 py-5">
//                   <div className="flex items-baseline gap-1">
//                     <span className="text-base font-black text-slate-950">{item.value}</span>
//                     <span className="text-[10px] font-bold text-slate-400 uppercase">{item.units}</span>
//                   </div>
//                 </td>
//                 <td className="td px-6 py-5 text-center">
//                   <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs font-mono font-bold">
//                     {item.refRange}
//                   </span>
//                 </td>
//                 <td className="td px-6 py-5 text-center text-xs font-bold text-slate-600 font-mono">
//                   {item.date}
//                 </td>
//                 <td className="td px-6 py-5">
//                   {item.status === 'Dangerous' ? (
//                     <span className="badge-red px-2 py-1 bg-red-600 text-white rounded text-[10px] font-black uppercase animate-pulse">Dangerous</span>
//                   ) : item.status === 'Cautious' ? (
//                     <span className="badge-yellow px-2 py-1 bg-amber-400 text-amber-950 rounded text-[10px] font-black uppercase">Cautious</span>
//                   ) : (
//                     <span className="badge-gray px-2 py-1 bg-slate-100 text-slate-500 rounded text-[10px] font-black uppercase">Normal</span>
//                   )}
//                 </td>
//                 <td className="td px-6 py-5">
//                   <div className="flex justify-end">
//                     <button 
//                       className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${item.flagged ? 'bg-rose-100 text-rose-700 border border-rose-200 shadow-sm' : 'bg-slate-100 text-slate-400 hover:text-rose-600 hover:bg-rose-50'}`} 
//                       onClick={() => onFlag(item)}
//                     >
//                       {item.flagged ? 'Flagged' : 'Flag'}
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* ADD LAB MODAL */}
//       <Modal open={open} onClose={() => setOpen(false)} title="New Laboratory Entry">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
//           <div className="space-y-1">
//             <label className="label">Test Name*</label>
//             <select className="select" value={form.name} onChange={e => onTestChange(e.target.value)}>
//               <option value="">Select a test</option>
//               {LAB_TESTS.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
//             </select>
//           </div>
//           <div className="space-y-1">
//             <label className="label">Result Value*</label>
//             <input type="number" step="any" className="input" value={form.value} onChange={e => setForm(f => ({ ...f, value: e.target.value }))} placeholder="0.00" />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Units</label>
//             <input className="input bg-slate-50 text-slate-400 cursor-not-allowed" value={form.units} readOnly />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Reference Range</label>
//             <input className="input bg-slate-50 text-slate-400 cursor-not-allowed" value={form.refRange} readOnly />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Result Date*</label>
//             <input type="date" className="input" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Laboratory</label>
//             <input className="input" value={form.lab} onChange={e => setForm(f => ({ ...f, lab: e.target.value }))} />
//           </div>
//         </div>
//         <div className="mt-8 flex justify-end gap-3 border-t border-slate-100 pt-6">
//           <button className="btn-secondary" onClick={() => setOpen(false)}>Cancel</button>
//           <button className="btn-primary" onClick={submit}>Finalize Result</button>
//         </div>
//       </Modal>
//     </div>
//   )
// }
// import { useMemo, useState } from 'react'
// import Modal from './Modal'
// import { LAB_TESTS, getDefaultsFor } from '../data/tests'
// import axios from "axios"

// export default function LabResults({ items, onAdd, onFlag, doctors = [] }) {
//   const [open, setOpen] = useState(false)
//   const [filter, setFilter] = useState('All')

//   // Individual Form States
//   const [test, setTest] = useState("")
//   const [value, setValue] = useState(0)
//   const [unit, setUnit] = useState("")
//   const [range, setRange] = useState("")
//   const [date, setDate] = useState("")
//   const [lab, setLab] = useState("Central Lab")
  
//   // Data Storage State
//   const [formdata, setFormData] = useState([])

//   // Filtering logic
//   const filteredItems = useMemo(() => {
//     if (filter === 'Flagged') return items.filter(i => i.flagged)
//     return items
//   }, [items, filter])

//   // --- CORE LOGIC ---

//   // Triggered when test name changes to auto-fill read-only units/range
//   function handleTestChange(name) {
//     const defs = getDefaultsFor(name)
//     setTest(name)
//     setUnit(defs.units || "")
//     setRange(defs.refRange || "")
//   }

//   const submit = async () => {
//   if (!test || !value || !date) {
//     alert("Please fill in all required fields.");
//     return;
//   }

//   // Matching the Swagger structure you provided
//   const payload = {
//     recordId: null, 
//     patientId: 1, // You can replace with dynamic ID from props if available
//     doctorId: 1, 
//     recordType: "LAB_RESULT",
//     data: {
//       testName: test,
//       result: `${value} ${unit}`,
//       referenceRange: range,
//       status: "NORMAL",
//       testDate: date
//     }
//   };

//   try {
//     const response = await axios.post("http://localhost:8083/api/ehr/upsert-record", payload);
//     console.log("Response:", response.data);

//     // Update UI Table
//     const newEntryForTable = {
//       id: 'l' + Math.random().toString(36).slice(2),
//       name: test,
//       value: value,
//       units: unit,
//       refRange: range,
//       date: date,
//       lab: lab,
//       status: 'Normal',
//       flagged: false
//     };

//     onAdd(newEntryForTable);
//     setOpen(false);
    
//     // Reset Form
//     setTest("");
//     setValue(0);
//     setDate("");
//   } catch (error) {
//     console.error("Submission failed:", error);
//     const msg = error.response?.status === 403 
//       ? "Forbidden: Security is blocking the request. Ensure CSRF is disabled." 
//       : "Server Error: Could not save lab result.";
//     alert(msg);
//   }
// };
//   return (
//     <div className="card shadow-sm border border-slate-200 rounded-2xl overflow-hidden animate-in fade-in duration-500">
//       {/* HEADER SECTION */}
//       <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white">
//         <div>
//           <h3 className="text-lg font-black text-slate-900 tracking-tight">Lab Results</h3>
//           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Diagnostic History Tracker</p>
//         </div>
//         <div className="flex items-center gap-3">
//           <button className="btn-primary" onClick={() => setOpen(true)}>
//             Add Result
//           </button>
//         </div>
//       </div>
      
//       {/* TABLE SECTION */}
//       <div className="overflow-x-auto">
//         <table className="table w-full">
//           <thead>
//             <tr>
//               <th className="th px-6 py-4">Test Name</th>
//               <th className="th px-6 py-4">Result</th>
//               <th className="th px-6 py-4 text-center">Reference Range</th>
//               <th className="th px-6 py-4 text-center">Date</th>
//               <th className="th px-6 py-4 text-right">Status</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-slate-50">
//             {filteredItems.map(item => (
//               <tr key={item.id} className={`hover:bg-slate-50/50 transition-colors ${item.status === 'Dangerous' ? 'bg-red-50/30' : ''}`}>
//                 <td className="td px-6 py-5">
//                   <div className="font-black text-slate-900">{item.name}</div>
//                   <div className="text-[10px] font-bold text-blue-600 uppercase tracking-tight">{item.lab}</div>
//                 </td>
//                 <td className="td px-6 py-5">
//                   <div className="flex items-baseline gap-1">
//                     <span className="text-base font-black text-slate-950">{item.value}</span>
//                     <span className="text-[10px] font-bold text-slate-400 uppercase">{item.units}</span>
//                   </div>
//                 </td>
//                 <td className="td px-6 py-5 text-center">
//                   <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs font-mono font-bold">
//                     {item.refRange}
//                   </span>
//                 </td>
//                 <td className="td px-6 py-5 text-center text-xs font-bold text-slate-600 font-mono">
//                   {item.date}
//                 </td>
//                 <td className="td px-6 py-5 text-right">
//                   {item.status === 'Dangerous' ? (
//                     <span className="badge-red px-2 py-1 bg-red-600 text-white rounded text-[10px] font-black uppercase animate-pulse">Dangerous</span>
//                   ) : item.status === 'Cautious' ? (
//                     <span className="badge-yellow px-2 py-1 bg-amber-400 text-amber-950 rounded text-[10px] font-black uppercase">Cautious</span>
//                   ) : (
//                     <span className="badge-gray px-2 py-1 bg-slate-100 text-slate-500 rounded text-[10px] font-black uppercase">Normal</span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* ADD LAB MODAL */}
//       <Modal open={open} onClose={() => setOpen(false)} title="New Laboratory Entry">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
//           <div className="space-y-1">
//             <label className="label">Test Name*</label>
//             <select 
//               className="select" 
//               value={test} 
//               onChange={(e) => handleTestChange(e.target.value)}
//             >
//               <option value="">Select a test</option>
//               {LAB_TESTS.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
//             </select>
//           </div>
//           <div className="space-y-1">
//             <label className="label">Result Value*</label>
//             <input 
//               type="number" 
//               step="any" 
//               className="input" 
//               value={value} 
//               onChange={(e) => setValue(e.target.value)} 
//               placeholder="0.00" 
//             />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Units</label>
//             <input 
//               className="input bg-slate-50 text-slate-400 cursor-not-allowed" 
//               value={unit} 
//               readOnly 
//             />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Reference Range</label>
//             <input 
//               className="input bg-slate-50 text-slate-400 cursor-not-allowed" 
//               value={range} 
//               readOnly 
//             />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Result Date*</label>
//             <input 
//               type="date" 
//               className="input" 
//               value={date} 
//               onChange={(e) => setDate(e.target.value)} 
//             />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Laboratory</label>
//             <input 
//               className="input" 
//               value={lab} 
//               onChange={(e) => setLab(e.target.value)} 
//             />
//           </div>
//         </div>
//         <div className="mt-8 flex justify-end gap-3 border-t border-slate-100 pt-6">
//           <button className="btn-secondary" onClick={() => setOpen(false)}>Cancel</button>
//           <button className="btn-primary" onClick={submit}>Finalize Result</button>
//         </div>
//       </Modal>
//     </div>
//   )
// }

// import { useMemo, useState } from 'react'
// import Modal from './Modal'
// import { LAB_TESTS, getDefaultsFor } from '../data/tests'
// import axios from "axios"

// export default function LabResults({ items, onAdd, onFlag, doctors = [] }) {
//   const [open, setOpen] = useState(false)
//   const [filter, setFilter] = useState('All')

//   // Individual Form States
//   const [test, setTest] = useState("")
//   const [value, setValue] = useState(0)
//   const [unit, setUnit] = useState("")
//   const [range, setRange] = useState("")
//   const [date, setDate] = useState("")
//   const [lab, setLab] = useState("Central Lab")

//   // Filtering logic
//   const filteredItems = useMemo(() => {
//     if (filter === 'Flagged') return items.filter(i => i.flagged)
//     return items
//   }, [items, filter])

//   // Helper to determine status based on reference range
//   const calculateStatus = (val, refRange) => {
//     const numValue = parseFloat(val);
//     if (isNaN(numValue) || !refRange) return "NORMAL";

//     // Handles formats like "70 – 99" or "< 100"
//     const rangeNumbers = refRange.match(/(\d+(\.\d+)?)/g);
    
//     if (rangeNumbers) {
//       const numbers = rangeNumbers.map(Number);
//       if (refRange.includes('<')) {
//         return numValue >= numbers[0] ? "ELEVATED" : "NORMAL";
//       }
//       if (numbers.length === 2) {
//         const [min, max] = numbers;
//         return (numValue < min || numValue > max) ? "ELEVATED" : "NORMAL";
//       }
//     }
//     return "NORMAL";
//   };

//   function handleTestChange(name) {
//     const defs = getDefaultsFor(name)
//     setTest(name)
//     setUnit(defs.units || "")
//     setRange(defs.refRange || "")
//   }

//   const submit = async () => {
//     if (!test || !value || !date) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     const calculatedStatus = calculateStatus(value, range);

//     const payload = {
//       recordId: null,
//       patientId: 1,
//       doctorId: 1,
//       recordType: "LAB_RESULT",
//       data: {
//         testName: test,
//         result: `${value} ${unit}`,
//         referenceRange: range,
//         status: calculatedStatus,
//         testDate: date
//       }
//     };

//     try {
//       const response = await axios.post("http://localhost:8083/api/ehr/upsert-record", payload);
      
//       const newEntryForTable = {
//         id: 'l' + Math.random().toString(36).slice(2),
//         name: test,
//         value: value,
//         units: unit,
//         refRange: range,
//         date: date,
//         lab: lab,
//         status: calculatedStatus.charAt(0) + calculatedStatus.slice(1).toLowerCase(), // "Elevated" or "Normal"
//         flagged: calculatedStatus === "ELEVATED"
//       };

//       onAdd(newEntryForTable);
//       setOpen(false);
      
//       // Reset Form
//       setTest("");
//       setValue(0);
//       setDate("");
//     } catch (error) {
//       console.error("Submission failed:", error);
//       alert("Server Error: Could not save lab result.");
//     }
//   };

//   return (
//     <div className="card shadow-sm border border-slate-200 rounded-2xl overflow-hidden animate-in fade-in duration-500">
//       <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white">
//         <div>
//           <h3 className="text-lg font-black text-slate-900 tracking-tight">Lab Results</h3>
//           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Diagnostic History Tracker</p>
//         </div>
//         <button className="btn-primary" onClick={() => setOpen(true)}>Add Result</button>
//       </div>
      
//       <div className="overflow-x-auto">
//         <table className="table w-full">
//           <thead>
//             <tr>
//               <th className="th px-6 py-4">Test Name</th>
//               <th className="th px-6 py-4">Result</th>
//               <th className="th px-6 py-4 text-center">Reference Range</th>
//               <th className="th px-6 py-4 text-center">Date</th>
//               <th className="th px-6 py-4 text-right">Status</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-slate-50">
//             {filteredItems.map(item => (
//               <tr key={item.id} className={`hover:bg-slate-50/50 transition-colors ${item.status === 'Elevated' ? 'bg-amber-50/50' : ''}`}>
//                 <td className="td px-6 py-5">
//                   <div className="font-black text-slate-900">{item.name}</div>
//                   <div className="text-[10px] font-bold text-blue-600 uppercase tracking-tight">{item.lab}</div>
//                 </td>
//                 <td className="td px-6 py-5">
//                   <div className="flex items-baseline gap-1">
//                     <span className="text-base font-black text-slate-950">{item.value}</span>
//                     <span className="text-[10px] font-bold text-slate-400 uppercase">{item.units}</span>
//                   </div>
//                 </td>
//                 <td className="td px-6 py-5 text-center">
//                   <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs font-mono font-bold">{item.refRange}</span>
//                 </td>
//                 <td className="td px-6 py-5 text-center text-xs font-bold text-slate-600 font-mono">{item.date}</td>
//                 <td className="td px-6 py-5 text-right">
//                   {item.status === 'Elevated' ? (
//                     <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-[10px] font-black uppercase">Elevated</span>
//                   ) : (
//                     <span className="bg-slate-100 text-slate-500 px-2 py-1 rounded text-[10px] font-black uppercase">Normal</span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <Modal open={open} onClose={() => setOpen(false)} title="New Laboratory Entry">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
//           <div className="space-y-1">
//             <label className="label">Test Name*</label>
//             <select className="select" value={test} onChange={(e) => handleTestChange(e.target.value)}>
//               <option value="">Select a test</option>
//               {LAB_TESTS.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
//             </select>
//           </div>
//           <div className="space-y-1">
//             <label className="label">Result Value*</label>
//             <input type="number" step="any" className="input" value={value} onChange={(e) => setValue(e.target.value)} />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Units</label>
//             <input className="input bg-slate-50 text-slate-400" value={unit} readOnly />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Reference Range</label>
//             <input className="input bg-slate-50 text-slate-400" value={range} readOnly />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Result Date*</label>
//             <input type="date" className="input" value={date} onChange={(e) => setDate(e.target.value)} />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Laboratory</label>
//             <input className="input" value={lab} onChange={(e) => setLab(e.target.value)} />
//           </div>
//         </div>
//         <div className="mt-8 flex justify-end gap-3 border-t border-slate-100 pt-6">
//           <button className="btn-secondary" onClick={() => setOpen(false)}>Cancel</button>
//           <button className="btn-primary" onClick={submit}>Finalize Result</button>
//         </div>
//       </Modal>
//     </div>
//   )
// }

//////////////////////////////////////////////////////////////////////////////////////////

// import { useMemo, useState, useEffect } from 'react'
// import Modal from './Modal'
// import { LAB_TESTS, getDefaultsFor } from '../data/tests'
// import axios from "axios"

// export default function LabResults({ onAdd, onFlag, doctors = [], patientId = 1, refreshKey }) {
//   const [items, setItems] = useState([]) // State for API data
//   const [loading, setLoading] = useState(false)
//   const [open, setOpen] = useState(false)
//   const [filter, setFilter] = useState('All')

//   // Individual Form States
//   const [test, setTest] = useState("")
//   const [value, setValue] = useState(0)
//   const [unit, setUnit] = useState("")
//   const [range, setRange] = useState("")
//   const [date, setDate] = useState("")
//   const [lab, setLab] = useState("Central Lab")

//   // --- NEW: FETCH DATA FROM API ---
//   const fetchLabs = async () => {
//     try {
//       setLoading(true)
//       const response = await axios.get(`http://localhost:8083/api/ehr/patient-ehr`, {
//         params: { patientId }
//       });
      
//       // Map API fields to UI field names
//       const mappedLabs = response.data.labResults.map((lr, index) => ({
//         id: `api-lab-${index}`,
//         name: lr.testName,
//         // Assuming result comes as "120 mg/dL", we split it
//         value: lr.result.split(' ')[0], 
//         units: lr.result.split(' ')[1] || "",
//         refRange: lr.referenceRange,
//         date: lr.testDate,
//         lab: "Central Lab", // Defaulting as API doesn't provide lab name
//         status: lr.status.charAt(0) + lr.status.slice(1).toLowerCase(), // NORMAL -> Normal
//         flagged: lr.status === "ELEVATED"
//       }));
      
//       setItems(mappedLabs);
//     } catch (error) {
//       console.error("Failed to fetch lab results:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Re-fetch when patientId changes or when a refresh is triggered
//   useEffect(() => {
//     fetchLabs();
//   }, [patientId, refreshKey]);

//   // Filtering logic
//   const filteredItems = useMemo(() => {
//     if (filter === 'Flagged') return items.filter(i => i.flagged)
//     return items
//   }, [items, filter])

//   // Helper to determine status
//   const calculateStatus = (val, refRange) => {
//     const numValue = parseFloat(val);
//     if (isNaN(numValue) || !refRange) return "NORMAL";
//     const rangeNumbers = refRange.match(/(\d+(\.\d+)?)/g);
//     if (rangeNumbers) {
//       const numbers = rangeNumbers.map(Number);
//       if (refRange.includes('<')) return numValue >= numbers[0] ? "ELEVATED" : "NORMAL";
//       if (numbers.length === 2) {
//         const [min, max] = numbers;
//         return (numValue < min || numValue > max) ? "ELEVATED" : "NORMAL";
//       }
//     }
//     return "NORMAL";
//   };

//   function handleTestChange(name) {
//     const defs = getDefaultsFor(name)
//     setTest(name)
//     setUnit(defs.units || "")
//     setRange(defs.refRange || "")
//   }

//   const submit = async () => {
//     if (!test || !value || !date) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     const calculatedStatus = calculateStatus(value, range);

//     const payload = {
//       recordId: null,
//       patientId: patientId,
//       doctorId: 1,
//       recordType: "LAB_RESULT",
//       data: {
//         testName: test,
//         result: `${value} ${unit}`,
//         referenceRange: range,
//         status: calculatedStatus,
//         testDate: date
//       }
//     };

//     try {
//       await axios.post("http://localhost:8083/api/ehr/upsert-record", payload);
      
//       // Instead of manual state push, trigger a re-fetch to ensure sync with DB
//       await fetchLabs(); 
      
//       // If parent needs to know (for Audit Trail)
//       if(onAdd) onAdd(); 

//       setOpen(false);
//       setTest("");
//       setValue(0);
//       setDate("");
//     } catch (error) {
//       console.error("Submission failed:", error);
//       alert("Server Error: Could not save lab result.");
//     }
//   };

//   return (
//     <div className="card shadow-sm border border-slate-200 rounded-2xl overflow-hidden">
//       <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white">
//         <div>
//           <h3 className="text-lg font-black text-slate-900 tracking-tight">Lab Results</h3>
//           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
//             {loading ? "Syncing with server..." : "Diagnostic History Tracker"}
//           </p>
//         </div>
//         <div className="flex gap-2">
//            <select 
//             className="text-xs font-bold border rounded-lg px-2 bg-slate-50"
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//           >
//             <option value="All">All Results</option>
//             <option value="Flagged">Flagged Only</option>
//           </select>
//           <button className="btn-primary" onClick={() => setOpen(true)}>Add Result</button>
//         </div>
//       </div>
      
//       <div className="overflow-x-auto">
//         <table className="table w-full">
//           <thead>
//             <tr>
//               <th className="th px-6 py-4">Test Name</th>
//               <th className="th px-6 py-4">Result</th>
//               <th className="th px-6 py-4 text-center">Reference Range</th>
//               <th className="th px-6 py-4 text-center">Date</th>
//               <th className="th px-6 py-4 text-right">Status</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-slate-50">
//             {filteredItems.length > 0 ? filteredItems.map(item => (
//               <tr key={item.id} className={`hover:bg-slate-50/50 transition-colors ${item.status === 'Elevated' ? 'bg-amber-50/50' : ''}`}>
//                 <td className="td px-6 py-5">
//                   <div className="font-black text-slate-900">{item.name}</div>
//                   <div className="text-[10px] font-bold text-blue-600 uppercase tracking-tight">{item.lab}</div>
//                 </td>
//                 <td className="td px-6 py-5">
//                   <div className="flex items-baseline gap-1">
//                     <span className="text-base font-black text-slate-950">{item.value}</span>
//                     <span className="text-[10px] font-bold text-slate-400 uppercase">{item.units}</span>
//                   </div>
//                 </td>
//                 <td className="td px-6 py-5 text-center">
//                   <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs font-mono font-bold">{item.refRange}</span>
//                 </td>
//                 <td className="td px-6 py-5 text-center text-xs font-bold text-slate-600 font-mono">{item.date}</td>
//                 <td className="td px-6 py-5 text-right">
//                   <span className={`px-2 py-1 rounded text-[10px] font-black uppercase ${
//                     item.status === 'Elevated' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'
//                   }`}>
//                     {item.status}
//                   </span>
//                 </td>
//               </tr>
//             )) : (
//               <tr>
//                 <td colSpan="5" className="text-center py-10 text-slate-400 text-sm italic">
//                   {loading ? "Loading data..." : "No lab results found for this patient."}
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       <Modal open={open} onClose={() => setOpen(false)} title="New Laboratory Entry">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
//           <div className="space-y-1">
//             <label className="label">Test Name*</label>
//             <select className="select" value={test} onChange={(e) => handleTestChange(e.target.value)}>
//               <option value="">Select a test</option>
//               {LAB_TESTS.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
//             </select>
//           </div>
//           <div className="space-y-1">
//             <label className="label">Result Value*</label>
//             <input type="number" step="any" className="input" value={value} onChange={(e) => setValue(e.target.value)} />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Units</label>
//             <input className="input bg-slate-50 text-slate-400" value={unit} readOnly />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Reference Range</label>
//             <input className="input bg-slate-50 text-slate-400" value={range} readOnly />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Result Date*</label>
//             <input type="date" className="input" value={date} onChange={(e) => setDate(e.target.value)} />
//           </div>
//           <div className="space-y-1">
//             <label className="label">Laboratory</label>
//             <input className="input" value={lab} onChange={(e) => setLab(e.target.value)} />
//           </div>
//         </div>
//         <div className="mt-8 flex justify-end gap-3 border-t border-slate-100 pt-6">
//           <button className="btn-secondary" onClick={() => setOpen(false)}>Cancel</button>
//           <button className="btn-primary" onClick={submit} disabled={loading}>
//             {loading ? "Saving..." : "Finalize Result"}
//           </button>
//         </div>
//       </Modal>
//     </div>
//   )
// }

import { useMemo, useState, useEffect } from 'react'
import Modal from './Modal'
import { LAB_TESTS, getDefaultsFor } from '../data/tests'
import axios from "axios"

export default function LabResults({ onAdd, onFlag, doctors = [], patientId = 1, refreshKey }) {
  const [items, setItems] = useState([]) 
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false) // For "Add" Form
  const [fullHistoryOpen, setFullHistoryOpen] = useState(false) // For Full List Modal
  const [filter, setFilter] = useState('All')

  // Form States
  const [test, setTest] = useState("")
  const [value, setValue] = useState(0)
  const [unit, setUnit] = useState("")
  const [range, setRange] = useState("")
  const [date, setDate] = useState("")
  const [lab, setLab] = useState("Central Lab")

  const fetchLabs = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`http://localhost:8083/api/ehr/patient-ehr`, {
        params: { patientId }
      });
      
      const mappedLabs = response.data.labResults.map((lr, index) => ({
        id: `api-lab-${index}`,
        name: lr.testName,
        value: lr.result.split(' ')[0], 
        units: lr.result.split(' ')[1] || "",
        refRange: lr.referenceRange,
        date: lr.testDate,
        lab: "Central Lab",
        status: lr.status.charAt(0) + lr.status.slice(1).toLowerCase(),
        flagged: lr.status === "ELEVATED"
      }));
      
      setItems(mappedLabs);
    } catch (error) {
      console.error("Failed to fetch lab results:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchLabs(); }, [patientId, refreshKey]);

  const filteredItems = useMemo(() => {
    if (filter === 'Flagged') return items.filter(i => i.flagged)
    return items
  }, [items, filter])

  // --- LOGIC FOR RECENT VS FULL ---
  const recentItems = filteredItems.slice(0, 5);
  const hasMore = filteredItems.length > 5;

  const calculateStatus = (val, refRange) => {
    const numValue = parseFloat(val);
    if (isNaN(numValue) || !refRange) return "NORMAL";
    const rangeNumbers = refRange.match(/(\d+(\.\d+)?)/g);
    if (rangeNumbers) {
      const numbers = rangeNumbers.map(Number);
      if (refRange.includes('<')) return numValue >= numbers[0] ? "ELEVATED" : "NORMAL";
      if (numbers.length === 2) {
        const [min, max] = numbers;
        return (numValue < min || numValue > max) ? "ELEVATED" : "NORMAL";
      }
    }
    return "NORMAL";
  };

  function handleTestChange(name) {
    const defs = getDefaultsFor(name);
    setTest(name); setUnit(defs.units || ""); setRange(defs.refRange || "");
  }

  const submit = async () => {
    if (!test || !value || !date) {
      alert("Please fill in all required fields.");
      return;
    }
    const calculatedStatus = calculateStatus(value, range);
    const payload = {
      recordId: null, patientId, doctorId: 1, recordType: "LAB_RESULT",
      data: { testName: test, result: `${value} ${unit}`, referenceRange: range, status: calculatedStatus, testDate: date }
    };

    try {
      await axios.post("http://localhost:8083/api/ehr/upsert-record", payload);
      await fetchLabs(); 
      if(onAdd) onAdd(); 
      setOpen(false);
      setTest(""); setValue(0); setDate("");
    } catch (error) {
      alert("Server Error: Could not save lab result.");
    }
  };

  // Sub-component for a Table Row to keep it DRY
  const LabRow = ({ item }) => (
    <tr key={item.id} className={`hover:bg-slate-50/50 transition-colors ${item.status === 'Elevated' ? 'bg-amber-50/50' : ''}`}>
      <td className="td px-6 py-5">
        <div className="font-black text-slate-900">{item.name}</div>
        <div className="text-[10px] font-bold text-blue-600 uppercase tracking-tight">{item.lab}</div>
      </td>
      <td className="td px-6 py-5">
        <div className="flex items-baseline gap-1">
          <span className="text-base font-black text-slate-950">{item.value}</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase">{item.units}</span>
        </div>
      </td>
      <td className="td px-6 py-5 text-center">
        <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs font-mono font-bold">{item.refRange}</span>
      </td>
      <td className="td px-6 py-5 text-center text-xs font-bold text-slate-600 font-mono">{item.date}</td>
      <td className="td px-6 py-5 text-right">
        <span className={`px-2 py-1 rounded text-[10px] font-black uppercase ${
          item.status === 'Elevated' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'
        }`}>
          {item.status}
        </span>
      </td>
    </tr>
  );

  return (
    <div className="card shadow-sm border border-slate-200 md:rounded-2xl overflow-hidden flex flex-col h-full bg-white">
      {/* Header */}
      <div className="p-6 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-black text-slate-900 tracking-tight">Recent Lab Results</h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Showing last {recentItems.length} entries
          </p>
        </div>
        <button className="btn-primary" onClick={() => setOpen(true)}>Add Result</button>
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="th px-6 py-4">Test Name</th>
              <th className="th px-6 py-4">Result</th>
              <th className="th px-6 py-4 text-center">Reference Range</th>
              <th className="th px-6 py-4 text-center">Date</th>
              <th className="th px-6 py-4 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {recentItems.length > 0 ? recentItems.map(item => <LabRow key={item.id} item={item} />) : (
              <tr>
                <td colSpan="5" className="text-center py-10 text-slate-400 italic">
                   {loading ? "Loading..." : "No records found."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer / Show More */}
      {hasMore && (
        <div className="mt-auto border-t border-slate-100 bg-slate-50/30 p-3 text-center">
          <button 
            onClick={() => setFullHistoryOpen(true)} 
            className="text-[11px] font-black text-blue-600 uppercase tracking-widest hover:text-blue-800 transition-colors"
          >
            View Full Lab History ({items.length}) →
          </button>
        </div>
      )}

      {/* MODAL: Full History */}
      {fullHistoryOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md">
          <div className="bg-white w-full max-w-6xl max-h-[85vh] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-slate-200">
            <div className="px-8 py-6 border-b flex justify-between items-center shrink-0">
              <div>
                <h2 className="text-xl font-black text-slate-900">Complete Laboratory History</h2>
                <p className="text-xs font-bold text-slate-400 uppercase">Patient ID: {patientId}</p>
              </div>
              <button onClick={() => setFullHistoryOpen(false)} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-rose-600 transition-all">✕</button>
            </div>
            
            <div className="overflow-y-auto flex-1 p-4">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="th px-6 py-4">Test Name</th>
                    <th className="th px-6 py-4">Result</th>
                    <th className="th px-6 py-4 text-center">Range</th>
                    <th className="th px-6 py-4 text-center">Date</th>
                    <th className="th px-6 py-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {items.map(item => <LabRow key={item.id} item={item} />)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Add New Entry */}
      <Modal open={open} onClose={() => setOpen(false)} title="New Laboratory Entry">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
          <div className="space-y-1">
            <label className="label">Test Name*</label>
            <select className="select" value={test} onChange={(e) => handleTestChange(e.target.value)}>
              <option value="">Select a test</option>
              {LAB_TESTS.map(t => <option key={t.name} value={t.name}>{t.name}</option>)}
            </select>
          </div>
          <div className="space-y-1">
            <label className="label">Result Value*</label>
            <input type="number" step="any" className="input" value={value} onChange={(e) => setValue(e.target.value)} />
          </div>
          <div className="space-y-1">
            <label className="label">Units</label>
            <input className="input bg-slate-50 text-slate-400" value={unit} readOnly />
          </div>
          <div className="space-y-1">
            <label className="label">Reference Range</label>
            <input className="input bg-slate-50 text-slate-400" value={range} readOnly />
          </div>
          <div className="space-y-1">
            <label className="label">Result Date*</label>
            <input type="date" className="input" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="space-y-1">
            <label className="label">Laboratory</label>
            <input className="input" value={lab} onChange={(e) => setLab(e.target.value)} />
          </div>
        </div>
        <div className="mt-8 flex justify-end gap-3 border-t border-slate-100 pt-6">
          <button className="btn-secondary" onClick={() => setOpen(false)}>Cancel</button>
          <button className="btn-primary" onClick={submit} disabled={loading}>
            {loading ? "Saving..." : "Finalize Result"}
          </button>
        </div>
      </Modal>
    </div>
  )
}