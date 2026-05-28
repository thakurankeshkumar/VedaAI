"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import DashboardLayout from "@/components/dashboard-layout";
import QuestionRow from "@/components/question-row";

export default function CreateAssignmentPage() {

    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        dueDate: "",
        instructions: "",

        questionTypes: [
            {
                id: crypto.randomUUID(),
                type: "Multiple Choice Questions",
                count: 4,
                marks: 1,
            },

            {
                id: crypto.randomUUID(),
                type: "Short Questions",
                count: 3,
                marks: 2,
            },

            {
                id: crypto.randomUUID(),
                type: "Diagram/Graph-Based Questions",
                count: 5,
                marks: 5,
            },

            {
                id: crypto.randomUUID(),
                type: "Numerical Problems",
                count: 5,
                marks: 5,
            },
        ],
    });
    const router = useRouter();

    // UPDATE QUESTION
    const updateQuestion = (
        id: string,
        field: "type" | "count" | "marks",
        value: string | number
    ) => {

        setFormData((prev) => ({
            ...prev,

            questionTypes: prev.questionTypes.map((question) =>
                question.id === id
                    ? { ...question, [field]: value }
                    : question
            ),
        }));
    };

    // REMOVE QUESTION
    const removeQuestion = (id: string) => {

        setFormData((prev) => ({
            ...prev,

            questionTypes: prev.questionTypes.filter(
                (question) => question.id !== id
            ),
        }));
    };

    // ADD QUESTION
    const addQuestion = () => {

        setFormData((prev) => ({
            ...prev,

            questionTypes: [
                ...prev.questionTypes,

                {
                    id: crypto.randomUUID(),
                    type: "Multiple Choice Questions",
                    count: 1,
                    marks: 1,
                },
            ],
        }));
    };

    const generateAssignment = async () => {

        try {

            setLoading(true);

            // STEP 1 → Generate Assignment
            const response = await fetch("/api/generate", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!data.success) {

                alert("Generation failed");
                return;
            }

            // STEP 2 → Save Assignment To MongoDB
            const saveResponse = await fetch("/api/assignments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data.result),
            });

            const savedData = await saveResponse.json();

            if (!savedData.success) {

                alert("Saving failed");
                return;
            }

            // STEP 3 → Redirect To Dynamic Assignment Page
            router.push(
                `/assignments/${savedData.assignment._id}`
            );

        } catch (error) {

            console.log(error);

            alert("Something went wrong");

        } finally {

            setLoading(false);
        }
    };



    // TOTAL QUESTIONS
    const totalQuestions = formData.questionTypes.reduce(
        (acc, item) => acc + item.count,
        0
    );

    // TOTAL MARKS
    const totalMarks = formData.questionTypes.reduce(
        (acc, item) => acc + item.count * item.marks,
        0
    );

    return (
        <DashboardLayout>

            <div className="h-full text-black overflow-y-auto px-10 py-6">

                {/* TOP SECTION */}
                <div className="mb-8">

                    <div className="flex items-center gap-3">

                        <div className="w-4 h-4 rounded-full bg-green-400" />

                        <div>

                            <h1 className="text-2xl font-semibold text-[#2B2B2B]">
                                Create Assignment
                            </h1>

                            <p className="text-[#8A8A8A] text-sm">
                                Set up a new assignment for your students
                            </p>

                        </div>

                    </div>

                    {/* PROGRESS BAR */}
                    <div className="flex gap-3 mt-6 max-w-[700px]">

                        <div className="h-[5px] flex-1 rounded-full bg-[#4A4A4A]" />

                        <div className="h-[5px] flex-1 rounded-full bg-[#D9D9D9]" />

                    </div>

                </div>

                {/* FORM CARD */}
                <div className="max-w-5xl mx-auto bg-[#F4F4F4] rounded-[40px] p-10 shadow-sm border border-[#E5E5E5]">

                    <h2 className="text-[34px] font-bold text-[#2B2B2B]">
                        Assignment Details
                    </h2>

                    <p className="text-[#7A7A7A] mt-1">
                        Basic information about your assignment
                    </p>

                    {/* FILE UPLOAD */}
                    {/* FILE UPLOAD */}
                    <div className="mt-8">

                        <label
                            htmlFor="fileUpload"
                            className="border-2 border-dashed border-[#D6D6D6] rounded-[28px] bg-[#FAFAFA] h-[220px] flex flex-col items-center justify-center cursor-pointer hover:border-[#BDBDBD] transition"
                        >

                            <input
                                id="fileUpload"
                                type="file"
                                accept="image/*,.pdf"
                                className="hidden"

                                onChange={(e) => {

                                    const file = e.target.files?.[0];

                                    if (file) {
                                        setSelectedFile(file);
                                    }
                                }}
                            />

                            {!selectedFile ? (

                                <>
                                    <p className="text-[22px] font-medium text-[#2B2B2B]">
                                        Choose a file or drag & drop it here
                                    </p>

                                    <p className="text-[#8B8B8B] mt-2">
                                        JPEG, PNG, PDF upto 10MB
                                    </p>

                                    <div className="mt-6 px-6 py-3 rounded-full bg-[#EFEFEF]">
                                        Browse Files
                                    </div>
                                </>

                            ) : (

                                <div className="text-center">

                                    <p className="text-xl font-semibold text-green-600">
                                        File Selected
                                    </p>

                                    <p className="mt-3 text-[#333] font-medium">
                                        {selectedFile.name}
                                    </p>

                                    <p className="text-[#777] mt-1">
                                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                                    </p>

                                </div>

                            )}

                        </label>

                    </div>

                    <p className="text-center text-[#8A8A8A] mt-4">
                        Upload images of your preferred document/image
                    </p>

                    {/* DUE DATE */}
                    <div className="mt-10">

                        <label className="block text-lg font-semibold mb-3">
                            Due Date
                        </label>

                        <input
                            type="date"
                            value={formData.dueDate}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    dueDate: e.target.value,
                                })
                            }
                            className="w-full h-[64px] px-6 rounded-full bg-white border border-[#E5E5E5] outline-none"
                        />

                    </div>

                    {/* HEADER */}
                    <div className="mt-10 flex justify-between">

                        <h3 className="font-semibold text-lg">
                            Question Type
                        </h3>

                        <div className="flex gap-20 mr-10">

                            <span className="font-semibold">
                                No. of Questions
                            </span>

                            <span className="font-semibold">
                                Marks
                            </span>

                        </div>

                    </div>

                    {/* QUESTION ROWS */}
                    <div className="mt-5 space-y-4">

                        {formData.questionTypes.map((item) => (

                            <QuestionRow
                                key={item.id}
                                item={item}
                                onUpdate={updateQuestion}
                                onRemove={removeQuestion}
                            />

                        ))}

                    </div>

                    {/* ADD BUTTON */}
                    <button
                        onClick={addQuestion}
                        className="mt-6 bg-[#1E1E1E] text-white px-6 py-3 rounded-full hover:opacity-90 transition"
                    >
                        + Add Question Type
                    </button>

                    {/* TOTALS */}
                    <div className="mt-10 flex justify-end">

                        <div className="text-right">

                            <p className="text-xl">
                                Total Questions:
                                <span className="font-bold ml-2">
                                    {totalQuestions}
                                </span>
                            </p>

                            <p className="text-xl mt-2">
                                Total Marks:
                                <span className="font-bold ml-2">
                                    {totalMarks}
                                </span>
                            </p>

                        </div>

                    </div>

                    {/* TEXTAREA */}
                    <div className="mt-10">

                        <label className="block text-lg font-semibold mb-3">
                            Additional Information
                        </label>

                        <textarea
                            value={formData.instructions}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    instructions: e.target.value,
                                })
                            }
                            rows={6}
                            placeholder="Generate a question paper for 3 hour exam duration..."
                            className="w-full rounded-[28px] bg-white border border-[#E5E5E5] p-6 outline-none resize-none"
                        />

                    </div>

                </div>

                {/* BOTTOM BUTTONS */}
                <div className="max-w-5xl mx-auto flex justify-between mt-8">

                    <button className="px-8 py-4 rounded-full bg-white shadow">
                        ← Previous
                    </button>

                    <button
                        onClick={generateAssignment}
                        disabled={loading}
                        className="px-8 py-4 rounded-full bg-black cursor-pointer text-white disabled:opacity-50"
                    >
                        {loading ? "Generating..." : "Generate Assignment"}
                    </button>

                </div>

            </div>

        </DashboardLayout>
    );
}