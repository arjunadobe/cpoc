import React from "react";
import { Space, Layout, Menu } from "antd";
import "./App.less";
import {
  VideoCameraOutlined,
} from "@ant-design/icons";
import ScannerPrototype from "./components/scannerPrototype/scannerPrototype";
const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <section style={{ textAlign: "center", margin: 16 }}>
            <Space align="start">
              <img
                style={{height: 36}}
                src="https://www.centralgroup.com/themes/default/assets/static/images/logo/logo-white-gray.svg"
                alt="Centra Group"
              />
            
            </Space>
          </section>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<VideoCameraOutlined />}>
              Scan
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />

          <Content style={{ margin: "0px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <ScannerPrototype></ScannerPrototype>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
