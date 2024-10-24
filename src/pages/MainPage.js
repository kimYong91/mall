import React from "react";
import { Link } from "react-router-dom";
import AboutPage from "./AboutPage";
import BasicLayout from "../layouts/BasicLayout";

function MainPage(props) {
    return (
        <BasicLayout>
            <div className={'text-3xl'}>MainPage</div>
        </BasicLayout>
    );
}

export default MainPage;