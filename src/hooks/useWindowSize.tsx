import { useState } from "react";

const initialState = {
    width: window.screen.width,
    height: window.screen.height
}

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(initialState);
    window.onresize = (e: any) => 
    setWindowSize(e.target ? { 
        width: e.target.outerWidth,
        height: e.target.outerHeight
    } : initialState);
    return windowSize;
}