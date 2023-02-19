import { useCallback, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import NotificationsList from './NotificationsList'
import { INotificationItem } from './NotificationsList.types'

function NotificationsListContainer() {
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage: string = searchParams.get('page') || '1'
    const pageSize: number = 1

    const onChangePage = (page: number): void => {
        searchParams.set('page', String(page))
        setSearchParams(searchParams)
    }

    fetch('http://localhost:9090/notofications?pageNumber=1&pageOffset=10&pageSize=10')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        });

    const data: INotificationItem[] = [
        {
            date: '30.01.2000',
            dateCreatedAt: '30.01.2000',
            message: 'Ошибка 1',
            counteRepetition: 10,
        },
        {
            date: '30.01.2000',
            dateCreatedAt: '30.01.2000',
            message: 'Ошибка 2',
            counteRepetition: 10,
        },
    ]
    return (
        <NotificationsList
            currentPage={Number(currentPage)}
            pageSize={pageSize}
            onChangePage={onChangePage}
            dataItems={data}
        />
    )
}

export default NotificationsListContainer
