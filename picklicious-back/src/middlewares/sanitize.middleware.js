import { get } from "mongoose";
import escape from "validator/lib/escape.js"
import {log} from "../utils/log.utils.js"
import { isString } from "../utils/string.util.js";


// remove keys containing prohibited characters
const getSanitized=(object)=>{
    const sanitized={}
    const keys = Object.keys(object);
    keys.forEach((key)=>{
        const value = object[key]
        sanitized[key]= isString(value)? escape(value): value;
    })
    return {...sanitized}
}
    
    
  export const sanitizeMiddleware=(req,res,next)=>{
    req.params = getSanitized(req.params)
    req.body = getSanitized(req.body)
    log(`sanitizedData = ` ,req.body);
    
    next();

  }  
    
   
