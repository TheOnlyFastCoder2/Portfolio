import axios from "axios"
import IStore from './IStore';


const config = (data,method) => {
  return  {
      data,
      method:method,
      setTimeout: 1000,
      url:"https://api.jsonbin.io/v3/b/63d928f0ace6f33a22d14586",
      headers: {
          "Content-Type": "application/json",
          "X-Master-Key": "$2b$10$nrv8B7Q64n0D3vOfp5fEe.iLUfq9EDcsWMv3lc0QqT2cJxMQcLGAK"
      }
  }
}

const api= {
    async getStore (): Promise<IStore> {
      const {data} = await axios(config(undefined,"get"));
      return (data.record as IStore);
    }, 

    async updateStore (data: IStore) : Promise<any> {
      return await axios(config(JSON.stringify(data),"put"));
    }, 
}

export default api;