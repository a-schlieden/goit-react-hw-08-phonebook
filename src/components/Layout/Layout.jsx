
import { Outlet } from "react-router-dom";
import { Suspense } from 'react';

import { Loader } from 'components/Loader/Loader';
import Header from "components/Header/Header";
import style from './Layout.module.css';

const Layout = () => {
    return (
        <div className={style.wrapp}>
            <Header />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default Layout