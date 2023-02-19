import { trendsColors } from '@services/constants';

export const getRandomColor = () => trendsColors[Math.floor(Math.random() * trendsColors.length)]
