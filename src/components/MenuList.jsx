import { Menu } from "antd"
import { HomeOutlined, AppstoreOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined, BarsOutlined, AppleFilled } from '@ant-design/icons'

const MenuList = ({darkTheme}) => {
  return(
      <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className="menu-bar">
        <Menu.Item key="home" icon={<HomeOutlined/>}>
            Home
        </Menu.Item>

        <Menu.SubMenu key="tasks"
        icon={<BarsOutlined/>} 
        title="Tasks"
        >
        
        <Menu.Item key="task-1" icon={<AppleFilled />}>
        Task 1
        </Menu.Item>
        <Menu.Item key="task-2" icon={<AppleFilled />}>
        Task 2
        </Menu.Item>
        <Menu.Item key="task-3" icon={<AppleFilled />}>
        Task 3
        </Menu.Item>

        <Menu.SubMenu key="subtasks"
        icon={<BarsOutlined/>} 
        title="SubTasks"
        >
        
        <Menu.Item key="subtask-1" icon={<AppleFilled />}>
        SubTask 1
        </Menu.Item>
        <Menu.Item key="subtask-2" icon={<AppleFilled />}>
        SubTask 2
        </Menu.Item>
        <Menu.Item key="subtask-3" icon={<AppleFilled />}>
        SubTask 3
        </Menu.Item>


        </Menu.SubMenu>

        </Menu.SubMenu>

        <Menu.Item key="activity" icon={<AppstoreOutlined/>}>
            Activity
        </Menu.Item>
        <Menu.Item key="progress" icon={<AreaChartOutlined/>}>
            Progress
        </Menu.Item>
        <Menu.Item key="payment" icon={<PayCircleOutlined/>}>
            Payment
        </Menu.Item>
        <Menu.Item key="setting" icon={<SettingOutlined/>}>
            Setting
        </Menu.Item>
    </Menu>
    );
  
};

export default MenuList