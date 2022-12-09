import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  Image,
  Tab,
  Message,
  Embed,
  Card,
  Icon,
  Grid,
  GridColumn,
  GridRow,
} from "semantic-ui-react";
import Product from "./Product";
import Wishlist from "./Wishlist";
function App() {
  const panes = [
    {
      menuItem: <Image src={logo} size="tiny" />,
      // render: () => (
      //   <Tab.Pane attached={false}>
      //     <Image src={logo} size="small" />
      //   </Tab.Pane>
      // ),
    },
    {
      menuItem: "Product",

      render: () => (
        <Tab.Pane attached={false}>
          <Grid>
            <Grid.Row>
              <Product />
            </Grid.Row>
            <Grid.Row>
              <Product />
            </Grid.Row>
          </Grid>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "About Us",
      render: () => (
        <Tab.Pane attached={false}>
          <Wishlist />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Contact Us",
      render: () => (
        <Tab.Pane attached={false}>
          <Card>
            <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Tab.Pane>
      ),
    },
  ];
  return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />;
}

export default App;
