import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Assignment from "@/models/Assignment";

export async function GET(
    req: Request,
    context: {
        params: Promise<{
            id: string;
        }>;
    }
) {

    try {

        await connectDB();

        const { id } = await context.params;

        const assignment =
            await Assignment.findById(id);

        if (!assignment) {

            return NextResponse.json(
                {
                    success: false,
                    message: "Assignment not found",
                },
                {
                    status: 404,
                }
            );
        }

        return NextResponse.json({
            success: true,
            assignment,
        });

    } catch (error) {

        console.log(error);

        return NextResponse.json(
            {
                success: false,
                message:
                    "Failed to fetch assignment",
            },
            {
                status: 500,
            }
        );
    }
}




export async function DELETE(
    req: Request,
    context: {
        params: Promise<{
            id: string;
        }>;
    }
) {

    try {

        await connectDB();

        const { id } =
            await context.params;

        await Assignment.findByIdAndDelete(id);

        return NextResponse.json({
            success: true,
        });

    } catch (error) {

        console.log(error);

        return NextResponse.json(
            {
                success: false,
            },
            {
                status: 500,
            }
        );
    }
}

