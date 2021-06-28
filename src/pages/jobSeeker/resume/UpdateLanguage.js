import React, { useState } from "react";
import { toast } from "react-toastify";
import { Modal, Header, Button, Icon, Item, Grid } from "semantic-ui-react";

import LanguageService from "../../../services/languageService";
import AddLanguage from "./AddLanguage";

export default function UpdateLanguage({ resumeId, update, languages }) {
    const [languageId, setLanguageId] = useState(0);
    const [openDeleteLanguage, setOpenDeleteLanguage] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);

    const handleDeleteLanguage = (id) => {
        setOpenDeleteLanguage(true);
        setLanguageId(id);
    };

    const handleDeleteSubmitLanguage = () => {
        let languageService = new LanguageService();
        languageService.deleteLanguage(languageId).then(function (result) {
            toast.success(result.data.message);
            update();
            setOpenDeleteLanguage(false);
        });
    };

    return (
        <div>
            <Modal
                closeIcon
                open={openDeleteLanguage}
                onClose={() => setOpenDeleteLanguage(false)}
                onOpen={() => setOpenDeleteLanguage(true)}
            >
                <Header icon="trash" content="Dil Sil" />
                <Modal.Content>
                    <p>Bu dili silmek istediğinize emin misiniz?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        color="red"
                        onClick={() => setOpenDeleteLanguage(false)}
                    >
                        <Icon name="trash" /> Hayır
                    </Button>
                    <Button color="green" onClick={handleDeleteSubmitLanguage}>
                        <Icon name="checkmark" />
                        Evet
                    </Button>
                </Modal.Actions>
            </Modal>
            <Grid>
                <Grid.Column floated="left" width={5}>
                    <h3>Bildiğim Diller</h3>
                </Grid.Column>
                <Grid.Column floated="right" width={5}>
                    <Modal
                        closeIcon
                        open={openLanguage}
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
                        onClose={() => setOpenLanguage(false)}
                        onOpen={() => setOpenLanguage(true)}
                    >
                        <Header icon="keyboard" content="Dil Ekle" />
                        <Modal.Content>
                            <AddLanguage resumeId={resumeId} update={update} />
                        </Modal.Content>
                    </Modal>
                </Grid.Column>
            </Grid>
            <Item.Group>
                {languages != null && languages.length !== 0 ? (
                    languages.map((language) => (
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
                                <Item.Extra>
                                    <Button
                                        icon
                                        size="mini"
                                        color="red"
                                        onClick={() =>
                                            handleDeleteLanguage(language.id)
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
                                <p>Dil bilgileriniz bulunmamaktadır.</p>
                            </Item.Meta>
                        </Item.Content>
                    </Item>
                )}
            </Item.Group>
        </div>
    );
}
