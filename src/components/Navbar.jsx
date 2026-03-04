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
            className={`fixed top-0 left-0 right-0 z-50 bg-[#f4f4f4] transition-transform duration-300 ${visible ? 'translate-y-0 shadow-sm' : '-translate-y-full'
                }`}
        >
            <div className=" mx-auto px-3 lg:px-5">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('home')}
                        className="flex items-center gap-4 focus:outline-none"
                    >
                        <div className="w-12 h-12">
                            <img src="./images/logo.png" alt="" />
                        </div>
                        <span className="text-[#007E80] text-2xl font-semibold tracking-tight">
                            Medist Mandiri
                        </span>
                    </button>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.path)}
                                className={`relative text-[16px] font-semibold transition text-[#007E80] hover:text-[#0c7a7a] focus:outline-none`}
                            >
                                {link.name}
                                {activeSection === link.path && (
                                    <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#007E80]" />
                                )}
                            </button>
                        ))}

                        {/* WhatsApp Button */}
                        <button
                            onClick={() => scrollToSection('kontak')}
                            className="flex items-center gap-3 bg-[#007E80] hover:bg-[#0c7a7a] text-white px-7 py-3 rounded-[10px] text-base font-semibold transition focus:outline-none"
                        >
                            <img src="./images/particle/whatsapp.png" alt="" />
                            WhatsApp
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-[#007E80] focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-6 space-y-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.path)}
                                className={`block w-full text-left font-medium text-lg focus:outline-none ${activeSection === link.path ? 'text-[#007E80]' : 'text-[#007E80]/70'
                                    }`}
                            >
                                {link.name}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('kontak')}
                            className="w-full text-center bg-[#007E80] text-white py-3 rounded-full font-medium focus:outline-none"
                        >
                            WhatsApp
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
