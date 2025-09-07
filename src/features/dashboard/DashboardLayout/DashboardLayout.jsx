import  { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout } from 'antd';
import Sidebar from './Sidebar';
const { Header,  Content } = Layout;
const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <Layout >
     <Sidebar style={{minHeight: "100vh"}} collapsed={collapsed}/>
      <Layout>
        <Header style={{ padding: 0, background: "white" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: 'white',
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;