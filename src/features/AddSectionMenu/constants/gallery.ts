import { numberid } from "@/utils/numberid";
import { nanoid } from "nanoid";

// export const gridGallery: IDynamicElement = {
//     id: numberid(),
//     key: nanoid(),
//     type: "section",
//     props: { className: "" },
//     styles: {
//         width: "100%",
//         padding: "80px 5%",
//         backgroundColor: "#ffffff",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         gap: "40px",
//         ["@media (max-width: 1024px)"]: {
//             padding: "60px 3%",
//         },
//         ["@media (max-width: 768px)"]: {
//             padding: "40px 3%",
//             gap: "30px",
//         },
//     },
//     code: `({ children, className }) => {
//         return (
//             <section className={className}>
//                 {children}
//             </section>
//         );
//     }`,
//     children: [
//         {
//             id: numberid(),
//             key: nanoid(),
//             type: "h2",
//             props: { textContent: "Our Gallery", className: "" },
//             styles: {
//                 fontSize: "36px",
//                 fontWeight: 700,
//                 color: "#2d3748",
//                 textAlign: "center",
//                 margin: 0,
//                 ["@media (max-width: 768px)"]: {
//                     fontSize: "28px",
//                 },
//                 ["@media (max-width: 480px)"]: {
//                     fontSize: "24px",
//                 },
//             },
//             code: `({ className, textContent }) => {
//                 return (
//                     <h2 className={className}>
//                         {textContent}
//                     </h2>
//                 );
//             }`,
//             children: [],
//         },
//         {
//             id: numberid(),
//             key: nanoid(),
//             type: "div",
//             props: { className: "" },
//             styles: {
//                 display: "grid",
//                 gridTemplateColumns: "repeat(4, 1fr)",
//                 gap: "20px",
//                 maxWidth: "1200px",
//                 width: "100%",
//                 ["@media (max-width: 1024px)"]: {
//                     gridTemplateColumns: "repeat(3, 1fr)",
//                     gap: "15px",
//                 },
//                 ["@media (max-width: 768px)"]: {
//                     gridTemplateColumns: "repeat(2, 1fr)",
//                     gap: "10px",
//                 },
//                 ["@media (max-width: 480px)"]: {
//                     gridTemplateColumns: "1fr",
//                 },
//             },
//             code: `({ children, className }) => {
//                 return (
//                     <div className={className}>
//                         {children}
//                     </div>
//                 );
//             }`,
//             children: Array.from({ length: 4 }, (_, index) => ({
//                 id: numberid(),
//                 key: nanoid(),
//                 type: "div",
//                 props: { className: "" },
//                 styles: {
//                     position: "relative",
//                     overflow: "hidden",
//                     borderRadius: "12px",
//                     boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
//                     transition: "transform 0.3s ease, boxShadow 0.3s ease",
//                     ["&:hover"]: {
//                         transform: "scale(1.05)",
//                         boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
//                     },
//                 },
//                 code: `({ children, className }) => {
//                     return (
//                         <div className={className}>
//                             {children}
//                         </div>
//                     );
//                 }`,
//                 children: [
//                     {
//                         id: numberid(),
//                         key: nanoid(),
//                         type: "img",
//                         props: {
//                             className: "",
//                             src: [
//                                 "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
//                                 "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
//                                 "https://images.unsplash.com/photo-1566393262376-089eed09000b",
//                                 "https://images.unsplash.com/photo-1519681393784-d120267933ba",
//                             ][index],
//                             alt: `Gallery Image ${index + 1}`,
//                         },
//                         styles: {
//                             width: "100%",
//                             height: "200px",
//                             objectFit: "cover",
//                             display: "block",
//                             ["@media (max-width: 768px)"]: {
//                                 height: "180px",
//                             },
//                             ["@media (max-width: 480px)"]: {
//                                 height: "250px",
//                             },
//                         },
//                         code: `({ className, src, alt }) => {
//                             return (
//                                 <img className={className} src={src} alt={alt} />
//                             );
//                         }`,
//                         children: [],
//                     },
//                 ],
//             })),
//         },
//     ],
// };
//
// export const singleImageGallery: IDynamicElement = {
//     id: numberid(),
//     key: nanoid(),
//     type: "section",
//     props: { className: "" },
//     styles: {
//         width: "100%",
//         height: "80vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#f3f4f6",
//         position: "relative",
//         overflow: "hidden",
//         ["@media (max-width: 1024px)"]: {
//             height: "70vh",
//         },
//         ["@media (max-width: 768px)"]: {
//             height: "60vh",
//         },
//         ["@media (max-width: 480px)"]: {
//             height: "50vh",
//         },
//     },
//     code: `({ children, className }) => {
//         return (
//             <section className={className}>
//                 {children}
//             </section>
//         );
//     }`,
//     children: [
//         {
//             id: numberid(),
//             key: nanoid(),
//             type: "img",
//             props: {
//                 className: "",
//                 src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
//                 alt: "Modern Center Image",
//             },
//             styles: {
//                 width: "80%",
//                 height: "auto",
//                 maxHeight: "100%",
//                 objectFit: "cover",
//                 borderRadius: "20px",
//                 boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
//                 transition: "transform 0.3s ease-in-out",
//                 ["&:hover"]: {
//                     transform: "scale(1.05)",
//                 },
//                 ["@media (max-width: 768px)"]: {
//                     width: "90%",
//                 },
//                 ["@media (max-width: 480px)"]: {
//                     width: "100%",
//                 },
//             },
//             code: `({ className, src, alt }) => {
//                 return (
//                     <img className={className} src={src} alt={alt} />
//                 );
//             }`,
//             children: [],
//         },
//     ],
// };

export const getNewSingleImageGallery = (): IDynamicElement => {
    return {
        id: numberid(),
        key: nanoid(),
        type: "section",
        props: { className: "" },
        styles: {
            width: "100%",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f3f4f6",
            position: "relative",
            overflow: "hidden",
            ["@media (max-width: 1024px)"]: {
                height: "70vh",
            },
            ["@media (max-width: 768px)"]: {
                height: "60vh",
            },
            ["@media (max-width: 480px)"]: {
                height: "50vh",
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
                key: nanoid(),
                type: "img",
                props: {
                    className: "",
                    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                    alt: "Modern Center Image",
                },
                styles: {
                    width: "80%",
                    height: "auto",
                    maxHeight: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s ease-in-out",
                    ["&:hover"]: {
                        transform: "scale(1.05)",
                    },
                    ["@media (max-width: 768px)"]: {
                        width: "90%",
                    },
                    ["@media (max-width: 480px)"]: {
                        width: "100%",
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
    }
}

export const getNewGridGallery = (): IDynamicElement =>  {
    return {
        id: numberid(),
        key: nanoid(),
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
                key: nanoid(),
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
                key: nanoid(),
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
                children: Array.from({ length: 4 }, (_, index) => ({
                    id: numberid(),
                    key: nanoid(),
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
                            key: nanoid(),
                            type: "img",
                            props: {
                                className: "",
                                src: [
                                    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                                    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
                                    "https://images.unsplash.com/photo-1566393262376-089eed09000b",
                                    "https://images.unsplash.com/photo-1519681393784-d120267933ba",
                                ][index],
                                alt: `Gallery Image ${index + 1}`,
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
                })),
            },
        ],
    };
}
