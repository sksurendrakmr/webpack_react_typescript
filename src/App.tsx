import React from "react";
import "./style.css";
import { ClickCounter } from "./ClickCounter";
export const App = () => {
    return (
        <>
            <h1>
                App header {process.env.NODE_ENV} - {process.env.name}
            </h1>
            <ClickCounter />
        </>
    );
};
