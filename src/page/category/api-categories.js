import axios from "axios";
import config from "../../config/config";

const list = async()=>{
    try {
        const result = await axios.get (`${config.domain}/category/`)
        return result.data;
    } catch (error) {
        return error.message
    }
}

const createRow = async(data)=>{
    try {
        const result = await axios.post(`${config.domain}/category/`,data)
        return result;
    } catch (error) {
        return error.message
    }
}

const findRowById = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/category/${id}`)
        return result;
    } catch (error) {
        return error.message
    }
}

const updateRow = async(data)=>{
    try {
        const result = await axios.put(`${config.domain}/category/${data.cate_id}`,data)
        return result;
    } catch (error) {
        return error.message
    }
}

const deleteRow = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/category/${id}`)
        return result;
    } catch (error) {
        return error.message
    }
}

export default {list,createRow,findRowById,updateRow,deleteRow}