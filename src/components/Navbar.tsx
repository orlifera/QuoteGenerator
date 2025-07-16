import Image from "next/image";
import Link from "next/link";
import Switch from "./Switch";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-muted w-full p-8">
            {/* Logo */}

            {/* Links centrati */}
            <ul className='flex w-full flex-row gap-6 justify-center items-center'>
                <li className="absolute items-center left-0">
                    <Image
                        src={"/logo.png"}
                        className='invert dark:invert-0'
                        alt="Logo"
                        width={150}
                        height={150}
                    />
                </li>
                <li>
                    <Link
                        target='_blank'
                        href="https://editor.flazio.com/?l=it&kse=bWx0ZWNoLnN0b3JlLS02ODg4NDEtLTUyMTg1NS0tOWMwY2FiZWQ2MjY1NjUyMGYwZTc0NTdmYTYxM2Y0MjQ=&opsPid=211844771834"
                        className='p-4 bg-primary text-accent rounded hover:bg-accent-foreground focus:outline-blue-900'
                    >
                        Portale ML Tech
                    </Link>
                </li>
                <li>
                    <Link
                        target='_blank'
                        className='p-4 bg-primary text-accent rounded hover:bg-accent-foreground'
                        href="https://mail.flazio.com/mail/?_task=mail&_mbox=INBOX"
                    >
                        Mail
                    </Link>
                </li>
                <li className="absolute items-center right-10">
                    <Switch />

                </li>
            </ul>

            {/* Switch */}
        </nav>
    )
}