import LPHeaderIconBackground, { iconSet } from "./LPHeaderIconBackground";
import { css } from "@emotion/css";
import React from "react";
import useThemeContext from "@theme/hooks/useThemeContext";


function CenterText() {
    const styles = {
        mainCenterTextElement: css({
            width: "unset",
            position: "absolute",
            transform: "translate(-50%, -50%)",
            top: "45%",
            left: "50%",
            minWidth: 300,
            textAlign: "center",
            color: "#fff",
            [`@media only screen and (max-width: 800px)`]: {
                top: "42%",
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
    const { isDarkTheme } = useThemeContext();

    const styles = {
        main: css({
            height: 450,
            paddingTop: 120,
            background: isDarkTheme ? "#068" : "#01A9DB",
            position: "relative",
            overflow: "hidden"
        })
    }
    return (
        <div className={styles.main}>
            <LPHeaderIconBackground iconSet={iconSet.default}/>
            <CenterText/>
        </div>
    );
};