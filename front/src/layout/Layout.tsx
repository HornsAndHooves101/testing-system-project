import { Layout as AntLayout } from "antd";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
const { Content, Footer } = AntLayout;
export const Layout = () => {
  return (
    <div>
      <AntLayout>
        <Header />
        <Content style={{ padding: "0 50px" }}>
          <AntLayout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Outlet />
            </Content>
          </AntLayout>
        </Content>
      </AntLayout>
      <Footer style={{ textAlign: "center" }}>2022</Footer>
    </div>
  );
};
