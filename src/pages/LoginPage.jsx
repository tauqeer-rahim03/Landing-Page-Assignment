import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const isFormValid = emailAddress.trim() !== "" && password.trim() !== "";

    return (
        <div className="card">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="mb-6">
                        <h1 className="text-3xl font-semibold mb-3">
                            Signin to your PopX Account
                        </h1>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rerum est a veritatis adipisci doloremque
                            autem.
                        </p>
                    </div>
                    <form className="space-y-6 text-sm p-1">
                        <div className="relative">
                            <label className="absolute -top-2 left-3  bg-gray-100 px-1 text-violet-600 text-xs font-medium">
                                Email address
                            </label>
                            <input
                                type="email"
                                value={emailAddress}
                                onChange={(e) =>
                                    setEmailAddress(e.target.value)
                                }
                                required
                                placeholder="Enter your email"
                                className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>

                        <div className="relative">
                            <label className="absolute -top-2 left-3  bg-gray-100 px-1 text-violet-600 text-xs font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter password"
                                className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>
                    </form>
                </div>

                <Link to="/profile">
                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`w-full py-2 rounded-md text-white font-semibold ${
                            isFormValid
                                ? "bg-violet-600 hover:bg-violet-700"
                                : "bg-gray-400 cursor-not-allowed"
                        }`}
                    >
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
