import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center bg-white p-5 shadow-sm fixed w-full z-50">
            <ul className="flex gap-3">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/destination'}>Destination</Link></li>
                <li><Link href={'/my-bookings'}>My Bookings</Link></li>
                <li><Link href={'/add-destination'}>Add Destination</Link></li>
            </ul>

            <div>
                <Image src={'/assets/Wanderlast.png'} alt={'Wanderlast'} width={150} height={150}></Image>
            </div>

            <ul className="flex gap-3">
                <li><Link href={'/profile'}>Profile</Link></li>
                <li><Link href={'/login'}>Login</Link></li>
                <li><Link href={'/signup'}>Sign Up</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;