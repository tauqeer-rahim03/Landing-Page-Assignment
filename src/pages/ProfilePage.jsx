import React from "react";
import { FaCamera } from "react-icons/fa";

const ProfilePage = () => {
    return (
        <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow text-center">
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

            <div className="mt-4">
                <h2 className="text-base font-semibold">Marry Doe</h2>
                <p className="text-sm text-gray-600">marrydoe@gmail.Com</p>
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
