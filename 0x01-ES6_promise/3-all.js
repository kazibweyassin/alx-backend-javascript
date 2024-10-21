import {uploadPhoto, createUser }  from "./utils";

export default async function handleProfileSignup() {
    try {
        const response = await Promise.all([uploadPhoto(), createUser()]);
        console.log(response[0].body, response[1].body);
    } catch {
        return console.log('Signup system offline');
    }

}