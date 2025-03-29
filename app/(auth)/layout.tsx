import  {ReactNode} from 'react'
import {isAuthenticated} from "@/lib/actions/auth.action";
import {redirect} from "next/navigation";

const AuthLayout = async  ({children}:{children: ReactNode }) => {

    return (
        <div className="auth-layout">{children}</div>
    )
}
export default AuthLayout

