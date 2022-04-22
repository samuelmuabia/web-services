import React from 'react';
import './Footer.css';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className="text-center text-white" style={{ backgroundColor: "#f1f1f1" }}>
                <div className="container pt-4">
                    <section className="mb-4">

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        > <img src="images/icons/l-1.png" alt="" /></a>
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><img src="images/icons/l-2.png" alt="" /></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><img src="images/icons/l-3.png" alt="" /></a>
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><img src="images/icons/l-4.png" alt="" /></a>
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><img src="images/icons/l-5.png" alt="" /></a>
                    </section>
                </div>

                <div className="text-center text-dark p-3" >
                    © {year} Copyright:
                    <a className="text-dark" href="https://TPQWebSolution.com/">TPQWebSolution.com</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;