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
import EditorAddModal from "./EditorAddModal";
import { handleOpen } from "./EditorAddModal";
import EditorCloseModal from "./EditorAddModal";
const TraineesList = (props) => {
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [owner, setOwner] = useState({});
  const [open, setOpen] = useState(false);
  function handleOpen(item) {
    item.open = true;
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
                        onClick={() => {
                          handleOpen({ trainee: trainee, open: open });
                        }}
                        color="blue"
                      />
                      <Icon
                        name="user delete"
                        onClick={() => props.toDelete(index)}
                        color={"red"}
                      />
                    </Table.Cell>
                    <EditorCloseModal handleOpen={handleOpen} />
                  </Table.Row>
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
