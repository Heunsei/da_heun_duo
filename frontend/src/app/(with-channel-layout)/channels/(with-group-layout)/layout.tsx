//library
//style
import style from "./layout.module.css";
//component
//utils

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.container}>
      <div className={style.main_navbar}>
        <div className={style.top_indicator}>{"channel name"}</div>
      </div>
      <div className={style.main_content}>{children}</div>
    </div>
  );
}
