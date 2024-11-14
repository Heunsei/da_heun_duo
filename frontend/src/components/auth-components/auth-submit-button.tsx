import style from "./auth-submit-button.module.css";
export default function AuthSubmitButton({ text }: { text: string }) {
  return (
    <button className={style.container} type="submit">
      {text}
    </button>
  );
}
