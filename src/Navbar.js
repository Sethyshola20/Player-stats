import React from 'react';

export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-container">
                    <ul className="navbar-menu">
                        <li>
                            <a className="league" href="#lewy">
                                <div className="league-logo">
                                    <img src={require('./Images/League-logo/bundesliga/bundesliga-vector-logo.png')} />
                                </div>
                                <div class="league-name">
                                    BUNDESLIGA
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="league" href="#mbappe">
                                <div className="league-logo">
                                    <img src={require('./Images/League-logo/ligue-1/ligue-1-vector-logo.png')} />
                                </div>
                                <div className="league-name">
                                    LIGUE 1
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="league" href="#salah">
                                <div className="league-logo">
                                    <img src={require('./Images/League-logo/premier-league/premier-league-logo-vector.png')} />
                                </div>
                                <div className="league-name">
                                    PREMIER LEAGUE
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="league" href="#vlahovic">
                                <div className="league-logo">
                                    <img src={require('./Images/League-logo/lega-calcio-serie-a/lega-calcio-serie-a-tim--old---tim--vector-logo.png')} />
                                </div>
                                <div className="league-name">
                                    SERIE A
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="league" href="#benzema">
                                <div className="league-logo">
                                    <img src={require('./Images/League-logo/la-liga/la-liga-logo.png')} />
                                </div>
                                <div className="league-name">
                                    LIGA
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};