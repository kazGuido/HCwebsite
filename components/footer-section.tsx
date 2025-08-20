"use client"

import { Twitter, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
      {/* Left Section: Logo, Description, Social Links */}
      <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
        <div className="flex gap-3 items-stretch justify-center">
          <div className="text-center text-foreground text-xl font-semibold leading-4">HelpingCloud</div>
        </div>
        <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">Building Your Digital Future</p>
        <div className="flex justify-start items-start gap-3">
          <a href="#" aria-label="Twitter" className="w-4 h-4 flex items-center justify-center">
            <Twitter className="w-full h-full text-muted-foreground" />
          </a>
          <a href="#" aria-label="GitHub" className="w-4 h-4 flex items-center justify-center">
            <Github className="w-full h-full text-muted-foreground" />
          </a>
          <a href="#" aria-label="LinkedIn" className="w-4 h-4 flex items-center justify-center">
            <Linkedin className="w-full h-full text-muted-foreground" />
          </a>
        </div>
      </div>
      {/* Right Section: Services, Company, Resources */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-4 md:p-8 w-full md:w-auto">
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Services</h3>
          <div className="flex flex-col justify-end items-start gap-2">
            <Link href="/products#web-apps" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Web Applications
            </Link>
            <Link href="/products#mobile-apps" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Mobile Apps
            </Link>
            <Link href="/products#saas" className="text-foreground text-sm font-normal leading-5 hover:underline">
              SaaS Platforms
            </Link>
            <Link href="/products#api" className="text-foreground text-sm font-normal leading-5 hover:underline">
              API Development
            </Link>
            <Link href="/products#cloud" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Cloud Solutions
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Company</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <Link href="#about" className="text-foreground text-sm font-normal leading-5 hover:underline">
              About us
            </Link>
            <Link href="#core-values" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Core Values
            </Link>
            <Link href="/products#mission" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Our Mission
            </Link>
            <Link href="/products#local" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Local Focus
            </Link>
            <Link href="/book-call" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Resources</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <Link href="/request-demo" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Request Demo
            </Link>
            <Link href="/get-started" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Get Started
            </Link>
            <Link href="/confidentiality" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/data-deletion" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Data Deletion
            </Link>
            <Link href="/products#impact" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Impact Stats
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
