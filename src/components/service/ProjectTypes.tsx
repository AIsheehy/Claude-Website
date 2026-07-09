import Image from "next/image";
import { projectTypes } from "@/lib/content";
import styles from "./ProjectTypes.module.css";

export function ProjectTypes() {
  return (
    <ul className={styles.grid}>
      {projectTypes.map((type) => (
        <li key={type.label} className={styles.tile}>
          <Image
            src={type.image}
            alt={type.label}
            fill
            sizes="(min-width: 560px) 25vw, 50vw"
            className={styles.image}
          />
          <span className={styles.scrim} aria-hidden="true" />
          <span className={styles.label}>{type.label}</span>
        </li>
      ))}
    </ul>
  );
}
