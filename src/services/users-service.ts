import { User } from '../models/user';

const apiUrl = 'https://api.github.com';

export class UsersService {
    async getUser(name: string): Promise<User | undefined> {
        return await fetch(`${apiUrl}/users/${name}`)
            .then(async (r) => {
                if (r.status === 200) {
                    const user = await r.json();

                    return this.mapToModel(user);
                }

                return undefined;
            })
            .catch(err => {
                console.log(err);
                return Promise.reject(`Error: ${err}`);
            });
    }

    mapToModel(user: any): User {
        return { 
            id: user.id, 
            name: user.login, 
            avatarUrl: user['avatar_url']
        };
    }
}