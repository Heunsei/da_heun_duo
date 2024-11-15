"use client";
//library
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
//style
import style from "./register-form.module.css";
import userIcon from "@/images/user.png";
import emailIcon from "@/images/email.png";
import passwordIcon from "@/images/password.png";
//component
import AuthModal from "@/components/auth-components/auth-modal";
import AuthInput from "@/components/auth-components/auth-input";
import AuthSubmitButton from "@/components/auth-components/auth-submit-button";
//utils
import {
  validateEmail,
  validatePassword,
  validateUsername,
  validateEmailConfirm,
  validatePasswordConfirm,
} from "@/app/utils/function/auth";
import { requestRegister } from "./register-request";
import useModal from "@/app/utils/hook/useModal";

export default function RegisterForm() {
  // useServerAction
  const [state, formAction, isPending] = useActionState(requestRegister, null);
  // 입력 관련 state
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const [pwdConfirm, setPwdConfirm] = useState<string>("");
  const [isValidPwdConfirm, setIsValidPwdConfirm] = useState<boolean>(true);
  const [pwdConfirmCaution, setPwdConfirmCaution] =
    useState<string>("비밀번호를 다시 입력해주세요");
  const [userName, setUserName] = useState<string>("");
  const [isValidUserName, setIsValidUserName] = useState<boolean>(true);
  // 인증 버튼 반응 관련 state
  const [isVerifyBtnPressed, setIsVerifyBtnPressed] = useState<boolean>(false);
  const [verifyCode, setVerifyCode] = useState<string>("");
  const [isValidVerifyCode, setIsValidVerifyCode] = useState<boolean>(false);
  const [isMailChecked, setIsMailChecked] = useState<boolean>(false);
  const [isCoolDown, setIsCoolDown] = useState<boolean>(false);
  // 모달 관련 logig
  const { ref, open, close } = useModal();
  const [modalText, setModalText] = useState<string>("");
  // TODO : 서버와 통신 후 통과 관련 state 생성 후 회원가입 버튼 활성화 / 비활성화
  // 인증 완료 후 이메일 input 비활성화 후, 인증번호 입력 input 안보이게
  const handleClickVerifyBtn = async () => {
    // 인증관련
    // 해당 이메일로 이메일 발송이 실패하면 try catch로 pressed -> false 처리
    setIsVerifyBtnPressed(true);
    setIsCoolDown(true);
    setTimeout(() => {
      setIsCoolDown(false);
    }, 3000);
    setModalText("인증 메일이 발송되었습니다");
    open();
  };
  // TODO : 재요청 코드 작성
  // 다시 보내주세요!!! 쿨타임 3초
  const handleClickResendBtn = async () => {
    setIsCoolDown(true);
    setTimeout(() => {
      setIsCoolDown(false);
    }, 3000);
    setModalText("인증 메일이 재발송되었습니다");
    open();
  };
  // 이메일 인증번호 제출 버튼 클릭시 작성할 로직
  const handleClickSubmitBtn = () => {
    // verifyCode 서버에 제출 후 맞다면 isValidVerifyCode 수정 및 제출 버튼 비활성화 + 알림 변경
    setIsMailChecked(true);
    setModalText("인증이 완료되었습니다");
    open();
  };

  useEffect(() => {
    const { state, caution } = validatePasswordConfirm(password, pwdConfirm);
    setIsValidPwdConfirm(state);
    setPwdConfirmCaution(caution);
  }, [password, pwdConfirm]);

  return (
    <div>
      <AuthModal dialogRef={ref} close={close}>
        <div>{modalText}</div>
      </AuthModal>
      <form className={style.container} action={formAction}>
        <div className={style.emailVerify}>
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
            disable={isVerifyBtnPressed}
          />
          {
            // 버튼이 눌리지 않았다면 인증하기 버튼 출력 그렇지 않다면 인증 재요청
            !isMailChecked ? (
              !isVerifyBtnPressed ? (
                <button
                  type="button"
                  disabled={!isValidEmail || isVerifyBtnPressed}
                  onClick={handleClickVerifyBtn}
                >
                  인증하기
                </button>
              ) : (
                <button
                  type="button"
                  disabled={!isValidEmail || isCoolDown}
                  onClick={handleClickResendBtn}
                >
                  {!isCoolDown ? "인증 재요청" : " ... "}
                </button>
              )
            ) : (
              <button disabled={true}>인증 완료</button>
            )
          }
        </div>
        {isVerifyBtnPressed ? (
          !isMailChecked ? (
            <div className={style.emailVerify}>
              <AuthInput
                value={verifyCode}
                setValue={setVerifyCode}
                valid={isValidVerifyCode}
                setValid={setIsValidVerifyCode}
                authType="emailConfirm"
                placeholder="이메일 인증번호를 입력해주세요"
                cautionary="추후 변경필요"
                backgroundImage={emailIcon}
                validator={validateEmailConfirm}
                disable={isMailChecked}
              />
              <button
                type="button"
                disabled={!isValidVerifyCode || isMailChecked}
                onClick={handleClickSubmitBtn}
              >
                제출하기
              </button>
            </div>
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
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
          cautionary={pwdConfirmCaution}
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
        <AuthSubmitButton
          inputCondition={
            isValidEmail &&
            isValidPassword &&
            isValidPwdConfirm &&
            isValidUserName &&
            isMailChecked
          }
          isPending={isPending}
          text="회원 가입"
        />
        <div style={{ textAlign: "center" }}>
          <Link href={"/login"}> 이미 계정이 있으신가요?</Link>
        </div>
      </form>
    </div>
  );
}
