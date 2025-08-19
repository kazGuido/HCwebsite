import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import About from "../components/ui/About";
import CoreValues from "../components/ui/CoreValues";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>HelpingCloud - Building Your Digital Future</title>
        <meta name="description" content="HelpingCloud makes it simple for you to build and grow your SaaS applications, or any business idea. Expert development services for modern businesses." />
      </Head>
      <Hero />
      <About />
      <CoreValues />
      <LogoGrid />
      <GradientWrapper>
        <CTA />
      </GradientWrapper>
      <FooterCTA />
    </>
  );
}
