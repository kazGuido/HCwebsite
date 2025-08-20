import SectionWrapper from "../../SectionWrapper";

const focus = [
  {
    title: "Multi-Country Support",
    desc: "Deployment & onboarding support across digital and physical touchpoints in Côte d'Ivoire, Togo, Benin, Cameroon, and France"
  },
  {
    title: "Bilingual Expertise",
    desc: "French/English bilingual team ensuring smooth communication across francophone and anglophone regions"
  },
  {
    title: "Comprehensive Skill Set",
    desc: "In-house development, UX, ML/AI, and hardware integration expertise for end-to-end solution delivery"
  }
];

const LocalFocus = () => (
  <SectionWrapper>
    <div className="custom-screen max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Local Focus, Global Standards</h2>
      <div className="grid gap-8 sm:grid-cols-3">
        {focus.map((f, i) => (
          <div key={i} className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default LocalFocus; 