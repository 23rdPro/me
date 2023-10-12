import React, { useEffect, useState } from "react";

function useMediaQuery({ mediaQuery }: { mediaQuery: string }) {
    const [matches, setMatches] = useState<boolean | null>(null);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(mediaQuery);
        const listener = () => setMatches(!!mediaQueryList.matches);
        listener();
        mediaQueryList.addEventListener('change', listener)
        return () => mediaQueryList.removeEventListener('change', listener)
    }, [mediaQuery])
    return matches
}

export default useMediaQuery
