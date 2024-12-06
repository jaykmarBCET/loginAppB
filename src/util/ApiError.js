class ApiError extends Error{
    constructor(statusCode,message="something went wrong",error=[],stack=""){
        super(message);
        this.statusCode = statusCode;
        this.error = error;
        this.success = false
        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this,ApiError)
        }
        
    }
}

export {ApiError}