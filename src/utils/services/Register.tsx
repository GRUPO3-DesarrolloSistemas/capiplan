import { url } from '../api/UserApi'


export const fetchRegister = (user_nickname: string, user_email: string, user_password: string) => {
    const userRequest = { user_nickname, user_email, user_password };
    return (
        fetch(url.createUser, {
            method: 'POST',
            body: JSON.stringify(userRequest),
            headers: { 'Content-Type': 'application/json' }
        })
    );
};