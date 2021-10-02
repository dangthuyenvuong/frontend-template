import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import { StateStore } from "store"


const AuthLayout: React.FC = ({ children }) => {
    let { login } = useSelector((store: StateStore) => store.auth)
    if (login) return <Redirect to="/account/info" />

    return (
        <section className="py-12">
            <div className="container">
                {children}
            </div>
        </section>
    )
}

export default AuthLayout