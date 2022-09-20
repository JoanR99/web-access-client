import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components';

const Layout = () => (
	<>
		<Header />
		<main className="container">
			<Outlet />
		</main>
		<Footer />
	</>
);

export default Layout;
