// // import { useEffect, useState } from 'react'
// // import { useNavigate, useParams, useLocation } from 'react-router-dom'
// // import { getBundleById } from '../data/db'
// // import HeaderBar from '../components/HeaderBar'
// // import RecordSummaryCard from '../components/RecordSummaryCard'
// // import DiagnosesTimeline from '../components/DiagnosesTimeline'
// // import LabResults from '../components/LabResults'
// // import DiagnosisEditor from '../components/DiagnosisEditor'
// // import AuditTrailPreview from '../components/AuditTrailPreview'
// // import FooterBar from '../components/FooterBar'
// // import Modal from '../components/Modal'
// // import { toFHIR } from '../utils/fhir'
// // import { downloadJSON } from '../utils/download'

// // export default function PatientOverview(){
// //   const { id } = useParams()
// //   const navigate = useNavigate()
// //   const location = useLocation()

// //   // Extract the passed data 'r' from navigate state
// //   const passedData = location.state?.r

// //   // Use passed data if it exists, otherwise fall back to local DB for refresh protection
// //   const bundle = getBundleById(id) || getBundleById('P-10293')

// //   // Map API fields (fullName, patientId) to the format expected by your components (name, id)
// //   const [patient, setPatient] = useState(passedData ? {
// //     ...passedData,
// //     name: passedData.fullName,
// //     id: passedData.patientId
// //   } : bundle.patient)

// //   const [summary, setSummary] = useState(passedData ? {
// //     ...bundle.summary,
// //     primaryDiagnosis: passedData.primaryDiagnosis,
// //     updatedAt: passedData.clinicalLastUpdated
// //   } : bundle.summary)

// //   const [diagnoses, setDiagnoses] = useState(bundle.diagnoses)
// //   const [labs, setLabs] = useState(bundle.labs)
// //   const [audit, setAudit] = useState(bundle.audit)
// //   const [consentHistory, setConsentHistory] = useState(bundle.consentHistory)
// //   const [consent, setConsent] = useState(consentHistory[0] ? { status: true, grantedTo: consentHistory[0].grantedTo, end: consentHistory[0].end } : { status: false })
// //   const [consentOpen, setConsentOpen] = useState(false)

// //   function pushAudit(entry){
// //     setAudit(a => [{ id: 'a'+Math.random().toString(36).slice(2), at: new Date().toISOString(), ...entry }, ...a])
// //   }

// //   function onSave(){
// //     pushAudit({ user: 'Dr. Patel', action: 'Update', target: 'Record', details: 'Saved changes' })
// //     alert('Record saved (demo)');
// //   }

// //   function onDiscard(){
// //     pushAudit({ user: 'Dr. Patel', action: 'Update', target: 'Record', details: 'Discarded changes' })
// //     alert('Changes discarded (demo)')
// //     navigate(-1)
// //   }

// //   function onLock(){
// //     pushAudit({ user: 'System', action: 'Update', target: 'Record', details: 'Record locked' })
// //     setPatient(p => ({ ...p, status: 'Locked' }))
// //   }

// //   function addLab(item){
// //     setLabs(l => [item, ...l])
// //     setSummary(s => ({ ...s, updatedAt: new Date().toISOString(), lastLabSummary: { name: item.name, value: item.value, units: item.units, date: item.date } }))
// //     pushAudit({ user: 'Dr. Patel', action: 'Update', target: 'Lab Result', details: `Added ${item.name}` })
// //   }

// //   function flagLab(item){
// //     setLabs(l => l.map(x => x.id === item.id ? { ...x, flagged: !x.flagged } : x))
// //     const action = item.flagged ? 'Unflagged' : 'Flagged'
// //     pushAudit({ user: 'Dr. Patel', action: 'Update', target: 'Lab Result', details: `${action} ${item.name}` })
// //   }

// //   function addDiagnosis(item){
// //     setDiagnoses(d => [item, ...d])
// //     setSummary(s => ({ ...s, updatedAt: new Date().toISOString(), primaryDiagnosis: item.name }))
// //     pushAudit({ user: 'Dr. Patel', action: 'Update', target: 'Diagnosis', details: `Added ${item.name}` })
// //   }

// //   function resolveDiagnosis(item){
// //     setDiagnoses(d => d.filter(x => x.id !== item.id))
// //     pushAudit({ user: 'Dr. Patel', action: 'Update', target: 'Diagnosis', details: `Resolved ${item.name}` })
// //   }

// //   function backToList(){ navigate('/patients') }
// //   function printSummary(){ window.print() }
// //   function exportFHIR(){
// //     const fhirBundle = toFHIR({ patient, diagnoses, labResults: labs })
// //     downloadJSON(`FHIR-${patient.id}.json`, fhirBundle)
// //     pushAudit({ user: 'System', action: 'Download', target: 'FHIR JSON', details: `Exported ${patient.id}` })
// //   }

// //   return (
// //     <div className="space-y-4">
// //       <HeaderBar patient={patient} onSave={onSave} onDiscard={onDiscard} onLock={onLock} pushAudit={pushAudit} />
// //       <RecordSummaryCard summary={summary} />
// //       <DiagnosisEditor activeItems={diagnoses} onAdd={addDiagnosis} onResolve={resolveDiagnosis} />
// //       <LabResults items={labs} onAdd={addLab} onFlag={flagLab} doctors={bundle.doctors} />
// //       {/* <AuditTrailPreview items={audit} /> */}
// //       {/* <AuditTrailPreview patientId={id} /> */}
// //       <AuditTrailPreview patientId={id} refreshKey={refreshKey} />
// //       <FooterBar onBack={backToList} onPrint={printSummary} onExportFHIR={exportFHIR} />
// //     </div>
// //   )
// // }

// import { useEffect, useState } from 'react'
// import { useNavigate, useParams, useLocation } from 'react-router-dom'
// import { getBundleById } from '../data/db'
// import HeaderBar from '../components/HeaderBar'
// import RecordSummaryCard from '../components/RecordSummaryCard'
// import DiagnosesTimeline from '../components/DiagnosesTimeline'
// import LabResults from '../components/LabResults'
// import DiagnosisEditor from '../components/DiagnosisEditor'
// import AuditTrailPreview from '../components/AuditTrailPreview'
// import FooterBar from '../components/FooterBar'
// import Modal from '../components/Modal'
// import { toFHIR } from '../utils/fhir'
// import { downloadJSON } from '../utils/download'

// export default function PatientOverview(){
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const location = useLocation()

//   // --- NEW: REFRESH TRIGGER ---
//   // Incrementing this key tells AuditTrailPreview to re-fetch from port 8083
//   const [refreshKey, setRefreshKey] = useState(0);
//   const triggerRefresh = () => setRefreshKey(prev => prev + 1);

//   const passedData = location.state?.r
//   const bundle = getBundleById(id) || getBundleById('P-10293')

//   const [patient, setPatient] = useState(passedData ? {
//     ...passedData,
//     name: passedData.fullName,
//     id: passedData.patientId
//   } : bundle.patient)

//   const [summary, setSummary] = useState(passedData ? {
//     ...bundle.summary,
//     primaryDiagnosis: passedData.primaryDiagnosis,
//     updatedAt: passedData.clinicalLastUpdated
//   } : bundle.summary)

//   const [diagnoses, setDiagnoses] = useState(bundle.diagnoses)
//   const [labs, setLabs] = useState(bundle.labs)
//   const [consentHistory, setConsentHistory] = useState(bundle.consentHistory)
  
//   // Note: We removed the local 'audit' state because we are now fetching 
//   // live data from the backend via AuditTrailPreview

//   function onSave(){
//     alert('Record saved');
//     triggerRefresh(); // Refresh audit to show the save action
//   }

//   function onDiscard(){
//     alert('Changes discarded')
//     navigate(-1)
//   }

//   function onLock(){
//     setPatient(p => ({ ...p, status: 'Locked' }))
//     triggerRefresh(); // Refresh audit to show the lock action
//   }

//   function addLab(item){
//     setLabs(l => [item, ...l])
//     setSummary(s => ({ 
//         ...s, 
//         updatedAt: new Date().toISOString(), 
//         lastLabSummary: { name: item.name, value: item.value, units: item.units, date: item.date } 
//     }))
//     // The backend POST in LabResults should have happened, now we refresh the UI log
//     triggerRefresh(); 
//   }

//   function flagLab(item){
//     setLabs(l => l.map(x => x.id === item.id ? { ...x, flagged: !x.flagged } : x))
//     triggerRefresh();
//   }

//   function addDiagnosis(item){
//     setDiagnoses(d => [item, ...d])
//     setSummary(s => ({ ...s, updatedAt: new Date().toISOString(), primaryDiagnosis: item.name }))
//     triggerRefresh();
//   }

//   function resolveDiagnosis(item){
//     setDiagnoses(d => d.filter(x => x.id !== item.id))
//     triggerRefresh();
//   }

//   function backToList(){ navigate('/patients') }
//   function printSummary(){ window.print() }
//   function exportFHIR(){
//     const fhirBundle = toFHIR({ patient, diagnoses, labResults: labs })
//     downloadJSON(`FHIR-${patient.id}.json`, fhirBundle)
//     triggerRefresh();
//   }

//   return (
//     <div className="space-y-4">
//       <HeaderBar 
//         patient={patient} 
//         onSave={onSave} 
//         onDiscard={onDiscard} 
//         onLock={onLock} 
//       />
      
//       <RecordSummaryCard summary={summary} />
      
//       <DiagnosisEditor 
//         activeItems={diagnoses} 
//         onAdd={addDiagnosis} 
//         onResolve={resolveDiagnosis} 
//       />
      
//       <LabResults 
//         items={labs} 
//         onAdd={addLab} 
//         onFlag={flagLab} 
//         doctors={bundle.doctors} 
//       />
      
//       {/* The component will now re-run its internal useEffect 
//           whenever refreshKey changes, fetching live data from 8083 
//       */}
//       <AuditTrailPreview patientId={id} refreshKey={refreshKey} />
      
//       <FooterBar 
//         onBack={backToList} 
//         onPrint={printSummary} 
//         onExportFHIR={exportFHIR} 
//       />
//     </div>
//   )
// // }
// import { useEffect, useState } from 'react'
// import { useNavigate, useParams, useLocation } from 'react-router-dom'
// import { getBundleById } from '../data/db'
// import HeaderBar from '../components/HeaderBar'
// import RecordSummaryCard from '../components/RecordSummaryCard'
// import DiagnosesTimeline from '../components/DiagnosesTimeline'
// import LabResults from '../components/LabResults'
// import DiagnosisEditor from '../components/DiagnosisEditor'
// import AuditTrailPreview from '../components/AuditTrailPreview'
// import FooterBar from '../components/FooterBar'
// import Modal from '../components/Modal'
// import { toFHIR } from '../utils/fhir'
// import { downloadJSON } from '../utils/download'

// export default function PatientOverview(){
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const location = useLocation()

//   // --- REFRESH TRIGGER ---
//   // Incrementing this key tells AuditTrailPreview to re-fetch from port 8083
//   const [refreshKey, setRefreshKey] = useState(0);
//   const triggerRefresh = () => setRefreshKey(prev => prev + 1);

//   // Extract the passed data 'r' from navigate state
//   const passedData = location.state?.r

//   // Use passed data if it exists, otherwise fall back to local DB for refresh protection
//   const bundle = getBundleById(id) || getBundleById('P-10293')

//   // Map API fields (fullName, patientId) to the format expected by your components (name, id)
//   const [patient, setPatient] = useState(passedData ? {
//     ...passedData,
//     name: passedData.fullName,
//     id: passedData.patientId
//   } : bundle.patient)

//   const [summary, setSummary] = useState(passedData ? {
//     ...bundle.summary,
//     primaryDiagnosis: passedData.primaryDiagnosis,
//     updatedAt: passedData.clinicalLastUpdated
//   } : bundle.summary)

//   const [diagnoses, setDiagnoses] = useState(bundle.diagnoses)
//   const [labs, setLabs] = useState(bundle.labs)
//   const [consentHistory, setConsentHistory] = useState(bundle.consentHistory)
  
//   // Note: Local 'audit' state is removed in favor of live fetching in AuditTrailPreview
//   // using the refreshKey to stay updated without page reloads.

//   function onSave(){
//     alert('Record saved');
//     triggerRefresh(); // Refresh audit to show the save action
//   }

//   function onDiscard(){
//     alert('Changes discarded')
//     navigate(-1)
//   }

//   function onLock(){
//     setPatient(p => ({ ...p, status: 'Locked' }))
//     triggerRefresh(); // Refresh audit to show the lock action
//   }

//   function addLab(item){
//     setLabs(l => [item, ...l])
//     setSummary(s => ({ 
//         ...s, 
//         updatedAt: new Date().toISOString(), 
//         lastLabSummary: { name: item.name, value: item.value, units: item.units, date: item.date } 
//     }))
//     // Triggers the AuditTrailPreview component to re-fetch latest logs
//     triggerRefresh(); 
//   }

//   function flagLab(item){
//     setLabs(l => l.map(x => x.id === item.id ? { ...x, flagged: !x.flagged } : x))
//     triggerRefresh();
//   }

//   function addDiagnosis(item){
//     setDiagnoses(d => [item, ...d])
//     setSummary(s => ({ ...s, updatedAt: new Date().toISOString(), primaryDiagnosis: item.name }))
//     triggerRefresh();
//   }

//   function resolveDiagnosis(item){
//     setDiagnoses(d => d.filter(x => x.id !== item.id))
//     triggerRefresh();
//   }

//   function backToList(){ navigate('/patients') }
//   function printSummary(){ window.print() }
  
//   function exportFHIR(){
//     const fhirBundle = toFHIR({ patient, diagnoses, labResults: labs })
//     downloadJSON(`FHIR-${patient.id}.json`, fhirBundle)
//     triggerRefresh(); // Refresh audit to log the export event
//   }

//   return (
//     <div className="space-y-4">
//       {/* Action Header */}
//       <HeaderBar 
//         patient={patient} 
//         onSave={onSave} 
//         onDiscard={onDiscard} 
//         onLock={onLock} 
//       />
      
//       {/* Patient Summary Visual */}
//       <RecordSummaryCard summary={summary} />
      
//       {/* Condition Management */}
//       <DiagnosisEditor 
//         activeItems={diagnoses} 
//         onAdd={addDiagnosis} 
//         onResolve={resolveDiagnosis} 
//       />
      
//       {/* Laboratory Data */}
//       <LabResults 
//         items={labs} 
//         onAdd={addLab} 
//         onFlag={flagLab} 
//         doctors={bundle.doctors} 
//       />
      
//       {/* Integrated Audit Trail 
//           patientId: links to backend records
//           refreshKey: triggers useEffect in child when incremented
//       */}
//       <AuditTrailPreview patientId={id} refreshKey={refreshKey} />
      
//       {/* Global Navigation and Export */}
//       <FooterBar 
//         onBack={backToList} 
//         onPrint={printSummary} 
//         onExportFHIR={exportFHIR} 
//       />
//     </div>
//   )
// }

// import { useEffect, useState } from 'react'
// import { useNavigate, useParams, useLocation } from 'react-router-dom'
// import { getBundleById } from '../data/db'
// import HeaderBar from '../components/HeaderBar'
// import RecordSummaryCard from '../components/RecordSummaryCard'
// import DiagnosesTimeline from '../components/DiagnosesTimeline'
// import LabResults from '../components/LabResults'
// import DiagnosisEditor from '../components/DiagnosisEditor'
// import AuditTrailPreview from '../components/AuditTrailPreview'
// import FooterBar from '../components/FooterBar'
// import { toFHIR } from '../utils/fhir'
// import { downloadJSON } from '../utils/download'

// export default function PatientOverview() {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const location = useLocation()

//   // Signal for the Audit Trail to re-fetch
//   const [refreshKey, setRefreshKey] = useState(0)
//   const triggerRefresh = () => setRefreshKey(prev => prev + 1)

//   const passedData = location.state?.r
//   const bundle = getBundleById(id) || getBundleById('P-10293')

//   const [patient, setPatient] = useState(passedData ? {
//     ...passedData,
//     name: passedData.fullName,
//     id: passedData.patientId
//   } : bundle.patient)

//   const [summary, setSummary] = useState(passedData ? {
//     ...bundle.summary,
//     primaryDiagnosis: passedData.primaryDiagnosis,
//     updatedAt: passedData.clinicalLastUpdated
//   } : bundle.summary)

//   const [diagnoses, setDiagnoses] = useState(bundle.diagnoses)
//   const [labs, setLabs] = useState(bundle.labs)

//   // --- SAFE HANDLERS ---

//   function addLab(item) {
//     if (!item) return; // Prevent crash if item is null

//     setLabs(l => [item, ...l])
//     setSummary(s => ({ 
//         ...s, 
//         updatedAt: new Date().toISOString(), 
//         lastLabSummary: { 
//           name: item?.name || "Lab Update", 
//           value: item?.value || "0", 
//           units: item?.units || "", 
//           date: item?.date || new Date().toISOString() 
//         } 
//     }))
//     triggerRefresh() // Re-fetch Audit Trail
//   }

//   function addDiagnosis(item) {
//     if (!item) return;
//     setDiagnoses(d => [item, ...d])
//     setSummary(s => ({ 
//       ...s, 
//       updatedAt: new Date().toISOString(), 
//       primaryDiagnosis: item?.name || s.primaryDiagnosis 
//     }))
//     triggerRefresh()
//   }

//   function flagLab(item) {
//     if (!item) return;
//     setLabs(l => l.map(x => x.id === item.id ? { ...x, flagged: !x.flagged } : x))
//     triggerRefresh()
//   }

//   function resolveDiagnosis(item) {
//     setDiagnoses(d => d.filter(x => x.id !== item.id))
//     triggerRefresh()
//   }

//   function onSave() { alert('Record saved'); triggerRefresh(); }
//   function onLock() { setPatient(p => ({ ...p, status: 'Locked' })); triggerRefresh(); }
//   function onDiscard() { navigate(-1) }
//   const backToList = () => navigate('/patients')
//   const printSummary = () => window.print()

//   function exportFHIR() {
//     const fhirBundle = toFHIR({ patient, diagnoses, labResults: labs })
//     downloadJSON(`FHIR-${patient.id}.json`, fhirBundle)
//     triggerRefresh()
//   }

//   return (
//     <div className="space-y-4">
//       <HeaderBar patient={patient} onSave={onSave} onDiscard={onDiscard} onLock={onLock} />
//       <RecordSummaryCard summary={summary} />
//       <DiagnosisEditor activeItems={diagnoses} onAdd={addDiagnosis} onResolve={resolveDiagnosis} />
      
//       {/* Pass addLab here */}
//       <LabResults items={labs} onAdd={addLab} onFlag={flagLab} patientId={id} />
      
//       <AuditTrailPreview patientId={id} refreshKey={refreshKey} />
//       <FooterBar onBack={backToList} onPrint={printSummary} onExportFHIR={exportFHIR} />
//     </div>
//   )
// }

// import { useEffect, useState } from 'react'
// import { useNavigate, useParams, useLocation } from 'react-router-dom'
// import { getBundleById } from '../data/db'
// import HeaderBar from '../components/HeaderBar'
// import RecordSummaryCard from '../components/RecordSummaryCard'
// import LabResults from '../components/LabResults'
// import DiagnosisEditor from '../components/DiagnosisEditor'
// import AuditTrailPreview from '../components/AuditTrailPreview'
// import FooterBar from '../components/FooterBar'

// export default function PatientOverview() {
//   const { id } = useParams() // Captures the ID from /EHR/patient/:id
//   const navigate = useNavigate()
//   const location = useLocation()

//   const [refreshKey, setRefreshKey] = useState(0)
//   const triggerRefresh = () => setRefreshKey(prev => prev + 1)

//   const passedData = location.state?.r
//   const bundle = getBundleById(id) || getBundleById('P-10293')

//   const [patient, setPatient] = useState(passedData ? {
//     ...passedData,
//     name: passedData.fullName,
//     id: passedData.patientId
//   } : bundle.patient)

//   const [summary, setSummary] = useState(passedData ? {
//     ...bundle.summary,
//     primaryDiagnosis: passedData.primaryDiagnosis,
//     updatedAt: passedData.clinicalLastUpdated
//   } : bundle.summary)

//   const [diagnoses, setDiagnoses] = useState(bundle.diagnoses)
//   const [labs, setLabs] = useState(bundle.labs)

//   function addLab(item) {
//     if (!item) return;
//     setLabs(l => [item, ...l])
//     triggerRefresh()
//   }

//   function addDiagnosis(item) {
//     if (!item) return;
//     setDiagnoses(d => [item, ...d])
//     triggerRefresh()
//   }

//   return (
//     <div className="space-y-4 max-w-7xl mx-auto p-4">
//       <HeaderBar patient={patient} onSave={() => alert('Saved')} onDiscard={() => navigate(-1)} />
      
//       <RecordSummaryCard summary={summary} />
      
//       {/* PASSING THE ID FROM PARAMS HERE */}
//       <DiagnosisEditor 
//         onAdd={addDiagnosis} 
//         patientId={id} 
//       />
      
//       {/* PASSING THE ID FROM PARAMS HERE TOO */}
//       <LabResults 
//         onAdd={addLab} 
//         patientId={id} 
//         refreshKey={refreshKey} 
//       />
      
//       <AuditTrailPreview patientId={id} refreshKey={refreshKey} />
      
//       <FooterBar onBack={() => navigate('/patients')} />
//     </div>
//   )
// }
import { useEffect, useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { getBundleById } from '../data/db'
import HeaderBar from '../components/HeaderBar'
import RecordSummaryCard from '../components/RecordSummaryCard'
import LabResults from '../components/LabResults'
import DiagnosisEditor from '../components/DiagnosisEditor'
import AuditTrailPreview from '../components/AuditTrailPreview'
import FooterBar from '../components/FooterBar'

export default function PatientOverview() {
  const { id } = useParams() // THIS GETS THE ID FROM THE URL
  const navigate = useNavigate()
  const location = useLocation()

  const [refreshKey, setRefreshKey] = useState(0)
  const triggerRefresh = () => setRefreshKey(prev => prev + 1)

  const passedData = location.state?.r
  const bundle = getBundleById(id) || getBundleById('P-10293')

  const [patient, setPatient] = useState(passedData ? {
    ...passedData,
    name: passedData.fullName,
    id: passedData.patientId
  } : bundle.patient)

  const [summary, setSummary] = useState(passedData ? {
    ...bundle.summary,
    primaryDiagnosis: passedData.primaryDiagnosis,
    updatedAt: passedData.clinicalLastUpdated
  } : bundle.summary)

  const [diagnoses, setDiagnoses] = useState(bundle.diagnoses)
  const [labs, setLabs] = useState(bundle.labs)

  function addDiagnosis(item) {
    if (!item) return;
    setDiagnoses(d => [item, ...d])
    triggerRefresh()
  }

  function addLab(item) {
    if (!item) return;
    setLabs(l => [item, ...l])
    triggerRefresh()
  }

  return (
    <div className="space-y-4">
      <HeaderBar patient={patient} onSave={() => {}} onDiscard={() => navigate(-1)} />
      <RecordSummaryCard summary={summary} />
      
      {/* PASSING THE ID HERE */}
      <DiagnosisEditor 
        onAdd={addDiagnosis} 
        patientId={id} 
      />
      
      <LabResults 
        onAdd={addLab} 
        patientId={id} 
        refreshKey={refreshKey} 
      />
      
      <AuditTrailPreview patientId={id} refreshKey={refreshKey} />
      <FooterBar onBack={() => navigate('/patients')} />
    </div>
  )
}