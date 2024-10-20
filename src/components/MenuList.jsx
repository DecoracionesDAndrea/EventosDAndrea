import { Menu } from 'antd';
import { HomeOutlined, BarsOutlined, BorderOutlined, LoadingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const MenuList = ({ darkTheme }) => {
  const navigate = useNavigate();

  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className="menu-bar">
      <Menu.Item key="home" icon={<HomeOutlined />} onClick={() => navigate('/')}>
        Inicio
      </Menu.Item>

      <Menu.SubMenu key="tasks" icon={<BarsOutlined />} title="Ofrecemos">
        <Menu.Item key="mesas" icon={<LoadingOutlined />} onClick={() => navigate('/mesas')}>
          Mesas
        </Menu.Item>
        <Menu.Item key="laterales" icon={<LoadingOutlined />} onClick={() => navigate('/laterales')}>
          Laterales
        </Menu.Item>
        <Menu.Item key="fondo" icon={<LoadingOutlined />} onClick={() => navigate('/fondo')}>
          Fondos
        </Menu.Item>

        <Menu.SubMenu key="subtasks"
        icon={<BarsOutlined/>} 
        title="Sillas"
        >
            <Menu.Item key="subtask-1" icon={<BorderOutlined />} onClick={() => navigate('/sillas/1')}>
            Plástico
            </Menu.Item>
            <Menu.Item key="subtask-2" icon={<BorderOutlined />} onClick={() => navigate('/sillas/2')}>
            Metal
            </Menu.Item>
            <Menu.Item key="subtask-3" icon={<BorderOutlined />} onClick={() => navigate('/sillas/3')}>
            Tronos
            </Menu.Item>
        </Menu.SubMenu>

      </Menu.SubMenu>

    </Menu>
  );
};

export default MenuList;
