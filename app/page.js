import Image from "next/image";
import styles from "./page.module.css";
import Input from "./components/Input";
import style from "./page.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Logic Master AI</h1>
            <Input/>
    </div>
  );
}
