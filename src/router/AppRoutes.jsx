import {Routes, Route, Navigate} from 'react-router-dom';
import { AuthRoutes } from '../auth';

export const AppRoutes = () => {

    //Agregar condicional para checkear si esta logeado

    return (
        <>
            <Routes>

                    <Route path='/auth/*' element={<AuthRoutes/>}/>

                    <Route path='/*' element={<Navigate to='/auth/login'/>}/>

            </Routes>
        </>
    )

}