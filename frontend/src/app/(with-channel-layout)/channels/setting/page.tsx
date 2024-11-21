//library
//style
import EditForm from "./edit-form";
import style from "./page.module.css";
//component
//utils

export default function Page() {
  return (
    <div className={style.container}>
      <EditForm />
    </div>
  );
}
