import React from "react";
import Header from "../components/Header/Header";

export const withHeader = (Component) => {
    return () => {
        return (
            <div style={{display: "grid", gridTemplateRows: "100px 1fr", height: "100%"}}>
                <Header />
                <Component />
            </div>
        )
    }
}