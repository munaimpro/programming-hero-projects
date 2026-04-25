import BreakingNews from '@/components/shared/BreakingNews';
import Header from '@/components/shared/Header';
import NavBar from '@/components/shared/NavBar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
            <Header />
            <BreakingNews></BreakingNews>
            <NavBar />
            { children }
        </>
    );
};

export default MainLayout;