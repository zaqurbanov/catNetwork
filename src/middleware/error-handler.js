const errorHandler = (err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message ||"internal server error"
    const stack = err.stack
    res.status(statusCode).json({
        success:false,
        statusCode:statusCode,
        message,
        stack
    })
}


export default errorHandler