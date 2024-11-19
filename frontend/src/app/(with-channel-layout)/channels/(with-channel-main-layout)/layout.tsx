//library
import Image from "next/image";
import { useRouter } from "next/navigation";
//style
import style from "./layout.module.css";
import chat from "@/images/chat.png";
import calendar from "@/images/calendar.png";
import record from "@/images/record.png";
import NavButton from "./nav-button";
//component
//utils

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.container}>
      <div className={style.main_navbar}>
        <div className={style.top_indicator}>{"USER NAME"}</div>
        <div className={style.button_container}>
          <NavButton image={calendar} des="main" navText={"calendar"} />
          <NavButton image={chat} des="chat" navText={"personal chat"} />
          <NavButton image={record} des="record" navText={"personal record"} />
        </div>
      </div>
      <div className={style.main_content}>{children}</div>
    </div>
  );
}
