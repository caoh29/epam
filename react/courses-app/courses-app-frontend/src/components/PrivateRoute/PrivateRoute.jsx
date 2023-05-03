import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute ({ isAuth, redirectTo = '/login', children  }) {
    if (!isAuth) {
        return <Navigate to={redirectTo} />
    }

    return children ? children : <Outlet />
}

export default PrivateRoute;