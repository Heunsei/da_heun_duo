import TopIndicator from "../top-indicator";
import LoginForm from "./login-form";

export default function Page() {
  return (
    <div>
      <TopIndicator auth="login" />
      <LoginForm />
    </div>
  );
}