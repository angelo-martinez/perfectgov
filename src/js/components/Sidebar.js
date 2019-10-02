import React from "react";
import { Consumer } from "../store/appContext";

export const Sidebar = () => {
  return (
    <Consumer>
      {({ store, actions }) => {
        return (
          <div className={`sidebar ${store.opernSidebar ? 'open' : 'closed'}`}>
            <div className="avatar" />
            <ul className="sidebar-list">
              <li className="sidebar-item">My Account</li>
              <li className="sidebar-item">My Citizen Score</li>
              <li className="sidebar-item">My Laws</li>
            </ul>
          </div>
        )
      }}
    </Consumer>
  );
};
