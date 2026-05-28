import mongoose, { Schema, models, model } from "mongoose";

const settingsSchema = new Schema(
    {
        schoolName: {
            type: String,
            required: true,
        },

        city: {
            type: String,
            required: true,
        },

        principalName: {
            type: String,
        },

        schoolEmail: {
            type: String,
        },

        phoneNumber: {
            type: String,
        },

        board: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Settings =
    models.Settings ||
    model("Settings", settingsSchema);

export default Settings;