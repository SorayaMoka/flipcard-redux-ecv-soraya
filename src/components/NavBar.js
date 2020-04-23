import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => (
    <nav>
        <section>
            <Link to="/">Cards</Link>
            <Link to="/Lessons">Lessons</Link>
        </section>
    </nav>
);
