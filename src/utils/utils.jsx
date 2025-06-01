import { Suspense } from "react";
import "./utils.css";
const LoadingSuspense = () => {
    return (
        <div className="w-full h-screen z-50 bg-primary-bg flex items-center justify-center">
            <div className="loader"></div>
        </div>
    )
}

export const SuspenseCustom = ({ children }) => {
    return (
        <Suspense fallback={<LoadingSuspense />}>
            {children}
        </Suspense>
    )
}