"use client";
import { usePathname, useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import style from "./nav-button.module.css";

export default function NavButton({
  image,
  des,
  navText,
}: {
  image: StaticImageData;
  des: string;
  navText: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const handleClickNavButton = () => {
    if (pathname === `/channels/${des}`) return;
    router.push(`/channels/${des}`);
  };
  return (
    <div className={style.nav_button} onClick={handleClickNavButton}>
      <Image src={image} alt={`${navText} icon image`} />
      {navText}
    </div>
  );
}
