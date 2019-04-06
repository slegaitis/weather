import React from 'react'
import styles from '../../scss/partials/selectors.module.scss';

export default function Selectors() {
    return (
        <ul className={styles.selectors}>
            <li>
                <select>
                    <option selected>By Country</option>
                    <option>Vilnius</option>
                    <option>Kaunas</option>
                </select>
            </li>
            <li>
                <select>
                    <option selected>Saved Locations</option>
                    <option>Vilnius</option>
                    <option>Kaunas</option>
                </select>
            </li>
            <li>
                <button>
                    Current location
                </button>
            </li>
        </ul>
    )
}