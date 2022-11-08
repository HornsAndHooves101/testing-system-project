import { Route, Routes } from "react-router";
import "./App.css";
import { NoMatch } from "./pages/error/ErrorPage";
import { Layout } from "./layout/Layout";
import { TestList } from "./pages/testList/TestList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tests" element={<TestList />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
