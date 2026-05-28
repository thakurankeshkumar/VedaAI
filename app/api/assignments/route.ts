import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Assignment from "@/models/Assignment";

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