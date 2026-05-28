import { NextResponse } from "next/server";

import connectDB from "@/lib/connectDB";
import Settings from "@/models/Settings";

export async function GET() {

    try {

        await connectDB();

        const settings = await Settings.findOne();

        return NextResponse.json({
            success: true,
            settings,
        });

    } catch (error) {

        console.log(error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch settings",
            },
            {
                status: 500,
            }
        );
    }
}

export async function POST(req: Request) {

    try {

        await connectDB();

        const body = await req.json();

        const existing = await Settings.findOne();

        let settings;

        if (existing) {

            settings = await Settings.findByIdAndUpdate(
                existing._id,
                body,
                {
                    new: true,
                }
            );

        } else {

            settings = await Settings.create(body);
        }

        return NextResponse.json({
            success: true,
            settings,
        });

    } catch (error) {

        console.log(error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to save settings",
            },
            {
                status: 500,
            }
        );
    }
}