import style from "./auth-submit-button.module.css";
export default function AuthSubmitButton({
  inputCondition,
  isPending,
  text,
}: {
  inputCondition: boolean;
  isPending: boolean;
  text: string;
}) {
  const disabled = isPending || !inputCondition;
  return (
    <button
      disabled={disabled}
      className={disabled ? style.disable_container : style.container}
      type="submit"
    >
      {text}
    </button>
  );
}
