// const data = [
//   { disease: "Diabetes", rate: "14%" },
//   { disease: "Pneumonia", rate: "35%" },
//   { disease: "Heart Disease", rate: "60%" },
//   { disease: "COPD", rate: "35%" },
//   { disease: "Hypertension", rate: "14%" },
// ];

// export default function DiseaseAnalyticsTable() {
//   return (
//     <div className="bg-white p-4 rounded-xl shadow-sm">
//       <h2 className="text-sm font-semibold text-gray-700 mb-4">
//         Readmission Rate by Disease
//       </h2>

//       <div className="space-y-3">
//         {data.map((item) => (
//           <div key={item.disease}>
//             <div className="flex justify-between text-sm mb-1">
//               <span>{item.disease}</span>
//               <span className="font-medium">{item.rate}</span>
//             </div>
//             <div className="h-2 bg-gray-200 rounded-full">
//               <div
//                 className="h-2 bg-blue-500 rounded-full"
//                 style={{ width: item.rate }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




const data = [
  { disease: "Diabetes", rate: "14%" },
  { disease: "Pneumonia", rate: "35%" },
  { disease: "Heart Disease", rate: "60%" },
  { disease: "COPD", rate: "35%" },
  { disease: "Hypertension", rate: "14%" },
];

export default function DiseaseAnalyticsTable() {
  const PRIMARY = "#1DB1A2"; // teal
  const ACCENT  = "#aa4a3a"; // warm accent

  return (
    <div
      className="
        group relative rounded-xl border p-4 md:p-5
        bg-white shadow-sm transition-all duration-200
        hover:shadow-md hover:-translate-y-0.5
      "
      style={{
        backgroundImage: "linear-gradient(180deg, #ffffff, #f6fbfc)",
        borderColor: "#dbe5ef",
        boxShadow: "0 4px 20px -4px rgba(33, 45, 63, 0.08)",
      }}
    >
      {/* Accent strip on top */}
      <span
        className="absolute left-0 top-0 h-[2px] w-full rounded-t-xl"
        style={{ backgroundColor: PRIMARY }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-[#1f2a37]">
          Readmission Rate by Disease
        </h2>
        <span
          className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium"
          style={{
            color: ACCENT,
            borderColor: "rgba(29, 177, 162, 0.35)",
            backgroundColor: "rgba(29, 177, 162, 0.08)",
          }}
        >
          Latest
        </span>
      </div>

      {/* Rows */}
      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.disease}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-[#1f2a37]">{item.disease}</span>
              <span
                className="font-semibold"
                style={{ color: PRIMARY }}
              >
                {item.rate}
              </span>
            </div>

            {/* Progress bar */}
            <div className="h-2.5 bg-gray-200/70 rounded-full overflow-hidden">
              <div
                className="h-2.5 rounded-full transition-all duration-300"
                style={{
                  width: item.rate,                      // logic unchanged
                  background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})`,
                  boxShadow: `0 1px 4px ${PRIMARY}33`,
                }}
                aria-label={`${item.disease} ${item.rate}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer hint */}
      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="text-[#6b7f92]">
          Tip: percentages reflect monthly readmission distribution
        </span>
        <span
          className="inline-block h-1 w-10 rounded-full"
          style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})` }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
