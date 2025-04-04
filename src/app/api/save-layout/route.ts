import fs from "fs";
import path from "path";
import {NextResponse} from "next/server";

const dataFilePath = path.join(process.cwd(), 'src', 'app', 'api',  'layout', 'layout.json');

const writeData = (data: any): void => {
    const dataDir = path.dirname(dataFilePath);
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
};

export async function POST(request: Request) {
    try {
        const newData = await request.json();
        writeData(newData);
        return NextResponse.json({ status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: (error as Error).message },
            { status: 500 }
        );
    }
}