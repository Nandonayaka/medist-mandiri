import { ShieldCheck, Tag, UserCheck, Users, CalendarDays, ReceiptText, Building2, UserRoundCheck, Tags, CalendarCheck } from 'lucide-react';

const Features = () => {
    const highlights = [
        { name: "Berizin", icon: <ShieldCheck className="w-[26px] h-[26px] text-[#007E80]" /> },
        { name: "Harga Transparan", icon: <Tag className="w-[26px] h-[26px] text-[#007E80]" /> },
        { name: "Pendamping Berpengalaman", icon: <UserCheck className="w-[26px] h-[26px] text-[#007E80]" /> },
        { name: "Fasilitas Hotel Nyata", icon: <Building2 className="w-[26px] h-[26px] text-[#007E80]" /> },
    ];

    const whyChooseUs = [
        {
            title: "Fasilitas Hotel Nyata",
            desc: "Hotel dekat Masjidil Haram dan Masjid Nabawi, sesuai yang dijanjikan saat pendaftaran.",
            icon: <Building2 className="w-19 h-19 text-[#007E80]" strokeWidth={1} />
        },
        {
            title: "Pendamping Berpengalaman",
            desc: "Pembimbing ibadah yang mendampingi sejak keberangkatan hingga kembali ke tanah air.",
            icon: <UserRoundCheck className="w-[76px] h-[76px] text-[#007E80]" strokeWidth={1} />,
            active: true
        },
        {
            title: "Harga Transparan",
            desc: "Tidak ada biaya tambahan tersembunyi. Semua fasilitas dijelaskan sejak awal.",
            icon: <Tags className="w-[76px] h-[76px] text-[#007E80]" strokeWidth={1} />
        },
        {
            title: "Keberangkatan Terjadwal",
            desc: "Jadwal pemberangkatan yang jelas dan tidak berubah-ubah tanpa alasan.",
            icon: <CalendarCheck className="w-[76px] h-[76px] text-[#007E80]" strokeWidth={1} />
        }
    ];

    return (
        <div className="w-full">
            {/* Teal Highlights Bar */}
            <div className="bg-[#007E80] py-6 md:py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-12 items-center justify-items-center">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-white text-center sm:text-left group w-full justify-center sm:justify-start"
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                <div className="bg-white/10 sm:bg-white p-3 sm:p-3.5 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white flex-shrink-0">
                                    <div className="sm:text-inherit text-white sm:block hidden">
                                        {item.icon}
                                    </div>
                                    <div className="sm:hidden block invert brightness-0 scale-90">
                                        {item.icon}
                                    </div>
                                </div>
                                <span className="text-[14px] sm:text-[18px] md:text-xl font-bold tracking-tight leading-tight max-w-[120px] sm:max-w-none">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <section id="tentang" className="py-16 md:py-24 bg-[#fffffff]">
                <div className="max-w-6xl mx-auto px-6 text-center mb-12 md:mb-16" data-aos="fade-up">
                    <h2 className="text-[28px] md:text-[32px] font-semibold text-[#0f7c7c] mb-4">
                        Kenapa Memilih Medist Mandiri?
                    </h2>

                    <p className="text-[16px] md:text-[18px] max-w-3xl mx-auto leading-relaxed px-4 md:px-24">
                        Layanan yang <span className="font-medium text-black">dirancang</span> untuk memastikan perjalanan ibadah lebih tenang, jelas, dan aman.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                        {whyChooseUs.map((card, idx) => (
                            <div
                                key={idx}
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                                className="
                                group
                                bg-white
                                rounded-[25px]
                                border border-gray-200
                                flex flex-col items-center justify-center
                                text-center
                                transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
                                shadow-[0_8px_30px_rgba(0,0,0,0.02)]
                                hover:shadow-[0_30px_70px_rgba(15,124,124,0.12)]
                                hover:-translate-y-3
                                hover:border-[#0f7c7c]/15
                                w-full
                                h-full
                                min-h-[300px]
                                p-10
                            "
                            >
                                <div className="mb-6 flex-shrink-0 transition-transform duration-700 ease-in-out group-hover:scale-110">
                                    <div className="text-[#0f7c7c]/70 group-hover:text-[#0f7c7c] transition-colors duration-500">
                                        {card.icon}
                                    </div>
                                </div>

                                <div className="flex-grow flex flex-col justify-center transition-all duration-500">
                                    <h3 className="text-[18px] font-semibold text-[#007E80]/80 group-hover:text-[#0c7a7a] transition-colors duration-500 mb-3 tracking-tight">
                                        {card.title}
                                    </h3>

                                    <p className="text-gray-400 group-hover:text-gray-500 text-[15px] leading-relaxed transition-colors duration-500">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
