import React from "react";
import { Feed } from "../components/FeedComponents/Feed";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Feed />
      <h1>Hello I am Home!</h1>
    </React.Fragment>
  );
};
