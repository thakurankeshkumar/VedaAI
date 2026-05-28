import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Assignment from "@/models/Assignment";
import { success } from "zod";
import { log } from "console";


export async function GET() {
    try {
        await connectDB();
        const assignments = await Assignment.find().sort({ createdAt: -1, });
        return NextResponse.json({
            success: true,
            assignments
        });
    } catch (err) {
        console.log("Fetch Error: ", err);
        return NextResponse.json({
            success: false,
            message: "Failed to fetch assignments"
        }, {
            status: 500
        });
    }
}




export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();
        const assignment = await Assignment.create(body);
        return NextResponse.json({
            success: true,
            assignment
        })
    } catch (error) {
        console.log("SAVE ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                error,
                message: "Failed to save assignment",
            },
            {
                status: 500,
            }
        );
    }
}