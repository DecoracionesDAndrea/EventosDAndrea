//import { useState } from 'react'
import { Layout, Button, theme } from 'antd';
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import { useState } from 'react';
import ToggleThemeButton from './components/ToggleThemeButton';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
const { Header, Sider } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const toogleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const { token: { colorBgContainer }, } = theme.useToken();
  return (
    <Layout>
      <Sider collapsed = {collapsed}
      collapsible
      trigger = {null}
      theme= {darkTheme ? 'dark': 'light'} 
      className="sidebar">
        <Logo />
        <MenuList darkTheme={darkTheme}/>
        <ToggleThemeButton darkTheme={darkTheme} toogleTheme={toogleTheme}/>
      </Sider>
      <Layout>
        <Header style={{padding: 0, background: colorBgContainer}}>
          <Button
            className="toggle"
            onClick={() => setCollapsed(!collapsed)}
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}>

          </Button>
        </Header>
      </Layout>
    </Layout>
  );
}

export default App;
