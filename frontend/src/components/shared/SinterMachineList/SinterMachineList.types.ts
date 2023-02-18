import { SinterMachineData } from '@services/types';

export interface SinterMachineListProps {
    moment: string;
    delay: number;
    sinterMachines: SinterMachineData[],
}
