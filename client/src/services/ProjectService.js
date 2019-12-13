import axios from "axios"

export default class ProjectService {

    baseURL="http://localhost:3000";
    projects = axios.create({
        baseURL:this.baseURL,
        withCredentials: true
    });
    //lista proyectos
    async getProjects(){
        const p = await this.projects.get('/api/project')
        console.log(p)
        return p
    }
    //crear proyecto
    createProject(data){
        console.log(data);
        return this.projects.post("/api/project", data);
    }
    //proyecto-detalle
    projectDetail(){
        return this.projects.get('/api/project')
    }
    //

}