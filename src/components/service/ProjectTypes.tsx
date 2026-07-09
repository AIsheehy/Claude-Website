import { projectTypes } from "@/lib/content";
import styles from "./ProjectTypes.module.css";

export function ProjectTypes() {
  return (
    <ul className={styles.list}>
      {projectTypes.map((type) => (
        <li key={type} className={styles.chip}>
          {type}
        </li>
      ))}
    </ul>
  );
}
