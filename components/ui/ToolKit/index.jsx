import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";
import nextjs from "../../../public/icons/nextjs.svg";
import tailwind from "../../../public/icons/tailwind.svg";
import nodejs from "../../../public/icons/nodejs.svg";
import vercel from "../../../public/icons/vercel.svg";
import figma from "../../../public/icons/figma.svg";

const techs = [
  {
    icon: nextjs,
    title: "Modern Frontends",
    desc: "Built with Flutter, Vue.js, React.js for best-in-class user interfaces and mobile-first performance"
  },
  {
    icon: nodejs,
    title: "Resilient Backend Services",
    desc: "Node.js, Python, Laravel—microservices or monolith, we build what suits your scale"
  },
  {
    icon: tailwind,
    title: "Cloud-native Architecture",
    desc: "Fully scalable, secure, and modular systems for rapid deployment and long-term growth"
  },
  {
    icon: vercel,
    title: "Instant Communication",
    desc: "Real-time messaging via WebSockets or Firebase channels"
  },
  {
    icon: figma,
    title: "Offline-Ready PWAs",
    desc: "Mobile-first apps that work in areas with limited connectivity"
  },
  {
    icon: nextjs,
    title: "Third-Party Integration",
    desc: "SAP, Google Calendar, Twilio, Mobile Money APIs, SIRH, CRMs and more"
  },
  {
    icon: nodejs,
    title: "Data Security by Design",
    desc: "Secure hosting options (inc. sovereign cloud), role-based access, audit trails, and GDPR/NDPR practical compliance"
  }
];

const ToolKit = () => (
  <SectionWrapper>
    <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
      <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Technologies We Master
        </h2>
        <p>
          Cloud-native, secure, and modern—built for Africa, delivered to the world.
        </p>
      </div>
      <div className="mt-12">
        <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {techs.map((item, idx) => (
            <li key={idx} className="flex gap-x-4">
              <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                <Image src={item.icon} alt={item.title} />
              </div>
              <div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p className="mt-3">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default ToolKit;