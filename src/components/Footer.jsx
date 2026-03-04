const Footer = () => {
    return (
        <footer className="bg-[#DFF7F9] py-10 font-['Poppins'] border-t border-cyan-100">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
                {/* Logo and Company Name */}
                <div className="mb-6 flex flex-col items-center">
                    <div className="w-20 h-20 mb-3 transform hover:scale-105 transition-transform duration-300">
                        <img
                            src="./images/logo.png"
                            alt="Medist Mandiri Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h2 className="text-[#0F766E] text-[24px] font-bold tracking-tight">
                        Medist Mandiri
                    </h2>
                </div>

                {/* Copyright & Privacy */}
                <div className="text-gray-500 text-[13px] font-medium  w-full max-w-md">
                    <p className="text-gray-600 text-[14px] font-medium">
                        Medist Mandiri Travel
                    </p>
                    © 2026. All rights reserved. | <a href="#" className="text-[#0F766E] hover:underline transition-all">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
