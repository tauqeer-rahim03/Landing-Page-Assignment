import React from "react";
import { FaCamera } from "react-icons/fa";

const ProfilePage = () => {
    return (
        <div className="card">
            <h1 className="bg-white relative p-4 text-xl mb-4">
                Account Settings
            </h1>
            <div className="flex gap-4">
                <div className="relative w-fit mx-auto">
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover"
                    />

                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-violet-600 rounded-full flex items-center justify-center border-2 border-white">
                        <FaCamera className="text-white text-sm" />
                    </div>
                </div>

                <div className="mt-4 flex-1">
                    <h2 className="text-base font-semibold">Marry Doe</h2>
                    <p className="text-sm text-gray-600">marrydoe@gmail.Com</p>
                </div>
            </div>

            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam
            </p>
        </div>
    );
};

export default ProfilePage;
