import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    database;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)  //api end point
            .setProject(conf.appwriteProjectId); //  project ID
            this.database = new Databases(this.client);
            this.bucket = new Storage(this.client);  
    }
    async createPost({title, slug, content, featuredImage, status, userId}){ //slug is document id
        try{
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }catch(error){
            console.log("appwrite service :: createPost :: error", error);
        }
    }
    
    async updatePost(slug, {title, content, featuredImage, status}){ //slug is document id
        try{
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }catch(error){
            console.log("appwrite service :: UpdatePost :: error", error);
        }
    }

    async deletePost(slug){ //slug is document id
        try{
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        }catch(error){
            console.log("appwrite service :: DeletePost :: error", error);
            return false
        }
    }

    async getPost(slug){ //slug is document id
        try{
            await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        }catch(error){
            console.log("appwrite service :: GetPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try{
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )             
        }catch(error){
            console.log("appwrite service :: GetPosts :: error", error);
            return false
        }
    }

    // file upload service
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }catch(error){
            console.log("appwrite service :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try{
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        }catch(error){
            console.log("appwrite service :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        try{
            return this.bucket.getFileView(
                conf.appwriteBucketId,
                fileId
            )
        }catch(error){}
    }
}


const service = new Service();
export default service