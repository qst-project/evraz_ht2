export interface NotificationsPageProps {
    currentPage: number;
    onChangePage(page: number, pageSize: number): void;
    pageSize: number;
    dataItems: any;
    total: number;
}

export interface INotificationItem {
    bearingNumber: number;
    exhausterNumber: number;
    fieldName: string;
    id: number;
    max: number;
    moment: string;
    sinMachineNumber: number;
    type: string;
    value: number;
}
