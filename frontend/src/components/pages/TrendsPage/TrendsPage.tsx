import React from 'react';

import TrendsChart from '@shared/TrendsChart';
import PageLayout from '@components/layout/PageLayout/PageLayout';

import styles from './TrendsPage.module.scss';

function TrendsPage() {
    return (
        <PageLayout>
            <section className={styles.main}>
                <div className='container'>
                    <TrendsChart />
                </div>
            </section>
        </PageLayout>
    );
}

export default TrendsPage;
