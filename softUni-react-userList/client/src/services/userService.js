import { fromIsoDate } from "../utils/showDateutil";

const baseURL = 'http://localhost:3030/jsonstore/users';


export default {
    async getAll() {
        const response = await fetch(baseURL);
        const result = await response.json();
        const users = Object.values(result);

        return users;
    },
    async getOne(userId) {
        const response = await fetch(`${baseURL}/${userId}`);
        const user = await response.json();

        return user;
    },
    async create(userData) {
        
        const {country, city, street, streetNumber, ...postData} = userData;
        postData.address = { country, city, street, streetNumber };
        postData.createdAt = new Date().toISOString()
        postData.updatedAt = new Date().toISOString()


        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        const result = await response.json();

        return result;
    },
    async delete(userId) {
        const response = await fetch(`${baseURL}/${userId}`, {
            method: 'DELETE',
        });

        const result = await response.json();

        return result;
    },
}