import React, { useState } from "react";
import { toast } from "react-toastify";

import AbilityService from "../../../services/abilityService";
import AtayModal from "../../../utilities/customComponents/AtayModal";
import AddAbility from "./AddAbility";

export default function UpdateAbility({ resumeId, update, abilities }) {
    const [abilityId, setAbilityId] = useState(0);
    const [openDeleteAbility, setOpenDeleteAbility] = useState(false);
    const [openAbility, setOpenAbility] = useState(false);

    const handleDeleteAbility = (id) => {
        setOpenDeleteAbility(true);
        setAbilityId(id);
        <AtayModal title="test" openModal={AddAbility}/>
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
        <div className="mt-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Yeteneklerim</h5>
                    <div className="row">
                        {abilities != null && abilities.length !== 0 ? (
                            abilities.map((ability) => (
                                <div className="col-sm-6 mt-3" key={ability.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {ability.name}
                                            </h5>
                                            <h6 className="card-subtitle mb-2 text-muted">
                                                Seviye: {ability.description}
                                            </h6>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() =>
                                                    handleDeleteAbility(
                                                        ability.id
                                                    )
                                                }
                                            >
                                                Sil
                                            </button>                                    
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="card-text">
                                Hiç yenetek girmemişsiniz...
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {/* <Grid>
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
            </Item.Group> */}
        </div>
    );
}
