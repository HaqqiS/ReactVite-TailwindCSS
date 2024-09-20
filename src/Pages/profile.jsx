import React from "react";
import { useLogin } from "../hooks/useLogin";
const ProfilePage = () => {
    const username = useLogin();

    return (
        <div>
            <h1 className="text-3xl">Profile</h1>
            <p>{username}</p>
        </div>
    );
};
export default ProfilePage;
