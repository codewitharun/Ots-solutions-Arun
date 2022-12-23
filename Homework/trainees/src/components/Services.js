import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Icon, Container } from "semantic-ui-react";
import "./styles.css";
const src = "/images/wireframe/white-image.png";
export default function Services() {
  return (
    <>
      <Container>
        <Card.Group itemsPerRow={3}>
          <Card className="card">
            <Image
              src="https://reactnative.dev/img/logo-og.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>React Native</Card.Header>
              <Card.Meta>Joined in 2013</Card.Meta>
              <Card.Description>
                React native is an hybrid Mobile development framework which
                provides support for both iOS and Android.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Link to="react" className="clickLink">
                Click for more
              </Link>
            </Card.Content>
          </Card>
          <Card className="card">
            <Image
              src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Java</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>
                Daniel is a comedian living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Link to="java" className="clickLink">
                Click for more
              </Link>
            </Card.Content>
          </Card>
          <Card className="card">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1200px-Microsoft_.NET_logo.svg.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>.NET</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>
                Daniel is a comedian living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Link to="dotnet" className="clickLink">
                Click for more
              </Link>
            </Card.Content>
          </Card>
          <Card className="card">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Angular</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>
                Daniel is a comedian living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Link to="angular" className="clickLink">
                Click for more
              </Link>
            </Card.Content>
          </Card>
          <Card className="card">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Python</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>
                Daniel is a comedian living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Link to="python" className="clickLink">
                Click for more
              </Link>
            </Card.Content>
          </Card>
          <Card className="card">
            <Image
              src="https://developer.apple.com/swift/images/swift-og.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Swift</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>
                Daniel is a comedian living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Link to="swift" className="clickLink">
                Click for more
              </Link>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </>
  );
}
