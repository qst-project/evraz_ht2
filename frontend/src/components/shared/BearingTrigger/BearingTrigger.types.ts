import { StatusType } from '@services/types';

export interface BearingTriggerProps {
    bearingName: string;
    bearingStatus: StatusType;
    showBearing: boolean;
    setShowBearing: Function;
}
