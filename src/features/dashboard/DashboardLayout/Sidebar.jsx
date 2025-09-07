import { Link } from 'react-router-dom';
import { sidebarItems } from '../../../assets/data/sidebarItems';
const { Sider } = Layout;
import { Button, Layout, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ collapsed }) => {
    const menuItems = sidebarItems.map((item, index) => ({
        key: String(index), // every item needs a unique key
        icon: item.icon ? <item.icon /> : null,
       label: <Link to={item.path}>{item.label}</Link>
 // navigate (replace with react-router if needed)
    }));
    return (
         <Sider width={300} style={{ minHeight: "100vh", width: "300px", background: 'white', border: '2px solid black' }} trigger={null} collapsible collapsed={collapsed}>
            {/* <div className="demo-logo-vertical" /> */}
            <div className='text-center py-4'>
                Medimart
            </div>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                items={menuItems}
            />
        </Sider>
       
      
    )
}

export default Sidebar
