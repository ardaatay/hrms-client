import React from "react";
import { Link } from "react-router-dom";

const iconPath = process.env.PUBLIC_URL + "/assets/";

export default function SystemPersonnelNavi() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/jobseeker" className="navbar-brand">
                        <img
                            src={`${iconPath}avengers64px.png`}
                            alt=""
                            width="30"
                            height="24"
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    to="/jobseeker/resume/list"
                                    className="nav-link"
                                >
                                    Özgeçmişlerim
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/jobseeker/resume/add"
                                    className="nav-link"
                                >
                                    Özgeçmiş Ekle
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
