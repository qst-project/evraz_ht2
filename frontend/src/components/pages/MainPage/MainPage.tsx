import React from 'react';
import SinterMachineListContainer from '@shared/SinterMachineList/SinterMachineListContainer';
import PageLayout from '@components/layout/PageLayout/PageLayout';

import styles from './MainPage.module.scss';

function MainPage() {
    return (
        <PageLayout>
            <section className={styles.main}>
                <SinterMachineListContainer />
            </section>
        </PageLayout>
    );
}

export default MainPage;
