import { url } from '../api/UserApi'


export const fetchLogin = (email: string, password: string) => {
    const userRequest = { email, password };
    return (
        fetch(url.login, {
            method: 'POST',
            body: JSON.stringify(userRequest),
            headers: { 'Content-Type': 'application/json' }
        })
    );
};