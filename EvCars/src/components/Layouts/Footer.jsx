import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <footer className="bg-white shadow dark:bg-gray-800">
                <div className="p-4 mx-auto max-w-screen-xl md:flex md:items-center md:justify-center md:p-6 text-center">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2025 <Link to="/" className="hover:underline">Electric Vehicles</Link>. All Rights Reserved.
                    </span>
                </div>
            </footer>
        </footer>
    )
}
