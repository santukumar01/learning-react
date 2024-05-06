import React from "react";

const SideBar = ({ setSelectedTab, selectedTab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sideBar"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => setSelectedTab("home")}>
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "home" && "active"
            }`}
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li className="nav-item" onClick={() => setSelectedTab("Create Post")}>
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Create Post" && "active"
            }`}
          >
            Create Post
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default SideBar;
