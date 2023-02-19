import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import NotificationsList from './NotificationsList'
import { INotificationItem } from './NotificationsList.types'

function NotificationsListContainer() {
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage: string = searchParams.get('page') || '1'
    const pageSize: number = 10
    const [item, setItems] = useState([] as INotificationItem[])
    const [total, setTotal] = useState(0)

    const onChangePage = (page: number): void => {
        searchParams.set('page', String(page))
        setSearchParams(searchParams)
    }

    fetch(`http://localhost:9090/notifications?size=${pageSize}&page=${Number(currentPage) - 1}`)
        .then((response) => response.json())
        .then((data) => {
            setItems(data.content)
            setTotal(data.totalPages)
        });

    return (
        <NotificationsList
            total={total}
            currentPage={Number(currentPage)}
            pageSize={pageSize}
            onChangePage={onChangePage}
            dataItems={item}
        />
    )
}

export default NotificationsListContainer
