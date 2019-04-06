import React, {useRef} from 'react'
import styles from '../../scss/partials/banner.module.scss';

export default function Banner() {
    const cityNameRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        let cityName = cityNameRef.current.value;

        console.log(cityName)
    }

    return (
        <section className={styles.banner}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter city name..." ref={cityNameRef}/>
                <button>Search</button>
            </form>
        </section>
    )
}