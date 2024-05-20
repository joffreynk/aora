import { Account, Avatars, Client, ID } from "react-native-appwrite";

export const appWriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    Platform: "com.joffreynk.aora",
    projectId: "6643200000217a2aa050",
    dbId: "66438b7e000604aa0190",
    usercollectionId: "66438baa0016e7eac902",
    videocollectionId: "66438beb003a5e7e76c1",
    filesId: "6645c8fa000671099e00"

}

const client = new Client();

const avatars = new Avatars(client)

client
    .setEndpoint(appWriteConfig.endpoint)
    .setProject(appWriteConfig.projectId)
    .setPlatform(appWriteConfig.Platform)
;

const account = new Account(client);

export const createUser = async(email, username, password)=>{
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
    
        if (!newAccount) throw Error;
        const avatarUrl = avatars.getInitials(username);
        await signIn(email, password)
    } catch (error) {
        console.log(error)
        throw new Error
    }
    
}

export async function signIn(email, password){
    try {
        
    } catch (error) {
        throw new Error
    }
}