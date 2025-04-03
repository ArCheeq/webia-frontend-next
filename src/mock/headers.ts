import { numberid } from "@/utils/numberid";

export const headerPreset: IDynamicElement = {
    "id": numberid(),
    "key": "header-001",
    "type": "header",
    "props": {
        "className": ""
    },
    "styles": {
        "width": "100%",
        "boxShadow": "0 1px 0 rgba(0, 255, 255, 0.2)",
        "position": "sticky",
        "top": 0,
        "zIndex": 1000,
        "padding": "15px 5%",
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "borderBottom": "1px solid #00ffff",
        "backdropFilter": "blur(10px)",
        "WebkitBackdropFilter": "blur(10px)",
        "backgroundColor": "rgba(17, 24, 39, 0.8)",
        "@media (max-width: 1024px)": {
            "padding": "15px 3%"
        },
        "@media (max-width: 768px)": {
            "padding": "10px 3%",
            "flexDirection": "column",
            "alignItems": "flex-start"
        }
    },
    "code": "({ children, className }) => {\n                return (\n                    <header className={className}>\n                        {children}\n                    </header>\n                );\n            }",
    "children": [
    {
        "id": numberid(),
        "key": "header-logo-001",
        "type": "div",
        "props": {
            "className": ""
        },
        "styles": {
            "display": "flex",
            "alignItems": "center",
            "gap": "12px",
            "@media (max-width: 768px)": {
                "marginBottom": "10px",
                "width": "100%"
            }
        },
        "code": "({ children, className }) => {\n                        return (\n                            <div className={className}>\n                                {children}\n                            </div>\n                        );\n                    }",
        "children": [
            {
                "id": numberid(),
                "key": "logo-img-001",
                "type": "img",
                "props": {
                    "className": "",
                    "src": "https://static.vecteezy.com/system/resources/previews/019/637/202/non_2x/blue-tape-circle-logo-icon-free-png.png",
                    "alt": "Logo"
                },
                "styles": {
                    "width": "40px",
                    "height": "40px",
                    "borderRadius": "50%",
                    "objectFit": "cover",
                    "border": "1px solid #00ffff"
                },
                "code": "({ className, src, alt }) => {\n                                return (\n                                    <img className={className} src={src} alt={alt} />\n                                );\n                            }",
                "children": []
            },
            {
                "id": numberid(),
                "key": "logo-text-001",
                "type": "span",
                "props": {
                    "textContent": "BrandName",
                    "className": ""
                },
                "styles": {
                    "fontSize": "24px",
                    "fontWeight": 700,
                    "color": "#00ffff",
                    "letterSpacing": "-0.5px",
                    "textShadow": "0 0 8px rgba(0, 255, 255, 0.7)",
                    "@media (max-width: 768px)": {
                        "fontSize": "20px"
                    }
                },
                "code": "({ className, textContent }) => {\n                                return (\n                                    <span className={className}>\n                                        {textContent}\n                                    </span>\n                                );\n                            }",
                "children": []
            }
        ]
    },
    {
        "id": numberid(),
        "key": "header-nav-001",
        "type": "nav",
        "props": {
            "className": ""
        },
        "styles": {
            "display": "flex",
            "gap": "35px",
            "@media (max-width: 768px)": {
                "display": "none"
            }
        },
        "code": "({ children, className }) => {\n                        return (\n                            <nav className={className}>\n                                {children}\n                            </nav>\n                        );\n                    }",
        "children": [
            {
                "id": numberid(),
                "key": "nav-link-001",
                "type": "a",
                "props": {
                    "textContent": "Home",
                    "className": "",
                    "href": "/landing-parser/homepage"
                },
                "styles": {
                    "textDecoration": "none",
                    "color": "#e5e7eb",
                    "fontSize": "16px",
                    "fontWeight": 500,
                    "transition": "color 0.3s ease, text-shadow 0.3s ease",
                    "&:hover": {
                        "color": "#39ff14",
                        "textShadow": "0 0 10px rgba(57, 255, 20, 0.8)"
                    }
                },
                "code": "({ className, textContent, href }) => {\n                                return (\n                                    <a className={className} href={href}>\n                                        {textContent}\n                                    </a>\n                                );\n                            }",
                "children": []
            },
            {
                "id": numberid(),
                "key": "nav-link-002",
                "type": "a",
                "props": {
                    "textContent": "About",
                    "className": "",
                    "href": "#about"
                },
                "styles": {
                    "textDecoration": "none",
                    "color": "#e5e7eb",
                    "fontSize": "16px",
                    "fontWeight": 500,
                    "transition": "color 0.3s ease, text-shadow 0.3s ease",
                    "&:hover": {
                        "color": "#39ff14",
                        "textShadow": "0 0 10px rgba(57, 255, 20, 0.8)"
                    }
                },
                "code": "({ className, textContent, href }) => {\n                                return (\n                                    <a className={className} href={href}>\n                                        {textContent}\n                                    </a>\n                                );\n                            }",
                "children": []
            },
            {
                "id": numberid(),
                "key": "nav-link-003",
                "type": "a",
                "props": {
                    "textContent": "Contact",
                    "className": "",
                    "href": "/landing-parser/contacts"
                },
                "styles": {
                    "textDecoration": "none",
                    "color": "#e5e7eb",
                    "fontSize": "16px",
                    "fontWeight": 500,
                    "transition": "color 0.3s ease, text-shadow 0.3s ease",
                    "&:hover": {
                        "color": "#39ff14",
                        "textShadow": "0 0 10px rgba(57, 255, 20, 0.8)"
                    }
                },
                "code": "({ className, textContent, href }) => {\n                                return (\n                                    <a className={className} href={href}>\n                                        {textContent}\n                                    </a>\n                                );\n                            }",
                "children": []
            }
        ]
    }
]
}
