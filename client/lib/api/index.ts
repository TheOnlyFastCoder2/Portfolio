import axios from "axios"
import IStore, {IReviews} from './IStore';


const config = (data,path,method) => {
  return  {
      data,
      method:method,
      url:`http://localhost:1337/api/${path}`,
      headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer 238a8e2587cf7639bb909bfa511bc45f28fe7fa52dd7ea02fa5e87fdf69c4a810bd8e838b599f476f69156ec7ca9b6d149529525c97cca349b25e8590017b7121c97a311e68e420e82c299e4dfdde48a59e4e24095f32d6f2b0781bb8e62035f582748eac0989872e44daf068b5f7d17071414d69f3be5fc1371d765d25e0392`
      }
  }
}

const api= {
  async getReviews (path = 'reviews') {
    const s = await axios(config(undefined,path,"get"));
    console.log(s)
    // return (data.record as IReviews);
  },
}

export default api;