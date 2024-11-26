"use client";
//library
import Image from "next/image";
import { useState } from "react";
//style
import img from "@/images/no_device.png";
import style from "./edit-form.module.css";
//component
import EditContent from "./edit_content";
import ModifyModal from "@/components/channel-components/setting-page-components/modify-modal";
//utils
import useModal from "@/app/utils/hook/useModal";
import { settingModalProps } from "@/app/utils/type";

export default function EditForm() {
  const {
    ref: userNameDialogRef,
    open: openUserNameDialog,
    close: closeUserNameDialog,
  } = useModal();

  const [modalState, setModalState] = useState<settingModalProps | null>(null);
  const [prevVal, setPrevVal] = useState<string>("");
  function openModal(modalState: settingModalProps | null) {
    setModalState(modalState);
    openUserNameDialog();
  }

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
        <div className={style.bottom_container_bg}>
          <EditContent type="userName" text="유저네임" openModal={openModal} />
          <EditContent
            type="email"
            text="gms245@naver.com"
            openModal={openModal}
          />
        </div>

        <button
          className={style.password_button}
          onClick={() => openModal("password")}
        >
          비밀번호 변경하기
        </button>
      </div>
      <ModifyModal
        dialogRef={userNameDialogRef}
        close={closeUserNameDialog}
        modalState={modalState}
        prevVal={prevVal}
      />
    </div>
  );
}
