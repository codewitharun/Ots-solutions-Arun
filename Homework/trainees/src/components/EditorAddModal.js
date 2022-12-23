import React, { useEffect, useState } from "react";
import {
  Modal,
  Header,
  Input,
  Dropdown,
  Icon,
  Button,
} from "semantic-ui-react";

const EditorAddModal = (handleOpen) => {
  const [owner, setOwner] = useState({});
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const options = [
    { key: "m", value: "Male", icon: "male", text: "Male" },
    { key: "f", value: "Female", icon: "female", text: "Female" },
  ];
  console.log("props", handleOpen);

  const handleClose = (owner) => {
    // console.log(owner);
    // console.log(owner.lastName);
    const update = {
      gender: gender === "" ? owner?.gender : gender,
      firstName: firstName === "" ? owner?.firstName : firstName,
      lastName: lastName === "" ? owner?.lastName : lastName,
      email: owner?.email,
    };
    // props.toEdit(update);
    // props.open(true);
  };
  return (
    <div>
      <Modal
        closeIcon
        // open={open   }
        // trigger={<Button>Show Modal</Button>}
        onClose={() => handleOpen.open(false)}
        onOpen={() => handleOpen.open(true)}
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
          {/* <Button
            color="green"
            onClick={() => {
              handleClose(owner);
            }}
          >
            <Icon name="checkmark" /> Confirm edit
          </Button> */}
        </Modal.Actions>
      </Modal>
    </div>
  );
};
export default EditorAddModal;
