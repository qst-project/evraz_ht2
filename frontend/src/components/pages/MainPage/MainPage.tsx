import React from 'react';
import SinterMachineListContainer from '@shared/SinterMachineList/SinterMachineListContainer';
import { Header } from 'antd/es/layout/layout';
import styles from './MainPage.module.scss';

function MainPage() {
    return (
        <section className={styles.main}>
            <Header />
            <SinterMachineListContainer />

        </section>
    );
}

export default MainPage;
