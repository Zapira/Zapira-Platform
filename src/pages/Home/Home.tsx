import HeroBg from '../../assets/Hero.png';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section (navbar + hero content) */}
            <section
                className="bg-cover bg-center text-white"
                style={{ backgroundImage: `url(${HeroBg})` }}
            >
                {/* Navbar */}
                <nav className="px-8 py-4">
                    <ul className="flex space-x-4">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

                {/* Hero Content */}
                <div className="h-[60vh] flex items-center justify-center px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Selamat Datang di Zapira</h1>
                        <p className="text-lg">Solusi WhatsApp Blasting Gratis dan Efisien</p>
                    </div>
                </div>
            </section>

            {/* Konten Lain */}
            <main className="flex-grow px-8 py-12">
                {/* Konten lainnya di sini */}
                <p>Ini adalah konten utama di luar Hero.</p>
            </main>

            {/* Footer */}
            <footer className="bg-gray-100 text-center p-4">
                &copy; 2025 Zapira
            </footer>
        </div>
    );
}
