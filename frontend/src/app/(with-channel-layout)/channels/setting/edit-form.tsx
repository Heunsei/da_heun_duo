import Image from "next/image";
import style from "./edit-form.module.css";
import img from "@/images/no_device.png";
import EditContent from "./edit_content";

export default function EditForm() {
  return (
    <div className={style.edit_container}>
      <div className={style.top_background}>
        <div className={style.user_profile_container}>
          <div className={style.user_profile}>
            <Image src={img} alt="user profile" width={128} height={128} />
          </div>
          <div className={style.user_name}>USERNAME</div>
          <button className={style.modify_avatar}>아바타 변경</button>
        </div>
      </div>
      <div className={style.bottom_container}>
        <EditContent type="nickname" text="유저네임" />
        <EditContent type="email" text="gms245@naver.com" />
        <button className={style.password_button}>비밀번호 변경하기</button>
      </div>
    </div>
  );
}
