"use client";

import { useEffect, useState } from "react";

type SettingsForm = {
    schoolName: string;
    city: string;
    principalName: string;
    schoolEmail: string;
    phoneNumber: string;
    board: string;
};

export default function SettingsPage() {

    const [loading, setLoading] = useState(true);

    const [saving, setSaving] = useState(false);

    const [formData, setFormData] =
        useState<SettingsForm>({
            schoolName: "",
            city: "",
            principalName: "",
            schoolEmail: "",
            phoneNumber: "",
            board: "",
        });

    useEffect(() => {

        async function fetchSettings() {

            try {

                const res =
                    await fetch("/api/settings");

                const data = await res.json();

                if (
                    data.success &&
                    data.settings
                ) {

                    setFormData({
                        schoolName:
                            data.settings.schoolName || "",

                        city:
                            data.settings.city || "",

                        principalName:
                            data.settings.principalName || "",

                        schoolEmail:
                            data.settings.schoolEmail || "",

                        phoneNumber:
                            data.settings.phoneNumber || "",

                        board:
                            data.settings.board || "",
                    });
                }

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);
            }
        }

        fetchSettings();

    }, []);

    async function handleSave() {

        try {

            setSaving(true);

            const res = await fetch(
                "/api/settings",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify(formData),
                }
            );

            const data = await res.json();

            if (data.success) {

                alert("Settings saved");

            } else {

                alert("Saving failed");
            }

        } catch (error) {

            console.log(error);

            alert("Something went wrong");

        } finally {

            setSaving(false);
        }
    }

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    if (loading) {

        return (

            <div className="flex items-center justify-center h-full">

                <h1 className="text-2xl font-semibold">
                    Loading...
                </h1>

            </div>
        );
    }

    return (

        <div className="p-6">

            {/* HEADER */}

            <div className="mb-8">

                <h1 className="text-4xl font-bold text-[#2D2D2D]">
                    Settings
                </h1>

                <p className="text-gray-500 mt-2">
                    Manage your school information and preferences.
                </p>

            </div>

            {/* FORM CARD */}

            <div className="
                bg-white
                rounded-[32px]
                p-8
                shadow-sm
                border
                text-black
                border-[#ECECEC]
                max-w-4xl
            ">

                <div className="grid grid-cols-2 gap-6">

                    {/* School Name */}

                    <div>

                        <label className="
                            block
                            text-sm
                            font-medium
                            text-gray-600
                            mb-2
                        ">
                            School Name
                        </label>

                        <input
                            type="text"
                            name="schoolName"
                            value={formData.schoolName}
                            onChange={handleChange}
                            placeholder="Enter school name"
                            className="
                                w-full
                                border
                                border-[#E5E5E5]
                                rounded-2xl
                                px-5
                                py-4
                                outline-none
                                focus:border-black
                                transition-all
                            "
                        />

                    </div>

                    {/* City */}

                    <div>

                        <label className="
                            block
                            text-sm
                            font-medium
                            text-gray-600
                            mb-2
                        ">
                            City
                        </label>

                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Enter city"
                            className="
                                w-full
                                border
                                border-[#E5E5E5]
                                rounded-2xl
                                px-5
                                py-4
                                outline-none
                                focus:border-black
                                transition-all
                            "
                        />

                    </div>

                    {/* Principal */}

                    <div>

                        <label className="
                            block
                            text-sm
                            font-medium
                            text-gray-600
                            mb-2
                        ">
                            Principal Name
                        </label>

                        <input
                            type="text"
                            name="principalName"
                            value={formData.principalName}
                            onChange={handleChange}
                            placeholder="Enter principal name"
                            className="
                                w-full
                                border
                                border-[#E5E5E5]
                                rounded-2xl
                                px-5
                                py-4
                                outline-none
                                focus:border-black
                                transition-all
                            "
                        />

                    </div>

                    {/* Email */}

                    <div>

                        <label className="
                            block
                            text-sm
                            font-medium
                            text-gray-600
                            mb-2
                        ">
                            School Email
                        </label>

                        <input
                            type="email"
                            name="schoolEmail"
                            value={formData.schoolEmail}
                            onChange={handleChange}
                            placeholder="Enter school email"
                            className="
                                w-full
                                border
                                border-[#E5E5E5]
                                rounded-2xl
                                px-5
                                py-4
                                outline-none
                                focus:border-black
                                transition-all
                            "
                        />

                    </div>

                    {/* Phone */}

                    <div>

                        <label className="
                            block
                            text-sm
                            font-medium
                            text-gray-600
                            mb-2
                        ">
                            Phone Number
                        </label>

                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            className="
                                w-full
                                border
                                border-[#E5E5E5]
                                rounded-2xl
                                px-5
                                py-4
                                outline-none
                                focus:border-black
                                transition-all
                            "
                        />

                    </div>

                    {/* Board */}

                    <div>

                        <label className="
                            block
                            text-sm
                            font-medium
                            text-gray-600
                            mb-2
                        ">
                            Board
                        </label>

                        <input
                            type="text"
                            name="board"
                            value={formData.board}
                            onChange={handleChange}
                            placeholder="CBSE / ICSE / State Board"
                            className="
                                w-full
                                border
                                border-[#E5E5E5]
                                rounded-2xl
                                px-5
                                py-4
                                outline-none
                                focus:border-black
                                transition-all
                            "
                        />

                    </div>

                </div>

                {/* SAVE BUTTON */}

                <div className="mt-10">

                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="
                            bg-black
                            text-white
                            px-8
                            py-4
                            rounded-full
                            font-medium
                            hover:scale-[1.02]
                            transition-all
                            disabled:opacity-50
                        "
                    >

                        {
                            saving
                                ? "Saving..."
                                : "Save Settings"
                        }

                    </button>

                </div>

            </div>

        </div>
    );
}