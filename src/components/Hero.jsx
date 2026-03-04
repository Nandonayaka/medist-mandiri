const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('kontak');
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="relative min-h-[600px] flex items-center overflow-hidden pt-20">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0" data-aos="fade-in">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 w-full md:w-1/2"></div>
                <img
                    src="./images/hero.png"
                    alt="Kaaba Background"
                    className="w-full h-full object-cover object-right grayscale-[0.2] opacity-90"
                />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-20">
                <div className="max-w-xl py-20 px-4 md:px-0" data-aos="fade-right">
                    <h1 className="text-[48px] md:text-[48px] font-bold text-[#007E80] leading-[1.1] mb-5">
                        Umroh Nyaman <br />
                        & Terpercaya <br />
                        Bersama <br />
                        Medist Mandiri
                    </h1>
                    <p className="text-[18px] md:text-[18px] text-gray-800 font-semibold leading-relaxed mb-5 max-w-lg">
                        Perjalanan ibadah yang aman, terarah, dan sesuai tuntunan. Tanpa biaya tersembunyi.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-[3%]">
                        <button
                            onClick={scrollToContact}
                            className="bg-[#007E80] hover:bg-[#006666] text-white px-5 py-3 rounded-[9px] font-bold text-[16px] transition-all shadow-lg active:scale-95 outline-none"
                        >
                            Pesan Sekarang
                        </button>
                    </div>
                    <div className="">
                        <button
                            onClick={scrollToContact}
                            className="bg-white/80 backdrop-blur-sm border-2 border-[#007E80] text-[#007E80] px-8 py-3 rounded-[9px] font-bold text-[16px] transition-all hover:bg-white active:scale-95 outline-none"
                        >
                            Konsultasi via WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
