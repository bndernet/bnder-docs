import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons/faFileAlt";
import { faFileImage } from "@fortawesome/free-solid-svg-icons/faFileImage";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { faPaste } from "@fortawesome/free-solid-svg-icons/faPaste";
import { faFileCode } from "@fortawesome/free-solid-svg-icons/faFileCode";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons/faClipboardCheck";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons/faFolderOpen";
import { faFolder } from "@fortawesome/free-solid-svg-icons/faFolder";
import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "react-use";


const backgroundStyles = {
    main: css({
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        zIndex: 0,
        overflow: "hidden"
    }),
    mainIconContainer: css({
        // border: "1px solid green",
        transform: "rotate(-10deg) translateX(-5%)",
        width: "110%"
    }),
    line: css({
        display: "flex",
        flex: 1
    }),
    element: css({
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        overflow: "hidden",
        height: 60
    }),
    icon: css({
        fontSize: 14,
        color: "#fff2",
        // TODO: wave animation:
        // animation: "$waveAnimation 15s ease-in-out infinite"
    }),
    "@keyframes waveAnimation": {
        "0%": {},
        "20%": {
            // color: "#fff4",
            color: "red",
        },
        "40%": {
            transform: "unset",
            color: "#fff2"
        },
        "100%": {}
    }
};

export const iconSet = {
    default: [
        faFileAlt,
        faBook,
        faFileImage,
        faPaste,
        faFolderOpen,
        faFileCode,
        faClipboardCheck,
        faFolder
    ]
}

interface LPHeaderIconBackgroundProps {
    iconSet: IconDefinition[];
}

export default function LPHeaderIconBackground(props: LPHeaderIconBackgroundProps) {
    const { width: browserWidth } = useWindowSize();

    let arrColumnCount;
    if (browserWidth >=  1500) {
        arrColumnCount = 30;
    } else if (browserWidth >= 1200) {
        arrColumnCount = 25;
    } else if (browserWidth >= 1000) {
        arrColumnCount = 20;
    } else if (browserWidth >= 800) {
        arrColumnCount = 15;
    } else if (browserWidth >= 700) {
        arrColumnCount = 12;
    } else if (browserWidth >= 600) {
        arrColumnCount = 10;
    } else if (browserWidth >= 500) {
        arrColumnCount = 8;
    } else if (browserWidth >= 400) {
        arrColumnCount = 7;
    } else {
        arrColumnCount = 5;
    }

    const arrColumn = Array.from({ length: arrColumnCount });
    const arrRow = Array.from({ length: 30 });
    const heightCenter = arrRow.length / 2;
    const widthCenter = arrColumn.length / 2;

    const iconToUse = (iconArray: IconDefinition[], columnIndex: number, rowIndex: number): IconDefinition => {
        let index = rowIndex + (columnIndex * 3);
        while (index >= iconArray.length) {
            index -= iconArray.length;
        }
        return iconArray[index];
    }

    const [showIcons, setShowIcons] = useState(false);
    useEffect(() => setShowIcons(true), []);

    return <div className={backgroundStyles.main}>
        <div className={backgroundStyles.mainIconContainer}>
            {arrRow.map(((value, indexRow) => (
                <div className={backgroundStyles.line} key={indexRow}>
                    {arrColumn.map(((value1, indexColumn) => (
                        <div className={backgroundStyles.element} key={indexColumn}>
                            {/**
                             * In production the icons are shown oversized for a second.
                             * To prevent this, the icons are only shown after javascript is loaded.
                             */}
                            {showIcons &&
                            <FontAwesomeIcon
                                data-test-height={Math.abs(indexRow - heightCenter)}
                                data-test-width={Math.abs(indexColumn - widthCenter)}
                                // TODO: macke this more like a circle animation:
                                // style={{ animationDelay: `${Math.abs(indexRow - heightCenter) + Math.abs(indexColumn - widthCenter)}s` }}
                                // style={{ animationDelay: `${(indexRow - heightCenter) + (indexColumn - widthCenter)}s` }}
                                // style={{ animationDelay: `${(indexRow + indexColumn) / 4}s` }}
                                className={backgroundStyles.icon}
                                icon={iconToUse(props.iconSet, indexRow, indexColumn)}
                            />
                            }
                        </div>
                    )))}
                </div>
            )))}
        </div>
    </div>;
}