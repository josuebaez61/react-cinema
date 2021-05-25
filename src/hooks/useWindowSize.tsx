import { useEffect, useState } from "react";

const initialState = {
    width: window.screen.width,
    height: window.screen.height
}

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(initialState);

    useEffect(() => {

        setWindowSize({
            width: window.screen.width,
            height: window.screen.height
        })

        const resizeCallback = (e: any) => {
            setWindowSize(e.target ? {
                width: window.screen.width,
                height: window.screen.height
            } : initialState)
        };

        window.addEventListener('resize', resizeCallback);

        return () => {
            window.removeEventListener('resize', resizeCallback);
        }
    }, []);

    return windowSize;
}