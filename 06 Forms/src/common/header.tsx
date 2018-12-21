import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FunctionComponent<{}> = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="">React + Typescript</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/clients" className="nav-link">Clients</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}