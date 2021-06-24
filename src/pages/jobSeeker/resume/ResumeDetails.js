import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Container,
    Item,
    Divider,
    Modal,
    Header,
    Button,
    Grid,
} from "semantic-ui-react";
import ResumeService from "../../../services/resumeService";
import AddAbility from "./AddAbility";
import AddExperience from "./AddExperience";
import AddSchool from "./AddSchool";
import AddLanguage from "./AddLanguage";

export default function ResumeDetails() {
    let { id } = useParams();

    const [openAbility, setOpenAbility] = useState(false);
    const [openExperience, setOpenExperience] = useState(false);
    const [openSchool, setOpenSchool] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);
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
                    <Grid>
                        <Grid.Column floated="left" width={5}>
                            <h3>Yeteneklerim</h3>
                        </Grid.Column>
                        <Grid.Column floated="right" width={5}>
                            <Modal
                                closeIcon
                                open={openAbility}
                                trigger={
                                    <Button size="mini" primary>
                                        Eklemek için tıklayınız
                                    </Button>
                                }
                                onClose={() => setOpenAbility(false)}
                                onOpen={() => setOpenAbility(true)}
                            >
                                <Header
                                    icon="keyboard"
                                    content="Yetenek Ekle"
                                />
                                <Modal.Content>
                                    <AddAbility
                                        resumeId={id}
                                        update={handleCount}
                                    />
                                </Modal.Content>
                            </Modal>
                        </Grid.Column>
                    </Grid>
                    {resume.abilities != null &&
                    resume.abilities.length !== 0 ? (
                        resume.abilities.map((ability) => (
                            <Item key={ability.id}>
                                <Item.Image
                                    size="tiny"
                                    src="https://cdn1.iconfinder.com/data/icons/business-rounded-outline-fill-style/64/illustration_Team_Skill-128.png"
                                />
                                <Item.Content>
                                    <Item.Header>{ability.name}</Item.Header>
                                    <Item.Description>
                                        <p>{ability.description}</p>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        ))
                    ) : (
                        <Item>
                            <Item.Content>
                                <Item.Meta>
                                    <p>Yetenek bilgileriniz bulunmamaktadır.</p>
                                </Item.Meta>
                            </Item.Content>
                        </Item>
                    )}
                    {/* -------------Deneyim--------------- */}
                    <Divider />
                    <Grid>
                        <Grid.Column floated="left" width={5}>
                            <h3>Deneyimlerim</h3>
                        </Grid.Column>
                        <Grid.Column floated="right" width={5}>
                            <Modal
                                closeIcon
                                open={openExperience}
                                trigger={
                                    <Button size="mini" primary>
                                        Eklemek için tıklayınız
                                    </Button>
                                }
                                onClose={function () {
                                    setOpenExperience(false);
                                }}
                                onOpen={() => setOpenExperience(true)}
                            >
                                <Header
                                    icon="keyboard"
                                    content="Deneyim Ekle"
                                />
                                <Modal.Content>
                                    <AddExperience
                                        resumeId={id}
                                        update={handleCount}
                                    />
                                </Modal.Content>
                            </Modal>
                        </Grid.Column>
                    </Grid>
                    {resume.experiences != null &&
                    resume.experiences.length !== 0 ? (
                        resume.experiences.map((experience) => (
                            <Item key={experience.id}>
                                <Item.Image
                                    size="tiny"
                                    src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_business_48px-128.png"
                                />
                                <Item.Content>
                                    <Item.Header>{experience.name}</Item.Header>
                                    <Item.Description>
                                        <p>
                                            Başlangıç Tarihi:
                                            {experience.startYear}
                                        </p>
                                        <p>
                                            Bitis Tarihi:
                                            {experience.finishYear !== 0
                                                ? experience.finishYear
                                                : "Çalışıyor"}
                                        </p>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        ))
                    ) : (
                        <Item>
                            <Item.Content>
                                <Item.Meta>
                                    <p>Deneyiminiz bilgisi bulunmamaktadır.</p>
                                </Item.Meta>
                            </Item.Content>
                        </Item>
                    )}
                    {/* -------------Okul--------------- */}
                    <Divider />
                    <Grid>
                        <Grid.Column floated="left" width={5}>
                            <h3>Okullarım</h3>
                        </Grid.Column>
                        <Grid.Column floated="right" width={5}>
                            <Modal
                                closeIcon
                                open={openSchool}
                                trigger={
                                    <Button size="mini" primary>
                                        Eklemek için tıklayınız
                                    </Button>
                                }
                                onClose={() => setOpenSchool(false)}
                                onOpen={() => setOpenSchool(true)}
                            >
                                <Header icon="keyboard" content="Okul Ekle" />
                                <Modal.Content>
                                    <AddSchool
                                        resumeId={id}
                                        update={handleCount}
                                    />
                                </Modal.Content>
                            </Modal>
                        </Grid.Column>
                    </Grid>
                    {resume.schools != null && resume.schools.length !== 0 ? (
                        resume.schools.map((school) => (
                            <Item key={school.id}>
                                <Item.Image
                                    size="tiny"
                                    src="https://cdn3.iconfinder.com/data/icons/education-and-school-8/48/Education-128.png"
                                />
                                <Item.Content>
                                    <Item.Header>{school.name}</Item.Header>
                                    <Item.Description>
                                        <p>Bölüm: {school.department}</p>
                                        <p>
                                            Başlangıç Tarihi:
                                            {school.startYear}
                                        </p>
                                        <p>
                                            Bitis Tarihi:
                                            {school.finishYear != null
                                                ? school.finishYear
                                                : "Okuyor"}
                                        </p>
                                        <p>Derece:{school.degree}</p>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        ))
                    ) : (
                        <Item>
                            <Item.Content>
                                <Item.Meta>
                                    <p>Okul bilgileriniz bulunmamaktadır.</p>
                                </Item.Meta>
                            </Item.Content>
                        </Item>
                    )}
                    {/* -------------Diller--------------- */}
                    <Divider />
                    <Grid>
                        <Grid.Column floated="left" width={5}>
                            <h3>Bildiğim Diller</h3>
                        </Grid.Column>
                        <Grid.Column floated="right" width={5}>
                            <Modal
                                closeIcon
                                open={openLanguage}
                                trigger={
                                    <Button size="mini" primary>
                                        Eklemek için tıklayınız
                                    </Button>
                                }
                                onClose={() => setOpenLanguage(false)}
                                onOpen={() => setOpenLanguage(true)}
                            >
                                <Header icon="keyboard" content="Dil Ekle" />
                                <Modal.Content>
                                    <AddLanguage
                                        resumeId={id}
                                        update={handleCount}
                                    />
                                </Modal.Content>
                            </Modal>
                        </Grid.Column>
                    </Grid>
                    {resume.languages != null &&
                    resume.languages.length !== 0 ? (
                        resume.languages.map((language) => (
                            <Item key={language.id}>
                                <Item.Image
                                    size="tiny"
                                    src="https://cdn1.iconfinder.com/data/icons/material-core/20/language-128.png"
                                />
                                <Item.Content>
                                    <Item.Header>{language.name}</Item.Header>
                                    <Item.Description>
                                        <p>
                                            Seviye:
                                            {language.level}
                                        </p>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        ))
                    ) : (
                        <Item>
                            <Item.Content>
                                <Item.Meta>
                                    <p>Dil bilgileriniz bulunmamaktadır.</p>
                                </Item.Meta>
                            </Item.Content>
                        </Item>
                    )}
                </Item.Group>
            </Container>
        </div>
    );
}
