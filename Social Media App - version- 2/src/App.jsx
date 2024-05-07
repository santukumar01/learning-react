import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import PostContexProvider from "./Store/Contex";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SideBar from "./component/SideBar";
import CreatePost from "./component/CreatePost";
import PostList from "./component/PostList";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <PostContexProvider>
      <div className="app-container">
        <SideBar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostContexProvider>
  );
}

export default App;
