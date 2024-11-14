"use client";
//library
import Link from "next/link";
import { useState } from "react";
//style
import style from "./register-form.module.css";
import userIcon from "@/images/user.png";
import emailIcon from "@/images/email.png";
import passwordIcon from "@/images/password.png";
//component
import AuthInput from "@/components/auth-components/auth-input";
import AuthSubmitButton from "@/components/auth-components/auth-submit-button";
//utils
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "@/app/utils/function/auth";

export default function RegisterForm() {
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const [pwdConfirm, setPwdConfirm] = useState<string>("");
  const [isValidPwdConfirm, setIsValidPwdConfirm] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");
  const [isValidUserName, setIsValidUserName] = useState<boolean>(true);

  return (
    <div>
      <form className={style.container}>
        <AuthInput
          value={email}
          setValue={setEmail}
          valid={isValidEmail}
          setValid={setIsValidEmail}
          authType="emailConfirm"
          placeholder="이메일을 입력해주세요"
          cautionary="이메일 형식으로 입력해 주세요"
          backgroundImage={emailIcon}
          validator={validateEmail}
        />
        <AuthInput
          value={password}
          setValue={setPassword}
          valid={isValidPassword}
          setValid={setIsValidPassword}
          authType="password"
          placeholder="비밀번호를 입력해주세요"
          cautionary="비밀번호는 8자 이상으로 입력해주세요"
          backgroundImage={passwordIcon}
          validator={validatePassword}
        />
        <AuthInput
          value={pwdConfirm}
          setValue={setPwdConfirm}
          valid={isValidPwdConfirm}
          setValid={setIsValidPwdConfirm}
          authType="passwordConfirm"
          placeholder="비밀번호를 다시 입력해주세요"
          cautionary="비밀번호가 일치하지 않습니다"
          backgroundImage={passwordIcon}
          validator={validatePassword}
        />
        <AuthInput
          value={userName}
          setValue={setUserName}
          valid={isValidUserName}
          setValid={setIsValidUserName}
          authType="userName"
          placeholder="사용자명을 입력해주세요"
          cautionary="사용자명은 3글자 이상으로 입력해주세요"
          backgroundImage={userIcon}
          validator={validateUsername}
        />
        <AuthSubmitButton text="회원 가입" />
        <div style={{ textAlign: "center" }}>
          <Link href={"/login"}> 이미 계정이 있으신가요?</Link>
        </div>
      </form>
    </div>
  );
}
