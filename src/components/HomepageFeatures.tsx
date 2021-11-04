import React from 'react';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import useThemeContext from "@theme/hooks/useThemeContext";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons/faAmbulance";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default function HomepageFeatures() {
    return <section className={styles.features}>
        <div className="container">
            <div className={styles.topicGrid}>

                <TopicBox
                    title="Task Manager"
                    titleImage="/img/tmb/taskmanagerbot_logo_128x128.webp"
                    imageOptions={{ positionX: -5, scale: 1.1 }}
                    boxLink="/docs/tmb/getting-started"
                    links={[
                        { displayName: "Getting started", linkTo: "/docs/tmb/getting-started" },
                        { displayName: "All commands", linkTo: "/docs/tmb/all-commands" },
                        { displayName: "Slash commands", linkTo: "/docs/tmb/slash-commands" },
                        { displayName: "Tasks", linkTo: "/docs/tmb/tasks" }
                    ]}
                />

                <TopicBox
                    title="Discord Wellbeing"
                    titleImage="/img/dwb/discordwellbeingbot_logo_128x128.webp"
                    imageOptions={{ positionX: -5, scale: 1.1 }}
                    boxLink="/docs/dwb/getting-started"
                    links={[
                        { displayName: "Getting started", linkTo: "/docs/dwb/getting-started" },
                        { displayName: "All commands", linkTo: "/docs/dwb/all-commands" }
                    ]}
                />

                <TopicBox
                    title="General"
                    boxLink="docs/general/team"
                    titleImage="/img/bnder_logo.jpg"
                    imageOptions={{ positionX: -5, scale: 0.9 }}
                    links={[
                        { displayName: "Team", linkTo: "docs/general/team" }
                    ]}
                />

                <TopicBox
                    title="bnder Discord Server"
                    boxLink="/docs/bnder-discord/channels"
                    icon={faAmbulance}
                    links={[
                        { displayName: "Channels", linkTo: "/docs/bnder-discord/channels" }
                    ]}
                />

            </div>
        </div>
    </section>;
}

interface Links {
    displayName: string,
    linkTo: string;
}

interface TopicBoxProps {
    /** The box title */
    title: string;

    /** Image next to the box title */
    titleImage?: string;

    /** A icon from fontawesome.com */
    icon?: IconDefinition;

    imageOptions?: {
        /** Custom image style. Default: 1.0 */
        scale?: number;

        /** Custom image position on X axis */
        positionX?: number;

        /** Default: 50% */
        customBorderRadius?: string;
    };

    /** Link if the user clicks just on the box and not on a link in the box */
    boxLink: string;

    /** List of displayed links in the box */
    links: Links[];
}

function TopicBox(props: TopicBoxProps) {
    const { isDarkTheme } = useThemeContext();

    const TopSection = () => {
        return <div className={styles.topicBoxTitleSection}>

            {props.icon && <div className={styles.topicBoxImageWrapper}>
                <FontAwesomeIcon icon={props.icon}/>
            </div>}


            {props.titleImage && <div className={styles.topicBoxImageWrapper}>
                <img
                    className={styles.topicBoxImage}
                    src={props.titleImage}
                    alt=""
                    style={{
                        transform: `
                            scale(${props.imageOptions?.scale || "1"})
                            translateX(${props.imageOptions?.positionX}px)
                        `,
                        borderRadius: props.imageOptions?.customBorderRadius || "50%"
                    }}
                />
            </div>}
            <h3 className={`${styles.topicBoxTitle} ${isDarkTheme ? styles.topicBoxTitleDark : ""}`}>
                {props.title}
            </h3>
        </div>;
    };

    const BottomSection = () => {
        return <>
            {props.links.map((link, index) => (
                <div key={index}>
                    <Link to={link.linkTo} className={styles.topicBoxLink}>
                        {link.displayName}
                    </Link>
                </div>
            ))}
        </>;
    }

    return <Link to={props.boxLink} style={{ textDecoration: "unset" }}>
        <div className={`${styles.topicBox} ${isDarkTheme ? styles.topicBoxDark : ""}`}>
            <TopSection/>
            <BottomSection/>
        </div>
    </Link>;
}