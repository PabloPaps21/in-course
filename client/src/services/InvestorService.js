import axios from "axios";

export default class InvestorService {
    baseURL="http://localhost:3000";
    investor = axios.create({
    baseURL:this.baseURL,
    withCredentials: true
  });

  //mi-lista-de-inversiones
  async myInvestList(){
    return this.investor.get('/api/investor')
  }
}//class