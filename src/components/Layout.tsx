import { Link, useLocation } from "react-router-dom";
import { Layout as AntLayout, Menu } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = AntLayout;

interface LayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  { key: "/", label: "Home" },
  { key: "/contact", label: "Contact" },
];

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#141414",
  boxShadow: "0 1px 4px rgba(0, 21, 41, 0.08)",
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  return (
    <AntLayout>
      <Header style={headerStyle}>
        <Menu mode="horizontal" selectedKeys={[location.pathname]}>
          {menuItems.map((item) => (
            <Menu.Item key={item.key}>
              <Link to={item.key}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content className="min-h-[calc(100vh-133px)] px-4 lg:px-16 2xl:px-32 pt-8">
        {children}
      </Content>
      <Footer>
        No copyright -{" "}
        <a
          href="https://github.com/peterlyubenov/hogwarts-hitachi"
          target="_blank"
          className="text-primary"
        >
          <GithubOutlined className="mr-2" />
          GitHub Project
        </a>
      </Footer>
    </AntLayout>
  );
};
