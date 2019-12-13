import axios from "axios";

export default class InvestService {
  baseURL="http://localhost:3000";
  invests = axios.create({
    baseURL:this.baseURL,
    withCredentials: true
  });
  //crear inversion
  async createInvest(data){
    return this.invests.post("api/invest", data);
  }
  //inversiones por usuario
  async getInvestments(){
    const inv = await this.invests.get('/api/invest')
  }
  //detalle-inversion
  async updateInvestment(data){
    return this.invests.patch('/api/invest', data)
  }
  //eliminar-inversion
  async deleteInvestment(){
    return this.invests.delete('/api/invest')
  }

}//class