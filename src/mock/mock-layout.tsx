import { numberid } from "@/utils/numberid";
import { chartPreset } from "@/mock/charts";
import { buttonsPreset } from "@/mock/buttons";

export const mockLayout: IDynamicElement[] = [
    {
        id: numberid(),
        key: "root-001",
        type: "div",
        pageName: "Main Page",
        pageLink: "homepage",
        props: { className: "" },
        styles: {
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "#f5f7fa",
            fontFamily: "'Inter', sans-serif",
            color: "#2d3748",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            ["@media (max-width: 768px)"]: {
                fontSize: "14px",
            },
        },
        code: `({ children, className }) => {
            return (
                <div className={className}>
                    {children}
                </div>
            );
        }`,
        children: [
            {
                id: numberid(),
                key: "header-001",
                type: "header",
                props: { className: "" },
                styles: {
                    width: "100%",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                    padding: "15px 5%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #e2e8f0",
                    ["@media (max-width: 1024px)"]: {
                        padding: "15px 3%",
                    },
                    ["@media (max-width: 768px)"]: {
                        padding: "10px 3%",
                        flexDirection: "column",
                    },
                },
                code: `({ children, className }) => {
                return (
                    <header className={className}>
                        {children}
                    </header>
                );
            }`,
                children: [
                    {
                        id: numberid(),
                        key: "header-logo-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        },
                        code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                        children: [
                            {
                                id: numberid(),
                                key: "logo-img-001",
                                type: "img",
                                props: {
                                    className: "",
                                    src: "https://static.vecteezy.com/system/resources/previews/019/637/202/non_2x/blue-tape-circle-logo-icon-free-png.png",
                                    alt: "Logo",
                                },
                                styles: {
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "8px",
                                    objectFit: "cover",
                                },
                                code: `({ className, src, alt }) => {
                                return (
                                    <img className={className} src={src} alt={alt} />
                                );
                            }`,
                                children: [],
                            },
                            {
                                id: numberid(),
                                key: "logo-text-001",
                                type: "span",
                                props: {
                                    textContent: "BrandName",
                                    className: "",
                                },
                                styles: {
                                    fontSize: "24px",
                                    fontWeight: 700,
                                    color: "#2b6cb0",
                                    letterSpacing: "-0.5px",
                                    ["@media (max-width: 768px)"]: {
                                        fontSize: "20px",
                                    },
                                },
                                code: `({ className, textContent }) => {
                                return (
                                    <span className={className}>
                                        {textContent}
                                    </span>
                                );
                            }`,
                                children: [],
                            },
                        ],
                    },
                    {
                        id: numberid(),
                        key: "header-nav-001",
                        type: "nav",
                        props: { className: "" },
                        styles: {
                            display: "flex",
                            gap: "30px",
                            ["@media (max-width: 768px)"]: {
                                display: "none",
                            },
                        },
                        code: `({ children, className }) => {
                        return (
                            <nav className={className}>
                                {children}
                            </nav>
                        );
                    }`,
                        children: [
                            {
                                id: numberid(),
                                key: "nav-link-001",
                                type: "a",
                                props: {
                                    textContent: "Home",
                                    className: "",
                                    href: "/landing-parser/homepage",
                                },
                                styles: {
                                    textDecoration: "none",
                                    color: "#4a5568",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    transition: "color 0.3s ease",
                                    ["&:hover"]: {
                                        color: "#2b6cb0",
                                    },
                                },
                                code: `({ className, textContent, href }) => {
                                return (
                                    <a className={className} href={href}>
                                        {textContent}
                                    </a>
                                );
                            }`,
                                children: [],
                            },
                            {
                                id: numberid(),
                                key: "nav-link-002",
                                type: "a",
                                props: {
                                    textContent: "About",
                                    className: "",
                                    href: "#about",
                                },
                                styles: {
                                    textDecoration: "none",
                                    color: "#4a5568",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    transition: "color 0.3s ease",
                                    ["&:hover"]: {
                                        color: "#2b6cb0",
                                    },
                                },
                                code: `({ className, textContent, href }) => {
                                return (
                                    <a className={className} href={href}>
                                        {textContent}
                                    </a>
                                );
                            }`,
                                children: [],
                            },
                            {
                                id: numberid(),
                                key: "nav-link-003",
                                type: "a",
                                props: {
                                    textContent: "Contact",
                                    className: "",
                                    href: "/landing-parser/contacts",
                                },
                                styles: {
                                    textDecoration: "none",
                                    color: "#4a5568",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    transition: "color 0.3s ease",
                                    ["&:hover"]: {
                                        color: "#2b6cb0",
                                    },
                                },
                                code: `({ className, textContent, href }) => {
                                return (
                                    <a className={className} href={href}>
                                        {textContent}
                                    </a>
                                );
                            }`,
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: numberid(),
                key: "hero-001",
                type: "section",
                props: { className: "" },
                styles: {
                    width: "100%",
                    height: "100vh",
                    backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    overflow: "hidden",
                    ["&:before"]: {
                        content: "''",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.4)",
                        zIndex: 1,
                    },
                    ["@media (max-width: 768px)"]: {
                        height: "80vh",
                        padding: "0 20px",
                    },
                    ["@media (max-width: 480px)"]: {
                        height: "70vh",
                    },
                },
                code: `({ children, className }) => {
                return (
                    <section className={className}>
                        {children}
                    </section>
                );
            }`,
                children: [
                    {
                        id: numberid(),
                        key: "hero-content-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            position: "relative",
                            zIndex: 2,
                            textAlign: "center",
                            color: "#ffffff",
                            maxWidth: "800px",
                            padding: "0 20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "25px",
                            ["@media (max-width: 768px)"]: {
                                maxWidth: "600px",
                            },
                            ["@media (max-width: 480px)"]: {
                                maxWidth: "100%",
                            },
                        },
                        code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                        children: [
                            {
                                id: numberid(),
                                key: "hero-title-001",
                                type: "h1",
                                props: { textContent: "Welcome to Our World", className: "" },
                                styles: {
                                    fontSize: "56px",
                                    fontWeight: 700,
                                    margin: 0,
                                    lineHeight: "1.2",
                                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                                    animation: "fadeIn 1s ease-out",
                                    ["&:hover"]: {
                                        color: "#2b6cb0",
                                    },
                                    ["@media (max-width: 768px)"]: {
                                        fontSize: "40px",
                                    },
                                    ["@media (max-width: 480px)"]: {
                                        fontSize: "32px",
                                    },
                                },
                                code: `({ className, textContent }) => {
                                return (
                                    <h1 className={className}>
                                        {textContent}
                                    </h1>
                                );
                            }`,
                                children: [],
                            },
                            {
                                id: numberid(),
                                key: "hero-subtitle-001",
                                type: "p",
                                props: {
                                    textContent: "Discover amazing experiences with us",
                                    className: "",
                                },
                                styles: {
                                    fontSize: "20px",
                                    fontWeight: 300,
                                    margin: "0 0 30px 0",
                                    opacity: 0.9,
                                    animation: "fadeIn 1.5s ease-out",
                                    ["@media (max-width: 768px)"]: {
                                        fontSize: "18px",
                                    },
                                    ["@media (max-width: 480px)"]: {
                                        fontSize: "16px",
                                    },
                                },
                                code: `({ className, textContent }) => {
                                return (
                                    <p className={className}>
                                        {textContent}
                                    </p>
                                );
                            }`,
                                children: [],
                            },
                            {
                                id: numberid(),
                                key: "hero-cta-001",
                                type: "button",
                                props: { textContent: "Get Started", className: "" },
                                styles: {
                                    padding: "14px 40px",
                                    fontSize: "18px",
                                    fontWeight: 500,
                                    color: "#ffffff",
                                    background: "linear-gradient(90deg, #2b6cb0, #63b3ed)",
                                    border: "none",
                                    borderRadius: "50px",
                                    cursor: "pointer",
                                    boxShadow: "0 4px 15px rgba(43, 108, 176, 0.3)",
                                    transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                    ["&:hover"]: {
                                        transform: "translateY(-3px)",
                                        boxShadow: "0 6px 20px rgba(43, 108, 176, 0.5)",
                                    },
                                    ["@media (max-width: 768px)"]: {
                                        padding: "12px 30px",
                                        fontSize: "16px",
                                    },
                                    ["@media (max-width: 480px)"]: {
                                        padding: "10px 25px",
                                        fontSize: "14px",
                                    },
                                },
                                code: `({ className, textContent }) => {
                                return (
                                    <button className={className}>
                                        {textContent}
                                    </button>
                                );
                            }`,
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: numberid(),
                key: "chart-section-wrapper-001",
                type: "section",
                props: { className: "" },
                styles: {
                    width: "100%",
                    padding: "80px 5%",
                    backgroundColor: "#f5f7fa",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                    gap: "40px",
                    ["@media (max-width: 1024px)"]: {
                        padding: "60px 3%",
                    },
                    ["@media (max-width: 768px)"]: {
                        padding: "40px 3%",
                    },
                },
                code: `({ children, className }) => {
                return (
                    <section className={className}>
                        {children}
                    </section>
                );
            }`,
                children: [chartPreset],
            },
            {
                id: numberid(),
                key: "button-section-wrapper-001",
                type: "section",
                props: { className: "" },
                styles: {
                    width: "100%",
                    padding: "80px 5%",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                    gap: "40px",
                    ["@media (max-width: 1024px)"]: {
                        padding: "60px 3%",
                    },
                    ["@media (max-width: 768px)"]: {
                        padding: "40px 3%",
                    },
                },
                code: `({ children, className }) => {
                return (
                    <section className={className}>
                        {children}
                    </section>
                );
            }`,
                children: [
                    {
                        id: numberid(),
                        key: "button-section-001",
                        type: "section",
                        props: { className: "" },
                        styles: {
                            backgroundColor: "white",
                            border: "1px solid #e0e0e0",
                            borderRadius: "12px",
                            padding: "40px",
                            boxShadow: "0 4px 20px rgba(100, 149, 237, 0.15)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "30px",
                            width: "290px",
                        },
                        code: `({ children, className }) => {
                            return (
                                <section className={className}>
                                    {children}
                                </section>
                            );
                        }`,
                        children: buttonsPreset,
                    },
                ],
            },
            {
                id: numberid(),
                key: "cards-001",
                type: "section",
                props: { className: "" },
                styles: {
                    width: "100%",
                    padding: "80px 5%",
                    backgroundColor: "#f5f7fa",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "40px",
                    ["@media (max-width: 1024px)"]: {
                        padding: "60px 3%",
                    },
                    ["@media (max-width: 768px)"]: {
                        padding: "40px 3%",
                    },
                },
                code: `({ children, className }) => {
                return (
                    <section className={className}>
                        {children}
                    </section>
                );
            }`,
                children: [
                    {
                        id: numberid(),
                        key: "cards-title-001",
                        type: "h2",
                        props: { textContent: "Our Services", className: "" },
                        styles: {
                            fontSize: "36px",
                            fontWeight: 700,
                            color: "#2d3748",
                            textAlign: "center",
                            margin: 0,
                            ["@media (max-width: 768px)"]: {
                                fontSize: "28px",
                            },
                            ["@media (max-width: 480px)"]: {
                                fontSize: "24px",
                            },
                        },
                        code: `({ className, textContent }) => {
                        return (
                            <h2 className={className}>
                                {textContent}
                            </h2>
                        );
                    }`,
                        children: [],
                    },
                    {
                        id: numberid(),
                        key: "cards-container-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "30px",
                            maxWidth: "1200px",
                            width: "100%",
                            ["@media (max-width: 1024px)"]: {
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "20px",
                            },
                            ["@media (max-width: 768px)"]: {
                                gridTemplateColumns: "1fr",
                                gap: "15px",
                            },
                        },
                        code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                        children: [
                            {
                                id: numberid(),
                                key: "card-001",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    backgroundColor: "#ffffff",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                    overflow: "hidden",
                                    transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                    ["&:hover"]: {
                                        transform: "translateY(-5px)",
                                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                                    },
                                },
                                code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "card-img-001",
                                        type: "img",
                                        props: {
                                            className: "",
                                            src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
                                            alt: "Service 1",
                                        },
                                        styles: {
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            ["@media (max-width: 768px)"]: {
                                                height: "180px",
                                            },
                                        },
                                        code: `({ className, src, alt }) => {
                                        return (
                                            <img className={className} src={src} alt={alt} />
                                        );
                                    }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "card-content-001",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            padding: "20px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "15px",
                                        },
                                        code: `({ children, className }) => {
                                        return (
                                            <div className={className}>
                                                {children}
                                            </div>
                                        );
                                    }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "card-title-001",
                                                type: "h3",
                                                props: {
                                                    textContent: "Service One",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "20px",
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                    margin: 0,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "18px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <h3 className={className}>
                                                        {textContent}
                                                    </h3>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "card-desc-001",
                                                type: "p",
                                                props: {
                                                    textContent:
                                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#4a5568",
                                                    margin: 0,
                                                    lineHeight: "1.5",
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <p className={className}>
                                                        {textContent}
                                                    </p>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "card-button-001",
                                                type: "button",
                                                props: { textContent: "Subscribe", className: "" },
                                                styles: {
                                                    padding: "10px 20px",
                                                    fontSize: "16px",
                                                    fontWeight: 500,
                                                    color: "#ffffff",
                                                    backgroundColor: "#2b6cb0",
                                                    border: "none",
                                                    borderRadius: "8px",
                                                    cursor: "pointer",
                                                    alignSelf: "flex-start",
                                                    transition: "backgroundColor 0.3s ease",
                                                    ["&:hover"]: {
                                                        backgroundColor: "#63b3ed",
                                                    },
                                                    ["@media (max-width: 768px)"]: {
                                                        padding: "8px 16px",
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <button className={className}>
                                                        {textContent}
                                                    </button>
                                                );
                                            }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: numberid(),
                                key: "card-002",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    backgroundColor: "#ffffff",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                    overflow: "hidden",
                                    transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                    ["&:hover"]: {
                                        transform: "translateY(-5px)",
                                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                                    },
                                },
                                code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "card-img-001",
                                        type: "img",
                                        props: {
                                            className: "",
                                            src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
                                            alt: "Service 1",
                                        },
                                        styles: {
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            ["@media (max-width: 768px)"]: {
                                                height: "180px",
                                            },
                                        },
                                        code: `({ className, src, alt }) => {
                                        return (
                                            <img className={className} src={src} alt={alt} />
                                        );
                                    }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "card-content-001",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            padding: "20px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "15px",
                                        },
                                        code: `({ children, className }) => {
                                        return (
                                            <div className={className}>
                                                {children}
                                            </div>
                                        );
                                    }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "card-title-001",
                                                type: "h3",
                                                props: {
                                                    textContent: "Service One",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "20px",
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                    margin: 0,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "18px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <h3 className={className}>
                                                        {textContent}
                                                    </h3>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "card-desc-001",
                                                type: "p",
                                                props: {
                                                    textContent:
                                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#4a5568",
                                                    margin: 0,
                                                    lineHeight: "1.5",
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <p className={className}>
                                                        {textContent}
                                                    </p>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "card-button-001",
                                                type: "button",
                                                props: { textContent: "Subscribe", className: "" },
                                                styles: {
                                                    padding: "10px 20px",
                                                    fontSize: "16px",
                                                    fontWeight: 500,
                                                    color: "#ffffff",
                                                    backgroundColor: "#2b6cb0",
                                                    border: "none",
                                                    borderRadius: "8px",
                                                    cursor: "pointer",
                                                    alignSelf: "flex-start",
                                                    transition: "backgroundColor 0.3s ease",
                                                    ["&:hover"]: {
                                                        backgroundColor: "#63b3ed",
                                                    },
                                                    ["@media (max-width: 768px)"]: {
                                                        padding: "8px 16px",
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <button className={className}>
                                                        {textContent}
                                                    </button>
                                                );
                                            }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: numberid(),
                                key: "card-003",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    backgroundColor: "#ffffff",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                    overflow: "hidden",
                                    transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                    ["&:hover"]: {
                                        transform: "translateY(-5px)",
                                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                                    },
                                },
                                code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "card-img-002",
                                        type: "img",
                                        props: {
                                            className: "",
                                            src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
                                            alt: "Service 2",
                                        },
                                        styles: {
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            ["@media (max-width: 768px)"]: {
                                                height: "180px",
                                            },
                                        },
                                        code: `({ className, src, alt }) => {
                                        return (
                                            <img className={className} src={src} alt={alt} />
                                        );
                                    }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "card-content-002",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            padding: "20px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "15px",
                                        },
                                        code: `({ children, className }) => {
                                        return (
                                            <div className={className}>
                                                {children}
                                            </div>
                                        );
                                    }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "card-title-002",
                                                type: "h3",
                                                props: {
                                                    textContent: "Service Two",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "20px",
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                    margin: 0,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "18px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <h3 className={className}>
                                                        {textContent}
                                                    </h3>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "card-desc-002",
                                                type: "p",
                                                props: {
                                                    textContent: "Sed do eiusmod tempor incididunt ut labore.",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#4a5568",
                                                    margin: 0,
                                                    lineHeight: "1.5",
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <p className={className}>
                                                        {textContent}
                                                    </p>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "card-button-002",
                                                type: "button",
                                                props: { textContent: "Subscribe", className: "" },
                                                styles: {
                                                    padding: "10px 20px",
                                                    fontSize: "16px",
                                                    fontWeight: 500,
                                                    color: "#ffffff",
                                                    backgroundColor: "#2b6cb0",
                                                    border: "none",
                                                    borderRadius: "8px",
                                                    cursor: "pointer",
                                                    alignSelf: "flex-start",
                                                    transition: "backgroundColor 0.3s ease",
                                                    ["&:hover"]: {
                                                        backgroundColor: "#63b3ed",
                                                    },
                                                    ["@media (max-width: 768px)"]: {
                                                        padding: "8px 16px",
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <button className={className}>
                                                        {textContent}
                                                    </button>
                                                );
                                            }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: numberid(),
                key: "content-001",
                type: "section",
                props: { className: "" },
                styles: {
                    width: "100%",
                    padding: "80px 5%",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "30px",
                    ["@media (max-width: 1024px)"]: {
                        padding: "60px 3%",
                    },
                    ["@media (max-width: 768px)"]: {
                        padding: "40px 3%",
                        gap: "20px",
                    },
                },
                code: `({ children, className }) => {
                return (
                    <section className={className}>
                        {children}
                    </section>
                );
            }`,
                children: [
                    {
                        id: numberid(),
                        key: "content-title-001",
                        type: "h2",
                        props: { textContent: "About Our Journey", className: "" },
                        styles: {
                            fontSize: "42px",
                            fontWeight: 700,
                            color: "#2d3748",
                            textAlign: "center",
                            margin: 0,
                            lineHeight: "1.2",
                            maxWidth: "800px",
                            ["@media (max-width: 1024px)"]: {
                                fontSize: "36px",
                                maxWidth: "700px",
                            },
                            ["@media (max-width: 768px)"]: {
                                fontSize: "30px",
                                maxWidth: "100%",
                            },
                            ["@media (max-width: 480px)"]: {
                                fontSize: "24px",
                            },
                        },
                        code: `({ className, textContent }) => {
                        return (
                            <h2 className={className}>
                                {textContent}
                            </h2>
                        );
                    }`,
                        children: [],
                    },
                    {
                        id: numberid(),
                        key: "content-text-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            fontSize: "18px",
                            color: "#4a5568",
                            lineHeight: "1.8",
                            maxWidth: "900px",
                            width: "100%",
                            textAlign: "justify",
                            ["@media (max-width: 1024px)"]: {
                                fontSize: "16px",
                                maxWidth: "800px",
                            },
                            ["@media (max-width: 768px)"]: {
                                fontSize: "15px",
                                textAlign: "left",
                                maxWidth: "100%",
                            },
                            ["@media (max-width: 480px)"]: {
                                fontSize: "14px",
                            },
                        },
                        code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                        children: [
                            {
                                id: numberid(),
                                key: "content-paragraph-001",
                                type: "p",
                                props: {
                                    textContent:
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                    className: "",
                                },
                                styles: {
                                    margin: "0 0 20px 0",
                                    ["@media (max-width: 768px)"]: {
                                        margin: "0 0 15px 0",
                                    },
                                },
                                code: `({ className, textContent }) => {
                                return (
                                    <p className={className}>
                                        {textContent}
                                    </p>
                                );
                            }`,
                                children: [],
                            },
                            {
                                id: numberid(),
                                key: "content-paragraph-002",
                                type: "p",
                                props: {
                                    textContent:
                                        "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.",
                                    className: "",
                                },
                                styles: {
                                    margin: "0 0 20px 0",
                                    ["@media (max-width: 768px)"]: {
                                        margin: "0 0 15px 0",
                                    },
                                },
                                code: `({ className, textContent }) => {
                                return (
                                    <p className={className}>
                                        {textContent}
                                    </p>
                                );
                            }`,
                                children: [],
                            },
                            {
                                id: numberid(),
                                key: "content-paragraph-003",
                                type: "p",
                                props: {
                                    textContent:
                                        "Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis.",
                                    className: "",
                                },
                                styles: {
                                    margin: 0,
                                    ["@media (max-width: 768px)"]: {
                                        margin: 0,
                                    },
                                },
                                code: `({ className, textContent }) => {
                                return (
                                    <p className={className}>
                                        {textContent}
                                    </p>
                                );
                            }`,
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: numberid(),
                key: "carousel-001",
                type: "section",
                props: { className: "" },
                styles: {
                    width: "100%",
                    padding: "80px 5%",
                    backgroundColor: "#f5f7fa",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "40px",
                    ["@media (max-width: 1024px)"]: {
                        padding: "60px 3%",
                    },
                    ["@media (max-width: 768px)"]: {
                        padding: "40px 3%",
                        gap: "30px",
                    },
                },
                code: `({ children, className }) => {
        return (
            <section className={className}>
                {children}
            </section>
        );
    }`,
                children: [
                    {
                        id: numberid(),
                        key: "carousel-title-001",
                        type: "h2",
                        props: { textContent: "What Our Clients Say", className: "" },
                        styles: {
                            fontSize: "36px",
                            fontWeight: 700,
                            color: "#2d3748",
                            textAlign: "center",
                            margin: 0,
                            ["@media (max-width: 768px)"]: {
                                fontSize: "28px",
                            },
                            ["@media (max-width: 480px)"]: {
                                fontSize: "24px",
                            },
                        },
                        code: `({ className, textContent }) => {
                return (
                    <h2 className={className}>
                        {textContent}
                    </h2>
                );
            }`,
                        children: [],
                    },
                    {
                        id: numberid(),
                        key: "carousel-container-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            width: "100%",
                            maxWidth: "1200px",
                            position: "relative",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                        },
                        code: `({ children, className }) => {
                        const [currentSlide, setCurrentSlide] = React.useState(0);
                        const [slidesPerView, setSlidesPerView] = React.useState(2); // По умолчанию 3
                        const slides = children[0].props.element.children; // Слайды из track
                        const slideCount = slides.length;
        
                        // Определяем количество видимых слайдов в зависимости от ширины экрана
                        React.useEffect(() => {
                            if (typeof window !== 'undefined') {
                                const updateSlidesPerView = () => {
                                    const width = window.innerWidth;
                                    setSlidesPerView(width > 1024 ? 2 : width > 768 ? 1 : 1);
                                };
                                updateSlidesPerView(); // Инициализация
                                window.addEventListener('resize', updateSlidesPerView);
                                return () => window.removeEventListener('resize', updateSlidesPerView);
                            }
                        }, []);
        
                        const maxSlide = Math.max(0, slideCount - slidesPerView - 1);
                        const slideWidthPercentage = 100 / slidesPerView;
        
                        const handlePrev = () => {
                            setCurrentSlide((prev) => Math.max(0, prev - 1));
                        };
                        const handleNext = () => {
                            setCurrentSlide((prev) => Math.min(maxSlide, prev + 1));
                        };
                        
                        children[1].props.element.props['onClick'] = handlePrev;
                        children[1].props.element.props['disabled'] = currentSlide === 0;
                        children[2].props.element.props['onClick'] = handleNext;
                        children[2].props.element.props['disabled'] = currentSlide >= maxSlide;
                        
                        return (
                            <div className={className}>
                                <div style={{
                                    display: 'flex',
                                    transform: \`translateX(-\${currentSlide * slideWidthPercentage}%)\`,
                                    transition: 'transform 0.5s ease',
                                    width: \`\${slideCount * slideWidthPercentage}%\`,
                                    gap: slidesPerView > 1 ? '30px' : '15px'
                                }}>
                                    {children[0]}
                                </div>
                                <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                                    {React.cloneElement(children[1], { onClick: handlePrev, disabled: currentSlide === 0 })}
                                    {React.cloneElement(children[2], { onClick: handleNext, disabled: currentSlide >= maxSlide })}
                                </div>
                            </div>
                        );
                    }`,
                        children: [
                            {
                                id: numberid(),
                                key: "carousel-track-001",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    flexShrink: 0,
                                    display: "flex",
                                    gap: "20px",
                                    ["@media (max-width: 768px)"]: {
                                        width: "100%",
                                    },
                                },
                                code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "review-001",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            backgroundColor: "#ffffff",
                                            borderRadius: "12px",
                                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                            padding: "30px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "16px",
                                            minWidth: "592px",
                                            maxWidth: "592px",
                                            ["@media (max-width: 1024px)"]: {
                                                maxWidth: "calc(50% - 15px)",
                                            },
                                            ["@media (max-width: 768px)"]: {
                                                maxWidth: "100%",
                                                padding: "20px",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                        return (
                                            <div className={className}>
                                                {children}
                                            </div>
                                        );
                                    }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "review-name-001",
                                                type: "h3",
                                                props: { textContent: "John Doe", className: "" },
                                                styles: {
                                                    fontSize: "20px",
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                    margin: 0,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "18px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <h3 className={className}>
                                                        {textContent}
                                                    </h3>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "review-text-001",
                                                type: "p",
                                                props: {
                                                    textContent:
                                                        "Amazing service! The team was incredibly helpful and delivered beyond expectations.",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#4a5568",
                                                    margin: 0,
                                                    lineHeight: "1.6",
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <p className={className}>
                                                        {textContent}
                                                    </p>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "review-rating-001",
                                                type: "span",
                                                props: { textContent: "★★★★★ 5/5", className: "" },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#2b6cb0",
                                                    fontWeight: 500,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <span className={className}>
                                                        {textContent}
                                                    </span>
                                                );
                                            }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: numberid(),
                                        key: "review-002",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            backgroundColor: "#ffffff",
                                            borderRadius: "12px",
                                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                            padding: "30px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "15px",
                                            minWidth: "592px",
                                            maxWidth: "592px",
                                            ["@media (max-width: 1024px)"]: {
                                                maxWidth: "calc(50% - 15px)",
                                            },
                                            ["@media (max-width: 768px)"]: {
                                                maxWidth: "100%",
                                                padding: "20px",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                        return (
                                            <div className={className}>
                                                {children}
                                            </div>
                                        );
                                    }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "review-name-002",
                                                type: "h3",
                                                props: { textContent: "Jane Smith", className: "" },
                                                styles: {
                                                    fontSize: "20px",
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                    margin: 0,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "18px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <h3 className={className}>
                                                        {textContent}
                                                    </h3>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "review-text-002",
                                                type: "p",
                                                props: {
                                                    textContent:
                                                        "Great experience, highly recommend their services to anyone!",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#4a5568",
                                                    margin: 0,
                                                    lineHeight: "1.6",
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <p className={className}>
                                                        {textContent}
                                                    </p>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "review-rating-002",
                                                type: "span",
                                                props: { textContent: "★★★★☆ 4/5", className: "" },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#2b6cb0",
                                                    fontWeight: 500,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <span className={className}>
                                                        {textContent}
                                                    </span>
                                                );
                                            }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: numberid(),
                                        key: "review-004",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            backgroundColor: "#ffffff",
                                            borderRadius: "12px",
                                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                            padding: "30px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "15px",
                                            minWidth: "592px",
                                            maxWidth: "592px",
                                            ["@media (max-width: 1024px)"]: {
                                                width: "calc(50% - 15px)",
                                            },
                                            ["@media (max-width: 768px)"]: {
                                                width: "90%",
                                                padding: "20px",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                        return (
                                            <div className={className}>
                                                {children}
                                            </div>
                                        );
                                    }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "review-name-003",
                                                type: "h3",
                                                props: { textContent: "Alex Brown", className: "" },
                                                styles: {
                                                    fontSize: "20px",
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                    margin: 0,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "18px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <h3 className={className}>
                                                        {textContent}
                                                    </h3>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "review-text-003",
                                                type: "p",
                                                props: {
                                                    textContent:
                                                        "Professional team and excellent support throughout the process.",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#4a5568",
                                                    margin: 0,
                                                    lineHeight: "1.6",
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <p className={className}>
                                                        {textContent}
                                                    </p>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "review-rating-003",
                                                type: "span",
                                                props: { textContent: "★★★★★ 5/5", className: "" },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#2b6cb0",
                                                    fontWeight: 500,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <span className={className}>
                                                        {textContent}
                                                    </span>
                                                );
                                            }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: numberid(),
                                        key: "review-003",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            backgroundColor: "#ffffff",
                                            borderRadius: "12px",
                                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                            padding: "30px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "15px",
                                            minWidth: "592px",
                                            maxWidth: "592px",
                                            ["@media (max-width: 1024px)"]: {
                                                width: "calc(50% - 15px)",
                                            },
                                            ["@media (max-width: 768px)"]: {
                                                width: "90%",
                                                padding: "20px",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                        return (
                                            <div className={className}>
                                                {children}
                                            </div>
                                        );
                                    }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "review-name-003",
                                                type: "h3",
                                                props: { textContent: "Alex Brown", className: "" },
                                                styles: {
                                                    fontSize: "20px",
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                    margin: 0,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "18px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <h3 className={className}>
                                                        {textContent}
                                                    </h3>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "review-text-003",
                                                type: "p",
                                                props: {
                                                    textContent:
                                                        "Professional team and excellent support throughout the process.",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#4a5568",
                                                    margin: 0,
                                                    lineHeight: "1.6",
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <p className={className}>
                                                        {textContent}
                                                    </p>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "review-rating-003",
                                                type: "span",
                                                props: { textContent: "★★★★★ 5/5", className: "" },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#2b6cb0",
                                                    fontWeight: 500,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <span className={className}>
                                                        {textContent}
                                                    </span>
                                                );
                                            }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: numberid(),
                                key: "carousel-prev-btn-001",
                                type: "button",
                                props: { textContent: "← Prev", className: "" },
                                styles: {
                                    padding: "10px 20px",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    color: "#ffffff",
                                    backgroundColor: "#2b6cb0",
                                    border: "none",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    transition: "backgroundColor 0.3s ease",
                                    ["&:hover"]: {
                                        backgroundColor: "#63b3ed",
                                    },
                                    ["&:disabled"]: {
                                        backgroundColor: "#a0aec0",
                                        cursor: "not-allowed",
                                    },
                                    ["@media (max-width: 768px)"]: {
                                        padding: "8px 16px",
                                        fontSize: "14px",
                                    },
                                },
                                code: `({ className, textContent, onClick, disabled }) => {
                                return (
                                    <button className={className} onClick={onClick} disabled={disabled}>
                                        {textContent}
                                    </button>
                                );
                            }`,
                                children: [],
                            },
                            {
                                id: numberid(),
                                key: "carousel-next-btn-001",
                                type: "button",
                                props: { textContent: "Next →", className: "" },
                                styles: {
                                    padding: "10px 20px",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    color: "#ffffff",
                                    backgroundColor: "#2b6cb0",
                                    border: "none",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    transition: "backgroundColor 0.3s ease",
                                    ["&:hover"]: {
                                        backgroundColor: "#63b3ed",
                                    },
                                    ["&:disabled"]: {
                                        backgroundColor: "#a0aec0",
                                        cursor: "not-allowed",
                                    },
                                    ["@media (max-width: 768px)"]: {
                                        padding: "8px 16px",
                                        fontSize: "14px",
                                    },
                                },
                                code: `({ className, textContent, onClick, disabled }) => {
                                return (
                                    <button className={className} onClick={onClick} disabled={disabled}>
                                        {textContent}
                                    </button>
                                );
                            }`,
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: numberid(),
                key: "gallery-001",
                type: "section",
                props: { className: "" },
                styles: {
                    width: "100%",
                    padding: "80px 5%",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "40px",
                    ["@media (max-width: 1024px)"]: {
                        padding: "60px 3%",
                    },
                    ["@media (max-width: 768px)"]: {
                        padding: "40px 3%",
                        gap: "30px",
                    },
                },
                code: `({ children, className }) => {
        return (
            <section className={className}>
                {children}
            </section>
        );
    }`,
                children: [
                    {
                        id: numberid(),
                        key: "gallery-title-001",
                        type: "h2",
                        props: { textContent: "Our Gallery", className: "" },
                        styles: {
                            fontSize: "36px",
                            fontWeight: 700,
                            color: "#2d3748",
                            textAlign: "center",
                            margin: 0,
                            ["@media (max-width: 768px)"]: {
                                fontSize: "28px",
                            },
                            ["@media (max-width: 480px)"]: {
                                fontSize: "24px",
                            },
                        },
                        code: `({ className, textContent }) => {
                return (
                    <h2 className={className}>
                        {textContent}
                    </h2>
                );
            }`,
                        children: [],
                    },
                    {
                        id: numberid(),
                        key: "gallery-grid-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "20px",
                            maxWidth: "1200px",
                            width: "100%",
                            ["@media (max-width: 1024px)"]: {
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "15px",
                            },
                            ["@media (max-width: 768px)"]: {
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "10px",
                            },
                            ["@media (max-width: 480px)"]: {
                                gridTemplateColumns: "1fr",
                            },
                        },
                        code: `({ children, className }) => {
                return (
                    <div className={className}>
                        {children}
                    </div>
                );
            }`,
                        children: [
                            {
                                id: numberid(),
                                key: "gallery-item-001",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                    transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                    ["&:hover"]: {
                                        transform: "scale(1.05)",
                                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                                    },
                                },
                                code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "gallery-img-001",
                                        type: "img",
                                        props: {
                                            className: "",
                                            src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                                            alt: "Gallery Image 1",
                                        },
                                        styles: {
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            display: "block",
                                            ["@media (max-width: 768px)"]: {
                                                height: "180px",
                                            },
                                            ["@media (max-width: 480px)"]: {
                                                height: "250px",
                                            },
                                        },
                                        code: `({ className, src, alt }) => {
                                            return (
                                                <img className={className} src={src} alt={alt} />
                                            );
                                        }`,
                                        children: [],
                                    },
                                ],
                            },
                            {
                                id: numberid(),
                                key: "gallery-item-002",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                    transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                    ["&:hover"]: {
                                        transform: "scale(1.05)",
                                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                                    },
                                },
                                code: `({ children, className }) => {
                                    return (
                                        <div className={className}>
                                            {children}
                                        </div>
                                    );
                                }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "gallery-img-002",
                                        type: "img",
                                        props: {
                                            className: "",
                                            src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
                                            alt: "Gallery Image 2",
                                        },
                                        styles: {
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            display: "block",
                                            ["@media (max-width: 768px)"]: {
                                                height: "180px",
                                            },
                                            ["@media (max-width: 480px)"]: {
                                                height: "250px",
                                            },
                                        },
                                        code: `({ className, src, alt }) => {
                                            return (
                                                <img className={className} src={src} alt={alt} />
                                            );
                                        }`,
                                        children: [],
                                    },
                                ],
                            },
                            {
                                id: numberid(),
                                key: "gallery-item-003",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                    transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                    ["&:hover"]: {
                                        transform: "scale(1.05)",
                                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                                    },
                                },
                                code: `({ children, className }) => {
                                    return (
                                        <div className={className}>
                                            {children}
                                        </div>
                                    );
                                }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "gallery-img-003",
                                        type: "img",
                                        props: {
                                            className: "",
                                            src: "https://images.unsplash.com/photo-1566393262376-089eed09000b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                            alt: "Gallery Image 3",
                                        },
                                        styles: {
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            display: "block",
                                            ["@media (max-width: 768px)"]: {
                                                height: "180px",
                                            },
                                            ["@media (max-width: 480px)"]: {
                                                height: "250px",
                                            },
                                        },
                                        code: `({ className, src, alt }) => {
                                            return (
                                                <img className={className} src={src} alt={alt} />
                                            );
                                        }`,
                                        children: [],
                                    },
                                ],
                            },
                            {
                                id: numberid(),
                                key: "gallery-item-004",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                    transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                    ["&:hover"]: {
                                        transform: "scale(1.05)",
                                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                                    },
                                },
                                code: `({ children, className }) => {
                                    return (
                                        <div className={className}>
                                            {children}
                                        </div>
                                    );
                                }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "gallery-img-004",
                                        type: "img",
                                        props: {
                                            className: "",
                                            src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
                                            alt: "Gallery Image 4",
                                        },
                                        styles: {
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            display: "block",
                                            ["@media (max-width: 768px)"]: {
                                                height: "180px",
                                            },
                                            ["@media (max-width: 480px)"]: {
                                                height: "250px",
                                            },
                                        },
                                        code: `({ className, src, alt }) => {
                                return (
                                    <img className={className} src={src} alt={alt} />
                                );
                            }`,
                                        children: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: numberid(),
                key: "video-section-001",
                type: "section",
                props: { className: "" },
                styles: {
                    width: "100%",
                    padding: "80px 5%",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "40px",
                    ["@media (max-width: 1024px)"]: {
                        padding: "60px 3%",
                    },
                    ["@media (max-width: 768px)"]: {
                        padding: "40px 3%",
                        gap: "30px",
                    },
                },
                code: `({ children, className }) => {
                return (
                    <section className={className}>
                        {children}
                    </section>
                );
            }`,
                children: [
                    {
                        id: numberid(),
                        key: "video-title-001",
                        type: "h2",
                        props: { textContent: "Watch Our Story", className: "" },
                        styles: {
                            fontSize: "36px",
                            fontWeight: 700,
                            color: "#2d3748",
                            textAlign: "center",
                            margin: 0,
                            ["@media (max-width: 768px)"]: {
                                fontSize: "28px",
                            },
                            ["@media (max-width: 480px)"]: {
                                fontSize: "24px",
                            },
                        },
                        code: `({ className, textContent }) => {
                return (
                    <h2 className={className}>
                        {textContent}
                    </h2>
                );
            }`,
                        children: [],
                    },
                    {
                        id: numberid(),
                        key: "video-container-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            maxWidth: "1000px",
                            width: "100%",
                            backgroundColor: "#ffffff",
                            borderRadius: "12px",
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                            overflow: "hidden",
                            aspectRatio: "16 / 9", // Фиксированное соотношение сторон 16:9
                            position: "relative",
                            ["@media (max-width: 768px)"]: {
                                maxWidth: "90%",
                            },
                            ["@media (max-width: 480px)"]: {
                                maxWidth: "100%",
                            },
                        },
                        code: `({ children, className }) => {
                return (
                    <div className={className}>
                        {children}
                    </div>
                );
            }`,
                        children: [
                            {
                                id: numberid(),
                                key: "video-embed-001",
                                type: "iframe",
                                props: {
                                    className: "",
                                    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                                    title: "Our Story Video",
                                    frameBorder: "0",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowFullScreen: true,
                                },
                                styles: {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    border: "none",
                                },
                                code: `({ className, src, title, frameBorder, allow, allowFullScreen }) => {
                        return (
                            <iframe
                                className={className}
                                src={src}
                                title={title}
                                frameBorder={frameBorder}
                                allow={allow}
                                allowFullScreen={allowFullScreen}
                            />
                        );
                    }`,
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: numberid(),
                key: "working-hours-001",
                type: "section",
                props: { className: "" },
                styles: {
                    width: "100%",
                    padding: "80px 5%",
                    backgroundColor: "#f5f7fa",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "40px",
                    ["@media (max-width: 1024px)"]: {
                        padding: "60px 3%",
                    },
                    ["@media (max-width: 768px)"]: {
                        padding: "40px 3%",
                        gap: "30px",
                    },
                },
                code: `({ children, className }) => {
        return (
            <section className={className}>
                {children}
            </section>
        );
    }`,
                children: [
                    {
                        id: numberid(),
                        key: "working-hours-title-001",
                        type: "h2",
                        props: { textContent: "Working Hours", className: "" },
                        styles: {
                            fontSize: "36px",
                            fontWeight: 700,
                            color: "#2d3748",
                            textAlign: "center",
                            margin: 0,
                            ["@media (max-width: 768px)"]: {
                                fontSize: "28px",
                            },
                            ["@media (max-width: 480px)"]: {
                                fontSize: "24px",
                            },
                        },
                        code: `({ className, textContent }) => {
                return (
                    <h2 className={className}>
                        {textContent}
                    </h2>
                );
            }`,
                        children: [],
                    },
                    {
                        id: numberid(),
                        key: "working-hours-container-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            maxWidth: "800px",
                            width: "100%",
                            backgroundColor: "#ffffff",
                            borderRadius: "12px",
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                            padding: "30px",
                            ["@media (max-width: 768px)"]: {
                                padding: "20px",
                            },
                        },
                        code: `({ children, className }) => {
                return (
                    <div className={className}>
                        {children}
                    </div>
                );
            }`,
                        children: [
                            {
                                id: numberid(),
                                key: "working-hours-list-001",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "20px",
                                    fontSize: "18px",
                                    color: "#4a5568",
                                    ["@media (max-width: 768px)"]: {
                                        gridTemplateColumns: "1fr",
                                        gap: "15px",
                                        fontSize: "16px",
                                    },
                                    ["@media (max-width: 480px)"]: {
                                        fontSize: "14px",
                                    },
                                },
                                code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "working-hours-item-001",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "10px 0",
                                            borderBottom: "1px solid #e2e8f0",
                                            ["&:last-child"]: {
                                                borderBottom: "none",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "day-001",
                                                type: "span",
                                                props: { textContent: "Monday", className: "" },
                                                styles: {
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                },
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "hours-001",
                                                type: "span",
                                                props: {
                                                    textContent: "9:00 AM - 5:00 PM",
                                                    className: "",
                                                },
                                                styles: {},
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: numberid(),
                                        key: "working-hours-item-002",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "10px 0",
                                            borderBottom: "1px solid #e2e8f0",
                                            ["&:last-child"]: {
                                                borderBottom: "none",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "day-002",
                                                type: "span",
                                                props: { textContent: "Tuesday", className: "" },
                                                styles: {
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                },
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "hours-002",
                                                type: "span",
                                                props: {
                                                    textContent: "9:00 AM - 5:00 PM",
                                                    className: "",
                                                },
                                                styles: {},
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: numberid(),
                                        key: "working-hours-item-003",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "10px 0",
                                            borderBottom: "1px solid #e2e8f0",
                                            ["&:last-child"]: {
                                                borderBottom: "none",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "day-003",
                                                type: "span",
                                                props: { textContent: "Wednesday", className: "" },
                                                styles: {
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                },
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "hours-003",
                                                type: "span",
                                                props: {
                                                    textContent: "9:00 AM - 5:00 PM",
                                                    className: "",
                                                },
                                                styles: {},
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: numberid(),
                                        key: "working-hours-item-004",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "10px 0",
                                            borderBottom: "1px solid #e2e8f0",
                                            ["&:last-child"]: {
                                                borderBottom: "none",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "day-004",
                                                type: "span",
                                                props: { textContent: "Thursday", className: "" },
                                                styles: {
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                },
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "hours-004",
                                                type: "span",
                                                props: {
                                                    textContent: "9:00 AM - 5:00 PM",
                                                    className: "",
                                                },
                                                styles: {},
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: numberid(),
                                        key: "working-hours-item-005",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "10px 0",
                                            borderBottom: "1px solid #e2e8f0",
                                            ["&:last-child"]: {
                                                borderBottom: "none",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "day-005",
                                                type: "span",
                                                props: { textContent: "Friday", className: "" },
                                                styles: {
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                },
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "hours-005",
                                                type: "span",
                                                props: {
                                                    textContent: "9:00 AM - 5:00 PM",
                                                    className: "",
                                                },
                                                styles: {},
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: numberid(),
                                        key: "working-hours-item-006",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "10px 0",
                                            borderBottom: "1px solid #e2e8f0",
                                            ["&:last-child"]: {
                                                borderBottom: "none",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "day-006",
                                                type: "span",
                                                props: { textContent: "Saturday", className: "" },
                                                styles: {
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                },
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "hours-006",
                                                type: "span",
                                                props: {
                                                    textContent: "10:00 AM - 2:00 PM",
                                                    className: "",
                                                },
                                                styles: {},
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: numberid(),
                                        key: "working-hours-item-007",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "10px 0",
                                            borderBottom: "none",
                                        },
                                        code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "day-007",
                                                type: "span",
                                                props: { textContent: "Sunday", className: "" },
                                                styles: {
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                },
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "hours-007",
                                                type: "span",
                                                props: { textContent: "Closed", className: "" },
                                                styles: {
                                                    color: "#e53e3e",
                                                },
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: numberid(),
                key: "footer-001",
                type: "footer",
                props: { className: "" },
                styles: {
                    width: "100%",
                    padding: "60px 5% 40px",
                    backgroundColor: "#2d3748",
                    color: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                    ["@media (max-width: 1024px)"]: {
                        padding: "50px 3% 30px",
                    },
                    ["@media (max-width: 768px)"]: {
                        padding: "40px 3% 20px",
                        gap: "30px",
                    },
                },
                code: `({ children, className }) => {
        return (
            <footer className={className}>
                {children}
            </footer>
        );
    }`,
                children: [
                    {
                        id: numberid(),
                        key: "footer-container-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            maxWidth: "1200px",
                            width: "100%",
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "40px",
                            ["@media (max-width: 1024px)"]: {
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "30px",
                            },
                            ["@media (max-width: 768px)"]: {
                                gridTemplateColumns: "1fr",
                                gap: "25px",
                            },
                        },
                        code: `({ children, className }) => {
                return (
                    <div className={className}>
                        {children}
                    </div>
                );
            }`,
                        children: [
                            {
                                id: numberid(),
                                key: "footer-logo-001",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "15px",
                                },
                                code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "logo-text-001",
                                        type: "h3",
                                        props: { textContent: "Company Name", className: "" },
                                        styles: {
                                            fontSize: "24px",
                                            fontWeight: 700,
                                            color: "#ffffff",
                                            margin: 0,
                                            ["@media (max-width: 768px)"]: {
                                                fontSize: "20px",
                                            },
                                        },
                                        code: `({ className, textContent }) => {
                                return (
                                    <h3 className={className}>
                                        {textContent}
                                    </h3>
                                );
                            }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "logo-desc-001",
                                        type: "p",
                                        props: {
                                            textContent: "Your trusted partner since 2020",
                                            className: "",
                                        },
                                        styles: {
                                            fontSize: "14px",
                                            color: "#a0aec0",
                                            margin: 0,
                                            lineHeight: "1.5",
                                        },
                                        code: `({ className, textContent }) => {
                                return (
                                    <p className={className}>
                                        {textContent}
                                    </p>
                                );
                            }`,
                                        children: [],
                                    },
                                ],
                            },
                            {
                                id: numberid(),
                                key: "footer-links-001",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                },
                                code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "links-title-001",
                                        type: "h4",
                                        props: { textContent: "Quick Links", className: "" },
                                        styles: {
                                            fontSize: "18px",
                                            fontWeight: 600,
                                            color: "#ffffff",
                                            margin: 0,
                                            ["@media (max-width: 768px)"]: {
                                                fontSize: "16px",
                                            },
                                        },
                                        code: `({ className, textContent }) => {
                                return (
                                    <h4 className={className}>
                                        {textContent}
                                    </h4>
                                );
                            }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "link-001",
                                        type: "a",
                                        props: { textContent: "Home", href: "#", className: "" },
                                        styles: {
                                            fontSize: "14px",
                                            color: "#a0aec0",
                                            textDecoration: "none",
                                            transition: "color 0.3s ease",
                                            ["&:hover"]: {
                                                color: "#63b3ed",
                                            },
                                        },
                                        code: `({ className, textContent, href }) => {
                                return (
                                    <a className={className} href={href}>
                                        {textContent}
                                    </a>
                                );
                            }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "link-002",
                                        type: "a",
                                        props: {
                                            textContent: "About Us",
                                            href: "#about",
                                            className: "",
                                        },
                                        styles: {
                                            fontSize: "14px",
                                            color: "#a0aec0",
                                            textDecoration: "none",
                                            transition: "color 0.3s ease",
                                            ["&:hover"]: {
                                                color: "#63b3ed",
                                            },
                                        },
                                        code: `({ className, textContent, href }) => {
                                return (
                                    <a className={className} href={href}>
                                        {textContent}
                                    </a>
                                );
                            }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "link-003",
                                        type: "a",
                                        props: {
                                            textContent: "Services",
                                            href: "#services",
                                            className: "",
                                        },
                                        styles: {
                                            fontSize: "14px",
                                            color: "#a0aec0",
                                            textDecoration: "none",
                                            transition: "color 0.3s ease",
                                            ["&:hover"]: {
                                                color: "#63b3ed",
                                            },
                                        },
                                        code: `({ className, textContent, href }) => {
                                return (
                                    <a className={className} href={href}>
                                        {textContent}
                                    </a>
                                );
                            }`,
                                        children: [],
                                    },
                                ],
                            },
                            {
                                id: numberid(),
                                key: "footer-contact-001",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                },
                                code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "contact-title-001",
                                        type: "h4",
                                        props: { textContent: "Contact Us", className: "" },
                                        styles: {
                                            fontSize: "18px",
                                            fontWeight: 600,
                                            color: "#ffffff",
                                            margin: 0,
                                            ["@media (max-width: 768px)"]: {
                                                fontSize: "16px",
                                            },
                                        },
                                        code: `({ className, textContent }) => {
                                return (
                                    <h4 className={className}>
                                        {textContent}
                                    </h4>
                                );
                            }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "contact-phone-001",
                                        type: "a",
                                        props: {
                                            textContent: "+1 (555) 123-4567",
                                            href: "tel:+15551234567",
                                            className: "",
                                        },
                                        styles: {
                                            fontSize: "14px",
                                            color: "#a0aec0",
                                            textDecoration: "none",
                                            transition: "color 0.3s ease",
                                            ["&:hover"]: {
                                                color: "#63b3ed",
                                            },
                                        },
                                        code: `({ className, textContent, href }) => {
                                return (
                                    <a className={className} href={href}>
                                        {textContent}
                                    </a>
                                );
                            }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "contact-email-001",
                                        type: "a",
                                        props: {
                                            textContent: "info@company.com",
                                            href: "mailto:info@company.com",
                                            className: "",
                                        },
                                        styles: {
                                            fontSize: "14px",
                                            color: "#a0aec0",
                                            textDecoration: "none",
                                            transition: "color 0.3s ease",
                                            ["&:hover"]: {
                                                color: "#63b3ed",
                                            },
                                        },
                                        code: `({ className, textContent, href }) => {
                                return (
                                    <a className={className} href={href}>
                                        {textContent}
                                    </a>
                                );
                            }`,
                                        children: [],
                                    },
                                ],
                            },
                            {
                                id: numberid(),
                                key: "footer-social-001",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                },
                                code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "social-title-001",
                                        type: "h4",
                                        props: { textContent: "Follow Us", className: "" },
                                        styles: {
                                            fontSize: "18px",
                                            fontWeight: 600,
                                            color: "#ffffff",
                                            margin: 0,
                                            ["@media (max-width: 768px)"]: {
                                                fontSize: "16px",
                                            },
                                        },
                                        code: `({ className, textContent }) => {
                                return (
                                    <h4 className={className}>
                                        {textContent}
                                    </h4>
                                );
                            }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "social-links-001",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            display: "flex",
                                            gap: "15px",
                                        },
                                        code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "social-link-001",
                                                type: "a",
                                                props: {
                                                    textContent: "Twitter",
                                                    href: "https://twitter.com",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "14px",
                                                    color: "#a0aec0",
                                                    textDecoration: "none",
                                                    transition: "color 0.3s ease",
                                                    ["&:hover"]: {
                                                        color: "#63b3ed",
                                                    },
                                                },
                                                code: `({ className, textContent, href }) => {
                                        return (
                                            <a className={className} href={href} target="_blank" rel="noopener noreferrer">
                                                {textContent}
                                            </a>
                                        );
                                    }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "social-link-002",
                                                type: "a",
                                                props: {
                                                    textContent: "Facebook",
                                                    href: "https://facebook.com",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "14px",
                                                    color: "#a0aec0",
                                                    textDecoration: "none",
                                                    transition: "color 0.3s ease",
                                                    ["&:hover"]: {
                                                        color: "#63b3ed",
                                                    },
                                                },
                                                code: `({ className, textContent, href }) => {
                                        return (
                                            <a className={className} href={href} target="_blank" rel="noopener noreferrer">
                                                {textContent}
                                            </a>
                                        );
                                    }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "social-link-003",
                                                type: "a",
                                                props: {
                                                    textContent: "Instagram",
                                                    href: "https://instagram.com",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "14px",
                                                    color: "#a0aec0",
                                                    textDecoration: "none",
                                                    transition: "color 0.3s ease",
                                                    ["&:hover"]: {
                                                        color: "#63b3ed",
                                                    },
                                                },
                                                code: `({ className, textContent, href }) => {
                                        return (
                                            <a className={className} href={href} target="_blank" rel="noopener noreferrer">
                                                {textContent}
                                            </a>
                                        );
                                    }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: numberid(),
                        key: "footer-copyright-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            width: "100%",
                            textAlign: "center",
                            paddingTop: "20px",
                            borderTop: "1px solid #4a5568",
                            fontSize: "14px",
                            color: "#a0aec0",
                            ["@media (max-width: 768px)"]: {
                                fontSize: "12px",
                            },
                        },
                        code: `({ children, className }) => {
                return (
                    <div className={className}>
                        {children}
                    </div>
                );
            }`,
                        children: [
                            {
                                id: numberid(),
                                key: "copyright-text-001",
                                type: "p",
                                props: {
                                    textContent: "© 2025 Company Name. All rights reserved.",
                                    className: "",
                                },
                                styles: {
                                    margin: 0,
                                },
                                code: `({ className, textContent }) => {
                        return (
                            <p className={className}>
                                {textContent}
                            </p>
                        );
                    }`,
                                children: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: numberid(),
        key: "root-002",
        type: "div",
        pageName: "Contacts Page",
        pageLink: "contacts",
        props: { className: "" },
        styles: {
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "#f5f7fa",
            fontFamily: "'Inter', sans-serif",
            color: "#2d3748",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            ["@media (max-width: 768px)"]: {
                fontSize: "14px",
            },
        },
        code: `({ children, className }) => {
            return (
                <div className={className}>
                    {children}
                </div>
            );
        }`,
        children: [
            {
                id: numberid(),
                key: "header-001",
                type: "header",
                props: { className: "" },
                styles: {
                    width: "100%",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                    padding: "15px 5%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #e2e8f0",
                    ["@media (max-width: 1024px)"]: {
                        padding: "15px 3%",
                    },
                    ["@media (max-width: 768px)"]: {
                        padding: "10px 3%",
                        flexDirection: "column",
                    },
                },
                code: `({ children, className }) => {
                return (
                    <header className={className}>
                        {children}
                    </header>
                );
            }`,
                children: [
                    {
                        id: numberid(),
                        key: "header-logo-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        },
                        code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                        children: [
                            {
                                id: numberid(),
                                key: "logo-img-001",
                                type: "img",
                                props: {
                                    className: "",
                                    src: "https://static.vecteezy.com/system/resources/previews/019/637/202/non_2x/blue-tape-circle-logo-icon-free-png.png",
                                    alt: "Logo",
                                },
                                styles: {
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "8px",
                                    objectFit: "cover",
                                },
                                code: `({ className, src, alt }) => {
                                return (
                                    <img className={className} src={src} alt={alt} />
                                );
                            }`,
                                children: [],
                            },
                            {
                                id: numberid(),
                                key: "logo-text-001",
                                type: "span",
                                props: {
                                    textContent: "BrandName",
                                    className: "",
                                },
                                styles: {
                                    fontSize: "24px",
                                    fontWeight: 700,
                                    color: "#2b6cb0",
                                    letterSpacing: "-0.5px",
                                    ["@media (max-width: 768px)"]: {
                                        fontSize: "20px",
                                    },
                                },
                                code: `({ className, textContent }) => {
                                return (
                                    <span className={className}>
                                        {textContent}
                                    </span>
                                );
                            }`,
                                children: [],
                            },
                        ],
                    },
                    {
                        id: numberid(),
                        key: "header-nav-001",
                        type: "nav",
                        props: { className: "" },
                        styles: {
                            display: "flex",
                            gap: "30px",
                            ["@media (max-width: 768px)"]: {
                                display: "none",
                            },
                        },
                        code: `({ children, className }) => {
                        return (
                            <nav className={className}>
                                {children}
                            </nav>
                        );
                    }`,
                        children: [
                            {
                                id: numberid(),
                                key: "nav-link-001",
                                type: "a",
                                props: {
                                    textContent: "Home",
                                    className: "",
                                    href: "/landing-parser/homepage",
                                },
                                styles: {
                                    textDecoration: "none",
                                    color: "#4a5568",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    transition: "color 0.3s ease",
                                    ["&:hover"]: {
                                        color: "#2b6cb0",
                                    },
                                },
                                code: `({ className, textContent, href }) => {
                                return (
                                    <a className={className} href={href}>
                                        {textContent}
                                    </a>
                                );
                            }`,
                                children: [],
                            },
                            {
                                id: numberid(),
                                key: "nav-link-002",
                                type: "a",
                                props: {
                                    textContent: "About",
                                    className: "",
                                    href: "#about",
                                },
                                styles: {
                                    textDecoration: "none",
                                    color: "#4a5568",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    transition: "color 0.3s ease",
                                    ["&:hover"]: {
                                        color: "#2b6cb0",
                                    },
                                },
                                code: `({ className, textContent, href }) => {
                                return (
                                    <a className={className} href={href}>
                                        {textContent}
                                    </a>
                                );
                            }`,
                                children: [],
                            },
                            {
                                id: numberid(),
                                key: "nav-link-003",
                                type: "a",
                                props: {
                                    textContent: "Contact",
                                    className: "",
                                    href: "/landing-parser/contacts",
                                },
                                styles: {
                                    textDecoration: "none",
                                    color: "#4a5568",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    transition: "color 0.3s ease",
                                    ["&:hover"]: {
                                        color: "#2b6cb0",
                                    },
                                },
                                code: `({ className, textContent, href }) => {
                                return (
                                    <a className={className} href={href}>
                                        {textContent}
                                    </a>
                                );
                            }`,
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: numberid(),
                key: "hero-001",
                type: "section",
                props: { className: "" },
                styles: {
                    width: "100%",
                    height: "100vh",
                    backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    overflow: "hidden",
                    ["&:before"]: {
                        content: "''",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.4)",
                        zIndex: 1,
                    },
                    ["@media (max-width: 768px)"]: {
                        height: "80vh",
                        padding: "0 20px",
                    },
                    ["@media (max-width: 480px)"]: {
                        height: "70vh",
                    },
                },
                code: `({ children, className }) => {
                return (
                    <section className={className}>
                        {children}
                    </section>
                );
            }`,
                children: [
                    {
                        id: numberid(),
                        key: "hero-content-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            position: "relative",
                            zIndex: 2,
                            textAlign: "center",
                            color: "#ffffff",
                            maxWidth: "800px",
                            padding: "0 20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "25px",
                            ["@media (max-width: 768px)"]: {
                                maxWidth: "600px",
                            },
                            ["@media (max-width: 480px)"]: {
                                maxWidth: "100%",
                            },
                        },
                        code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                        children: [
                            {
                                id: numberid(),
                                key: "hero-title-001",
                                type: "h1",
                                props: { textContent: "Welcome to Our World", className: "" },
                                styles: {
                                    fontSize: "56px",
                                    fontWeight: 700,
                                    margin: 0,
                                    lineHeight: "1.2",
                                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                                    animation: "fadeIn 1s ease-out",
                                    ["&:hover"]: {
                                        color: "#2b6cb0",
                                    },
                                    ["@media (max-width: 768px)"]: {
                                        fontSize: "40px",
                                    },
                                    ["@media (max-width: 480px)"]: {
                                        fontSize: "32px",
                                    },
                                },
                                code: `({ className, textContent }) => {
                                return (
                                    <h1 className={className}>
                                        {textContent}
                                    </h1>
                                );
                            }`,
                                children: [],
                            },
                            {
                                id: numberid(),
                                key: "hero-subtitle-001",
                                type: "p",
                                props: {
                                    textContent: "Discover amazing experiences with us",
                                    className: "",
                                },
                                styles: {
                                    fontSize: "20px",
                                    fontWeight: 300,
                                    margin: "0 0 30px 0",
                                    opacity: 0.9,
                                    animation: "fadeIn 1.5s ease-out",
                                    ["@media (max-width: 768px)"]: {
                                        fontSize: "18px",
                                    },
                                    ["@media (max-width: 480px)"]: {
                                        fontSize: "16px",
                                    },
                                },
                                code: `({ className, textContent }) => {
                                return (
                                    <p className={className}>
                                        {textContent}
                                    </p>
                                );
                            }`,
                                children: [],
                            },
                            {
                                id: numberid(),
                                key: "hero-cta-001",
                                type: "button",
                                props: { textContent: "Get Started", className: "" },
                                styles: {
                                    padding: "14px 40px",
                                    fontSize: "18px",
                                    fontWeight: 500,
                                    color: "#ffffff",
                                    border: "none",
                                    borderRadius: "50px",
                                    cursor: "pointer",
                                    boxShadow: "0 4px 15px rgba(43, 108, 176, 0.3)",
                                    transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                    ["&:hover"]: {
                                        transform: "translateY(-3px)",
                                        boxShadow: "0 6px 20px rgba(43, 108, 176, 0.5)",
                                    },
                                    ["@media (max-width: 768px)"]: {
                                        padding: "12px 30px",
                                        fontSize: "16px",
                                    },
                                    ["@media (max-width: 480px)"]: {
                                        padding: "10px 25px",
                                        fontSize: "14px",
                                    },
                                    "@keyframes borderAnimation": {
                                        "0%": {
                                            backgroundPosition: "0% 50%",
                                        },
                                        "50%": {
                                            backgroundPosition: "100% 50%",
                                        },
                                        "100%": {
                                            backgroundPosition: "0% 50%",
                                        },
                                    },
                                    background: "linear-gradient(270deg, #ff0000, #0000ff)",
                                    backgroundSize: "200% 200%",
                                    animation: "borderAnimation 3s ease infinite",
                                },
                                code: `({ className, textContent }) => {
                                return (
                                    <button className={className}>
                                        {textContent}
                                    </button>
                                );
                            }`,
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: numberid(),
                key: "cards-001",
                type: "section",
                props: { className: "" },
                styles: {
                    width: "100%",
                    padding: "80px 5%",
                    backgroundColor: "#f5f7fa",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "40px",
                    ["@media (max-width: 1024px)"]: {
                        padding: "60px 3%",
                    },
                    ["@media (max-width: 768px)"]: {
                        padding: "40px 3%",
                    },
                },
                code: `({ children, className }) => {
                return (
                    <section className={className}>
                        {children}
                    </section>
                );
            }`,
                children: [
                    {
                        id: numberid(),
                        key: "cards-title-001",
                        type: "h2",
                        props: { textContent: "Our Services", className: "" },
                        styles: {
                            fontSize: "36px",
                            fontWeight: 700,
                            color: "#2d3748",
                            textAlign: "center",
                            margin: 0,
                            ["@media (max-width: 768px)"]: {
                                fontSize: "28px",
                            },
                            ["@media (max-width: 480px)"]: {
                                fontSize: "24px",
                            },
                        },
                        code: `({ className, textContent }) => {
                        return (
                            <h2 className={className}>
                                {textContent}
                            </h2>
                        );
                    }`,
                        children: [],
                    },
                    {
                        id: numberid(),
                        key: "cards-container-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "30px",
                            maxWidth: "1200px",
                            width: "100%",
                            ["@media (max-width: 1024px)"]: {
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "20px",
                            },
                            ["@media (max-width: 768px)"]: {
                                gridTemplateColumns: "1fr",
                                gap: "15px",
                            },
                        },
                        code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                        children: [
                            {
                                id: numberid(),
                                key: "card-001",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    backgroundColor: "#ffffff",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                    overflow: "hidden",
                                    transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                    ["&:hover"]: {
                                        transform: "translateY(-5px)",
                                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                                    },
                                },
                                code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "card-img-001",
                                        type: "img",
                                        props: {
                                            className: "",
                                            src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
                                            alt: "Service 1",
                                        },
                                        styles: {
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            ["@media (max-width: 768px)"]: {
                                                height: "180px",
                                            },
                                        },
                                        code: `({ className, src, alt }) => {
                                        return (
                                            <img className={className} src={src} alt={alt} />
                                        );
                                    }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "card-content-001",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            padding: "20px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "15px",
                                        },
                                        code: `({ children, className }) => {
                                        return (
                                            <div className={className}>
                                                {children}
                                            </div>
                                        );
                                    }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "card-title-001",
                                                type: "h3",
                                                props: {
                                                    textContent: "Service One",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "20px",
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                    margin: 0,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "18px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <h3 className={className}>
                                                        {textContent}
                                                    </h3>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "card-desc-001",
                                                type: "p",
                                                props: {
                                                    textContent:
                                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#4a5568",
                                                    margin: 0,
                                                    lineHeight: "1.5",
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <p className={className}>
                                                        {textContent}
                                                    </p>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "card-button-001",
                                                type: "button",
                                                props: { textContent: "Subscribe", className: "" },
                                                styles: {
                                                    padding: "10px 20px",
                                                    fontSize: "16px",
                                                    fontWeight: 500,
                                                    color: "#ffffff",
                                                    backgroundColor: "#2b6cb0",
                                                    border: "none",
                                                    borderRadius: "8px",
                                                    cursor: "pointer",
                                                    alignSelf: "flex-start",
                                                    transition: "backgroundColor 0.3s ease",
                                                    ["&:hover"]: {
                                                        backgroundColor: "#63b3ed",
                                                    },
                                                    ["@media (max-width: 768px)"]: {
                                                        padding: "8px 16px",
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <button className={className}>
                                                        {textContent}
                                                    </button>
                                                );
                                            }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: numberid(),
                                key: "card-002",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    backgroundColor: "#ffffff",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                    overflow: "hidden",
                                    transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                    ["&:hover"]: {
                                        transform: "translateY(-5px)",
                                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                                    },
                                },
                                code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "card-img-001",
                                        type: "img",
                                        props: {
                                            className: "",
                                            src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
                                            alt: "Service 1",
                                        },
                                        styles: {
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            ["@media (max-width: 768px)"]: {
                                                height: "180px",
                                            },
                                        },
                                        code: `({ className, src, alt }) => {
                                        return (
                                            <img className={className} src={src} alt={alt} />
                                        );
                                    }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "card-content-001",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            padding: "20px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "15px",
                                        },
                                        code: `({ children, className }) => {
                                        return (
                                            <div className={className}>
                                                {children}
                                            </div>
                                        );
                                    }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "card-title-001",
                                                type: "h3",
                                                props: {
                                                    textContent: "Service One",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "20px",
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                    margin: 0,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "18px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <h3 className={className}>
                                                        {textContent}
                                                    </h3>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "card-desc-001",
                                                type: "p",
                                                props: {
                                                    textContent:
                                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#4a5568",
                                                    margin: 0,
                                                    lineHeight: "1.5",
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <p className={className}>
                                                        {textContent}
                                                    </p>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "card-button-001",
                                                type: "button",
                                                props: { textContent: "Subscribe", className: "" },
                                                styles: {
                                                    padding: "10px 20px",
                                                    fontSize: "16px",
                                                    fontWeight: 500,
                                                    color: "#ffffff",
                                                    backgroundColor: "#2b6cb0",
                                                    border: "none",
                                                    borderRadius: "8px",
                                                    cursor: "pointer",
                                                    alignSelf: "flex-start",
                                                    transition: "backgroundColor 0.3s ease",
                                                    ["&:hover"]: {
                                                        backgroundColor: "#63b3ed",
                                                    },
                                                    ["@media (max-width: 768px)"]: {
                                                        padding: "8px 16px",
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <button className={className}>
                                                        {textContent}
                                                    </button>
                                                );
                                            }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: numberid(),
                                key: "card-003",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    backgroundColor: "#ffffff",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                    overflow: "hidden",
                                    transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                    ["&:hover"]: {
                                        transform: "translateY(-5px)",
                                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                                    },
                                },
                                code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "card-img-002",
                                        type: "img",
                                        props: {
                                            className: "",
                                            src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
                                            alt: "Service 2",
                                        },
                                        styles: {
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            ["@media (max-width: 768px)"]: {
                                                height: "180px",
                                            },
                                        },
                                        code: `({ className, src, alt }) => {
                                        return (
                                            <img className={className} src={src} alt={alt} />
                                        );
                                    }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "card-content-002",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            padding: "20px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "15px",
                                        },
                                        code: `({ children, className }) => {
                                        return (
                                            <div className={className}>
                                                {children}
                                            </div>
                                        );
                                    }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "card-title-002",
                                                type: "h3",
                                                props: {
                                                    textContent: "Service Two",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "20px",
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                    margin: 0,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "18px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <h3 className={className}>
                                                        {textContent}
                                                    </h3>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "card-desc-002",
                                                type: "p",
                                                props: {
                                                    textContent: "Sed do eiusmod tempor incididunt ut labore.",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#4a5568",
                                                    margin: 0,
                                                    lineHeight: "1.5",
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <p className={className}>
                                                        {textContent}
                                                    </p>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "card-button-002",
                                                type: "button",
                                                props: { textContent: "Subscribe", className: "" },
                                                styles: {
                                                    padding: "10px 20px",
                                                    fontSize: "16px",
                                                    fontWeight: 500,
                                                    color: "#ffffff",
                                                    backgroundColor: "#2b6cb0",
                                                    border: "none",
                                                    borderRadius: "8px",
                                                    cursor: "pointer",
                                                    alignSelf: "flex-start",
                                                    transition: "backgroundColor 0.3s ease",
                                                    ["&:hover"]: {
                                                        backgroundColor: "#63b3ed",
                                                    },
                                                    ["@media (max-width: 768px)"]: {
                                                        padding: "8px 16px",
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <button className={className}>
                                                        {textContent}
                                                    </button>
                                                );
                                            }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: numberid(),
                key: "content-001",
                type: "section",
                props: { className: "" },
                styles: {
                    width: "100%",
                    padding: "80px 5%",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "30px",
                    ["@media (max-width: 1024px)"]: {
                        padding: "60px 3%",
                    },
                    ["@media (max-width: 768px)"]: {
                        padding: "40px 3%",
                        gap: "20px",
                    },
                },
                code: `({ children, className }) => {
                return (
                    <section className={className}>
                        {children}
                    </section>
                );
            }`,
                children: [
                    {
                        id: numberid(),
                        key: "content-title-001",
                        type: "h2",
                        props: { textContent: "About Our Journey", className: "" },
                        styles: {
                            fontSize: "42px",
                            fontWeight: 700,
                            color: "#2d3748",
                            textAlign: "center",
                            margin: 0,
                            lineHeight: "1.2",
                            maxWidth: "800px",
                            ["@media (max-width: 1024px)"]: {
                                fontSize: "36px",
                                maxWidth: "700px",
                            },
                            ["@media (max-width: 768px)"]: {
                                fontSize: "30px",
                                maxWidth: "100%",
                            },
                            ["@media (max-width: 480px)"]: {
                                fontSize: "24px",
                            },
                        },
                        code: `({ className, textContent }) => {
                        return (
                            <h2 className={className}>
                                {textContent}
                            </h2>
                        );
                    }`,
                        children: [],
                    },
                    {
                        id: numberid(),
                        key: "content-text-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            fontSize: "18px",
                            color: "#4a5568",
                            lineHeight: "1.8",
                            maxWidth: "900px",
                            width: "100%",
                            textAlign: "justify",
                            ["@media (max-width: 1024px)"]: {
                                fontSize: "16px",
                                maxWidth: "800px",
                            },
                            ["@media (max-width: 768px)"]: {
                                fontSize: "15px",
                                textAlign: "left",
                                maxWidth: "100%",
                            },
                            ["@media (max-width: 480px)"]: {
                                fontSize: "14px",
                            },
                        },
                        code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                        children: [
                            {
                                id: numberid(),
                                key: "content-paragraph-001",
                                type: "p",
                                props: {
                                    textContent:
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                    className: "",
                                },
                                styles: {
                                    margin: "0 0 20px 0",
                                    ["@media (max-width: 768px)"]: {
                                        margin: "0 0 15px 0",
                                    },
                                },
                                code: `({ className, textContent }) => {
                                return (
                                    <p className={className}>
                                        {textContent}
                                    </p>
                                );
                            }`,
                                children: [],
                            },
                            {
                                id: numberid(),
                                key: "content-paragraph-002",
                                type: "p",
                                props: {
                                    textContent:
                                        "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.",
                                    className: "",
                                },
                                styles: {
                                    margin: "0 0 20px 0",
                                    ["@media (max-width: 768px)"]: {
                                        margin: "0 0 15px 0",
                                    },
                                },
                                code: `({ className, textContent }) => {
                                return (
                                    <p className={className}>
                                        {textContent}
                                    </p>
                                );
                            }`,
                                children: [],
                            },
                            {
                                id: numberid(),
                                key: "content-paragraph-003",
                                type: "p",
                                props: {
                                    textContent:
                                        "Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis.",
                                    className: "",
                                },
                                styles: {
                                    margin: 0,
                                    ["@media (max-width: 768px)"]: {
                                        margin: 0,
                                    },
                                },
                                code: `({ className, textContent }) => {
                                return (
                                    <p className={className}>
                                        {textContent}
                                    </p>
                                );
                            }`,
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: numberid(),
                key: "carousel-001",
                type: "section",
                props: { className: "" },
                styles: {
                    width: "100%",
                    padding: "80px 5%",
                    backgroundColor: "#f5f7fa",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "40px",
                    ["@media (max-width: 1024px)"]: {
                        padding: "60px 3%",
                    },
                    ["@media (max-width: 768px)"]: {
                        padding: "40px 3%",
                        gap: "30px",
                    },
                },
                code: `({ children, className }) => {
        return (
            <section className={className}>
                {children}
            </section>
        );
    }`,
                children: [
                    {
                        id: numberid(),
                        key: "carousel-title-001",
                        type: "h2",
                        props: { textContent: "What Our Clients Say", className: "" },
                        styles: {
                            fontSize: "36px",
                            fontWeight: 700,
                            color: "#2d3748",
                            textAlign: "center",
                            margin: 0,
                            ["@media (max-width: 768px)"]: {
                                fontSize: "28px",
                            },
                            ["@media (max-width: 480px)"]: {
                                fontSize: "24px",
                            },
                        },
                        code: `({ className, textContent }) => {
                return (
                    <h2 className={className}>
                        {textContent}
                    </h2>
                );
            }`,
                        children: [],
                    },
                    {
                        id: numberid(),
                        key: "carousel-container-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            width: "100%",
                            maxWidth: "1200px",
                            position: "relative",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                        },
                        code: `({ children, className }) => {
                        const [currentSlide, setCurrentSlide] = React.useState(0);
                        const [slidesPerView, setSlidesPerView] = React.useState(2); // По умолчанию 3
                        const slides = children[0].props.element.children; // Слайды из track
                        const slideCount = slides.length;
        
                        // Определяем количество видимых слайдов в зависимости от ширины экрана
                        React.useEffect(() => {
                            if (typeof window !== 'undefined') {
                                const updateSlidesPerView = () => {
                                    const width = window.innerWidth;
                                    setSlidesPerView(width > 1024 ? 2 : width > 768 ? 1 : 1);
                                };
                                updateSlidesPerView(); // Инициализация
                                window.addEventListener('resize', updateSlidesPerView);
                                return () => window.removeEventListener('resize', updateSlidesPerView);
                            }
                        }, []);
        
                        const maxSlide = Math.max(0, slideCount - slidesPerView - 1);
                        const slideWidthPercentage = 100 / slidesPerView;
        
                        const handlePrev = () => {
                            setCurrentSlide((prev) => Math.max(0, prev - 1));
                        };
                        const handleNext = () => {
                            setCurrentSlide((prev) => Math.min(maxSlide, prev + 1));
                        };
                        
                        children[1].props.element.props['onClick'] = handlePrev;
                        children[1].props.element.props['disabled'] = currentSlide === 0;
                        children[2].props.element.props['onClick'] = handleNext;
                        children[2].props.element.props['disabled'] = currentSlide >= maxSlide;
                        
                        return (
                            <div className={className}>
                                <div style={{
                                    display: 'flex',
                                    transform: \`translateX(-\${currentSlide * slideWidthPercentage}%)\`,
                                    transition: 'transform 0.5s ease',
                                    width: \`\${slideCount * slideWidthPercentage}%\`,
                                    gap: slidesPerView > 1 ? '30px' : '15px'
                                }}>
                                    {children[0]}
                                </div>
                                <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                                    {React.cloneElement(children[1], { onClick: handlePrev, disabled: currentSlide === 0 })}
                                    {React.cloneElement(children[2], { onClick: handleNext, disabled: currentSlide >= maxSlide })}
                                </div>
                            </div>
                        );
                    }`,
                        children: [
                            {
                                id: numberid(),
                                key: "carousel-track-001",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    flexShrink: 0,
                                    display: "flex",
                                    gap: "20px",
                                    ["@media (max-width: 768px)"]: {
                                        width: "100%",
                                    },
                                },
                                code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "review-001",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            backgroundColor: "#ffffff",
                                            borderRadius: "12px",
                                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                            padding: "30px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "16px",
                                            minWidth: "592px",
                                            maxWidth: "592px",
                                            ["@media (max-width: 1024px)"]: {
                                                maxWidth: "calc(50% - 15px)",
                                            },
                                            ["@media (max-width: 768px)"]: {
                                                maxWidth: "100%",
                                                padding: "20px",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                        return (
                                            <div className={className}>
                                                {children}
                                            </div>
                                        );
                                    }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "review-name-001",
                                                type: "h3",
                                                props: { textContent: "John Doe", className: "" },
                                                styles: {
                                                    fontSize: "20px",
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                    margin: 0,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "18px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <h3 className={className}>
                                                        {textContent}
                                                    </h3>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "review-text-001",
                                                type: "p",
                                                props: {
                                                    textContent:
                                                        "Amazing service! The team was incredibly helpful and delivered beyond expectations.",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#4a5568",
                                                    margin: 0,
                                                    lineHeight: "1.6",
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <p className={className}>
                                                        {textContent}
                                                    </p>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "review-rating-001",
                                                type: "span",
                                                props: { textContent: "★★★★★ 5/5", className: "" },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#2b6cb0",
                                                    fontWeight: 500,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <span className={className}>
                                                        {textContent}
                                                    </span>
                                                );
                                            }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: numberid(),
                                        key: "review-002",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            backgroundColor: "#ffffff",
                                            borderRadius: "12px",
                                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                            padding: "30px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "15px",
                                            minWidth: "592px",
                                            maxWidth: "592px",
                                            ["@media (max-width: 1024px)"]: {
                                                maxWidth: "calc(50% - 15px)",
                                            },
                                            ["@media (max-width: 768px)"]: {
                                                maxWidth: "100%",
                                                padding: "20px",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                        return (
                                            <div className={className}>
                                                {children}
                                            </div>
                                        );
                                    }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "review-name-002",
                                                type: "h3",
                                                props: { textContent: "Jane Smith", className: "" },
                                                styles: {
                                                    fontSize: "20px",
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                    margin: 0,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "18px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <h3 className={className}>
                                                        {textContent}
                                                    </h3>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "review-text-002",
                                                type: "p",
                                                props: {
                                                    textContent:
                                                        "Great experience, highly recommend their services to anyone!",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#4a5568",
                                                    margin: 0,
                                                    lineHeight: "1.6",
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <p className={className}>
                                                        {textContent}
                                                    </p>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "review-rating-002",
                                                type: "span",
                                                props: { textContent: "★★★★☆ 4/5", className: "" },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#2b6cb0",
                                                    fontWeight: 500,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <span className={className}>
                                                        {textContent}
                                                    </span>
                                                );
                                            }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: numberid(),
                                        key: "review-004",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            backgroundColor: "#ffffff",
                                            borderRadius: "12px",
                                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                            padding: "30px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "15px",
                                            minWidth: "592px",
                                            maxWidth: "592px",
                                            ["@media (max-width: 1024px)"]: {
                                                width: "calc(50% - 15px)",
                                            },
                                            ["@media (max-width: 768px)"]: {
                                                width: "90%",
                                                padding: "20px",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                        return (
                                            <div className={className}>
                                                {children}
                                            </div>
                                        );
                                    }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "review-name-003",
                                                type: "h3",
                                                props: { textContent: "Alex Brown", className: "" },
                                                styles: {
                                                    fontSize: "20px",
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                    margin: 0,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "18px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <h3 className={className}>
                                                        {textContent}
                                                    </h3>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "review-text-003",
                                                type: "p",
                                                props: {
                                                    textContent:
                                                        "Professional team and excellent support throughout the process.",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#4a5568",
                                                    margin: 0,
                                                    lineHeight: "1.6",
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <p className={className}>
                                                        {textContent}
                                                    </p>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "review-rating-003",
                                                type: "span",
                                                props: { textContent: "★★★★★ 5/5", className: "" },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#2b6cb0",
                                                    fontWeight: 500,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <span className={className}>
                                                        {textContent}
                                                    </span>
                                                );
                                            }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: numberid(),
                                        key: "review-003",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            backgroundColor: "#ffffff",
                                            borderRadius: "12px",
                                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                            padding: "30px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "15px",
                                            minWidth: "592px",
                                            maxWidth: "592px",
                                            ["@media (max-width: 1024px)"]: {
                                                width: "calc(50% - 15px)",
                                            },
                                            ["@media (max-width: 768px)"]: {
                                                width: "90%",
                                                padding: "20px",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                        return (
                                            <div className={className}>
                                                {children}
                                            </div>
                                        );
                                    }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "review-name-003",
                                                type: "h3",
                                                props: { textContent: "Alex Brown", className: "" },
                                                styles: {
                                                    fontSize: "20px",
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                    margin: 0,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "18px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <h3 className={className}>
                                                        {textContent}
                                                    </h3>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "review-text-003",
                                                type: "p",
                                                props: {
                                                    textContent:
                                                        "Professional team and excellent support throughout the process.",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#4a5568",
                                                    margin: 0,
                                                    lineHeight: "1.6",
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <p className={className}>
                                                        {textContent}
                                                    </p>
                                                );
                                            }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "review-rating-003",
                                                type: "span",
                                                props: { textContent: "★★★★★ 5/5", className: "" },
                                                styles: {
                                                    fontSize: "16px",
                                                    color: "#2b6cb0",
                                                    fontWeight: 500,
                                                    ["@media (max-width: 768px)"]: {
                                                        fontSize: "14px",
                                                    },
                                                },
                                                code: `({ className, textContent }) => {
                                                return (
                                                    <span className={className}>
                                                        {textContent}
                                                    </span>
                                                );
                                            }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: numberid(),
                                key: "carousel-prev-btn-001",
                                type: "button",
                                props: { textContent: "← Prev", className: "" },
                                styles: {
                                    padding: "10px 20px",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    color: "#ffffff",
                                    backgroundColor: "#2b6cb0",
                                    border: "none",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    transition: "backgroundColor 0.3s ease",
                                    ["&:hover"]: {
                                        backgroundColor: "#63b3ed",
                                    },
                                    ["&:disabled"]: {
                                        backgroundColor: "#a0aec0",
                                        cursor: "not-allowed",
                                    },
                                    ["@media (max-width: 768px)"]: {
                                        padding: "8px 16px",
                                        fontSize: "14px",
                                    },
                                },
                                code: `({ className, textContent, onClick, disabled }) => {
                                return (
                                    <button className={className} onClick={onClick} disabled={disabled}>
                                        {textContent}
                                    </button>
                                );
                            }`,
                                children: [],
                            },
                            {
                                id: numberid(),
                                key: "carousel-next-btn-001",
                                type: "button",
                                props: { textContent: "Next →", className: "" },
                                styles: {
                                    padding: "10px 20px",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    color: "#ffffff",
                                    backgroundColor: "#2b6cb0",
                                    border: "none",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    transition: "backgroundColor 0.3s ease",
                                    ["&:hover"]: {
                                        backgroundColor: "#63b3ed",
                                    },
                                    ["&:disabled"]: {
                                        backgroundColor: "#a0aec0",
                                        cursor: "not-allowed",
                                    },
                                    ["@media (max-width: 768px)"]: {
                                        padding: "8px 16px",
                                        fontSize: "14px",
                                    },
                                },
                                code: `({ className, textContent, onClick, disabled }) => {
                                return (
                                    <button className={className} onClick={onClick} disabled={disabled}>
                                        {textContent}
                                    </button>
                                );
                            }`,
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: numberid(),
                key: "gallery-001",
                type: "section",
                props: { className: "" },
                styles: {
                    width: "100%",
                    padding: "80px 5%",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "40px",
                    ["@media (max-width: 1024px)"]: {
                        padding: "60px 3%",
                    },
                    ["@media (max-width: 768px)"]: {
                        padding: "40px 3%",
                        gap: "30px",
                    },
                },
                code: `({ children, className }) => {
        return (
            <section className={className}>
                {children}
            </section>
        );
    }`,
                children: [
                    {
                        id: numberid(),
                        key: "gallery-title-001",
                        type: "h2",
                        props: { textContent: "Our Gallery", className: "" },
                        styles: {
                            fontSize: "36px",
                            fontWeight: 700,
                            color: "#2d3748",
                            textAlign: "center",
                            margin: 0,
                            ["@media (max-width: 768px)"]: {
                                fontSize: "28px",
                            },
                            ["@media (max-width: 480px)"]: {
                                fontSize: "24px",
                            },
                        },
                        code: `({ className, textContent }) => {
                return (
                    <h2 className={className}>
                        {textContent}
                    </h2>
                );
            }`,
                        children: [],
                    },
                    {
                        id: numberid(),
                        key: "gallery-grid-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "20px",
                            maxWidth: "1200px",
                            width: "100%",
                            ["@media (max-width: 1024px)"]: {
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "15px",
                            },
                            ["@media (max-width: 768px)"]: {
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "10px",
                            },
                            ["@media (max-width: 480px)"]: {
                                gridTemplateColumns: "1fr",
                            },
                        },
                        code: `({ children, className }) => {
                return (
                    <div className={className}>
                        {children}
                    </div>
                );
            }`,
                        children: [
                            {
                                id: numberid(),
                                key: "gallery-item-001",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                    transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                    ["&:hover"]: {
                                        transform: "scale(1.05)",
                                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                                    },
                                },
                                code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "gallery-img-001",
                                        type: "img",
                                        props: {
                                            className: "",
                                            src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                                            alt: "Gallery Image 1",
                                        },
                                        styles: {
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            display: "block",
                                            ["@media (max-width: 768px)"]: {
                                                height: "180px",
                                            },
                                            ["@media (max-width: 480px)"]: {
                                                height: "250px",
                                            },
                                        },
                                        code: `({ className, src, alt }) => {
                                            return (
                                                <img className={className} src={src} alt={alt} />
                                            );
                                        }`,
                                        children: [],
                                    },
                                ],
                            },
                            {
                                id: numberid(),
                                key: "gallery-item-002",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                    transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                    ["&:hover"]: {
                                        transform: "scale(1.05)",
                                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                                    },
                                },
                                code: `({ children, className }) => {
                                    return (
                                        <div className={className}>
                                            {children}
                                        </div>
                                    );
                                }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "gallery-img-002",
                                        type: "img",
                                        props: {
                                            className: "",
                                            src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
                                            alt: "Gallery Image 2",
                                        },
                                        styles: {
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            display: "block",
                                            ["@media (max-width: 768px)"]: {
                                                height: "180px",
                                            },
                                            ["@media (max-width: 480px)"]: {
                                                height: "250px",
                                            },
                                        },
                                        code: `({ className, src, alt }) => {
                                            return (
                                                <img className={className} src={src} alt={alt} />
                                            );
                                        }`,
                                        children: [],
                                    },
                                ],
                            },
                            {
                                id: numberid(),
                                key: "gallery-item-003",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                    transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                    ["&:hover"]: {
                                        transform: "scale(1.05)",
                                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                                    },
                                },
                                code: `({ children, className }) => {
                                    return (
                                        <div className={className}>
                                            {children}
                                        </div>
                                    );
                                }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "gallery-img-003",
                                        type: "img",
                                        props: {
                                            className: "",
                                            src: "https://images.unsplash.com/photo-1566393262376-089eed09000b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                            alt: "Gallery Image 3",
                                        },
                                        styles: {
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            display: "block",
                                            ["@media (max-width: 768px)"]: {
                                                height: "180px",
                                            },
                                            ["@media (max-width: 480px)"]: {
                                                height: "250px",
                                            },
                                        },
                                        code: `({ className, src, alt }) => {
                                            return (
                                                <img className={className} src={src} alt={alt} />
                                            );
                                        }`,
                                        children: [],
                                    },
                                ],
                            },
                            {
                                id: numberid(),
                                key: "gallery-item-004",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                                    transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                    ["&:hover"]: {
                                        transform: "scale(1.05)",
                                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                                    },
                                },
                                code: `({ children, className }) => {
                                    return (
                                        <div className={className}>
                                            {children}
                                        </div>
                                    );
                                }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "gallery-img-004",
                                        type: "img",
                                        props: {
                                            className: "",
                                            src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
                                            alt: "Gallery Image 4",
                                        },
                                        styles: {
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                            display: "block",
                                            ["@media (max-width: 768px)"]: {
                                                height: "180px",
                                            },
                                            ["@media (max-width: 480px)"]: {
                                                height: "250px",
                                            },
                                        },
                                        code: `({ className, src, alt }) => {
                                return (
                                    <img className={className} src={src} alt={alt} />
                                );
                            }`,
                                        children: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: numberid(),
                key: "video-section-001",
                type: "section",
                props: { className: "" },
                styles: {
                    width: "100%",
                    padding: "80px 5%",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "40px",
                    ["@media (max-width: 1024px)"]: {
                        padding: "60px 3%",
                    },
                    ["@media (max-width: 768px)"]: {
                        padding: "40px 3%",
                        gap: "30px",
                    },
                },
                code: `({ children, className }) => {
                return (
                    <section className={className}>
                        {children}
                    </section>
                );
            }`,
                children: [
                    {
                        id: numberid(),
                        key: "video-title-001",
                        type: "h2",
                        props: { textContent: "Watch Our Story", className: "" },
                        styles: {
                            fontSize: "36px",
                            fontWeight: 700,
                            color: "#2d3748",
                            textAlign: "center",
                            margin: 0,
                            ["@media (max-width: 768px)"]: {
                                fontSize: "28px",
                            },
                            ["@media (max-width: 480px)"]: {
                                fontSize: "24px",
                            },
                        },
                        code: `({ className, textContent }) => {
                return (
                    <h2 className={className}>
                        {textContent}
                    </h2>
                );
            }`,
                        children: [],
                    },
                    {
                        id: numberid(),
                        key: "video-container-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            maxWidth: "1000px",
                            width: "100%",
                            backgroundColor: "#ffffff",
                            borderRadius: "12px",
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                            overflow: "hidden",
                            aspectRatio: "16 / 9", // Фиксированное соотношение сторон 16:9
                            position: "relative",
                            ["@media (max-width: 768px)"]: {
                                maxWidth: "90%",
                            },
                            ["@media (max-width: 480px)"]: {
                                maxWidth: "100%",
                            },
                        },
                        code: `({ children, className }) => {
                            return (
                                <div className={className}>
                                    {children}
                                </div>
                            );
                        }`,
                        children: [
                            {
                                id: numberid(),
                                key: "video-embed-001",
                                type: "iframe",
                                props: {
                                    className: "",
                                    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                                    title: "Our Story Video",
                                    frameBorder: "0",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowFullScreen: true,
                                },
                                styles: {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    border: "none",
                                },
                                code: `({ className, src, title, frameBorder, allow, allowFullScreen }) => {
                                return (
                                    <iframe
                                        className={className}
                                        src={src}
                                        title={title}
                                        frameBorder={frameBorder}
                                        allow={allow}
                                        allowFullScreen={allowFullScreen}
                                    />
                                );
                            }`,
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: numberid(),
                key: "working-hours-001",
                type: "section",
                props: { className: "" },
                styles: {
                    width: "100%",
                    padding: "80px 5%",
                    backgroundColor: "#f5f7fa",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "40px",
                    ["@media (max-width: 1024px)"]: {
                        padding: "60px 3%",
                    },
                    ["@media (max-width: 768px)"]: {
                        padding: "40px 3%",
                        gap: "30px",
                    },
                },
                code: `({ children, className }) => {
        return (
            <section className={className}>
                {children}
            </section>
        );
    }`,
                children: [
                    {
                        id: numberid(),
                        key: "working-hours-title-001",
                        type: "h2",
                        props: { textContent: "Working Hours", className: "" },
                        styles: {
                            fontSize: "36px",
                            fontWeight: 700,
                            color: "#2d3748",
                            textAlign: "center",
                            margin: 0,
                            ["@media (max-width: 768px)"]: {
                                fontSize: "28px",
                            },
                            ["@media (max-width: 480px)"]: {
                                fontSize: "24px",
                            },
                        },
                        code: `({ className, textContent }) => {
                return (
                    <h2 className={className}>
                        {textContent}
                    </h2>
                );
            }`,
                        children: [],
                    },
                    {
                        id: numberid(),
                        key: "working-hours-container-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            maxWidth: "800px",
                            width: "100%",
                            backgroundColor: "#ffffff",
                            borderRadius: "12px",
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                            padding: "30px",
                            ["@media (max-width: 768px)"]: {
                                padding: "20px",
                            },
                        },
                        code: `({ children, className }) => {
                return (
                    <div className={className}>
                        {children}
                    </div>
                );
            }`,
                        children: [
                            {
                                id: numberid(),
                                key: "working-hours-list-001",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "20px",
                                    fontSize: "18px",
                                    color: "#4a5568",
                                    ["@media (max-width: 768px)"]: {
                                        gridTemplateColumns: "1fr",
                                        gap: "15px",
                                        fontSize: "16px",
                                    },
                                    ["@media (max-width: 480px)"]: {
                                        fontSize: "14px",
                                    },
                                },
                                code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "working-hours-item-001",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "10px 0",
                                            borderBottom: "1px solid #e2e8f0",
                                            ["&:last-child"]: {
                                                borderBottom: "none",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "day-001",
                                                type: "span",
                                                props: { textContent: "Monday", className: "" },
                                                styles: {
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                },
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "hours-001",
                                                type: "span",
                                                props: {
                                                    textContent: "9:00 AM - 5:00 PM",
                                                    className: "",
                                                },
                                                styles: {},
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: numberid(),
                                        key: "working-hours-item-002",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "10px 0",
                                            borderBottom: "1px solid #e2e8f0",
                                            ["&:last-child"]: {
                                                borderBottom: "none",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "day-002",
                                                type: "span",
                                                props: { textContent: "Tuesday", className: "" },
                                                styles: {
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                },
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "hours-002",
                                                type: "span",
                                                props: {
                                                    textContent: "9:00 AM - 5:00 PM",
                                                    className: "",
                                                },
                                                styles: {},
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: numberid(),
                                        key: "working-hours-item-003",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "10px 0",
                                            borderBottom: "1px solid #e2e8f0",
                                            ["&:last-child"]: {
                                                borderBottom: "none",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "day-003",
                                                type: "span",
                                                props: { textContent: "Wednesday", className: "" },
                                                styles: {
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                },
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "hours-003",
                                                type: "span",
                                                props: {
                                                    textContent: "9:00 AM - 5:00 PM",
                                                    className: "",
                                                },
                                                styles: {},
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: numberid(),
                                        key: "working-hours-item-004",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "10px 0",
                                            borderBottom: "1px solid #e2e8f0",
                                            ["&:last-child"]: {
                                                borderBottom: "none",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "day-004",
                                                type: "span",
                                                props: { textContent: "Thursday", className: "" },
                                                styles: {
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                },
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "hours-004",
                                                type: "span",
                                                props: {
                                                    textContent: "9:00 AM - 5:00 PM",
                                                    className: "",
                                                },
                                                styles: {},
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: numberid(),
                                        key: "working-hours-item-005",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "10px 0",
                                            borderBottom: "1px solid #e2e8f0",
                                            ["&:last-child"]: {
                                                borderBottom: "none",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "day-005",
                                                type: "span",
                                                props: { textContent: "Friday", className: "" },
                                                styles: {
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                },
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "hours-005",
                                                type: "span",
                                                props: {
                                                    textContent: "9:00 AM - 5:00 PM",
                                                    className: "",
                                                },
                                                styles: {},
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: numberid(),
                                        key: "working-hours-item-006",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "10px 0",
                                            borderBottom: "1px solid #e2e8f0",
                                            ["&:last-child"]: {
                                                borderBottom: "none",
                                            },
                                        },
                                        code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "day-006",
                                                type: "span",
                                                props: { textContent: "Saturday", className: "" },
                                                styles: {
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                },
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "hours-006",
                                                type: "span",
                                                props: {
                                                    textContent: "10:00 AM - 2:00 PM",
                                                    className: "",
                                                },
                                                styles: {},
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: numberid(),
                                        key: "working-hours-item-007",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "10px 0",
                                            borderBottom: "none",
                                        },
                                        code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "day-007",
                                                type: "span",
                                                props: { textContent: "Sunday", className: "" },
                                                styles: {
                                                    fontWeight: 600,
                                                    color: "#2d3748",
                                                },
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "hours-007",
                                                type: "span",
                                                props: { textContent: "Closed", className: "" },
                                                styles: {
                                                    color: "#e53e3e",
                                                },
                                                code: `({ className, textContent }) => {
                                        return (
                                            <span className={className}>
                                                {textContent}
                                            </span>
                                        );
                                    }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: numberid(),
                key: "footer-001",
                type: "footer",
                props: { className: "" },
                styles: {
                    width: "100%",
                    padding: "60px 5% 40px",
                    backgroundColor: "#2d3748",
                    color: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                    ["@media (max-width: 1024px)"]: {
                        padding: "50px 3% 30px",
                    },
                    ["@media (max-width: 768px)"]: {
                        padding: "40px 3% 20px",
                        gap: "30px",
                    },
                },
                code: `({ children, className }) => {
        return (
            <footer className={className}>
                {children}
            </footer>
        );
    }`,
                children: [
                    {
                        id: numberid(),
                        key: "footer-container-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            maxWidth: "1200px",
                            width: "100%",
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "40px",
                            ["@media (max-width: 1024px)"]: {
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "30px",
                            },
                            ["@media (max-width: 768px)"]: {
                                gridTemplateColumns: "1fr",
                                gap: "25px",
                            },
                        },
                        code: `({ children, className }) => {
                return (
                    <div className={className}>
                        {children}
                    </div>
                );
            }`,
                        children: [
                            {
                                id: numberid(),
                                key: "footer-logo-001",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "15px",
                                },
                                code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "logo-text-001",
                                        type: "h3",
                                        props: { textContent: "Company Name", className: "" },
                                        styles: {
                                            fontSize: "24px",
                                            fontWeight: 700,
                                            color: "#ffffff",
                                            margin: 0,
                                            ["@media (max-width: 768px)"]: {
                                                fontSize: "20px",
                                            },
                                        },
                                        code: `({ className, textContent }) => {
                                return (
                                    <h3 className={className}>
                                        {textContent}
                                    </h3>
                                );
                            }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "logo-desc-001",
                                        type: "p",
                                        props: {
                                            textContent: "Your trusted partner since 2020",
                                            className: "",
                                        },
                                        styles: {
                                            fontSize: "14px",
                                            color: "#a0aec0",
                                            margin: 0,
                                            lineHeight: "1.5",
                                        },
                                        code: `({ className, textContent }) => {
                                return (
                                    <p className={className}>
                                        {textContent}
                                    </p>
                                );
                            }`,
                                        children: [],
                                    },
                                ],
                            },
                            {
                                id: numberid(),
                                key: "footer-links-001",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                },
                                code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "links-title-001",
                                        type: "h4",
                                        props: { textContent: "Quick Links", className: "" },
                                        styles: {
                                            fontSize: "18px",
                                            fontWeight: 600,
                                            color: "#ffffff",
                                            margin: 0,
                                            ["@media (max-width: 768px)"]: {
                                                fontSize: "16px",
                                            },
                                        },
                                        code: `({ className, textContent }) => {
                                return (
                                    <h4 className={className}>
                                        {textContent}
                                    </h4>
                                );
                            }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "link-001",
                                        type: "a",
                                        props: { textContent: "Home", href: "#", className: "" },
                                        styles: {
                                            fontSize: "14px",
                                            color: "#a0aec0",
                                            textDecoration: "none",
                                            transition: "color 0.3s ease",
                                            ["&:hover"]: {
                                                color: "#63b3ed",
                                            },
                                        },
                                        code: `({ className, textContent, href }) => {
                                return (
                                    <a className={className} href={href}>
                                        {textContent}
                                    </a>
                                );
                            }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "link-002",
                                        type: "a",
                                        props: {
                                            textContent: "About Us",
                                            href: "#about",
                                            className: "",
                                        },
                                        styles: {
                                            fontSize: "14px",
                                            color: "#a0aec0",
                                            textDecoration: "none",
                                            transition: "color 0.3s ease",
                                            ["&:hover"]: {
                                                color: "#63b3ed",
                                            },
                                        },
                                        code: `({ className, textContent, href }) => {
                                return (
                                    <a className={className} href={href}>
                                        {textContent}
                                    </a>
                                );
                            }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "link-003",
                                        type: "a",
                                        props: {
                                            textContent: "Services",
                                            href: "#services",
                                            className: "",
                                        },
                                        styles: {
                                            fontSize: "14px",
                                            color: "#a0aec0",
                                            textDecoration: "none",
                                            transition: "color 0.3s ease",
                                            ["&:hover"]: {
                                                color: "#63b3ed",
                                            },
                                        },
                                        code: `({ className, textContent, href }) => {
                                return (
                                    <a className={className} href={href}>
                                        {textContent}
                                    </a>
                                );
                            }`,
                                        children: [],
                                    },
                                ],
                            },
                            {
                                id: numberid(),
                                key: "footer-contact-001",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                },
                                code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "contact-title-001",
                                        type: "h4",
                                        props: { textContent: "Contact Us", className: "" },
                                        styles: {
                                            fontSize: "18px",
                                            fontWeight: 600,
                                            color: "#ffffff",
                                            margin: 0,
                                            ["@media (max-width: 768px)"]: {
                                                fontSize: "16px",
                                            },
                                        },
                                        code: `({ className, textContent }) => {
                                return (
                                    <h4 className={className}>
                                        {textContent}
                                    </h4>
                                );
                            }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "contact-phone-001",
                                        type: "a",
                                        props: {
                                            textContent: "+1 (555) 123-4567",
                                            href: "tel:+15551234567",
                                            className: "",
                                        },
                                        styles: {
                                            fontSize: "14px",
                                            color: "#a0aec0",
                                            textDecoration: "none",
                                            transition: "color 0.3s ease",
                                            ["&:hover"]: {
                                                color: "#63b3ed",
                                            },
                                        },
                                        code: `({ className, textContent, href }) => {
                                return (
                                    <a className={className} href={href}>
                                        {textContent}
                                    </a>
                                );
                            }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "contact-email-001",
                                        type: "a",
                                        props: {
                                            textContent: "info@company.com",
                                            href: "mailto:info@company.com",
                                            className: "",
                                        },
                                        styles: {
                                            fontSize: "14px",
                                            color: "#a0aec0",
                                            textDecoration: "none",
                                            transition: "color 0.3s ease",
                                            ["&:hover"]: {
                                                color: "#63b3ed",
                                            },
                                        },
                                        code: `({ className, textContent, href }) => {
                                return (
                                    <a className={className} href={href}>
                                        {textContent}
                                    </a>
                                );
                            }`,
                                        children: [],
                                    },
                                ],
                            },
                            {
                                id: numberid(),
                                key: "footer-social-001",
                                type: "div",
                                props: { className: "" },
                                styles: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                },
                                code: `({ children, className }) => {
                        return (
                            <div className={className}>
                                {children}
                            </div>
                        );
                    }`,
                                children: [
                                    {
                                        id: numberid(),
                                        key: "social-title-001",
                                        type: "h4",
                                        props: { textContent: "Follow Us", className: "" },
                                        styles: {
                                            fontSize: "18px",
                                            fontWeight: 600,
                                            color: "#ffffff",
                                            margin: 0,
                                            ["@media (max-width: 768px)"]: {
                                                fontSize: "16px",
                                            },
                                        },
                                        code: `({ className, textContent }) => {
                                return (
                                    <h4 className={className}>
                                        {textContent}
                                    </h4>
                                );
                            }`,
                                        children: [],
                                    },
                                    {
                                        id: numberid(),
                                        key: "social-links-001",
                                        type: "div",
                                        props: { className: "" },
                                        styles: {
                                            display: "flex",
                                            gap: "15px",
                                        },
                                        code: `({ children, className }) => {
                                return (
                                    <div className={className}>
                                        {children}
                                    </div>
                                );
                            }`,
                                        children: [
                                            {
                                                id: numberid(),
                                                key: "social-link-001",
                                                type: "a",
                                                props: {
                                                    textContent: "Twitter",
                                                    href: "https://twitter.com",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "14px",
                                                    color: "#a0aec0",
                                                    textDecoration: "none",
                                                    transition: "color 0.3s ease",
                                                    ["&:hover"]: {
                                                        color: "#63b3ed",
                                                    },
                                                },
                                                code: `({ className, textContent, href }) => {
                                        return (
                                            <a className={className} href={href} target="_blank" rel="noopener noreferrer">
                                                {textContent}
                                            </a>
                                        );
                                    }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "social-link-002",
                                                type: "a",
                                                props: {
                                                    textContent: "Facebook",
                                                    href: "https://facebook.com",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "14px",
                                                    color: "#a0aec0",
                                                    textDecoration: "none",
                                                    transition: "color 0.3s ease",
                                                    ["&:hover"]: {
                                                        color: "#63b3ed",
                                                    },
                                                },
                                                code: `({ className, textContent, href }) => {
                                        return (
                                            <a className={className} href={href} target="_blank" rel="noopener noreferrer">
                                                {textContent}
                                            </a>
                                        );
                                    }`,
                                                children: [],
                                            },
                                            {
                                                id: numberid(),
                                                key: "social-link-003",
                                                type: "a",
                                                props: {
                                                    textContent: "Instagram",
                                                    href: "https://instagram.com",
                                                    className: "",
                                                },
                                                styles: {
                                                    fontSize: "14px",
                                                    color: "#a0aec0",
                                                    textDecoration: "none",
                                                    transition: "color 0.3s ease",
                                                    ["&:hover"]: {
                                                        color: "#63b3ed",
                                                    },
                                                },
                                                code: `({ className, textContent, href }) => {
                                        return (
                                            <a className={className} href={href} target="_blank" rel="noopener noreferrer">
                                                {textContent}
                                            </a>
                                        );
                                    }`,
                                                children: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: numberid(),
                        key: "footer-copyright-001",
                        type: "div",
                        props: { className: "" },
                        styles: {
                            width: "100%",
                            textAlign: "center",
                            paddingTop: "20px",
                            borderTop: "1px solid #4a5568",
                            fontSize: "14px",
                            color: "#a0aec0",
                            ["@media (max-width: 768px)"]: {
                                fontSize: "12px",
                            },
                        },
                        code: `({ children, className }) => {
                return (
                    <div className={className}>
                        {children}
                    </div>
                );
            }`,
                        children: [
                            {
                                id: numberid(),
                                key: "copyright-text-001",
                                type: "p",
                                props: {
                                    textContent: "© 2025 Company Name. All rights reserved.",
                                    className: "",
                                },
                                styles: {
                                    margin: 0,
                                },
                                code: `({ className, textContent }) => {
                        return (
                            <p className={className}>
                                {textContent}
                            </p>
                        );
                    }`,
                                children: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
