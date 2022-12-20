import React, { useEffect, useState } from "react";
import {
  Table,
  Icon,
  Modal,
  Button,
  Header,
  Dropdown,
  Input,
} from "semantic-ui-react";
const options = [
  { key: "m", value: "Male", icon: "male", text: "Male" },
  { key: "f", value: "Female", icon: "female", text: "Female" },
];

const TraineesList = (props) => {
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [owner, setOwner] = useState({});
  const [open, setOpen] = useState(false);

  function handleShow(owner) {
    setOwner(owner);
    setOpen(true);
  }
  function handleClose(owner) {
    // console.log(owner);
    // console.log(owner.lastName);
    const update = {
      gender: gender === "" ? owner?.gender : gender,
      firstName: firstName === "" ? owner?.firstName : firstName,
      lastName: lastName === "" ? owner?.lastName : lastName,
      email: owner?.email,
    };
    props.toEdit(update);
    setOpen(true);
  }

  return (
    <>
      {props.trainees.length > 0 && (
        <Table fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {props.trainees.length > 0 &&
            props.trainees.map((trainee, index) => {
              return (
                <Table.Body key={index}>
                  <Table.Row>
                    <Table.Cell>
                      {trainee.firstName} {trainee.lastName}
                    </Table.Cell>
                    <Table.Cell>{trainee.email}</Table.Cell>
                    <Table.Cell>{trainee.gender}</Table.Cell>
                    <Table.Cell>
                      <Icon
                        name="edit"
                        onClick={() => handleShow(trainee)}
                        color="blue"
                      />
                      <Icon
                        name="user delete"
                        onClick={() => props.toDelete(index)}
                        color={"red"}
                      />
                    </Table.Cell>
                  </Table.Row>
                  <Modal
                    closeIcon
                    open={open}
                    // trigger={<Button>Show Modal</Button>}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    inverted
                  >
                    <Header
                      icon="edit"
                      content={` Edit Details ${owner?.firstName} ${owner?.lastName} `}
                    />
                    <Modal.Content size="small">
                      <Input
                        placeholder={owner?.firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <br />
                      <Input
                        placeholder={owner?.lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />

                      <br />
                      <Input placeholder={owner?.email} disabled />
                      <Dropdown
                        placeholder={owner?.gender}
                        selection
                        options={options}
                        onChange={(e, i) => setGender(i.value)}
                      />
                    </Modal.Content>
                    <Modal.Actions>
                      <Button
                        color="green"
                        onClick={() => {
                          handleClose(owner);
                        }}
                      >
                        <Icon name="checkmark" /> Confirm edit
                      </Button>
                    </Modal.Actions>
                  </Modal>
                </Table.Body>
              );
            })}
        </Table>
      )}

      <div>{props.trainees.length == 0 && <div>No Data Found!</div>}</div>
    </>
  );
};

export default TraineesList;
