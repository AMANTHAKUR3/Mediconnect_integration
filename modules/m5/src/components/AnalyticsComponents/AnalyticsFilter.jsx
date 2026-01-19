// import React, { useState } from 'react';

// function AnalyticsFilter({
//   defaultValues = {
//     period: '6m',
//     patientType: 'all',
//     department: 'all',
//     metric: 'all',
//   },
//   onApply, // (filters) => void
//   onChange, // optional: ({ name, value, allValues }) => void
// }) {
//   const [filters, setFilters] = useState(defaultValues);

//   const PERIOD_OPTIONS = [
//     { value: '6m', label: 'Last 6 Months' },
//     { value: '12m', label: 'Last 12 Months' },
//   ];

//   const PATIENT_OPTIONS = [
//     { value: 'all', label: 'All Patients' },
//     { value: 'in', label: 'In Patients' },
//     { value: 'out', label: 'Out Patients' },
//   ];

//   const DEPARTMENT_OPTIONS = [
//     { value: 'all', label: 'All Departments' },
//     { value: 'cardiology', label: 'Cardiology' },
//     { value: 'neurology', label: 'Neurology' },
//   ];

//   const METRIC_OPTIONS = [
//     { value: 'all', label: 'All Metrics' },
//     { value: 'recovery', label: 'Recovery' },
//     { value: 'readmission', label: 'Readmission' },
//   ];

//   const handleChange = (name) => (e) => {
//     const value = e.target.value;
//     const next = { ...filters, [name]: value };
//     setFilters(next);
//     onChange?.({ name, value, allValues: next });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onApply?.(filters);
//   };

//   const handleReset = () => {
//     setFilters(defaultValues);
//     onChange?.({ name: 'reset', value: null, allValues: defaultValues });
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-4 rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-4 gap-4"
//       aria-label="Analytics filters"
//     >
//       {/* Period */}
//       <label className="text-sm font-medium text-gray-700" htmlFor="period">
//         Period
//       </label>
//       <select
//         id="period"
//         className="border rounded-lg p-2 text-sm"
//         value={filters.period}
//         onChange={handleChange('period')}
//       >
//         {PERIOD_OPTIONS.map(opt => (
//           <option key={opt.value} value={opt.value}>{opt.label}</option>
//         ))}
//       </select>

//       {/* Patient Type */}
//       <label className="text-sm font-medium text-gray-700" htmlFor="patientType">
//         Patient Type
//       </label>
//       <select
//         id="patientType"
//         className="border rounded-lg p-2 text-sm"
//         value={filters.patientType}
//         onChange={handleChange('patientType')}
//       >
//         {PATIENT_OPTIONS.map(opt => (
//           <option key={opt.value} value={opt.value}>{opt.label}</option>
//         ))}
//       </select>

//       {/* Department */}
//       <label className="text-sm font-medium text-gray-700" htmlFor="department">
//         Department
//       </label>
//       <select
//         id="department"
//         className="border rounded-lg p-2 text-sm"
//         value={filters.department}
//         onChange={handleChange('department')}
//       >
//         {DEPARTMENT_OPTIONS.map(opt => (
//           <option key={opt.value} value={opt.value}>{opt.label}</option>
//         ))}
//       </select>

//       {/* Metric */}
//       <label className="text-sm font-medium text-gray-700" htmlFor="metric">
//         Metric
//       </label>
//       <select
//         id="metric"
//         className="border rounded-lg p-2 text-sm"
//         value={filters.metric}
//         onChange={handleChange('metric')}
//       >
//         {METRIC_OPTIONS.map(opt => (
//           <option key={opt.value} value={opt.value}>{opt.label}</option>
//         ))}
//       </select>

//       {/* Actions */}
//       <div className="md:col-span-4 flex items-center gap-2 pt-2">
//         <button
//           type="submit"
//           className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700"
//         >
//           Apply
//         </button>
//         <button
//           type="button"
//           onClick={handleReset}
//           className="border text-sm px-4 py-2 rounded-lg hover:bg-gray-50"
//         >
//           Reset
//         </button>
//       </div>
//     </form>
//   );
// }

// export default AnalyticsFilter;





import React, { useState } from 'react';

function AnalyticsFilter({
  defaultValues = {
    period: '6m',
    patientType: 'all',
    department: 'all',
    metric: 'all',
  },
  onApply,
  onChange,
}) {
  const [filters, setFilters] = useState(defaultValues);

  const PERIOD_OPTIONS = [
    { value: '6m', label: 'Last 6 Months' },
    { value: '12m', label: 'Last 12 Months' },
  ];

  const PATIENT_OPTIONS = [
    { value: 'all', label: 'All Patients' },
    { value: 'in', label: 'In Patients' },
    { value: 'out', label: 'Out Patients' },
  ];

  const DEPARTMENT_OPTIONS = [
    { value: 'all', label: 'All Departments' },
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'neurology', label: 'Neurology' },
  ];

  const METRIC_OPTIONS = [
    { value: 'all', label: 'All Metrics' },
    { value: 'recovery', label: 'Recovery' },
    { value: 'readmission', label: 'Readmission' },
  ];

  const handleChange = (name) => (e) => {
    const value = e.target.value;
    const next = { ...filters, [name]: value };
    setFilters(next);
    onChange?.({ name, value, allValues: next });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onApply?.(filters);
  };

  const handleReset = () => {
    setFilters(defaultValues);
    onChange?.({ name: 'reset', value: null, allValues: defaultValues });
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Analytics filters"
      className="
        relative
        bg-white
        p-5 md:p-6
        rounded-2xl
        shadow-sm
        ring-1 ring-[#1DB1A2]/15
        grid grid-cols-1 md:grid-cols-4 gap-4
      "
    >
      {/* Decorative top border using accent color */}
      <div className="absolute -top-0 left-0 right-0 h-1 rounded-t-2xl bg-[#1DB1A2]" aria-hidden="true" />

      {/* Period */}
      <label className="text-sm font-semibold " htmlFor="period">
        Period
      </label>
      <select
        id="period"
        className="
          border border-[#1DB1A2]/30
          rounded-lg
          p-2.5
          text-sm
          bg-white
          shadow-inner
          focus:outline-none
          focus:ring-2 focus:ring-[#1DB1A2]
          focus:border-[#1DB1A2]
          hover:border-[#1DB1A2]/60
          cursor-pointer
        "
        value={filters.period}
        onChange={handleChange('period')}
      >
        {PERIOD_OPTIONS.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      {/* Patient Type */}
      <label className="text-sm font-semibold" htmlFor="patientType">
        Patient Type
      </label>
      <select
        id="patientType"
        className="
          border border-[#1DB1A2]/30
          rounded-lg
          p-2.5
          text-sm
          bg-white
          shadow-inner
          focus:outline-none
          focus:ring-2 focus:ring-[#1DB1A2]
          focus:border-[#1DB1A2]
          hover:border-[#1DB1A2]/60
          cursor-pointer
        "
        value={filters.patientType}
        onChange={handleChange('patientType')}
      >
        {PATIENT_OPTIONS.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      {/* Department */}
      <label className="text-sm font-semibold " htmlFor="department">
        Department
      </label>
      <select
        id="department"
        className="
          border border-[#1DB1A2]/30
          rounded-lg
          p-2.5
          text-sm
          bg-white
          shadow-inner
          focus:outline-none
          focus:ring-2 focus:ring-[#1DB1A2]
          focus:border-[#1DB1A2]
          hover:border-[#1DB1A2]/60
          cursor-pointer
        "
        value={filters.department}
        onChange={handleChange('department')}
      >
        {DEPARTMENT_OPTIONS.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      {/* Metric */}
      <label className="text-sm font-semibold" htmlFor="metric">
        Metric
      </label>
      <select
        id="metric"
        className="
          border border-[#1DB1A2]/30
          rounded-lg
          p-2.5
          text-sm
          bg-white
          shadow-inner
          focus:outline-none
          focus:ring-2 focus:ring-[#1DB1A2]
          focus:border-[#1DB1A2]
          hover:border-[#1DB1A2]/60
          cursor-pointer
        "
        value={filters.metric}
        onChange={handleChange('metric')}
      >
        {METRIC_OPTIONS.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      {/* Actions */}
      <div className="md:col-span-4 flex items-center gap-3 pt-2">
        <button
          type="submit"
          className="
            inline-flex items-center justify-center
            bg-[#1DB1A2]
            text-white
            text-sm font-semibold
            px-4 py-2.5
            rounded-lg
            shadow-sm
            hover:bg-[#1DB1A2]/90
            active:bg-[#1DB1A2]/80
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DB1A2]
            transition-colors
            cursor-pointer
          "
        >
          Apply
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="
            inline-flex items-center justify-center
            border border-[#aa4a3a]
            text-[#aa4a3a]
            text-sm font-semibold
            px-4 py-2.5
            rounded-lg
            hover:bg-[#aa4a3a]/10
            active:bg-[#aa4a3a]/15
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#aa4a3a]
            transition-colors
            cursor-pointer
          "
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default AnalyticsFilter;

