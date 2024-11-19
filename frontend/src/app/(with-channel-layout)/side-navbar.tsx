"use client";
//library
import { usePathname } from "next/navigation";
//style
import style from "./side-navbar.module.css";
//component
import ServerIcon from "./server-icon";
import SettingButton from "@/components/channel-components/navbar-components/setting-button";
import AddChannelIcon from "@/components/channel-components/navbar-components/add-channel-button";
//utils

export default function SideNavbar() {
  // TODO 버튼 변경, ServerIcon Props 변경.
  return (
    <nav className={style.left_navbar}>
      <ul role="tree" tabIndex={0} className={style.tree}>
        <div aria-label="서버">
          <div className={style.scroll_area}>
            <ServerIcon iconName="main" />
            <hr className={style.divier} />
            <ServerIcon iconName="12343" />
            <AddChannelIcon />
          </div>
        </div>
        <div className={style.setting_area} aria-label="설정 버튼">
          <SettingButton />
        </div>
      </ul>
    </nav>
  );
}
