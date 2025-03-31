export function generateNumberId() {
    let id = 1;

    return () => {
        const elementId = id;
        id += 1;
        return elementId;
    };
}

export const numberid = generateNumberId();
