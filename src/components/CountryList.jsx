import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";

export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city in map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((city) => city.country).includes(city.country)) {
      return [...arr, { country: city.country, countryCode: city.countryCode }];
    } else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}
