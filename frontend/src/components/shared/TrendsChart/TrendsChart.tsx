import React from 'react';
import { Card } from 'antd';
import TrendsSidebar from '@shared/TrendsSidebar';
import styles from './TrendsChart.module.scss';

function TrendsChart() {
  return (
    <Card title="Эксгаустер X-172" className={styles.main}>
      <div className={styles.content}>
        <TrendsSidebar />
        <div className={styles.chart}>
          Здесь мог быть ваш график
        </div>
      </div>
    </Card>
  );
}

export default TrendsChart;
