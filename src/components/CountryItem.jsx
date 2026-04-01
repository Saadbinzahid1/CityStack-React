import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <img
        src={`https://flagcdn.com/24x18/${country.countryCode}.png`}
        alt="Flag"
        className={styles.emoji}
      />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
