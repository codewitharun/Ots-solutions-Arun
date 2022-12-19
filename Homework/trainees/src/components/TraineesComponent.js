import React, { useEffect, useState } from "react";
import { Header, Input, Button, Dropdown } from "semantic-ui-react";
import TraineesList from "./TraineesList";

const TraineesComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [traineesList, setTraineesList] = useState([]);
  const [searchedTraineesList, setSearchedTraineesList] = useState([]);

  const mockTraineesData = [
    {
      firstName: "Rahul",
      lastName: "Rauniyar",
      email: "rahul@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Saurabh",
      lastName: "Singh",
      email: "saurabh@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Mohd.",
      lastName: "Ehtesham",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Arun",
      lastName: "Kumar",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Rahul",
      lastName: "Rauniyar",
      email: "rahul@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Saurabh",
      lastName: "Singh",
      email: "saurabh@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Mohd.",
      lastName: "Ehtesham",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Arun",
      lastName: "Kumar",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Rahul",
      lastName: "Rauniyar",
      email: "rahul@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Saurabh",
      lastName: "Singh",
      email: "saurabh@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Mohd.",
      lastName: "Ehtesham",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Arun",
      lastName: "Kumar",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
  ];

  const options = [
    {
      key: "ascending",
      text: "Ascending Order",
      value: "ascending",
    },
    {
      key: "descending",
      text: "Descending Order",
      value: "descending",
    },
  ];

  useEffect(() => {
    setTraineesList(mockTraineesData);
  }, []);

  useEffect(() => {
    if (searchTerm != "") {
      const filteredData = mockTraineesData.filter((trainee) =>
        trainee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchedTraineesList(filteredData);
    }
  }, [searchTerm]);

  const toDelete = (item) => {
    const deletedList = mockTraineesData.filter((trainee, index) => {
      if (index === item) {
        console.log(trainee);
        return false;
      } else {
        return true;
      }
    });
    setTraineesList(deletedList);
    // setTraineesList(deletedList);
  };

  return (
    <>
      <Header as="h1">Trainees</Header>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "1rem",
        }}
      >
        <Input
          style={{ width: "25rem" }}
          icon={{ name: "search", circular: true, link: true }}
          placeholder="Search Name"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <Button.Group color="blue" style={{ marginLeft: "1rem" }}>
            <Button>Sort</Button>
            <Dropdown
              className="button icon"
              floating
              options={options}
              trigger={<></>}
            />
          </Button.Group>
        </div>
      </div>

      <div style={{ margin: "1rem" }}>
        <TraineesList
          toDelete={toDelete}
          trainees={searchTerm === "" ? traineesList : searchedTraineesList}
        />
      </div>
    </>
  );
};

export default TraineesComponent;
