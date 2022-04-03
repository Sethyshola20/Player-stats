import React from "react";

export default function Card(props) {

    return(
        <article id={props.id}>
            <header className="major">
                <h3 className="season"><a href="landing.html" className="link">SEASON 2021-2022</a></h3>
                    <p id={props.nameid}>{props.name}</p>
            </header>
            <footer id={props.footerid} className="card-foot">
                <div className="player-info">
                    <div className="basic-info">
                        <div className="position">
                            <h2>POSITION</h2>
                            <h3>FORWARD</h3>
                        </div>
                        <div className="club">
                            <h2>CLUB</h2>
                            <h3></h3>
                        </div>
                        <div className="country">
                            <h2>COUNTRY</h2>
                            <h3></h3>
                        </div>
                    </div>
                    <div className="stats">
                        <div className="games">
                            <h2>GAMES</h2>
                            <h3></h3>
                        </div>
                        <div className="ga">
                            <h2>G/A</h2>
                            <h3></h3>
                        </div>
                    </div>
                </div>
            </footer>
    </article>
    )
}