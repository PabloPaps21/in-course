import axios from "axios"

export default class ProjectService {

    baseURL="http://localhost:3000";
    projects = axios.create({
        baseURL:this.baseURL,
        withCredentials: true
    });

    async getProjects(){
        const p = await this.projects.get('/api/project')
        console.log(p)
        return p
    }

    createProject(data){
        console.log(data);
        return this.projects.post("api/project", data);
    }



}