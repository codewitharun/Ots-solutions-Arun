import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, Modal, Button, Header } from "semantic-ui-react";
const ListItem = ({ pokemon, SortFilter }) => {
  const [details, setDetails] = useState(null);
  const [open, setOpen] = useState(false);
  const [ModalData, setModalData] = useState({});
  function handleOpen(params) {
    console.log(params);
    setModalData(params);
    setOpen(true);
  }
  const getPokemonDetail = async () => {
    try {
      const { data } = await axios.get(pokemon.url);
      const { weight, height, sprites } = data;
      setDetails({ weight, height, sprites });

      // console.log(data?.spri)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    SortFilter(details?.height);
  });
  useEffect(() => {
    getPokemonDetail();
  }, [pokemon]);
  const passToModal = {
    height: details?.height,
    weight: details?.weight,
    front: details?.sprites?.front_default,
    name: pokemon?.name.toUpperCase(),
  };
  return (
    <>
      <li
        style={{
          listStyle: "none",
          width: "200px",
          border: "1px solid",
          margin: "4px",
        }}
        onClick={() => handleOpen(passToModal)}
      >
        <div>Name: {pokemon.name.toUpperCase()}</div>
        <div>Weight: {details?.weight}</div>
        <div>Height: {details?.height}</div>
      </li>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src={ModalData?.front} />
          <Modal.Description>
            <Header>{ModalData?.name}</Header>
            <b>Height:{ModalData?.height}</b>
            <br />
            <b>Weight:{ModalData?.weight}</b>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default ListItem;

//style="list-style:none; width: 200px; border: 1px solid"
// {listStyle: "none", width:'200px', border:'1px solid', margin:'4px'}
