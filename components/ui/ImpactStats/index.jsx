import SectionWrapper from "../../SectionWrapper";

const stats = [
  {
    value: "5+",
    label: "Countries Served",
    desc: "Supporting businesses across multiple African nations"
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    desc: "Committed to excellence in every project"
  },
  {
    value: "24/7",
    label: "Support",
    desc: "Always available to assist with your digital solutions"
  }
];

const ImpactStats = () => (
  <SectionWrapper>
    <div className="custom-screen max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">We Build Digital That Works</h2>
      <div className="grid gap-8 sm:grid-cols-3">
        {stats.map((s, i) => (
          <div key={i} className="p-6 border rounded-lg bg-white shadow-sm">
            <div className="text-3xl font-extrabold text-indigo-600 mb-2">{s.value}</div>
            <div className="text-lg font-semibold mb-1">{s.label}</div>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ImpactStats; 