import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div className="credits">
                    <div className="contact">
                        <form method="post" id="contact-form" action="/">
                            <div className="fields">
                                <div className="field-half">
                                    <label htmlFor="name">NAME</label>
                                    <input type="text" name="name" id="name"/>
                                </div>
                                <div className="field-half">
                                    <label htmlFor="email">EMAIL</label>
                                    <input type="text" name="email" id="email"/>
                                </div>
                                <div className="field">
                                    <label htmlFor="message">MESSAGE</label>
                                    <textarea name="message" id="message" rows="6"></textarea>
                                </div>
                                <ul className="actions">
                                    <li>
                                        <input type="submit" value="Send" class="primary"/>
                                    </li>
                                    <li>
                                        <input type="reset" value="Clear"/>                                    
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                <div className="socials">
                    <h1>GOALSCORER</h1>
                    <div className="icons">
                        <a href="https://github.com/Sethyshola20" target="blank">
                            <i className="fa-brands fa-github fa-3x"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sethy-laleye-a2188820a/" target="blank">
                            <i className="fa-brands fa-linkedin-in fa-3x"></i>
                        </a>
                        <a href="mailto:sethylunelo@gmail.com">
                            <i className="fa-solid fa-envelope fa-3x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
};