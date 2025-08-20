import SectionWrapper from "../../SectionWrapper";

const services = [
  {
    title: "Integrated Logistics & B2B Commerce Systems",
    desc: "Custom digital backbones for supply chains and business networks. Real-time connections, full visibility, secure transactions.",
    features: [
      "Real-time tracking and delivery workflows",
      "Role-specific dashboards (vendors, transporters, admins)",
      "Integrated inventory + order management",
      "Conversation threads per order to ensure alignment",
      "API-ready for ERP & CRM systems"
    ]
  },
  {
    title: "Smart Queue & Service Management Solutions",
    desc: "Hybrid (digital + physical) queue systems for client service in utilities, banks, hospitals, and public services.",
    features: [
      "Appointment booking via mobile, web, or on-location",
      "Ticketing & check-in with QR code or ID number",
      "Real-time updates, alerts, and automated reminders",
      "Performance dashboards for back-office and admin agents",
      "Built-in video session handling for remote appointments",
      "Interoperability with calendars, CRMs, and internal systems"
    ]
  },
  {
    title: "From B2B to B2C in One Ecosystem",
    desc: "Enable wholesale vendors to open branded retail experiences—online shops, inventory management, and last-mile delivery all powered by one backend.",
    features: [
      "Fast storefront creator on mobile",
      "Unified stock control between B2B & B2C orders",
      "Plug-and-play mobile payments",
      "Notification-driven job marketplace for last-mile drivers",
      "Seamless delivery flow with proof of delivery and instant payout"
    ]
  },
  {
    title: "Custom Web & Mobile Applications",
    desc: "We co-create systems that fit your unique process, not just platforms—problems solved.",
    features: [
      "Cross-platform web/mobile apps built in React, Vue, Flutter, and more",
      "Offline-first architecture with PWA and sync capability",
      "Secure gateways and multi-tenant access controls",
      "UX/UI tailored to users in African, urban & semi-urban settings",
      "Data visualization for reporting, KPIs, and decision-making"
    ]
  },
  {
    title: "Entrepreneur Enablement & Embedded Finance",
    desc: "Ecosystems that serve established businesses and incubate new ones. Embedded credit + starter kits lower barriers for first-time entrepreneurs.",
    features: [
      "Micro-credit & fintech integrations",
      "Starter inventories funded by verified lenders",
      "Full e-commerce stack deployment for new retailers",
      "Community mentorship, chat support, and analytics"
    ]
  }
];

const Features = () => (
  <SectionWrapper>
    <div id="features" className="custom-screen text-gray-600">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">What We Offer</h2>
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <li key={idx} className="p-6 border rounded-lg bg-white shadow-sm flex flex-col">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">{service.title}</h3>
            <p className="mb-3 text-gray-700">{service.desc}</p>
            <ul className="text-left list-disc list-inside text-sm text-gray-600 space-y-1 flex-1">
              {service.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </SectionWrapper>
);

export default Features;