import style from "./layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.container}>
      <div className={style.auth_box}>{children}</div>
    </div>
  );
}
