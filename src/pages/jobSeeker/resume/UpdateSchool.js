import React, { useState } from "react";
import { toast } from "react-toastify";

import SchoolService from "../../../services/schoolService";
import AddSchool from "./AddSchool";

export default function UpdateSchool({ resumeId, update, schools }) {
    const [schoolId, setSchoolId] = useState(0);
    const [openDeleteSchool, setOpenDeleteSchool] = useState(false);
    const [openSchool, setOpenSchool] = useState(false);

    const handleDeleteSchool = (id) => {
        setOpenDeleteSchool(true);
        setSchoolId(id);
    };

    const handleDeleteSubmitSchool = () => {
        let schoolService = new SchoolService();
        schoolService.deleteSchool(schoolId).then(function (result) {
            toast.success(result.data.message);
            update();
            setOpenDeleteSchool(false);
        });
    };

    return (
        <div>
            {/* <Modal
                closeIcon
                open={openDeleteSchool}
                onClose={() => setOpenDeleteSchool(false)}
                onOpen={() => setOpenDeleteSchool(true)}
            >
                <Header icon="trash" content="Okul Sil" />
                <Modal.Content>
                    <p>Bu okulu silmek istediğinize emin misiniz?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        color="red"
                        onClick={() => setOpenDeleteSchool(false)}
                    >
                        <Icon name="trash" /> Hayır
                    </Button>
                    <Button color="green" onClick={handleDeleteSubmitSchool}>
                        <Icon name="checkmark" />
                        Evet
                    </Button>
                </Modal.Actions>
            </Modal>
            <Grid>
                <Grid.Column floated="left" width={5}>
                    <h3>Okullarım</h3>
                </Grid.Column>
                <Grid.Column floated="right" width={5}>
                    <Modal
                        closeIcon
                        open={openSchool}
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
                        onClose={() => setOpenSchool(false)}
                        onOpen={() => setOpenSchool(true)}
                    >
                        <Header icon="keyboard" content="Okul Ekle" />
                        <Modal.Content>
                            <AddSchool resumeId={resumeId} update={update} />
                        </Modal.Content>
                    </Modal>
                </Grid.Column>
            </Grid>
            <Item.Group>
                {schools != null && schools.length !== 0 ? (
                    schools.map((school) => (
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
                                        Bitiş Tarihi:
                                        {school.finishYear != null
                                            ? school.finishYear
                                            : "Okuyor"}
                                    </p>
                                    <p>Derece:{school.degree}</p>
                                </Item.Description>
                                <Item.Extra>
                                    <Button
                                        icon
                                        size="mini"
                                        color="red"
                                        onClick={() =>
                                            handleDeleteSchool(school.id)
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
                                <p>Okul bilgileriniz bulunmamaktadır.</p>
                            </Item.Meta>
                        </Item.Content>
                    </Item>
                )}
            </Item.Group> */}
        </div>
    );
}
