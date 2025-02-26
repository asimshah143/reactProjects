import conf from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    Client = new Client();
    account;

    constructor(){
        this.Client
            .setEndpoint(conf.appwriteUrl)  //api end point
            .setProject(conf.appwriteProjectId); //  project ID
        this.account = new Account(this.Client);
    }

    async CreateAccount(email, password, name){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return this.login({email, password});
            }else{
                return userAccount;
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        }
        catch (error) {
            throw new Error(error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        }
        catch (error) {
            console.log("appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout(){
        try{
            await this.account.deleteSession();
        }
        catch(error){
            console.log("appwrite service :: logout :: error", error);  
        }
    }
}

const authService = new AuthService();

export default authService
