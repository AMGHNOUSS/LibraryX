import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href='/'>
                        <Image
                            src='/logo.png'
                            alt='logo libraryx'
                            width={120}
                            height={52}
                        />
                    </Link>
                    <div className="flex space-x-6">
                        <ul className="hidden md:flex gap-x-6 text-white items-center">
                            <li>
                                <Link href="/">
                                    <p className="text-Primary_color">Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <p>About Us</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contacts">
                                    <p>Contacts</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center space-x-6 ">
                        Sign up
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar