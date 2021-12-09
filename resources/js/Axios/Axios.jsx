import axios from 'axios'
import { base_url } from '../Data/Data';
const url = base_url + "api";

const Axios = axios.create({
    baseURL: url
})

export default Axios;