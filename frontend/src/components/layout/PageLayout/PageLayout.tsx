import React, { ReactNode, useState } from 'react'
import { Layout, theme } from 'antd';

import SideBarMenu from '@layout/SideBarMenu';
import AppHeader from '@layout/Header/AppHeader';

const { Header, Content } = Layout;

type PropsWithChildren<P> = P & { children: ReactNode };

function PageLayout({ children }: PropsWithChildren<any>) {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorFillContent },
    } = theme.useToken();

    return (
        <Layout className='page-layout'>
            <SideBarMenu collapsed={collapsed} />
            <Layout>
                <Header style={{ padding: '0 10px', background: colorFillContent }}>
                    <AppHeader setCollapsed={setCollapsed} collapsed={collapsed} />
                </Header>
                <Content>
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default PageLayout
