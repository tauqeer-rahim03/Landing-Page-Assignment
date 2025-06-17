import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="card">
            <div className="flex flex-col justify-end h-full gap-4">
                <h1 className="text-3xl font-semibold">Welcome to PopX</h1>
                <p className="text-gray-600 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempore eum provident corrupti, quos ad ea! Inventore?
                </p>
                <div className="flex flex-col justify-end h-auto align-middle gap-4">
                    <Link to="/signup">
                        <button class="bg-violet-700 text-white font-semibold py-3 rounded-md w-full cursor-pointer">
                            Create Account
                        </button>
                    </Link>
                    <Link to="login">
                        <button class="bg-violet-300 text-gray-900 font-semibold py-3 rounded-md w-full cursor-pointer">
                            Already Registered? Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
