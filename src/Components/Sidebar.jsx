import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ open, setOpen }) {
    return (
        <div className={`sidebar ${open ? "active" : ""}`}>
            <ul>
                <li>
                    <Link to="/" onClick={() => setOpen(false)}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/about" onClick={() => setOpen(false)}>
                        About
                    </Link>
                </li>

                <li>
                    <Link to="/services" onClick={() => setOpen(false)}>
                        Services
                    </Link>
                </li>

                <li>
                    <Link to="/careers" onClick={() => setOpen(false)}>
                        Careers
                    </Link>
                </li>

                <li>
                    <Link to="/contact" onClick={() => setOpen(false)}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;