import { useState } from "react";
import { Phone, MapPin, Clock, MessageCircle, X, User, ChevronRight, ShieldCheck } from "lucide-react";

const CONTACT_NUMBERS = [
    {
        label: "Customer Service 1",
        name: "Nandun",
        number: "6285142514522"
    },
    {
        label: "Customer Service 2",
        name: "Hilmun",
        number: "6282143506574"
    }
];

const Contact = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null); 

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        package: "Paket Standar",
        note: ""
    });

    const [error, setError] = useState("");

    const openModal = (type) => {
        setModalType(type);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalType(null);
        setError("");
    };

    const handleSend = (number) => {
        if (modalType === "form") {
            if (!formData.name || !formData.phone) {
                setError("Mohon isi Nama dan Nomor WhatsApp Anda");
                return;
            }

            const message = `Halo Medist Mandiri,
                Saya ${formData.name} ingin bertanya tentang:
                Paket: ${formData.package}
                No. WA: ${formData.phone}
                Catatan: ${formData.note || "-"}

                Terima kasih.`;

            const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        } else {
            const message = "Halo Medist Mandiri, Saya ingin bertanya";
            const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        }
        closeModal();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        if (!formData.name || !formData.phone) {
            setError("Mohon lengkapi Nama dan Nomor WhatsApp Anda");
            return;
        }
        openModal("form");
    };

    return (
        <section id="kontak" className="py-16 md:py-28 font-['Poppins'] bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
                    <h2 className="text-[28px] md:text-[32px] font-bold text-[#0F766E] mb-4">
                        Hubungi Medist Mandiri
                    </h2>
                    <p className="text-gray-600 text-[15px] md:text-[16px]">
                        Tim kami siap membantu kebutuhan <span className="font-semibold text-black">perjalanan umroh</span> Anda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* LEFT CARD */}
                    <div className="bg-white rounded-[20px] p-6 sm:p-10 shadow-[0_15px_60px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col justify-between" data-aos="fade-right">
                        <div>
                            <h3 className="text-[24px] md:text-[28px] font-bold text-[#333] mb-8 md:mb-12">
                                PT. Medist Mandiri
                            </h3>

                            <div className="space-y-10">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1">
                                        <Phone size={22} className="text-[#0F766E]" />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="font-semibold text-gray-800 text-[16px] mb-3">
                                            Kontak Pribadi :
                                        </p>
                                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                                            <div className="flex items-center gap-2 text-gray-600 text-[14px]">
                                                <User size={16} className="text-gray-400" />
                                                087850609006
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 text-[14px]">
                                                <User size={16} className="text-gray-400" />
                                                085940446222
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="mt-1">
                                        <MapPin size={22} className="text-[#0F766E]" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800 text-[16px] mb-3">
                                            Alamat Kantor :
                                        </p>
                                        <p className="text-gray-600 text-[16px] leading-relaxed">
                                            Jl. Kabupaten No.56, Pamekasan
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <div className="border-t border-gray-100 pt-8 mb-8 flex items-center justify-center gap-2 text-gray-600">
                                <Clock size={20} className="text-[#0F766E]" />
                                <p className="text-[14px]">
                                    Jam Operasional : <span className="font-medium text-[#0F766E]">08.00 - 21.00 WIB</span>
                                </p>
                            </div>

                            <button
                                onClick={() => openModal("direct")}
                                className="w-full bg-[#0F766E] hover:bg-[#0d6b63] transition-all text-white py-2 rounded-[12px] font-semibold flex items-center justify-center gap-3 shadow-lg shadow-[#0F766E]/20"
                            >
                                <div className=" p-1.5 rounded-full">
                                    <img src="./images/particle/whatsapp.png" alt="WA" className="w-5 h-5 invert brightness-0" />
                                </div>
                                Hubungi Via WhatsApp
                            </button>
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="bg-white rounded-[20px] p-10 shadow-[0_15px_60px_rgba(0,0,0,0.06)] border border-gray-100" data-aos="fade-left">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[14px] font-medium text-gray-700 block mb-2">
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    placeholder="Masukkan nama.."
                                    value={formData.name}
                                    onChange={(e) => {
                                        setFormData({ ...formData, name: e.target.value });
                                        if (error) setError("");
                                    }}
                                    className={`w-full p-4 rounded-[10px] bg-[#fdfdfd] border ${error && !formData.name ? "border-red-400 ring-4 ring-red-50" : "border-gray-200"
                                        } focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E]/20 transition-all text-[15px]`}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[14px] font-medium text-gray-700 block mb-2">
                                    Nomor WhatsApp
                                </label>
                                <div className={`flex gap-0 border rounded-[10px] overflow-hidden transition-all ${error && !formData.phone ? "border-red-400 ring-4 ring-red-50" : "border-gray-200"
                                    } focus-within:border-[#0F766E] focus-within:ring-1 focus-within:ring-[#0F766E]/20`}>
                                    <div className="bg-gray-50 px-4 flex items-center gap-2 border-r border-gray-100 text-gray-500 font-medium text-[15px]">
                                        +62 <ChevronRight size={14} />
                                    </div>
                                    <input
                                        type="tel"
                                        placeholder="8xxxxxxxxxx"
                                        value={formData.phone}
                                        onChange={(e) => {
                                            setFormData({ ...formData, phone: e.target.value });
                                            if (error) setError("");
                                        }}
                                        className="w-full p-4 rounded-r-[10px] bg-[#fdfdfd] border-none focus:outline-none focus:ring-0 text-[15px]"
                                    />
                                </div>
                            </div>

                            {/* Selection field and Others remain unchanged but let's re-verify context */}
                            <div>
                                <label className="text-[14px] font-medium text-gray-700 block mb-2">
                                    Pilih paket umroh
                                </label>
                                <div className="relative">
                                    <select
                                        value={formData.package}
                                        onChange={(e) =>
                                            setFormData({ ...formData, package: e.target.value })
                                        }
                                        className="w-full p-4 rounded-[10px] bg-[#fdfdfd] border border-gray-200 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E]/20 transition-all appearance-none text-[15px] pr-10"
                                    >
                                        <option>Paket Standar</option>
                                        <option>Paket Plus</option>
                                        <option>Paket VIP</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <ChevronRight size={18} />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="text-[14px] font-medium text-gray-700 block mb-2">
                                    Catatan (Opsional)
                                </label>
                                <input
                                    type="text"
                                    placeholder="..."
                                    value={formData.note}
                                    onChange={(e) =>
                                        setFormData({ ...formData, note: e.target.value })
                                    }
                                    className="w-full p-4 rounded-[10px] bg-[#fdfdfd] border border-gray-200 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E]/20 transition-all text-[15px]"
                                />
                            </div>

                            {error && (
                                <div className="flex items-center gap-3 bg-red-50 border border-red-100 p-4 rounded-xl text-red-600 animate-in fade-in slide-in-from-top-2">
                                    <div className="bg-red-500 text-white rounded-full p-1 shrink-0">
                                        <X size={12} strokeWidth={3} />
                                    </div>
                                    <p className="text-[13px] font-bold">{error}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-[#0F766E] hover:bg-[#0d6b63] transition-all text-white py-3.5 rounded-[10px] font-semibold text-[16px] shadow-lg shadow-[#0F766E]/10 active:scale-[0.98]"
                            >
                                Dapatkan Informasi Lengkap
                            </button>

                            <p className="text-[12px] text-center text-gray-400 font-light mt-4">
                                Data Anda aman. Kami tidak akan membagikannya ke pihak lain.
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            {/* MODAL */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center z-[100] p-4 transition-all duration-300">
                    <div className="bg-white w-full max-w-[440px] rounded-[24px] overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
                        {/* Header Modal */}
                        <div className="bg-[#0F766E] p-8 text-white relative">
                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"
                            >
                                <X size={20} />
                            </button>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="bg-white/20 p-3 rounded-2xl">
                                    <MessageCircle size={28} />
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-bold">Pilih Customer Service</h3>
                                    <p className="text-white/70 text-[13px]">Kami siap melayani konsultasi Anda</p>
                                </div>
                            </div>
                        </div>

                        {/* List CS */}
                        <div className="p-6 space-y-4">
                            {CONTACT_NUMBERS.map((item) => (
                                <button
                                    key={item.number}
                                    onClick={() => handleSend(item.number)}
                                    className="group w-full flex items-center justify-between bg-gray-50 hover:bg-[#0F766E]/5 border border-gray-100 hover:border-[#0F766E]/20 p-5 rounded-[16px] transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4 text-left">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0F766E] group-hover:bg-[#0F766E] group-hover:text-white transition-all duration-300">
                                            <User size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[13px] text-gray-400 font-medium mb-0.5">{item.label}</p>
                                            <p className="text-[16px] font-bold text-gray-800">{item.name}</p>
                                        </div>
                                    </div>
                                    <div className="w-10 h-10 bg-white group-hover:bg-[#0F766E] rounded-full flex items-center justify-center text-gray-300 group-hover:text-white shadow-sm transition-all duration-300">
                                        <ChevronRight size={20} />
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="p-6 pt-0">
                            <p className="text-center text-[11px] text-gray-400 italic">
                                Klik salah satu kontak di atas untuk beralih ke WhatsApp
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;