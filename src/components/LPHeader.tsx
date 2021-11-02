import LPHeaderIconBackground, { iconSet } from "./LPHeaderIconBackground";
import { css } from "@emotion/css";
import { useWindowSize } from "react-use";
import React from "react";

const styles = {
    main: css({
        height: 450,
        paddingTop: 120,
        background: "#01A9DB",
        position: "relative",
        overflow: "hidden"
    }),
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
    }),
    mainLogo: css({
        marginBottom: 25,
        height: "100px",
        width: "auto",
        [`@media only screen and (max-width: 800px)`]: {
            width: "80%",
        }
    }),
    inviteTaskManagerBotButtonLeftSection: css({
        background: "#22272d",
        width: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }),
    inviteTaskManagerBotButtonLeftSectionImage: css({
        height: "auto",
        width: 28
    }),
    inviteTaskManagerBotButtonRightSection: css({
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        padding: "0px 20px",
        [`@media only screen and (max-width: 800px)`]: {
            padding: "0px 5px"
        }
    })
};

function CenterText() {
    const { width: browserWidth } = useWindowSize();

    return (
        <div className={styles.mainCenterTextElement}>
        <h1 style={{fontSize: "45px"}}>bnder Docs</h1>
            <h2>Look up everything related to bnder</h2>
    </div>
);
}

export default function LPHeader() {
    return (
        <div className={styles.main}>
        <LPHeaderIconBackground iconSet={iconSet.default}/>
    <CenterText/>
    </div>
);
};