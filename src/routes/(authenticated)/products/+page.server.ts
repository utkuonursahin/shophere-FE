import type { PageServerLoad } from './$types';
import axios from "axios";

export const load: PageServerLoad = async ({cookies}) => {
    try{
        const JSESSIONID = cookies.get("JSESSIONID")
        const httpOpts = {
            headers: {Cookie: `JSESSIONID=${JSESSIONID}`},
            withCredentials:true
        }
        const {data: productReq} = await axios.get("http://localhost:8080/api/product", httpOpts)
        const {data: cartReq} = await axios.get("http://localhost:8080/api/cart", httpOpts)
        return {
            products: productReq.data,
            cart: cartReq.data?.products,
            jsessionid: JSESSIONID
        }
    } catch (exception){
        return {products : []}
    }
};