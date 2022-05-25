import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isLoggedIn, setLogIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setLogIn(true);
        } else {
            setLogIn(false);
        }
    }, []);

  return (
    <div id="navigation">
        <div id="navLinks">
            <span>
                <Link to="/">Sale</Link>
            </span>
            <div>
                { isLoggedIn ? 
                    (
                        <div>
                            <span>
                                <Link to="/posts/new">Sell Item</Link>
                            </span>
                            <span>
                                <Link
                                    to="/"
                                    onClick={() => {
                                        localStorage.removeItem("token");
                                        localStorage.removeItem("username")
                                        window.location.reload(false)
                                    }}
                                >
                                Sign Out
                                </Link>
                            </span>
                        </div>
                    ) : 
                    (
                        <div>
                            <div>
                                <span>
                                <Link to="/login">Login</Link>
                                </span>
                                <span>
                                <Link to="/register">Sign Up</Link>
                                </span>
                            </div>
                        </div>
                    )
                }
            </div>
      </div>
    </div>
  ); 
}

export default Nav;