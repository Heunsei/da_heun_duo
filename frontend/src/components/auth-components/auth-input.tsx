"use client";
import { AuthInputType } from "@/app/utils/type";
import style from "./auth-input.module.css";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { StaticImageData } from "next/image";
type inputType = keyof AuthInputType;

export default function AuthInput({
  value,
  setValue,
  valid,
  setValid,
  authType,
  placeholder,
  cautionary,
  backgroundImage,
  validator,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  valid: boolean;
  setValid: Dispatch<SetStateAction<boolean>>;
  authType: inputType;
  placeholder: string | undefined;
  cautionary: string | undefined;
  backgroundImage: StaticImageData;
  validator?: (value: string) => boolean;
}) {
  useEffect(() => {
    if (validator) {
      setValid(validator(value));
    }
  }, [value]);

  return (
    <div className={style.container}>
      <input
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
        value={value}
        name={authType}
        placeholder={placeholder}
        type={
          authType === "password" || authType === "passwordConfirm"
            ? "password"
            : "text"
        }
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
      />
      <p style={{ visibility: !valid ? "visible" : "hidden" }}>{cautionary}</p>
    </div>
  );
}
