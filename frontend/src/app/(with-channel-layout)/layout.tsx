"use client";
//library
//style
import style from "./layout.module.css";
//component
import SideNavbar from "./side-navbar";
//utils

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.container}>
      <SideNavbar />
      <div className={style.right}>{children}</div>
    </div>
  );
}
