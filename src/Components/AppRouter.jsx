    import React, {useContext} from 'react';
    import {Navigate, Route, Routes} from "react-router-dom";
    import {privateRoute, publicRoute} from "../router";
    import '../pages/Home'
    import {useAuthState} from "react-firebase-hooks/auth";
    import {ContextAuth} from "../index";

    const AppRouter = () => {
        const {auth} = useContext(ContextAuth)
        const [user] = useAuthState(auth)
        return user ?
            (
                <Routes>
                    {privateRoute.map(route =>
                        <Route key={route.path} path={route.path} element={<route.element />} />
                    )}
                    <Route path='*' element={<Navigate to={'/home'} replace />} />
                </Routes>
            )
        :
            (
            <Routes>
                {publicRoute.map(route =>
                    <Route key={route.path} path={route.path} element={<route.element />} />
                )}
                <Route path='*' element={<Navigate to={'/home'} replace />} />
            </Routes>
        )
    };

    export default AppRouter;