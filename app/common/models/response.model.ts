import {ErrorsModel} from "@/app/common/models/errors.model";

export interface ResponseModel {
    status:'success' | 'error'
    errors?:ErrorsModel<any>,
    message?:string
}