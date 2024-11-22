 class ResponseHandler {


    constructor(){
        if(ResponseHandler.instance){
            console.log("evvelki responsdur");
            return ResponseHandler.instance
        }
        console.log("Yeni responsdur");
        ResponseHandler.instance = this
        return ResponseHandler.instance
    }

    success(res,{message="success",statusCode = 200,data}){
                return res.status(statusCode).json({
                    success:true,
                    message,
                    statusCode,
                    data
                })
    }

    error({message="failed",statusCode = 500,error=null},next){
            const err  = new Error(message)
            err.statusCode = statusCode
            if(error){
                err.stack = error.stack
            }
            next(err)
            

    }

}


const responseHandler  = new ResponseHandler()
export default responseHandler