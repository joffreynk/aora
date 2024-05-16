import { Account, Client, ID } from "react-native-appwrite";

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

client
    .setEndpoint(appWriteConfig.endpoint)
    .setProject(appWriteConfig.projectId)
    .setPlatform(appWriteConfig.Platform)
;

const account = new Account(client);

export const createUser = ()=>{
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}