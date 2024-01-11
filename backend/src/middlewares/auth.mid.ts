import { verify } from "jsonwebtoken";
import { HTTP_UNAUTHORIZED } from "../constants/http_status";


export default (req: any, res: any, next: any) => {
    const token = req.headers.access_token as string;
    console.log("HTTP_UNAUTHORIZED",HTTP_UNAUTHORIZED);
    if(!token) return res.status(HTTP_UNAUTHORIZED).send();

   
    try {
        const decodedUser = verify(token, "sometext");
        // const decodedUser = verify(token, process.env.JWT_SECRET!);
        req.user = decodedUser;

    } catch (error) {
        console.log("unauthorise",error);
        res.status(HTTP_UNAUTHORIZED).send();
    }

    return next();
}