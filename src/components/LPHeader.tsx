import LPHeaderIconBackground, { iconSet } from "./LPHeaderIconBackground";
import { css } from "@emotion/css";
import React from "react";
import { useColorMode } from '@docusaurus/theme-common';


function CenterText() {
    const styles = {
        mainCenterTextElement: css({
            width: "unset",
            position: "absolute",
            transform: "translate(-50%, -50%)",
            top: "48%",
            left: "50%",
            minWidth: 300,
            textAlign: "center",
            color: "#fff",
            [`@media only screen and (max-width: 800px)`]: {
                top: "50%",
                width: "80%",
            },
        })
    };


    return (
        <div className={styles.mainCenterTextElement}>
            <h1 style={{ fontSize: "45px" }}>bnder Docs</h1>
            <h2>Look up everything related to bnder</h2>
        </div>
    );
}

export default function LPHeader() {
    const { isDarkTheme } = useColorMode();

    const styles = {
        main: css({
            height: 450,
            paddingTop: 120,
            background: isDarkTheme ? "#068" : "#01A9DB",
            position: "relative",
            overflow: "hidden",
            [`@media only screen and (max-width: 800px)`]: {
                height: 350
            },
        })
    }
    return (
        <div className={styles.main}>
            <LPHeaderIconBackground iconSet={iconSet.default}/>
            <CenterText/>
        </div>
    );
};