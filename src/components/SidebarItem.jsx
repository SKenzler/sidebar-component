import React from "react";

function SidebarItem({ item }) {
  return (
    <div className="sidebar-item">
      <div className="sidebar-title">
        <span>
          {item.icon && <i className={item.icon}></i>}
          {item.title}
        </span>
      </div>
    </div>
  );
}

export default SidebarItem;
