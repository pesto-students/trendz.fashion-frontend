import styles from "./style.module.scss";

export default function HyperLinkIcon({ container }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" x="0px" y="0px" className={styles[container]}>
      <path d="M47.76,26.13a4,4,0,0,0,0-8A34.11,34.11,0,1,0,81.87,52.24a4,4,0,1,0-8,0A26.12,26.12,0,1,1,47.76,26.13Z" />
      <polygon points="62.74 15.68 69.94 22.87 44.55 48.26 51.74 55.45 77.13 30.06 84.32 37.26 86.36 13.64 62.74 15.68" />
    </svg>
  );
}
