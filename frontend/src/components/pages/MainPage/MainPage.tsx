import React from 'react';
import SinterMachineListContainer from '@shared/SinterMachineList/SinterMachineListContainer';
import styles from './MainPage.module.scss';
import { Header } from 'antd/es/layout/layout';

function MainPage() {
  return (
    <section className={styles.main}>
      <Header />
      <SinterMachineListContainer />

    </section>
  );
}

export default MainPage;
