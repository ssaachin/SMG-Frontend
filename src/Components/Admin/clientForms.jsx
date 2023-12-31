import React from "react";

export default function ClientForm() {
    return (
        <section className="bg-indigo-900 p-4 text-white w-full md:w-1/3 rounded-md h-64 mt-4">
            <h2 className="text-2xl mb-2 font-bold">Client Forms</h2>
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 flex-1 rounded border border-gray-300 focus:border-blue-700 focus:outline-none"
                />
            </div>
        </section>
    );
}
