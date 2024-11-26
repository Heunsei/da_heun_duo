"use client";
//library
import { createPortal } from "react-dom";
import { ReactNode, RefObject, useEffect, useState } from "react";
//style
import style from "./modify-modal.module.css";
//component
//utils
import { settingModalProps } from "@/app/utils/type";

// TODO : server action form 으로 수정
export default function ModifyModal({
  dialogRef,
  close,
  modalState,
  prevVal,
}: // children,
{
  dialogRef: RefObject<HTMLDialogElement>;
  close: () => void;
  modalState: settingModalProps | null;
  prevVal: string;
  // children?: ReactNode;
}) {
  if (typeof window === "undefined") return <></>;
  let title: string = "";
  let subTitle: string = "";

  switch (modalState) {
    case "userName":
      title = "사용자명";
      subTitle = "새 사용자명과";
      break;
    case "password":
      title = "비밀번호";
      subTitle = "새 비밀번호와";
      break;
    case "email":
      title = "이메일";
      subTitle = "새 이메일과";
      break;
    default:
      break;
  }

  return createPortal(
    <dialog
      className={style.modal}
      ref={dialogRef}
      onClick={(e) => {
        if ((e.target as any).nodeName === "DIALOG") {
          close();
        }
      }}
    >
      <div onClick={(e) => e.stopPropagation()} className={style.inner_div}>
        <div className={style.header}>
          <h2 className={style.title}>{title} 변경하기</h2>
          <p className={style.subTitle}>
            {subTitle} 기존 비밀번호를 입력해주세요
          </p>
        </div>
        {modalState === "password" ? (
          <form action="" className={style.input_container}>
            <p className={style.lable}>현재 비밀번호</p>
            <input type="password" />
            <p className={style.lable}>새 비밀번호</p>
            <input type="password" />
            <p className={style.lable}>새 비밀번호 확인</p>
            <input type="password" />
          </form>
        ) : (
          <form action="" className={style.input_container}>
            <p className={style.lable}>{title}</p>
            <input type="text" />
            <p className={style.lable}>현재 비밀번호 확인</p>
            <input type="password" />
          </form>
        )}
        <div className={style.button_container}>
          <button onClick={() => close()}>취소</button>
          <button onClick={() => close()}>변경하기</button>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
}
