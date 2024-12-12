"use client";

import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { useLandingPageState } from "@/contexts/landing-page-context/use-landing-page-state";

interface LandingPageContextProps {
    landingPageTextPx: number;
    setLandingPageTextPx: Dispatch<SetStateAction<number>>;
}

const LandingPageContext = createContext<LandingPageContextProps | undefined>(
    undefined
);

export const LandingPageContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const state = useLandingPageState();

    return (
        <LandingPageContext.Provider value={state}>
            {children}
        </LandingPageContext.Provider>
    );
};

export const useLandingPageContext = (): LandingPageContextProps => {
    const context = useContext(LandingPageContext);
    if (!context) {
        throw new Error(
            "useLandingPageContext must be used within a LandingPageContextProvider"
        );
    }
    return context;
};
