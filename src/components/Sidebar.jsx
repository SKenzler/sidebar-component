import React from "react";
import SidebarItem from "./SidebarItem";
import items from "../sidebar-data.json";

function Sidebar() {
  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}

export default Sidebar;
