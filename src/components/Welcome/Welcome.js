import { useAuth } from "../../context/authContext";
import './Welcome.css'

export function Welcome() {
    const {user, logout, loading} = useAuth()
    
    const handleLogout = async() => {
        try {
            await logout()
        } catch (error) {
            console.error(error)
        }
    }

    if (loading) return <h3>Loading...</h3>
    return <div className="container-welcome">
        
        <div className="content-welcome">
            <h2>Bienvenido/a: { user.displayName || user.email}</h2>
            <button 
                onClick={handleLogout}
                className='btn-logout'
            >
                Logout
            </button>
        </div> 
    </div>
}