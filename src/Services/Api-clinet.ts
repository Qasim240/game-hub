import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'837c9d30c9df4a64b7510d50aeef56e1'
    }
})