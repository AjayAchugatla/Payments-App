import React from 'react'
import Button from "./Button"
import { useNavigate } from "react-router-dom"
function User({ user }) {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between mt-4">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-ful">
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center h-full">
                <Button onClick={() => {
                    navigate(`/send?id=${user._id}&name=${user.firstName + " " + user.lastName}`)
                }} label={"Send Money"} />
            </div>
        </div>
    )
}

export default User