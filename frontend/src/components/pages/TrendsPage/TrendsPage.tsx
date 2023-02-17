import React from 'react';

import TrendsChart from '@shared/TrendsChart';

import styles from './TrendsPage.module.scss';

function TrendsPage() {
    return (
        <section className={styles.main}>
            <div className='container'>
                <TrendsChart />
            </div>
        </section>
    );
}

export default TrendsPage;
