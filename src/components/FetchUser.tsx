import { useState } from 'react';
import styles from '../../styles/FetchUser.module.css';
import { User } from '../models/user';

export default function FetchUser() {
    let searchTerm = '';
    const [user, setUser] = useState<User | undefined>(undefined);

    async function searchUser() {
        if (!searchTerm || searchTerm.length <= 0) {
            console.log('Termo invalido');
            return;
        }

        const response = await fetch(`/api/users/${searchTerm}`);

        if (response.ok)
            console.log(await response.json());
        else
            console.log(response.status);
    }

    return (
        <div className={styles['fetch-container']}>
            <form className={styles['fetch-form']}>
                <div>
                    <label htmlFor="fetch-name">Nome</label>
                    <input id='fetch-name' type="text" onChange={(e) => searchTerm = e.target.value} />
                </div>
                <div>
                    <input type='button' value='Buscar' onClick={searchUser}></input>
                </div>
            </form>
        </div>
    )
}