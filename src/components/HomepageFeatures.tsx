import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

function TaskManagerLinks() {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--left padding-horiz--md">
                <h3>{"Task Manager"}</h3>
                <ul>
                    <li>
                        <a href={"/docs/tmb/getting-started"}>Getting started</a>
                    </li>
                    <li>
                        <a href={"/docs/tmb/all-commands"}>All commands</a>
                    </li>
                    <li>
                        <a href={"/docs/tmb/slash-commands"}>Slash commands</a>
                    </li>
                    <li>
                        <a href={"/docs/tmb/tasks"}>Tasks</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function DiscordWellbeingLinks() {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--left padding-horiz--md">
                <h3>{"Discord Wellbeing"}</h3>
                <ul>
                    <li>
                        <a href={"/docs/dwb/getting-started"}>Getting started</a>
                    </li>
                    <li>
                        <a href={"/docs/dwb/all-commands"}>All commands</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function General() {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--left padding-horiz--md">
                <h3>{"General"}</h3>
                <ul>
                    <li>
                        <a href={"/docs/general/team"}>Team</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function BnderDiscord() {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--left padding-horiz--md">
                <h3>{"bnder Discord Server"}</h3>
                <ul>
                    <li>
                        <a href={"/docs/bnder-discord/channels"}>Channels</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    <TaskManagerLinks/>
                    <DiscordWellbeingLinks/>
                    <General/>
                </div>
                <div className="row" style={{paddingTop: "1rem"}}>
                    <BnderDiscord/>
                </div>
            </div>
        </section>
    );
}
