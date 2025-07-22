import SectionWrapper from "../../SectionWrapper";

const values = [
  {
    title: "Innovation",
    desc: "Cutting-edge solutions designed specifically for African markets",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mb-3 text-gray-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c.414 0 .75.336.75.75v2.25a.75.75 0 01-1.5 0V3c0-.414.336-.75.75-.75zm0 16.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V19.5a.75.75 0 01.75-.75zm9-7.5a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H20.25a.75.75 0 01.75.75zm-16.5 0a.75.75 0 01-.75.75H2.25a.75.75 0 010-1.5H3a.75.75 0 01.75.75zm12.364-6.114a.75.75 0 011.06 1.06l-1.591 1.591a.75.75 0 11-1.06-1.06l1.591-1.591zm-9.192 9.192a.75.75 0 011.06 1.06l-1.591 1.591a.75.75 0 11-1.06-1.06l1.591-1.591zm9.192 1.591a.75.75 0 01-1.06 1.06l-1.591-1.591a.75.75 0 111.06-1.06l1.591 1.591zm-9.192-9.192a.75.75 0 01-1.06 1.06l1.591 1.591a.75.75 0 101.06-1.06L4.322 4.322zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
      </svg>
    )
  },
  {
    title: "Scalability",
    desc: "Systems that grow with your business from startup to enterprise",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mb-3 text-gray-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17.25V21h3.75M21 17.25V21h-3.75M12 3v18m0 0c-4.97 0-9-2.686-9-6V7.5c0-3.314 4.03-6 9-6s9 2.686 9 6V15c0 3.314-4.03 6-9 6z" />
      </svg>
    )
  },
  {
    title: "Partnership",
    desc: "We work alongside your team to co-create perfect-fit solutions",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mb-3 text-gray-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 10.5a4.5 4.5 0 019 0v1.125c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 11.625V10.5zm9 0V9a6 6 0 10-12 0v1.5m12 0a6 6 0 01-12 0m12 0v1.125c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 11.625V10.5" />
      </svg>
    )
  }
];

const CoreValues = () => (
  <SectionWrapper>
    <div className="custom-screen max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Core Values</h2>
      <div className="grid gap-8 sm:grid-cols-3">
        {values.map((v, i) => (
          <div key={i} className="p-6 border rounded-lg bg-white shadow-sm">
            {v.icon}
            <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
            <p className="text-gray-600">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default CoreValues; 