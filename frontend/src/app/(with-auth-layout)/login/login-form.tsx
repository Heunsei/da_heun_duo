"use client";
//library
import Link from "next/link";
import { useActionState, useState } from "react";
//style
import style from "./login-form.module.css";
import emailIcon from "@/images/email.png";
import passwordIcon from "@/images/password.png";
//component
import AuthSubmitButton from "@/components/auth-components/auth-submit-button";
import AuthInput from "@/components/auth-components/auth-input";
//utils
import { validateEmail, validatePassword } from "@/app/utils/function/auth";
import { loginRequest } from "./login-request";

export default function LoginForm() {
  const [state, formAction, ispending] = useActionState(loginRequest, null);
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [password, setPasasword] = useState<string>("");
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);

  return (
    <div>
      <form className={style.container} action={formAction}>
        <AuthInput
          value={email}
          setValue={setEmail}
          valid={isValidEmail}
          setValid={setIsValidEmail}
          authType="email"
          placeholder="이메일을 입력해주세요"
          cautionary="이메일 형식으로 입력해 주세요"
          backgroundImage={emailIcon}
          validator={validateEmail}
        />
        <AuthInput
          value={password}
          setValue={setPasasword}
          valid={isValidPassword}
          setValid={setIsValidPassword}
          authType="password"
          placeholder="비밀번호를 입력해주세요"
          cautionary="비밀번호는 8자 이상으로 입력해주세요"
          backgroundImage={passwordIcon}
          validator={validatePassword}
        />
        <Link href={"/find/password"} style={{ textAlign: "right" }}>
          비밀 번호를 잊으셨나요?
        </Link>
        <AuthSubmitButton
          inputCondition={isValidPassword && isValidEmail}
          isPending={ispending}
          text="로그인"
        />
        <div style={{ textAlign: "right" }}>
          계정이 필요하신가요?<Link href={"/register"}> 가입하기</Link>
        </div>
      </form>
    </div>
  );
}
