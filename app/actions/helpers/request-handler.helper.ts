import {ResponseModel} from "@/app/common/models/response.model";
import errorHandler from "@/app/common/helpers/error-handler.helper";


export default async function requestHandler(action:(()=>Promise<void>) | (()=> void)){
    try{
        await action();

        return {status:'success'} as ResponseModel;
    } catch (error:any) {
        return errorHandler(error);
    }
}