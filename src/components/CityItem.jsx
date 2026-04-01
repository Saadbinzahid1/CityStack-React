import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

export default function CityItem({ city }) {
  const { cityName, countryCode, date, id } = city;
  return (
    <li>
      <Link className={styles.cityItem} to={`${id}`}>
        <img
          src={`https://flagcdn.com/24x18/${countryCode}.png`}
          alt="Flag"
          className={styles.emoji}
        />
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
