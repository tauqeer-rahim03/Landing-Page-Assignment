import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignupPage = () => {
    const [fulName, setFullName] = useState("Marry Doe");
    const [phoneNumber, setPhoneNumber] = useState("9876543210");
    const [emailAddress, setEmailAddress] = useState("marrydoe@gmail.com");
    const [password, setPassword] = useState("Marry Doe");
    const [companyName, setCompanyName] = useState("Marry Doe");
    const [check, setCheck] = useState(false);

    function handleCheck(check) {
        setCheck(!check);
        return check ? "checked" : "";
    }

    return (
        <div className="card">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="mb-6">
                        <h1 className="text-3xl font-semibold ">
                            Create your PopX Account
                        </h1>
                    </div>
                    <div className="p-1">
                        <form className="space-y-6 text-sm">
                            <div className="relative">
                                <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-violet-600 text-xs font-medium">
                                    Full Name
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={fulName}
                                    onChange={(e) =>
                                        setFullName(e.target.value)
                                    }
                                    required
                                    className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
                                />
                            </div>
                            <div className="relative">
                                <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-violet-600 text-xs font-medium">
                                    Phone number
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) =>
                                        setPhoneNumber(e.target.value)
                                    }
                                    required
                                    className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
                                />
                            </div>

                            <div className="relative">
                                <label className="absolute -top-2 left-3  bg-gray-100 px-1 text-violet-600 text-xs font-medium">
                                    Email address
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={emailAddress}
                                    onChange={(e) =>
                                        setEmailAddress(e.value.target)
                                    }
                                    required
                                    className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
                                />
                            </div>

                            <div className="relative">
                                <label className="absolute -top-2 left-3  bg-gray-100 px-1 text-violet-600 text-xs font-medium">
                                    Password{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.value.target)
                                    }
                                    required
                                    className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
                                />
                            </div>

                            <div className="relative">
                                <label className="absolute -top-2 left-3  bg-gray-100 px-1 text-violet-600 text-xs font-medium">
                                    Company name
                                </label>
                                <input
                                    type="text"
                                    value={companyName}
                                    onChange={(e) =>
                                        setCompanyName(e.value.target)
                                    }
                                    required
                                    className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Are you an Agency?
                                    <span className="text-red-500">*</span>
                                </label>
                                <div className="flex items-center space-x-6">
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="agency"
                                            id="agency"
                                            required
                                            onClick={handleCheck}
                                        />
                                        <span>Yes</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name="agency"
                                            id="agency"
                                            required
                                            onClick={handleCheck}
                                        />
                                        <span>No</span>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <Link to="/profile">
                    <button className="bg-violet-700 text-white font-semibold py-3 rounded-md w-full cursor-pointer">
                        Create Account
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SignupPage;
