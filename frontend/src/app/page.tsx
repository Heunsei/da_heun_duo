import Link from "next/link";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.temp}>
      <h2>landing page는 추후 개발 예정</h2>
      <Link href="/login">로그인</Link>
      <Link href="/register">회원가입</Link>
      <Link href="/channels/main">그룹 페이지</Link>
    </div>
  );
}