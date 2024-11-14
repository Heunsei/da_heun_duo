import TopIndicator from "../top-indicator";
import RegisterForm from "./register-form";

export default function Page() {
  return (
    <>
      <TopIndicator auth="register" />
      <RegisterForm />
    </>
  );
}
