import { MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const [activeSection, setActiveSection] = useState("home");

    const navLinks = [
        { name: "Home", path: "home" },
        { name: "Tentang", path: "tentang" },
        { name: "Paket Umroh", path: "paket" },
        { name: "Kontak", path: "kontak" },
    ];

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        // Show/hide logic
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);

        // Scroll spy logic
        const scrollPosition = window.scrollY + 100;
        navLinks.forEach((link) => {
            const section = document.getElementById(link.path);
            if (section) {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;
                if (scrollPosition >= top && scrollPosition < bottom) {
                    setActiveSection(link.path);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, activeSection]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            setIsOpen(false);
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] bg-[#f4f4f4]/95 backdrop-blur-md transition-all duration-300 ${visible ? 'translate-y-0 shadow-md' : '-translate-y-full'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('home')}
                        className="flex items-center gap-3 focus:outline-none group"
                    >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 transform transition-transform group-hover:scale-110">
                            <img src="./images/logo.png" alt="Medist Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-[#007E80] text-xl sm:text-2xl font-bold tracking-tight">
                            Medist Mandiri
                        </span>
                    </button>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.path)}
                                className={`relative text-[15px] lg:text-[16px] font-semibold transition-all duration-300 ${activeSection === link.path ? 'text-[#007E80]' : 'text-gray-500 hover:text-[#007E80]'
                                    } focus:outline-none py-2`}
                            >
                                {link.name}
                                {activeSection === link.path && (
                                    <span className="absolute left-0 bottom-0 w-full h-[2.5px] bg-[#007E80] rounded-full" />
                                )}
                            </button>
                        ))}

                        {/* WhatsApp Button Desktop */}
                        <button
                            onClick={() => scrollToSection('kontak')}
                            className="flex items-center gap-2 bg-[#007E80] hover:bg-[#0c7a7a] text-white px-5 lg:px-6 py-2.5 rounded-xl text-[15px] font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#007E80]/10"
                        >
                            <img src="./images/particle/whatsapp.png" alt="" className="w-5 h-5 invert brightness-0" />
                            WhatsApp
                        </button>
                    </div>

                    {/* Mobile Toggle (Hamburger) */}
                    <button
                        className="md:hidden text-[#007E80] p-2 focus:outline-none transition-colors hover:bg-[#007E80]/5 rounded-xl border border-[#007E80]/10"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed inset-x-0 top-[80px] bg-white shadow-2xl transition-all duration-500 ease-in-out border-b border-gray-100 ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible'
                    }`}
                style={{ height: 'calc(100vh - 80px)' }}
            >
                {/* Backdrop effect */}
                <div className="absolute inset-0 bg-[#007E80]/5 -z-10" />

                <div className="p-8 space-y-6 flex flex-col h-full bg-white">
                    <div className="space-y-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.path)}
                                className={`flex items-center justify-between w-full p-4 rounded-2xl text-left font-bold text-[18px] transition-all duration-300 ${activeSection === link.path
                                    ? 'bg-[#007E80] text-white shadow-lg shadow-[#007E80]/20'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                                {activeSection === link.path && <X className="rotate-45" size={18} />}
                            </button>
                        ))}
                    </div>

                    <div className="mt-auto pb-10">
                        <p className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-4 text-center">Butuh Bantuan?</p>
                        <button
                            onClick={() => scrollToSection('kontak')}
                            className="w-full flex items-center justify-center gap-3 bg-[#007E80] text-white py-5 rounded-[20px] font-bold text-lg shadow-xl shadow-[#007E80]/20 active:scale-[0.98] transition-all"
                        >
                            <img src="./images/particle/whatsapp.png" alt="" className="w-6 h-6 invert brightness-0" />
                            Hubungi via WhatsApp
                        </button>

                        <div className="mt-8 flex flex-col items-center gap-2">
                            <div className="w-12 h-12">
                                <img src="./images/logo.png" alt="Logo" className="w-full h-full object-contain opacity-50" />
                            </div>
                            <p className="text-gray-300 text-[12px] font-bold">PT. Medist Mandiri Travel</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
