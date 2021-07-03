import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ResumeService from "../../../services/resumeService";

export default function ResumesList() {
    const [resumes, getResumes] = useState([]);

    const jobSeekerId = 1;

    useEffect(() => {
        let resumeService = new ResumeService();
        resumeService
            .getResumesByJobSeekerId(jobSeekerId)
            .then((result) => getResumes(result.data.data));
    }, [jobSeekerId]);
    return (
        <div className="container mt-3">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {resumes.map((resume) => (
                    <div key={resume.id} className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{resume.name}</h5>
                                <p className="card-text">
                                    {resume.description}
                                </p>
                                <p className="card-text">
                                    Yükleme Tarihi: {resume.postedDate}
                                </p>
                                <Link
                                    to={`/jobseeker/resume/details/${resume.id}`}
                                    className="btn btn-primary stretched-link"
                                >
                                    Detaylar
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
