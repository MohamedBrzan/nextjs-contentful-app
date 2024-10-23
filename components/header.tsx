import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-3xl font-bold">
                    <Link className="hover:text-gray-300 transition duration-300" href="/">
                        APPOUT
                    </Link>
                </div>
                <nav className="space-x-6">
                    <Link className="hover:text-gray-300 transition duration-300" href="/about">
                       About
                    </Link>
                    <Link className="hover:text-gray-300 transition duration-300" href="/projects">
                       projects
                    </Link>
                </nav>
            </div>
        </header>
    );
}
