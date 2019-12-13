import axios from 'axios'

export default class ProjectService {
    baseURL="http://localhost:3000";
    student = axios.create({
        baseURL:this.baseURL,
        withCredentials: true
    });
    //proyectos del alumno
    async ProjectList(){
        return this.student.get('/api/student');
    }

}