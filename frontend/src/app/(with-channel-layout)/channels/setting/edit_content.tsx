import style from "./edit_content.module.css";

interface EditType {
  nickname: string;
  email: string;
}

type PropsType = keyof EditType;

export default function EditContent({
  type,
  text,
}: {
  type: PropsType;
  text: string;
}) {
  return (
    <div className={style.container}>
      <div className={style.text_container}>
        <p className={style.top_text}>{type}</p>
        <p className={style.bottom_text}>{text}</p>
      </div>
      <div className={style.button_container}>
        <button>수정</button>
      </div>
    </div>
  );
}
