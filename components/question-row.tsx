"use client";

import { Minus, Plus, ChevronDown, X } from "lucide-react";

type QuestionItem = {
    id: string;
    type: string;
    count: number;
    marks: number;
};

type Props = {
    item: QuestionItem;
    onUpdate: (
        id: string,
        field: "type" | "count" | "marks",
        value: string | number
    ) => void;

    onRemove: (id: string) => void;
};

export default function QuestionRow({
    item,
    onUpdate,
    onRemove,
}: Props) {

    return (
        <div className="grid grid-cols-[1fr_140px_140px_40px] gap-4 items-center">

            {/* QUESTION TYPE */}
            <div className="relative">

                <select
                    value={item.type}
                    onChange={(e) =>
                        onUpdate(item.id, "type", e.target.value)
                    }
                    className="w-full appearance-none bg-white h-[62px] rounded-full px-6 pr-14 border border-[#E5E5E5] outline-none text-[16px] font-medium"
                >

                    <option>Multiple Choice Questions</option>

                    <option>Short Questions</option>

                    <option>Diagram/Graph-Based Questions</option>

                    <option>Numerical Problems</option>

                    <option>Long Questions</option>

                </select>

                <ChevronDown
                    size={18}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-[#777]"
                />

            </div>

            {/* QUESTION COUNT */}
            <div className="flex items-center justify-between bg-white border border-[#E5E5E5] rounded-full px-4 h-[62px]">

                <button
                    onClick={() =>
                        onUpdate(
                            item.id,
                            "count",
                            Math.max(1, item.count - 1)
                        )
                    }
                    className="text-[#8A8A8A]"
                >
                    <Minus size={18} />
                </button>

                <span className="font-semibold text-lg">
                    {item.count}
                </span>

                <button
                    onClick={() =>
                        onUpdate(item.id, "count", item.count + 1)
                    }
                    className="text-[#8A8A8A]"
                >
                    <Plus size={18} />
                </button>

            </div>

            {/* MARKS */}
            <div className="flex items-center justify-between bg-white border border-[#E5E5E5] rounded-full px-4 h-[62px]">

                <button
                    onClick={() =>
                        onUpdate(
                            item.id,
                            "marks",
                            Math.max(1, item.marks - 1)
                        )
                    }
                    className="text-[#8A8A8A]"
                >
                    <Minus size={18} />
                </button>

                <span className="font-semibold text-lg">
                    {item.marks}
                </span>

                <button
                    onClick={() =>
                        onUpdate(item.id, "marks", item.marks + 1)
                    }
                    className="text-[#8A8A8A]"
                >
                    <Plus size={18} />
                </button>

            </div>

            {/* DELETE */}
            <button
                onClick={() => onRemove(item.id)}
                className="text-[#7A7A7A] hover:text-red-500 transition"
            >
                <X size={18} />
            </button>

        </div>
    );
}