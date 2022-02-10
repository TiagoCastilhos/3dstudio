import FetchUser from "../src/components/FetchUser";
import styles from '../styles/FetchUser.module.css';

export default function fetchUser() {
    return (
        <div className={styles['container']}>
            <FetchUser />
        </div>
    )
}