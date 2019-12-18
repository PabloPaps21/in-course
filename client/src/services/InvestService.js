import axios from "axios";

export default class InvestService {
  // baseURL="http://localhost:3000";
   baseURL = "https://salty-dawn-98498.herokuapp.com";

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
    return this.invests.get('/api/invest')
  }
  //detalle-inversion
  async updateInvestment(id, data){
    return this.invests.patch(`/api/invest/${id}`, data)
  }
  //eliminar-inversion
  async deleteInvest(investmentId){
    return this.invests.delete(`/api/invest/${investmentId}`)
  }

}//class