import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

export const withSidebar = (Component) => {
    return () => {
        return (
            <div style={{display: "grid", gridTemplateColumns: "200px 1fr", height: "100%"}}>
                <Sidebar />
                <Component />
            </div>
        )
    }
}