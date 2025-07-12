export default function Hero() {
    return (
        <div className="max-w-screen-2xl flex items-center justify-between h-[60vh] mx-auto  px-6 sm:px-10 lg:px-14">

            {/* Kiri */}
            <div className="w-full lg:w-1/2 space-y-5 text-start">
                <h1 className="text-4xl font-bold leading-tight">
                    Zapira <br /> Whatsapp API
                </h1>
                <p className="text-lg">Solusi WhatsApp Blasting Gratis dan Efisien</p>
                <button className="px-5 py-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white rounded-md text-sm">
                    Coba gratis
                </button>
            </div>

            {/* Kanan */}
            <div className="hidden lg:flex w-1/2 justify-end gap-4 mt-28">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-gray-100 rounded-md p-5 text-center w-[140px] shadow-md text-black">
                        <div className="text-purple-600 text-3xl mb-2">🏢</div>
                        <h3 className="font-semibold mb-1">Service</h3>
                        <p className="text-sm text-gray-600">
                            Lorem ipsum dolor sit amet consectetur. Sit libero pellentesque
                        </p>
                    </div>
                ))}
            </div>

        </div>

    )
}