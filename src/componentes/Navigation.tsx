import {Link} from "react-router";
export const Navigation = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Dashboard</Link></li>
                        <li><Link to='/add'>Add Customer</Link></li>
                        <li><Link to='/delete'>Delete Customer</Link></li>
                        <li><Link to='/update'>Update Customer</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};