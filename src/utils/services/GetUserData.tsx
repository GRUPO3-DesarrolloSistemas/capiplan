import { url } from '../api/UserApi'


export const fetchUserData = (token: string) => {
    return (
        fetch(url.secured, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
    );
};