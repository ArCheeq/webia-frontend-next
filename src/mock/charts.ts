import { numberid } from "@/utils/numberid";

export const chartPreset: IDynamicElement = {
    id: numberid(),
    key: "dashboard",
    type: "div",
    props: { className: "" },
    styles: {
        width: "90%",
        maxWidth: "1200px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
        padding: "24px",
        marginTop: "20px",
    },
    code: `
        ({ className, children }) => {
            const [currentDataset, setCurrentDataset] = React.useState('event-count');
            const datasets = {
                'event-count': {
                    title: 'Event Count by Category',
                    description: 'Number of events recorded in each category last month',
                    data: [
                        { label: 'Tech', value: 85 },
                        { label: 'Sports', value: 62 },
                        { label: 'Music', value: 78 },
                        { label: 'Food', value: 91 },
                        { label: 'Art', value: 54 },
                        { label: 'Business', value: 67 },
                        { label: 'Health', value: 73 },
                        { label: 'Education', value: 59 }
                    ],
                    maxValue: 100,
                    unit: 'events'
                },
                'total-users': {
                    title: 'Total Users by Region',
                    description: 'Active users across different geographical regions',
                    data: [
                        { label: 'NA', value: 1200 },
                        { label: 'EU', value: 950 },
                        { label: 'AS', value: 1800 },
                        { label: 'SA', value: 650 },
                        { label: 'AF', value: 420 },
                        { label: 'OC', value: 380 }
                    ],
                    maxValue: 2000,
                    unit: 'users'
                },
                'event-value': {
                    title: 'Average Event Value',
                    description: 'Monetary value per event category (in USD)',
                    data: [
                        { label: 'Concerts', value: 125 },
                        { label: 'Workshops', value: 85 },
                        { label: 'Conferences', value: 220 },
                        { label: 'Exhibitions', value: 65 },
                        { label: 'Meetups', value: 40 },
                        { label: 'Festivals', value: 95 },
                        { label: 'Seminars', value: 110 }
                    ],
                    maxValue: 250,
                    unit: '$'
                },
                'engagement-rate': {
                    title: 'User Engagement Rate',
                    description: 'Percentage of users who actively engage with content',
                    data: [
                        { label: 'Q1', value: 62 },
                        { label: 'Q2', value: 78 },
                        { label: 'Q3', value: 85 },
                        { label: 'Q4', value: 91 }
                    ],
                    maxValue: 100,
                    unit: '%'
                }
            };
            return (
                <div className={className}>
                    {React.Children.map(children, child => {
                        child.props.element.props['currentDataset'] = currentDataset;
                        child.props.element.props['setCurrentDataset'] = setCurrentDataset;
                        child.props.element.props['dataset'] = datasets[currentDataset];
                        
                        return React.cloneElement(child, { 
                            currentDataset, 
                            setCurrentDataset, 
                            dataset: datasets[currentDataset] 
                        })   
                    })}
                </div>
            );
        }
    `,
    children: [
        {
            id: numberid(),
            key: "chart-title",
            type: "h1",
            props: { className: "", textContent: "Analytics Dashboard" },
            styles: {
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "16px",
                color: "#202124",
            },
            code: `
                ({ className, textContent, dataset }) => (
                    <h1 className={className}>{dataset?.title || textContent}</h1>
                )
            `,
            children: [],
        },
        {
            id: numberid(),
            key: "chart-description",
            type: "p",
            props: {
                className: "",
                textContent: "Interactive visualization of key metrics. Click on tabs to switch between datasets.",
            },
            styles: {
                fontSize: "14px",
                color: "#5f6368",
                marginBottom: "24px",
            },
            code: `
                ({ className, textContent, dataset }) => (
                    <p className={className}>{dataset?.description || textContent}</p>
                )
            `,
            children: [],
        },
        {
            id: numberid(),
            key: "tabs",
            type: "div",
            props: { className: "" },
            styles: {
                display: "flex",
                marginBottom: "24px",
                borderBottom: "1px solid #f1f3f4",
            },
            code: `
                ({ className, children, currentDataset, setCurrentDataset }) => (
                    <div className={className}>
                        {React.Children.map(children, child => {
                            child.props.element.props['isActive'] = child.props.element.props.datasetKey === currentDataset;
                            child.props.element.props['onClick'] = () => setCurrentDataset(child.props.element.props.datasetKey);
                            
                            return React.cloneElement(child, { 
                                isActive: child.props.datasetKey === currentDataset,
                                onClick: () => setCurrentDataset(child.props.datasetKey)
                            })   
                        })}
                    </div>
                )
            `,
            children: [
                {
                    id: numberid(),
                    key: "tab-event-count",
                    type: "div",
                    props: { className: "", textContent: "Event Count", datasetKey: "event-count" },
                    styles: {
                        padding: "12px 24px",
                        cursor: "pointer",
                        fontWeight: "600",
                        color: "#5f6368",
                        transition: "all 0.3s ease",
                        position: "relative",
                        borderRadius: "8px 8px 0 0",
                        ["&:hover"]: {
                            color: "#202124",
                            backgroundColor: "rgba(66, 133, 244, 0.08)",
                        },
                        ["&.active"]: {
                            color: "#4285F4",
                        },
                        ["&.active::after"]: {
                            content: "''",
                            position: "absolute",
                            bottom: "-1px",
                            left: "0",
                            width: "100%",
                            height: "3px",
                            backgroundColor: "#4285F4",
                            borderRadius: "3px 3px 0 0",
                        },
                    },
                    code: `
                        ({ className, textContent, isActive, onClick }) => console.log(isActive) || (
                            <div 
                                className={\`\${className} \${isActive ? 'active' : ''}\`}
                                onClick={onClick}
                            >
                                {textContent}
                            </div>
                        )
                    `,
                    children: [],
                },
                {
                    id: numberid(),
                    key: "tab-total-users",
                    type: "div",
                    props: { className: "", textContent: "Total Users", datasetKey: "total-users" },
                    styles: {
                        padding: "12px 24px",
                        cursor: "pointer",
                        fontWeight: "600",
                        color: "#5f6368",
                        transition: "all 0.3s ease",
                        position: "relative",
                        borderRadius: "8px 8px 0 0",
                        ["&:hover"]: {
                            color: "#202124",
                            backgroundColor: "rgba(66, 133, 244, 0.08)",
                        },
                        ["&.active"]: {
                            color: "#4285F4",
                        },
                        ["&.active::after"]: {
                            content: "''",
                            position: "absolute",
                            bottom: "-1px",
                            left: "0",
                            width: "100%",
                            height: "3px",
                            backgroundColor: "#4285F4",
                            borderRadius: "3px 3px 0 0",
                        },
                    },
                    code: `
                        ({ className, textContent, isActive, onClick }) => (
                            <div 
                                className={\`\${className} \${isActive ? 'active' : ''}\`}
                                onClick={onClick}
                            >
                                {textContent}
                            </div>
                        )
                    `,
                    children: [],
                },
                {
                    id: numberid(),
                    key: "tab-event-value",
                    type: "div",
                    props: { className: "", textContent: "Event Value", datasetKey: "event-value" },
                    styles: {
                        padding: "12px 24px",
                        cursor: "pointer",
                        fontWeight: "600",
                        color: "#5f6368",
                        transition: "all 0.3s ease",
                        position: "relative",
                        borderRadius: "8px 8px 0 0",
                        ["&:hover"]: {
                            color: "#202124",
                            backgroundColor: "rgba(66, 133, 244, 0.08)",
                        },
                        ["&.active"]: {
                            color: "#4285F4",
                        },
                        ["&.active::after"]: {
                            content: "''",
                            position: "absolute",
                            bottom: "-1px",
                            left: "0",
                            width: "100%",
                            height: "3px",
                            backgroundColor: "#4285F4",
                            borderRadius: "3px 3px 0 0",
                        },
                    },
                    code: `
                        ({ className, textContent, isActive, onClick }) => (
                            <div 
                                className={\`\${className} \${isActive ? 'active' : ''}\`}
                                onClick={onClick}
                            >
                                {textContent}
                            </div>
                        )
                    `,
                    children: [],
                },
                {
                    id: numberid(),
                    key: "tab-engagement-rate",
                    type: "div",
                    props: { className: "", textContent: "Engagement Rate", datasetKey: "engagement-rate" },
                    styles: {
                        padding: "12px 24px",
                        cursor: "pointer",
                        fontWeight: "600",
                        color: "#5f6368",
                        transition: "all 0.3s ease",
                        position: "relative",
                        borderRadius: "8px 8px 0 0",
                        ["&:hover"]: {
                            color: "#202124",
                            backgroundColor: "rgba(66, 133, 244, 0.08)",
                        },
                        ["&.active"]: {
                            color: "#4285F4",
                        },
                        ["&.active::after"]: {
                            content: "''",
                            position: "absolute",
                            bottom: "-1px",
                            left: "0",
                            width: "100%",
                            height: "3px",
                            backgroundColor: "#4285F4",
                            borderRadius: "3px 3px 0 0",
                        },
                    },
                    code: `
                        ({ className, textContent, isActive, onClick }) => (
                            <div 
                                className={\`\${className} \${isActive ? 'active' : ''}\`}
                                onClick={onClick}
                            >
                                {textContent}
                            </div>
                        )
                    `,
                    children: [],
                },
            ],
        },
        {
            id: numberid(),
            key: "chart-container",
            type: "div",
            props: { className: "" },
            styles: {
                width: "100%",
                height: "400px",
                position: "relative",
                marginTop: "20px",
            },
            code: `
                ({ className, children, dataset }) => (
                    <div className={className}>
                    {React.Children.map(children, child => {
                        child.props.element.props['dataset'] = dataset;
                        
                        return React.cloneElement(child, {
                            dataset: dataset
                        })   
                    })}
                </div>
                )
            `,
            children: [
                {
                    id: numberid(),
                    key: "y-axis",
                    type: "div",
                    props: { className: "" },
                    styles: {
                        position: "absolute",
                        left: "0",
                        top: "0",
                        bottom: "40px",
                        width: "40px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        paddingRight: "10px",
                        borderRight: "1px solid #f1f3f4",
                    },
                    code: `
                        ({ className, dataset }) => (
                            <div className={className}>
                                {Array.from({ length: 5 }, (_, i) => (
                                    <div 
                                        key={i} 
                                        className="y-tick" 
                                        style={{
                                            textAlign: "right",
                                            fontSize: "12px",
                                            color: "#5f6368",
                                            paddingRight: "8px",
                                            position: "relative",
                                        }}
                                    >
                                        {Math.round((dataset.maxValue * (4 - i)) / 4)}
                                        <div style={{
                                            content: "''",
                                            position: "absolute",
                                            right: "-5px",
                                            top: "50%",
                                            width: "10px",
                                            height: "1px",
                                            backgroundColor: "rgba(0, 0, 0, 0.1)"
                                        }} />
                                    </div>
                                ))}
                            </div>
                        )
                    `,
                    children: [],
                },
                {
                    id: numberid(),
                    key: "zero-line",
                    type: "div",
                    props: { className: "" },
                    styles: {
                        position: "absolute",
                        left: "40px",
                        right: "0",
                        bottom: "40px",
                        height: "1px",
                        backgroundColor: "#202124",
                        opacity: "0.2",
                    },
                    code: `
                        ({ className }) => <div className={className}></div>
                    `,
                    children: [],
                },
                {
                    id: numberid(),
                    key: "chart",
                    type: "div",
                    props: { className: "" },
                    styles: {
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-around",
                        height: "calc(100% - 40px)",
                        padding: "1px 50px",
                        position: "relative",
                    },
                    code: `
                        ({ className, dataset }) => {
                          const [isHovered, setHovered] = React.useState(null);
                                
                          return (
                                <div className={className}>
                                    {dataset.data.map((item, index) => (
                                        <div key={index} className="bar-container" style={{ position: "relative", display: "flex", alignItems: "flex-end", height: '100%', width: \`\${100 / dataset.data.length}%\` }}>
                                            <div 
                                                className={\`bar \${dataset.unit === '%' ? 'engagement-rate' : dataset.unit === '$' ? 'event-value' : dataset.unit === 'users' ? 'total-users' : 'event-count'}\`}
                                                style={{
                                                    width: "80%",
                                                    height: \`\${(item.value / dataset.maxValue) * 100}%\`,
                                                    background: dataset.unit === '%' ? 'linear-gradient(to top, #FBBC05, #fcd34a)' :
                                                        dataset.unit === '$' ? 'linear-gradient(to top, #EA4335, #f07a6e)' :
                                                        dataset.unit === 'users' ? 'linear-gradient(to top, #34A853, #67cd85)' :
                                                        'linear-gradient(to top, #4285F4, #6ea3ff)',
                                                    borderRadius: "6px 6px 0 0",
                                                    transition: "height 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
                                                    boxShadow: "0 4px 12px rgba(66, 133, 244, 0.2)",
                                                    cursor: "pointer",
                                                    position: "relative",
                                                    margin: "0 auto"
                                                }}
                                                onMouseEnter={() => setHovered(index)}
                                                onMouseLeave={() => setHovered(null)}
                                            >
                                                <div 
                                                    className="bar-value"
                                                    style={{
                                                        position: "absolute",
                                                        top: "-28px",
                                                        left: "50%",
                                                        transform: "translateX(-50%)",
                                                        backgroundColor: "#202124",
                                                        color: "#ffffff",
                                                        padding: "4px 8px",
                                                        borderRadius: "4px",
                                                        fontSize: "12px",
                                                        fontWeight: "600",
                                                        opacity: isHovered === index ? 100 : 0,
                                                        transition: "opacity 0.3s ease"
                                                    }}
                                                >
                                                    {dataset.unit === '$' ? dataset.unit : ''}{item.value}{dataset.unit === '$' ? '' : ' ' + dataset.unit}
                                                </div>
                                            </div>
                                            <div 
                                                className="bar-label"
                                                style={{
                                                    marginTop: "8px",
                                                    fontSize: "12px",
                                                    fontWeight: "500",
                                                    color: "#5f6368",
                                                    textAlign: "center",
                                                    position: "absolute",
                                                    bottom: "-30px",
                                                    width: "100%"
                                                }}
                                            >
                                                {item.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    `,
                    children: [],
                },
            ],
        },
    ],
};
