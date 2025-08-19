import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Brand from '../Brand'
import NavLink from '../NavLink'

const Navbar = () => {

    const [state, setState] = useState(false)
    const { events } = useRouter();

    const navigation = [
        { title: "About", path: "#about" },
        { title: "Core Values", path: "#core-values" },
        { title: "What We Offer", path: "#features" },
        { title: "Technologies", path: "#toolkit" },
        { title: "Local Focus", path: "#local-focus" },
        { title: "Mission", path: "#mission" },
        { title: "Impact", path: "#impact-stats" },
        { title: "Book a Call", path: "/book-call" },
        { title: "Request a Demo", path: "/request-demo" },
    ];

    const legalLinks = [
        { title: "Privacy Policy", path: "/confidentiality" },
        { title: "Data Deletion", path: "/data-deletion" },
    ];

    useEffect(() => {
        // Close the navbar menu when navigate
        const handleState = () => {
            document.body.classList.remove("overflow-hidden")
            setState(false)
        }
        events.on("routeChangeStart", () => handleState());
        events.on("hashChangeStart", () => handleState());
    }, [])

    const handleNavMenu = () => {
        setState(!state)
        document.body.classList.toggle("overflow-hidden")
    }

    return (
        <header>
            <nav className={`bg-white w-full md:static md:text-sm ${state ? "fixed z-10 h-full" : ""}`}>
                <div className="custom-screen items-center mx-auto md:flex">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Brand />
                        <div className="md:hidden">
                            <button role="button" aria-label="Open the menu" className="text-gray-500 hover:text-gray-800"
                                onClick={handleNavMenu}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block ${state ? "" : "hidden"}`}>
                        <ul className="text-gray-700 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 md:text-gray-600 md:font-medium">
                            {/* Mobile Legal Links */}
                            <li className="md:hidden">
                                <div className="border-t border-gray-200 pt-4 mt-4">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Legal</p>
                                    {
                                        legalLinks.map((item, idx) => {
                                            return (
                                                <Link
                                                    key={idx}
                                                    href={item.path}
                                                    className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                                                >
                                                    {item.title}
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </li>
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="duration-150 hover:text-gray-900">
                                            <Link
                                                href={item.path}
                                                className="block"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            <li className="relative group">
                                <button className="flex items-center duration-150 hover:text-gray-900">
                                    Legal
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    {
                                        legalLinks.map((item, idx) => {
                                            return (
                                                <Link
                                                    key={idx}
                                                    href={item.path}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    {item.title}
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </li>
                            <li>
                                <NavLink
                                    href="/get-started"
                                    className="block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 md:inline"
                                >
                                    Let's work
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar