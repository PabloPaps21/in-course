import axios from "axios"

export default class ProjectService {

    //baseURL="http://localhost:3000";
     baseURL = "https://salty-dawn-98498.herokuapp.com";


    projects = axios.create({
        baseURL:this.baseURL,
        withCredentials: true
    });
    //lista proyectos
    async getProjects(){
        const p = await this.projects.get('/api/project')
        return p
    }
    //crear proyecto
    createProject(data){
    
        return this.projects.post("/api/project", data);
    }
    //proyecto-detalle
    projectDetail(){
        return this.projects.get('/api/project')
    }
    //

}