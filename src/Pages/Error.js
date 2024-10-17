import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Error = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 3000);
    }, []);

    return (
        <div className="w-screen h-screen p-2 flex justify-center items-center bg-indigo-100">
            <div className="w-[90%] h-[90%] text-lg">
                <h1 className="text-3xl font-bold text-indigo-600 text-center">Error... Something went wrong !!!</h1>
                <p className="text-center mt-1 font-semibold">Please Wait, Redirecting back to homepage.</p>
            </div>
        </div>
    )
}
