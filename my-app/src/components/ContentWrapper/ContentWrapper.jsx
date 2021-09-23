import React from "react";
import SideBar from "../SideBar/SideBar";
import ContentResult from "../ContentResult/ContentResult";

function ContentWrapper() {
    return (
        <div className="d-flex content-wrapper">
            <SideBar></SideBar>
            <ContentResult></ContentResult>
        </div>
    );
}

export default ContentWrapper;
