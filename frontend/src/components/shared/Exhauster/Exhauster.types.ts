// import { ExhausterState } from '@reduxToolkit/slices/exhauster';
import { ExhausterData } from '@services/types';

export interface ExhausterProps {
    exhauster: ExhausterData,
    delay: number,
    moment: string,
}
