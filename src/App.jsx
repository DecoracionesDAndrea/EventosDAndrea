import { Layout, Button, theme } from 'antd';
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import { useState } from 'react';
import ToggleThemeButton from './components/ToggleThemeButton';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Asegúrate de crear estas páginas
import MesasPage from './pages/MesasPage';
import LateralesPage from './pages/LateralesPage';
import FondoPage from './pages/FondoPage';
import SillasPage from './pages/SillaPage';

const { Header, Sider } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toogleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  const buttonStyle = {
    color: darkTheme ? '#fff' : '#000', // Cambia el color del botón
  };
  const { token: { colorBgContainer }, } = theme.useToken();
  const headerBgColor = darkTheme ? '#001529' : colorBgContainer;
  const headerTextColor = darkTheme ? '#ffffff' : '#0000000'; // Texto blanco para tema oscuro
  return (
    <Router>
      <Layout>
        <Sider collapsed={collapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? 'dark' : 'light'}
          className="sidebar">
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} toogleTheme={toogleTheme} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: headerBgColor, color: headerTextColor }} >
            <Button
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined style={buttonStyle}/> : <MenuFoldOutlined style={buttonStyle}/>}>
            </Button>
          </Header>
          <Layout.Content style={{ padding: '20px' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/mesas" element={<MesasPage />} />
              <Route path="/laterales" element={<LateralesPage />} />
              <Route path="/fondo" element={<FondoPage />} />
              <Route path="/sillas/:id" element={<SillasPage />} />
            </Routes>
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
