import HeroBg from '../../assets/Hero.png';
import Navbar from '../../components/Shared/Navbar';
import Hero from './Sections/Hero';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section (navbar + hero content) */}
            <section
                className="bg-cover bg-center text-white"
                style={{ backgroundImage: `url(${HeroBg})` }}
            >
                {/* Navbar */}
                <Navbar />

                <Hero></Hero>
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
