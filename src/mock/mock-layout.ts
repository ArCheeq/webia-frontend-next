
export const mockLayout: IPage[] = [
    {
        id: 1,
        name: "Home Page",
        path: 'homepage',
        sections: [
            {
                id: 2,
                props: [
                    {
                        propName: "logoSrc",
                        propValue: 'https://img.icons8.com/?size=512&id=oiy2sWxAnP31&format=png',
                        propLabel: "Logo Source",
                        propType: "src"
                    },
                    {
                        propName: "logoAlt",
                        propValue: 'logo',
                        propLabel: "Logo Alternative Text",
                        propType: "alt"
                    },
                    {
                        propName: "brandName",
                        propValue: 'DevFlux',
                        propLabel: "Brand Name",
                        propType: "text"
                    },
                    {
                        propName: "navLinks",
                        propValue: [
                            { link: '#', text: 'Contacts' },
                            { link: '#', text: 'About Us' },
                            { link: '#', text: 'Gallery' }
                        ],
                        propLabel: "Navigation Link",
                        propType: "nav-links"
                    }
                ],
                code: `
                    ({ logoSrc, logoAlt, brandName, navLinks }) => {
                        return (
                            <header className="py-4 px-4 md:px-6 flex items-center justify-between border-b border-border bg-slate-950 backdrop-blur-sm sticky top-0 z-50">
                                <div className="flex items-center gap-3">
                                    <img src={logoSrc} alt={logoAlt} className="h-10 w-10 object-contain" />
                                    <motion.h1
                                      className="text-2xl font-bold text-neon"
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.5 }}
                                    >
                                        {brandName}
                                    </motion.h1>
                                </div>
                                <nav>
                                    <ul className="hidden md:flex gap-6">
                                        {navLinks.map((link, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                            >
                                                <a href={link.href} className="text-lg text-white  hover:text-[#0ff] transition-colors">
                                                    {link.text}
                                                </a>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </nav>
                                <style jsx="true">
                                {\`
                                    .text-neon {
                                        color: #0ff;
                                        text-shadow: 0 0 10px #0ff, 0 0 20px #0ff;
                                    }
                                \`}
                                </style>
                            </header>
                      );
                    };
                `,
            },
            {
                id: 3,
                props: [
                    {
                        propName: "title",
                        propLabel: "Title",
                        propType: "text",
                        propValue: "Supercharge Your Web Development Workflow"
                    },
                    {
                        propName: "subtitle",
                        propLabel: "Subtitle",
                        propType: "text",
                        propValue: "All-in-one browser extension combining essential development tools for inspecting, testing, debugging, and optimizing websites.",
                    },
                    {
                        propName: "buttonText",
                        propLabel: "Action Button Text",
                        propType: "text",
                        propValue: "Read More"
                    },
                    {
                        propName: "buttonHref",
                        propLabel: "Action Button Link",
                        propType: "href",
                        propValue: "#about"
                    },
                ],
                code: `
                    ({ title, subtitle, buttonText, buttonHref }) => {
                        return (
                            <section
                                className="py-20 px-4 md:px-6 flex flex-col items-center justify-center min-h-[80vh] relative flex flex-col items-center justify-center text-center text-white py-20 px-6 min-h-screen"
                       
                            >
                                <div className="absolute bg-slate-900 inset-0 absolute inset-0 z-0"></div>
                                <motion.h1
                                    className="text-5xl md:text-6xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    {title}
                                </motion.h1>
                                <motion.p
                                    className="mt-4 text-lg md:text-xl relative z-10 max-w-2xl"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                >
                                    {subtitle}
                                </motion.p>
                                <motion.a
                                    href={buttonHref}
                                    className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg rounded-lg shadow-lg hover:scale-105 transition-transform relative z-10"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    {buttonText}
                                </motion.a>
                            </section>
                        );
                    };
                `,
            },
        ]
    },
    {
        id: 4,
        name: "Home Page 2",
        path: 'homepage',
        sections: [
            {
                id: 5,
                props: [
                    {
                        propName: "logoSrc",
                        propValue: 'https://img.icons8.com/?size=512&id=oiy2sWxAnP31&format=png',
                        propLabel: "Logo Source",
                        propType: "src"
                    },
                    {
                        propName: "logoAlt",
                        propValue: 'logo',
                        propLabel: "Logo Alternative Text",
                        propType: "alt"
                    },
                    {
                        propName: "brandName",
                        propValue: 'DevFlux',
                        propLabel: "Brand Name",
                        propType: "text"
                    },
                    {
                        propName: "navLinks",
                        propValue: [
                            { link: '#', text: 'Contacts' },
                            { link: '#', text: 'About Us' },
                            { link: '#', text: 'Gallery' }
                        ],
                        propLabel: "Ссылки навигации",
                        propType: "text"
                    }
                ],
                code: `
                    ({ logoSrc, logoAlt, brandName, navLinks }) => {
                        return (
                            <header className="py-4 px-4 md:px-6 flex items-center justify-between border-b border-border bg-slate-950 backdrop-blur-sm sticky top-0 z-50">
                                <div className="flex items-center gap-3">
                                    <img src={logoSrc} alt={logoAlt} className="h-10 w-10 object-contain" />
                                    <motion.h1
                                      className="text-2xl font-bold text-neon"
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.5 }}
                                    >
                                        {brandName}
                                    </motion.h1>
                                </div>
                                <nav>
                                    <ul className="hidden md:flex gap-6">
                                        {navLinks.map((link, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                            >
                                                <a href={link.href} className="text-lg text-white  hover:text-[#0ff] transition-colors">
                                                    {link.text}
                                                </a>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </nav>
                                <style jsx="true">
                                {\`
                                    .text-neon {
                                        color: #0ff;
                                        text-shadow: 0 0 10px #0ff, 0 0 20px #0ff;
                                    }
                                \`}
                                </style>
                            </header>
                      );
                    };
                `,
            },
            {
                id: 6,
                props: [
                    {
                        propName: "title",
                        propLabel: "Title",
                        propType: "text",
                        propValue: "Supercharge Your Web Development Workflow"
                    },
                    {
                        propName: "subtitle",
                        propLabel: "Subtitle",
                        propType: "text",
                        propValue: "All-in-one browser extension combining essential development tools for inspecting, testing, debugging, and optimizing websites.",
                    },
                    {
                        propName: "buttonText",
                        propLabel: "Action Button Text",
                        propType: "text",
                        propValue: "Read More"
                    },
                    {
                        propName: "buttonHref",
                        propLabel: "Action Button Link",
                        propType: "href",
                        propValue: "#about"
                    },
                ],
                code: `
                    ({ title, subtitle, buttonText, buttonHref }) => {
                        return (
                            <section
                                className="py-20 px-4 md:px-6 flex flex-col items-center justify-center min-h-[80vh] relative flex flex-col items-center justify-center text-center text-white py-20 px-6 min-h-screen"
                       
                            >
                                <div className="absolute bg-slate-900 inset-0 absolute inset-0 z-0"></div>
                                <motion.h1
                                    className="text-5xl md:text-6xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    {title}
                                </motion.h1>
                                <motion.p
                                    className="mt-4 text-lg md:text-xl relative z-10 max-w-2xl"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                >
                                    {subtitle}
                                </motion.p>
                                <motion.a
                                    href={buttonHref}
                                    className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg rounded-lg shadow-lg hover:scale-105 transition-transform relative z-10"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    {buttonText}
                                </motion.a>
                            </section>
                        );
                    };
                `,
            },
        ]
    }
]