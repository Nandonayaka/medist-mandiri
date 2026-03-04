import { ShieldCheck, Tag, UserCheck, Users, CalendarDays, ReceiptText, Building2, UserRoundCheck, Tags, CalendarCheck } from 'lucide-react';

const Features = () => {
    const highlights = [
        { name: "Berizin", icon: <ShieldCheck className="w-[26px] h-[26px] text-[#007E80]" /> },
        { name: "Harga Transparan", icon: <Tag className="w-[26px] h-[26px] text-[#007E80]" /> },
        { name: "Pendamping Berpengalaman", icon: <UserCheck className="w-[26px] h-[26px] text-[#007E80]" /> },
    ];

    const whyChooseUs = [
        {
            title: "Fasilitas Hotel Nyata",
            desc: "Hotel dekat Masjidil Haram dan Masjid Nabawi, sesuai yang dijanjikan saat pendaftaran.",
            icon: <Building2 className="w-[76px] h-[76px] text-[#007E80]" strokeWidth={1} />
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
            <div className="bg-[#007E80] py-4">
                <div className="container mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-5 text-white">
                            <div className="bg-white p-3 rounded-2xl flex items-center justify-center shadow-lg">
                                {item.icon}
                            </div>
                            <span className="text-xl font-bold tracking-tight">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us Section */}
            <section id="tentang" className="py-[40px] bg-[#fffffff]">
                <div className="max-w-6xl mx-auto px-6 text-center mb-[30px]" data-aos="fade-up">
                    <h2 className="text-[32px] font-semibold text-[#0f7c7c] mb-[14px]">
                        Kenapa Memilih Medist Mandiri?
                    </h2>

                    <p className="text-[18px] max-w-3xl mx-auto leading-relaxed px-[100px]">
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
                                border border-gray-300
                                flex flex-col items-center justify-center
                                text-center
                                transition-all duration-500 ease-out
                                shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                                hover:shadow-[0_25px_60px_rgba(15,124,124,0.15)]
                                hover:-translate-y-2
                                hover:border-[#0f7c7c]/20
                                w-full
                                h-full
                                min-h-[300px]
                                p-10
                            "
                            >
                                <div className="mb-6 flex-shrink-0">
                                    <div className="text-[#0f7c7c]/80 group-hover:text-[#0f7c7c] transition-colors duration-300 transform group-hover:scale-110">
                                        {card.icon}
                                    </div>
                                </div>

                                <div className="flex-grow flex flex-col justify-center">
                                    <h3 className="text-[18px] font-semibold text-[#007E80]/90 group-hover:text-[#0f7c7c] transition-colors duration-300 mb-3 tracking-tight">
                                        {card.title}
                                    </h3>

                                    <p className="text-gray-500 text-[16px] leading-relaxed font-reguler">
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
