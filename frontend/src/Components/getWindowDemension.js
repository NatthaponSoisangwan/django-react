
/*  
This is to exact the height and width of devices window dimension. 
Getting help from : 
https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
*/
import { useEffect, useState } from "react";

export default function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}
