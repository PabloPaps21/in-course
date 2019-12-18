import axios from 'axios'

export default class ProjectService {
    //baseURL="http://localhost:3000";
     baseURL = "https://salty-dawn-98498.herokuapp.com";

    student = axios.create({
        baseURL:this.baseURL,
        withCredentials: true
    });
    //proyectos del alumno
    async projectList(){
        return this.student.get('/api/student');
    }

}