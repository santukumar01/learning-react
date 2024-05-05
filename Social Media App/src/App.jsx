import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./component/Header";
import Footer from "./component/Footer";
import SideBar from "./component/SideBar";
function App() {
  return (
    <div className="app-container">
      <SideBar />
      <div className="content">
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
