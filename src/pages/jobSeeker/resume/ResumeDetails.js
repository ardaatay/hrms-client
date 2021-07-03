import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ResumeService from "../../../services/resumeService";
import UpdateAbility from "./UpdateAbility";
import UpdateExperience from "./UpdateExperience";
import UpdateLanguage from "./UpdateLanguage";
import UpdateSchool from "./UpdateSchool";

export default function ResumeDetails() {
    let { id } = useParams();

    const [resume, getResume] = useState({});
    const [count, setCount] = useState(0);

    //const { count } = useSelector(state => state.update);

    useEffect(() => {
        let resumeService = new ResumeService();
        resumeService
            .getResumeById(id)
            .then((result) => getResume(result.data.data));
    }, [id, count]);

    function handleCount() {
        setCount(count + 1);
    }

    return (
        <div className="container mt-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{resume.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        Yükleme Tarihi: {resume.postedDate}
                    </h6>
                    <p className="card-text mt-3">
                        <b>Ön Yazı </b>
                        <hr />
                        {resume.description}
                    </p>
                </div>
            </div>
            <UpdateAbility
                resumeId={id}
                update={handleCount}
                abilities={resume.abilities}
            />
            {/* -------------Deneyim--------------- */}
            <UpdateExperience
                resumeId={id}
                update={handleCount}
                experiences={resume.experiences}
            />
            {/* -------------Okul--------------- */}
            <UpdateSchool
                resumeId={id}
                update={handleCount}
                schools={resume.schools}
            />
            {/* -------------Diller--------------- */}
            <UpdateLanguage
                resumeId={id}
                update={handleCount}
                languages={resume.languages}
            />
        </div>
    );
}
