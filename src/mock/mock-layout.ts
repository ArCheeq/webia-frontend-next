
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
            {
                id: 7,
                props: [
                    {
                        propName: 'companyName',
                        propLabel: 'Company Name',
                        propValue: 'Automotive Paradise',
                        propType: 'text',
                    },
                    {
                        propName: 'companyDescription',
                        propLabel: 'Company Description',
                        propValue: 'Your one-stop shop for all automotive needs.',
                        propType: 'text',
                    },
                    {
                        propName: 'oilChange',
                        propLabel: 'Fast Oil Change',
                        propValue: 'Fast Oil Change',
                        propType: 'text',
                    },
                    {
                        propName: 'tireRotation',
                        propLabel: 'Tire Rotation',
                        propValue: 'Tire Rotation',
                        propType: 'text'
                    },
                    {
                        propName: 'brakeInspection',
                        propLabel: 'Brake Inspection',
                        propValue: 'Brake Inspection',
                        propType: 'text'
                    }
                    ],
                code: `
                    ({ companyName, companyDescription, oilChange, tireRotation, brakeInspection }) => {
                        return (
                            <motion.header className='bg-gradient-to-r from-blue-900 to-gray-800 text-white p-5 h-screen flex flex-col justify-center items-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                                <h1 className='text-4xl font-semibold tracking-wide mb-2'>{companyName}</h1>
                                <p className='text-lg font-light mb-6'>{companyDescription}</p>
                                <nav className='space-x-2'>
                                    <a href='#' className='px-4 py-2 bg-orange-500 hover:bg-orange-600 transition-colors duration-300 rounded text-white'>{oilChange}</a>
                                    <a href='#' className='px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-colors duration-300 rounded text-white'>{tireRotation}</a>
                                    <a href='#' className='px-4 py-2 bg-gray-500 hover:bg-gray-600 transition-colors duration-300 rounded text-white'>{brakeInspection}</a>
                                </nav>
                            </motion.header>
                        )
                    }
                `
            },
            {
                id: 8,
                props: [
                    {
                        propName: 'companyName',
                        propLabel: 'Company Name',
                        propValue: 'Automotive Paradise',
                        propType: 'text'
                    },
                    {
                        propName: 'companyDescription',
                        propLabel: 'Company Description',
                        propValue: 'Your one-stop shop for all automotive needs.',
                        propType: 'text'
                    },
                    {
                        propName: 'keyPoint1',
                        propLabel: 'Key Point 1',
                        propValue: 'Fast Oil Change',
                        propType: 'text'
                    },
                    {
                        propName: 'keyPoint2',
                        propLabel: 'Key Point 2',
                        propValue: 'Tire Rotation',
                        propType: 'text'
                    },
                    {
                        propName: 'keyPoint3',
                        propLabel: 'Key Point 3',
                        propValue: 'Brake Inspection',
                        propType: 'text'
                    }
                    ],
                code: `
                    ({ companyName, companyDescription, keyPoint1, keyPoint2, keyPoint3 }) => {
                        return (
                            <section className='flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 h-screen text-white'>
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='text-center'>
                                    <h1 className='text-4xl font-sans mb-6 tracking-wide'>{companyName}</h1>
                                    <p className='font-serif text-lg mb-10'>{companyDescription}</p>
                                    <div className='flex gap-4'>
                                        <a href={\`#\${keyPoint1.toLowerCase().replace(' ', '-')}\`} className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded shadow-md transition duration-200 transform hover:scale-105'>{keyPoint1}</a>
                                        <a href={\`#\${keyPoint2.toLowerCase().replace(' ', '-')}\`} className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded shadow-md transition duration-200 transform hover:scale-105'>{keyPoint2}</a>
                                        <a href={\`#\${keyPoint3.toLowerCase().replace(' ', '-')}\`} className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded shadow-md transition duration-200 transform hover:scale-105'>{keyPoint3}</a>
                                    </div>
                                </motion.div>
                            </section>
                      );
                    };
                `
            },
            {
                id: 9,
                props: [
                    {
                        propName: 'companyName',
                        propLabel: 'Company Name',
                        propValue: 'Automotive Paradise',
                        propType: 'text'
                    },
                    {
                        propName: 'description',
                        propLabel: 'Company Description',
                        propValue: 'Your one-stop shop for all automotive needs.',
                        propType: 'text',
                    },
                    {
                        propName: 'keyPoint1',
                        propLabel: 'Key Point 1',
                        propValue: 'Fast Oil Change',
                        propType: 'text',
                    },
                    {
                        propName: 'keyPoint2',
                        propLabel: 'Key Point 2',
                        propValue: 'Tire Rotation',
                        propType: 'text',
                    },
                    {
                        propName: 'keyPoint3',
                        propLabel: 'Key Point 3',
                        propValue: 'Brake Inspection',
                        propType: 'text',
                    }
                    ],
                code: `
                    ({ companyName, description, keyPoint1, keyPoint2, keyPoint3 }) => {
                        return (
                            <motion.footer className="p-6 bg-gray-800 text-white space-y-4" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                                <h3 className="text-2xl font-semibold tracking-wide font-sans">{companyName}</h3>
                                <p className="text-gray-300 text-base font-serif">{description}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <p className="text-gray-300 text-base font-serif">{keyPoint1}</p>
                                    <p className="text-gray-300 text-base font-serif">{keyPoint2}</p>
                                    <p className="text-gray-300 text-base font-serif">{keyPoint3}</p>
                                </div>
                            </motion.footer>
                        );
                    };
                `
            }
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