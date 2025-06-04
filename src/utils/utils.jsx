import { Suspense } from "react";
import "./utils.css";

const LoadingSuspense = () => {
    const mode = JSON.parse(localStorage.getItem("mode"));

    return (
        <>
            {
                <div className={`w-full h-screen z-50 ${mode ? "bg-white" : "bg-primary-bg"} flex items-center justify-center`}>
                    <div className="loader"></div>
                </div>
            }
        </>
    )
}

export const SuspenseCustom = ({ children }) => {
    return (
        <Suspense fallback={<LoadingSuspense />}>
            {children}
        </Suspense>
    )
}