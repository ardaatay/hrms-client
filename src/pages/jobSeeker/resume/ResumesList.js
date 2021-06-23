import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Container, Item } from "semantic-ui-react";
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
        <div>
            <Container className="main">
                <Item.Group>
                    {resumes.map((resume) => (
                        <Item key={resume.id}>
                            <Item.Image
                                size="tiny"
                                src="https://aday-asset.mncdn.com/img/firma-logosuz.png"
                            />

                            <Item.Content>
                                <Item.Header>
                                    <Link to={`/jobseeker/resumes/details/${resume.id}`}>
                                        {resume.name}
                                    </Link>
                                </Item.Header>
                                <Item.Description>
                                    <p>{resume.description}</p>
                                </Item.Description>
                                <Item.Extra>
                                    Yükleme Tarihi: {resume.postedDate}
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    ))}
                </Item.Group>
            </Container>
        </div>
    );
}
