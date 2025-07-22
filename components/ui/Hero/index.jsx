import NavLink from "../NavLink"

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    Building the Future of Digital Operations in Africa
                </h1>
                <p className="max-w-xl mx-auto">
                    Helping Cloud delivers smart, scalable digital solutions that tackle real-world challenges in logistics, commerce, and enterprise management across Africa.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/book-call"
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
                    >
                        Book a Discovery Call
                    </NavLink>
                    <NavLink
                        href="/request-demo"
                        className="text-gray-700 border hover:bg-gray-50"
                    >
                        Request a Demo
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero