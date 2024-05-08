import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import PostContexProvider from "./Store/Contex";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SideBar from "./component/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostContexProvider>
      <div className="app-container">
        <SideBar />
        <div className="content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostContexProvider>
  );
}

export default App;
