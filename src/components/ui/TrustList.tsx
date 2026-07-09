import { IconShield, IconLayers, IconPin, IconScale } from "@/components/icons";
import { trustMarkers } from "@/lib/content";
import styles from "./PageHero.module.css";

const iconMap = { shield: IconShield, layers: IconLayers, pin: IconPin, scale: IconScale };

export function TrustList() {
  return (
    <ul className={styles.trustList}>
      {trustMarkers.map((item) => {
        const Icon = iconMap[item.icon as keyof typeof iconMap];
        return (
          <li key={item.label} className={styles.trustItem}>
            <Icon width={23} height={23} />
            <span>{item.label}</span>
          </li>
        );
      })}
    </ul>
  );
}
