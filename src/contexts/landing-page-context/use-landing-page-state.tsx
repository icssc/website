import { useState } from "react";

export function useLandingPageState() {
    const [landingPageTextPx, setLandingPageTextPx] = useState(0);

    return { landingPageTextPx, setLandingPageTextPx };
}
