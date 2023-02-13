import React from 'react';
import SinterMachineListContainer from '@shared/SinterMachineList/SinterMachineListContainer';
import styles from './MainPage.module.scss';

function MainPage() {
  return (
    <section className={styles.main}>
      <SinterMachineListContainer />
    </section>
  );
}

export default MainPage;
