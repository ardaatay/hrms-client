import React, { useState } from "react";
import { toast } from "react-toastify";
import { Modal, Header, Button, Icon, Item, Grid } from "semantic-ui-react";

import AbilityService from "../../../services/abilityService";
import AddAbility from "./AddAbility";

export default function UpdateAbility({ resumeId, update, abilities }) {
    const [abilityId, setAbilityId] = useState(0);
    const [openDeleteAbility, setOpenDeleteAbility] = useState(false);
    const [openAbility, setOpenAbility] = useState(false);

    const handleDeleteAbility = (id) => {
        setOpenDeleteAbility(true);
        setAbilityId(id);
    };

    const handleDeleteSubmitAbility = () => {
        let abilityService = new AbilityService();
        abilityService.deleteAbility(abilityId).then(function (result) {
            toast.success(result.data.message);
            setOpenDeleteAbility(false);
            update();
        });
    };

    return (
        <div>
            <Modal
                closeIcon
                open={openDeleteAbility}
                onClose={() => setOpenDeleteAbility(false)}
                onOpen={() => setOpenDeleteAbility(true)}
            >
                <Header icon="trash" content="Yetenek Sil" />
                <Modal.Content>
                    <p>Bu yeteneğinizi silmek istediğinize emin misiniz?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        color="red"
                        onClick={() => setOpenDeleteAbility(false)}
                    >
                        <Icon name="trash" /> Hayır
                    </Button>
                    <Button color="green" onClick={handleDeleteSubmitAbility}>
                        <Icon name="checkmark" />
                        Evet
                    </Button>
                </Modal.Actions>
            </Modal>
            <Grid>
                <Grid.Column floated="left" width={5}>
                    <h3>Yeteneklerim</h3>
                </Grid.Column>
                <Grid.Column floated="right" width={5}>
                    <Modal
                        closeIcon
                        open={openAbility}
                        trigger={
                            <Button
                                size="mini"
                                primary
                                icon
                                labelPosition="right"
                            >
                                Eklemek için tıklayınız
                                <Icon name="plus" />
                            </Button>
                        }
                        onClose={() => setOpenAbility(false)}
                        onOpen={() => setOpenAbility(true)}
                    >
                        <Header icon="keyboard" content="Yetenek Ekle" />
                        <Modal.Content>
                            <AddAbility resumeId={resumeId} update={update} />
                        </Modal.Content>
                    </Modal>
                </Grid.Column>
            </Grid>
            <Item.Group>
                {abilities != null && abilities.length !== 0 ? (
                    abilities.map((ability) => (
                        <Item key={ability.id}>
                            <Item.Image
                                size="tiny"
                                src="https://cdn1.iconfinder.com/data/icons/business-rounded-outline-fill-style/64/illustration_Team_Skill-128.png"
                            />
                            <Item.Content>
                                <Item.Header>{ability.name}</Item.Header>
                                <Item.Description>
                                    <p>Seviye: {ability.description}</p>
                                </Item.Description>
                                <Item.Extra>
                                    <Button
                                        icon
                                        size="mini"
                                        color="red"
                                        onClick={() =>
                                            handleDeleteAbility(ability.id)
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
                                <p>Yetenek bilgileriniz bulunmamaktadır.</p>
                            </Item.Meta>
                        </Item.Content>
                    </Item>
                )}
            </Item.Group>
        </div>
    );
}
