import { Check, CheckCircle2 } from 'lucide-react';

const Packages = () => {
    const packages = [
        {
            badge: "Standar",
            name: "Paket Standar",
            price: "26.000",
            cents: ".000",
            dates: "Keberangkatan 2026 - 2027",
            textColor: "text-[#0F766E]",
            colorClass: "bg-[#007E80]",
            btnClass: "bg-[#007E80]",
            features: [
                "Hotel",
                "Tiket PP",
                "Transportasi",
                "Makan 3x sehari",
                "Pendamping"
            ]
        },
        {
            badge: "Paket Plus",
            name: "Paket Plus",
            price: "30.000",
            cents: ".000",
            dates: "Keberangkatan 2026 - 2027",
            textColor: "text-[#426ef0]",
            colorClass: "bg-[#426ef0]",
            btnClass: "bg-[#426ef0]",
            features: [
                { label: "Hotel", sub: "(dekat Masjidil Haram)" },
                "Tiket PP",
                "Transportasi full AC",
                "Makan 3x sehari",
                "Pendamping berpengalaman"
            ]
        },
        {
            badge: "Paket VIP",
            name: "Paket VIP",
            price: "35.000",
            cents: ".000",
            dates: "Keberangkatan 2026 - 2027",
            textColor: "text-[#4814a0]",
            colorClass: "bg-[#4814a0]",
            btnClass: "bg-[#4814a0]",
            features: [
                { label: "Hotel bintang 5", sub: "(dekat pintu Masjidil Haram)" },
                "Tiket PP",
                "Transportasi eksklusif",
                { label: "Makan premium", list: ["Makanan Intenasional", "Makanan Indonesia"] },
                "Pendamping senior"
            ]
        }
    ];

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
        <section id="paket" className="my-24 py-4 bg-[#9DECF0]/14">
            <div className="max-w-6xl mx-auto px-6 text-center mb-14" data-aos="fade-up">
                <h2 className="text-[36px] font-semibold text-[#0F766E] mb-3">
                    Paket Umroh Medist Mandiri
                </h2>
                <p className="text-[16px] text-black/80">
                    Pilih paket <span className="font-semibold">keberangkatan</span> sesuai kebutuhan Anda.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            className="bg-white rounded-[18px] p-8 flex flex-col
                            shadow-[0_30px_30px_rgba(0,0,0,0.18)]"
                        >
                            {/* Badge */}
                            <div className="mb-6">
                                <span
                                    className={`${pkg.colorClass} text-white px-4 py-2 rounded-[8px] text-[16px] font-medium`}
                                >
                                    {pkg.badge}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-[24px] font-medium text-black mb-4">
                                {pkg.name}
                            </h3>

                            {/* Price */}
                            <div className="flex items-end mb-1">
                                <span className={`text-[26px] font-medium mr-2 ${pkg.textColor}`}>
                                    Rp.
                                </span>

                                <span className={`text-[44px] font-medium leading-none ${pkg.textColor}`}>
                                    {pkg.price}
                                </span>

                                <span className={`text-[24px] font-medium ml-1 ${pkg.textColor}`}>
                                    {pkg.cents}
                                </span>
                            </div>

                            <p className="text-gray-500 text-[13px] mb-8 font-light">
                                {pkg.dates}
                            </p>

                            {/* Features */}
                            <div className="space-y-3 mb-10 flex-grow">
                                {pkg.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check
                                            size={16}
                                            strokeWidth={1.6}
                                            className={`${pkg.textColor} mt-1 shrink-0`}
                                        />
                                        <div>
                                            {typeof feature === "string" ? (
                                                <p className="text-[14px] text-gray-700 leading-[1.4]">
                                                    {feature}
                                                </p>
                                            ) : (
                                                <div className="space-y-1">
                                                    <p className="text-[14px] text-gray-700">
                                                        {feature.label}
                                                    </p>
                                                    {feature.sub && (
                                                        <p className="text-[12px] text-gray-500">
                                                            {feature.sub}
                                                        </p>
                                                    )}
                                                    {feature.list && (
                                                        <ul className="text-[12px] text-gray-500 mt-1 space-y-1">
                                                            {feature.list.map((item, idx) => (
                                                                <li key={idx}>• {item}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={scrollToContact}
                                className={`${pkg.colorClass} text-white py-2 rounded-[8px] text-[14px] font-medium w-full transition-transform hover:scale-[1.02] active:scale-[0.98] outline-none`}
                            >
                                Daftar Sekarang
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Bottom */}
            <div
                className="max-w-4xl mx-auto mt-20 
                bg-[#FFFFFF] 
                rounded-[12px] 
                px-10 py-6 mb-6
                shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                flex flex-col md:flex-row 
                items-center justify-between 
                gap-6"
            >
                <div className="text-center md:text-left">
                    <p className="text-[18px] font-medium text-gray-800 leading-snug">
                        Ingin konsultasi atau tanya
                    </p>
                    <p className="text-[18px] font-medium text-gray-800 leading-snug">
                        ketersediaan tempat?
                    </p>
                </div>

                <button
                    onClick={scrollToContact}
                    className="flex items-center gap-3 
                    bg-[#0F766E] 
                    hover:bg-[#0d6b63]
                    transition-all duration-200
                    text-white 
                    px-8 py-4 
                    rounded-[12px] 
                    text-[16px] font-semibold hover:scale-[1.05] active:scale-[0.95] outline-none"
                >
                    <img
                        src="./images/particle/whatsapp.png"
                        alt="WhatsApp"
                        className="w-5 h-5 object-contain"
                    />
                    Hubungi Via WhatsApp
                </button>
            </div>
        </section>
    );
};

export default Packages;
