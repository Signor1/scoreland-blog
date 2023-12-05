import { useContext } from "react"
import { AuthUser } from "../../App"


const HomeDashboard = () => {
    const user = useContext(AuthUser)
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-gray-100">{user?.logged ? "Logged in" : null}</h1>
        </div>
    )
}

export default HomeDashboard