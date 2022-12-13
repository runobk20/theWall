import {BrowserRouter} from 'react-router-dom';
import { AppRoutes } from './router/AppRoutes';

export const WallApp = () => {
  return (
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
  )
}
