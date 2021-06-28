import React, { useState } from "react";
import { toast } from "react-toastify";
import { Modal, Header, Button, Icon, Item, Grid } from "semantic-ui-react";

import ExperienceService from "../../../services/experienceService";
import AddExperience from "./AddExperience";

export default function UpdateExperience({ resumeId, update, experiences }) {
    const [experienceId, setExperienceId] = useState(0);
    const [openDeleteExperience, setOpenDeleteExperience] = useState(false);
    const [openExperience, setOpenExperience] = useState(false);

    const handleDeleteExperience = (id) => {
        setOpenDeleteExperience(true);
        setExperienceId(id);
    };

    const handleDeleteSubmitExperience = () => {
        let experienceService = new ExperienceService();
        experienceService
            .deleteExperience(experienceId)
            .then(function (result) {
                toast.success(result.data.message);
                update();
                setOpenDeleteExperience(false);
            });
    };
    return (
        <div>
            <Modal
                closeIcon
                open={openDeleteExperience}
                onClose={() => setOpenDeleteExperience(false)}
                onOpen={() => setOpenDeleteExperience(true)}
            >
                <Header icon="trash" content="Deneyimi Sil" />
                <Modal.Content>
                    <p>Bu deneyimi silmek istediğinize emin misiniz?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        color="red"
                        onClick={() => setOpenDeleteExperience(false)}
                    >
                        <Icon name="trash" /> Hayır
                    </Button>
                    <Button
                        color="green"
                        onClick={handleDeleteSubmitExperience}
                    >
                        <Icon name="checkmark" />
                        Evet
                    </Button>
                </Modal.Actions>
            </Modal>
            <Grid>
                <Grid.Column floated="left" width={5}>
                    <h3>Deneyimlerim</h3>
                </Grid.Column>
                <Grid.Column floated="right" width={5}>
                    <Modal
                        closeIcon
                        open={openExperience}
                        trigger={
                            <Button size="mini" primary icon labelPosition="right">
                                Eklemek için tıklayınız
                                <Icon name="plus" />
                            </Button>
                        }
                        onClose={function () {
                            setOpenExperience(false);
                        }}
                        onOpen={() => setOpenExperience(true)}
                    >
                        <Header icon="keyboard" content="Deneyim Ekle" />
                        <Modal.Content>
                            <AddExperience
                                resumeId={resumeId}
                                update={update}
                            />
                        </Modal.Content>
                    </Modal>
                </Grid.Column>
            </Grid>
            <Item.Group>
                {experiences != null && experiences.length !== 0 ? (
                    experiences.map((experience) => (
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
                                <Item.Extra>
                                    <Button
                                        icon
                                        size="mini"
                                        color="red"
                                        onClick={() =>
                                            handleDeleteExperience(
                                                experience.id
                                            )
                                        }
                                    >
                                        <Icon name="trash" />
                                    </Button>
                                </Item.Extra>
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
            </Item.Group>
        </div>
    );
}
