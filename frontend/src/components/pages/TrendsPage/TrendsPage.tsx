import React from 'react';

import TrendsChartContainer from '@shared/TrendsChart/TrendsChartContainer';
import styles from './TrendsPage.module.scss';

function TrendsPage() {
    return (
        <section className={styles.main}>
            <div className='container'>
                <TrendsChartContainer />
            </div>
        </section>
    );
}

export default TrendsPage;
