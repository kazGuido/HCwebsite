import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import Features from "../components/ui/Features";
import ToolKit from "../components/ui/ToolKit";
import LocalFocus from "../components/ui/LocalFocus";
import Mission from "../components/ui/Mission";
import ImpactStats from "../components/ui/ImpactStats";
import CTA from "../components/ui/CTA";

export default function Products() {
  return (
    <>
      <Head>
        <title>Our Products & Services - HelpingCloud</title>
        <meta name="description" content="Explore our comprehensive range of products and services. From web applications to mobile apps, we deliver cutting-edge solutions for your business needs." />
      </Head>
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Products & Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive solutions designed to transform your business and drive growth
            </p>
          </div>
        </div>

        {/* Services Overview */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From concept to deployment, we provide end-to-end solutions that help businesses 
                innovate, scale, and succeed in the digital landscape.
              </p>
            </div>
            <Features />
          </div>
        </div>

        {/* Technologies */}
        <div className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ToolKit />
          </div>
        </div>

        {/* Local Focus */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <LocalFocus />
          </div>
        </div>

        {/* Mission */}
        <div className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Mission />
          </div>
        </div>

        {/* Impact Stats */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ImpactStats />
          </div>
        </div>

        {/* CTA */}
        <GradientWrapper>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <CTA />
          </div>
        </GradientWrapper>
      </div>
    </>
  );
}
