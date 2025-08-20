import Link from "next/link";

const Brand = () => (
    <Link href="/">
        <img
            src="/logohc.png" // Replace with your logo file if available, e.g. /helpingcloud.svg
            width={120}
            height={50}
            alt="Helping Cloud logo"
        />
    </Link>
)
export default Brand