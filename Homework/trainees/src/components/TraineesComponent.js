import React, { useEffect, useState } from "react";
import { Header, Input, Button, Dropdown } from "semantic-ui-react";
import TraineesList from "./TraineesList";

const TraineesComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [traineesList, setTraineesList] = useState([]);
  const [searchedTraineesList, setSearchedTraineesList] = useState([]);
  const [Sort, setSort] = useState(null);
  console.log(Sort);
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
      const filteredData = traineesList.filter((trainee) =>
        trainee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchedTraineesList(filteredData);
    }
  }, [searchTerm]);
  useEffect(() => {
    if (Sort == "descending") {
      const shortedData = traineesList.sort(function (a, b) {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (b.firstName < a.firstName) {
          return 1;
        }
        return 0;
      });
      setTraineesList(shortedData);
    } else if (Sort == "ascending") {
      const shortedData = traineesList.sort(function (a, b) {
        if (a.firstName > b.firstName) {
          return -1;
        }
        if (b.firstName > a.firstName) {
          return 1;
        }
        return 0;
      });

      // console.log("sorted data", shortedData);
      setTraineesList(shortedData);
    } else {
      setTraineesList(mockTraineesData);
    }
  }, [Sort]);

  const toDelete = (item) => {
    const deletedList = traineesList.filter((trainee, index) => {
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
  const afteredit = (item) => {
    console.log("After====>", item);
    let newdata = mockTraineesData.map((obj, index) => {
      if (obj.email == item.email) {
        console.log("Before====>", obj);

        return { ...item };
      }

      return obj;
    });
    console.log("NEW DATA AFTER EDIT", newdata);
    setTraineesList(newdata);
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
              onChange={(e, u) => {
                setSort(u.value);
              }}
            />
          </Button.Group>
        </div>
      </div>

      <div style={{ margin: "1rem" }}>
        <TraineesList
          toDelete={toDelete}
          toEdit={afteredit}
          trainees={searchTerm === "" ? traineesList : searchedTraineesList}
        />
      </div>
    </>
  );
};

export default TraineesComponent;
