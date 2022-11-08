import { Layout } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./logo.svg";
import "./header.scss";
const AntHeader = Layout.Header;

export const Header = () => {
  return (
    <AntHeader className="header">
      <nav
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          height: "100%",
        }}
      >
        <Link className="navLink logo" to="/">
          <div
            style={{
              width: 200,
              border: "1px solid white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Logo style={{ color: "white", height: 40 }} />
          </div>
        </Link>
        <Link className="navLink" to="/tests">
          Tests
        </Link>
        <div style={{ flexGrow: 1 }} />
        <a className="navLink" href="/admin">
          Admin
        </a>
        <a className="navLink" href="/api">
          API Root
        </a>
      </nav>
    </AntHeader>
  );
};
