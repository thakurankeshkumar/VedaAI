"use client";

import { useEffect, useState } from "react";

import {
    School,
    MapPin,
    User,
    Mail,
    Phone,
    GraduationCap,
    Save,
} from "lucide-react";

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

                const data =
                    await res.json();

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

            const res =
                await fetch(
                    "/api/settings",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json",
                        },

                        body: JSON.stringify(
                            formData
                        ),
                    }
                );

            const data =
                await res.json();

            if (data.success) {

                alert(
                    "Settings saved successfully"
                );

            } else {

                alert("Saving failed");
            }

        } catch (error) {

            console.log(error);

            alert(
                "Something went wrong"
            );

        } finally {

            setSaving(false);
        }
    }

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {

        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value,
        });
    }

    if (loading) {

        return (

            <div className="
                flex
                items-center
                justify-center
                h-full
                text-black
            ">

                <div className="
                    flex
                    flex-col
                    items-center
                    gap-4
                ">

                    <div className="
                        w-14
                        h-14
                        border-4
                        border-gray-300
                        border-t-black
                        rounded-full
                        animate-spin
                    " />

                    <h1 className="
                        text-xl
                        sm:text-2xl
                        font-semibold
                    ">
                        Loading Settings...
                    </h1>
                </div>
            </div>
        );
    }

    return (

        <div className="
            w-full
            min-h-full
            px-4
            py-4
            sm:px-6
            lg:px-10
            lg:py-8
            pb-32
            lg:pb-10
        ">

            {/* HEADER */}

            <div className="mb-8">

                <h1 className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-bold
                    text-[#2D2D2D]
                ">
                    Settings
                </h1>

                <p className="
                    text-gray-500
                    mt-2
                    text-sm
                    sm:text-base
                    lg:text-lg
                ">
                    Manage your school information
                    and preferences.
                </p>
            </div>


            {/* MAIN CARD */}

            <div className="
                bg-white
                rounded-[28px]
                lg:rounded-[36px]
                p-5
                sm:p-7
                lg:p-10
                shadow-sm
                border
                border-[#ECECEC]
                max-w-6xl
            ">

                {/* TOP */}

                <div className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    gap-5
                    mb-8
                ">

                    <div>

                        <h2 className="
                            text-2xl
                            sm:text-3xl
                            font-bold
                            text-[#2D2D2D]
                        ">
                            School Information
                        </h2>

                        <p className="
                            text-gray-500
                            mt-2
                            text-sm
                            sm:text-base
                        ">
                            Update your institution
                            details and contact info.
                        </p>
                    </div>


                    {/* BADGE */}

                    <div className="
                        px-5
                        py-3
                        rounded-full
                        bg-[#F5F5F5]
                        text-sm
                        font-medium
                        text-[#2D2D2D]
                        w-fit
                    ">
                        Admin Settings
                    </div>
                </div>


                {/* FORM GRID */}

                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-5
                    lg:gap-6
                ">

                    <InputField
                        icon={<School size={20} />}
                        label="School Name"
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleChange}
                        placeholder="Enter school name"
                    />

                    <InputField
                        icon={<MapPin size={20} />}
                        label="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter city"
                    />

                    <InputField
                        icon={<User size={20} />}
                        label="Principal Name"
                        name="principalName"
                        value={formData.principalName}
                        onChange={handleChange}
                        placeholder="Enter principal name"
                    />

                    <InputField
                        icon={<Mail size={20} />}
                        label="School Email"
                        name="schoolEmail"
                        value={formData.schoolEmail}
                        onChange={handleChange}
                        placeholder="Enter school email"
                    />

                    <InputField
                        icon={<Phone size={20} />}
                        label="Phone Number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                    />

                    <InputField
                        icon={
                            <GraduationCap size={20} />
                        }
                        label="Education Board"
                        name="board"
                        value={formData.board}
                        onChange={handleChange}
                        placeholder="CBSE / ICSE / State Board"
                    />
                </div>


                {/* SAVE BUTTON */}

                <div className="
                    mt-10
                    flex
                    justify-end
                ">

                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="
                            w-full
                            sm:w-auto
                            h-14
                            px-8
                            rounded-full
                            bg-[#111111]
                            text-white
                            flex
                            items-center
                            justify-center
                            gap-3
                            text-sm
                            sm:text-base
                            hover:scale-[1.02]
                            transition-all
                            disabled:opacity-50
                        "
                    >

                        <Save size={18} />

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


type InputFieldProps = {
    icon: React.ReactNode;
    label: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;
};

function InputField({
    icon,
    label,
    name,
    value,
    placeholder,
    onChange,
}: InputFieldProps) {

    return (

        <div>

            <label className="
                flex
                items-center
                gap-2
                text-sm
                font-medium
                text-gray-600
                mb-3
            ">

                {icon}

                {label}

            </label>

            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
                    w-full
                    h-14
                    sm:h-16
                    border
                    border-[#E5E5E5]
                    rounded-2xl
                    px-5
                    outline-none
                    bg-[#FAFAFA]
                    focus:bg-white
                    focus:border-black
                    text-black
                    transition-all
                    text-sm
                    sm:text-base
                "
            />
        </div>
    );
}