import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import LPHeader from "@site/src/components/LPHeader";

export default function Home(): JSX.Element {
    return (
        <Layout title="" description="">
            <LPHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
