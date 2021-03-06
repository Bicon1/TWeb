import {Layout, Menu} from "antd";
//Header
const { Header } = Layout;
export const HeaderLayout =() =>{
    return(
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
                <Menu.Item key="4">nav 4</Menu.Item>
            </Menu>
        </Header>
    )
}