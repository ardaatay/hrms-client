import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Item, Divider } from "semantic-ui-react";

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
        <div>
            <Container className="main">
                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Item.Header>
                                <h3>{resume.name}</h3>
                            </Item.Header>
                            <Item.Meta>
                                <h5>Yükleme Tarihi: {resume.postedDate}</h5>
                            </Item.Meta>
                            <Divider />
                            <Item.Description>
                                <h3>Ön Yazı</h3>
                                <p>{resume.description}</p>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                    {/* -------------Yetenek--------------- */}
                    <Divider />
                    <UpdateAbility
                        resumeId={id}
                        update={handleCount}
                        abilities={resume.abilities}
                    />
                    {/* -------------Deneyim--------------- */}
                    <Divider />
                    <UpdateExperience
                        resumeId={id}
                        update={handleCount}
                        experiences={resume.experiences}
                    />

                    {/* -------------Okul--------------- */}
                    <Divider />
                    <UpdateSchool
                        resumeId={id}
                        update={handleCount}
                        schools={resume.schools}
                    />

                    {/* -------------Diller--------------- */}
                    <Divider />
                    <UpdateLanguage
                        resumeId={id}
                        update={handleCount}
                        languages={resume.languages}
                    />
                </Item.Group>
            </Container>
        </div>
    );
}
