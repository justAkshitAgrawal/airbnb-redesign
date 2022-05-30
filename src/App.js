import React from "react";
import Search from "./components/Search";
import SideBar from "./components/Sidebar";
import Sort from "./components/Sort";

function App() {
  return (
    <div className="bg-[#25232C] flex h-screen">
      <SideBar />
      <Search />
      <Sort />
    </div>
  );
}

export default App;
