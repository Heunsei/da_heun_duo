import Image from "next/image";
import style from "./top-indicator.module.css";
import LogoImage from "@/images/shark.webp";

interface auth {
  login: string;
  register: string;
}

type authType = keyof auth;

export default function TopIndicator({ auth }: { auth: authType }) {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Image
          src={LogoImage}
          width={80}
          height={80}
          alt="악기상어 로고 이미지 입니다"
        />
      </div>
      <div className={style.titleBox}>
        {auth === "login" ? (
          <>
            <p className={style.bold}>돌아온것을 환영해요</p>
            <p className={style.light}>다시 만나다니 너무 반가워요</p>
          </>
        ) : (
          <>
            <p className={style.bold}>계정 만들기</p>
          </>
        )}
      </div>
    </div>
  );
}
