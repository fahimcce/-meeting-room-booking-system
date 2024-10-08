"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleDuplicateError = (err) => {
    const match = err.message.match(/"([^"]*)/);
    const extraxted_msg = match && match[1];
    const errorSources = [
        {
            path: "",
            message: `Room ${extraxted_msg} is already exists`,
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: "Invalid ID",
        errorSources,
    };
};
exports.default = handleDuplicateError;
