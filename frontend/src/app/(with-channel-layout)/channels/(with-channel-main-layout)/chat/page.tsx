import style from "./page.module.css";

export default function Page() {
  return (
    <div className={style.container}>
      <div className={style.friend_container}>친구 목록</div>
      <div className={style.chat_container}>
        <div className={style.chat}></div>
        <div className={style.input_container}>
          <input type="text" placeholder="~~에게 메세지 보내기" />
        </div>
      </div>
    </div>
  );
}
