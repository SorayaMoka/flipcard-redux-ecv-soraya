import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => (
    <section>
        <h1>Dashboard</h1>
        <p>This is the dashboard.</p>

        <Link to="/cards" className="button">
            view Cards
        </Link>
    </section>
);

export default DashboardPage;
