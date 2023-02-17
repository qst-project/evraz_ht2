export interface NotificationsPageProps {
    currentPage: number;
    onChangePage(page: number, pageSize: number): void;
    pageSize: number;
    dataItems: any;
}

export interface INotificationItem {
    date: string;
    dateCreatedAt: string;
    message: string;
    counteRepetition: number;
}
