import style from "./edit_content.module.css";
import { settingModalProps } from "@/app/utils/type";
interface EditType {
  userName: string;
  email: string;
}

type PropsType = keyof EditType;

export default function EditContent({
  type,
  text,
  openModal,
}: {
  type: PropsType;
  text: string;
  openModal: (modalProps: settingModalProps) => void;
}) {
  return (
    <div className={style.container}>
      <div className={style.text_container}>
        <p className={style.top_text}>{type}</p>
        <p className={style.bottom_text}>{text}</p>
      </div>
      <div className={style.button_container}>
        <button onClick={() => openModal(type)}>수정</button>
      </div>
    </div>
  );
}
