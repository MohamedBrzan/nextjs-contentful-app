export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-8">
            <div className="container mx-auto text-center">
                <div className="mb-4 text-2xl font-bold hover:text-gray-300">
                    APPOUT
                </div>
                <div className="mb-6 space-x-4">
                    <a href="/about" className="hover:text-gray-300 transition duration-300">About</a>
                    <a href="/projects" className="hover:text-gray-300 transition duration-300">Projects</a>
                </div>
                <div className="text-gray-400">
                    &copy; {new Date().getFullYear()} BeautyBrand. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
