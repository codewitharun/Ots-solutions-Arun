import React, { useState } from "react";
import { Message, Card, Image, Icon } from "semantic-ui-react";
export default function Product() {
  const [Wishlist, setWishlist] = useState(false);
  return (
    <div>
      <Card>
        <Image
          src="https://images.hindustantimes.com/tech/img/2022/09/16/original/IMG_4709_1663334970035.jpg"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>
            Iphone 15 Pro
            <Card.Content
              extra
              onClick={() => {
                setWishlist(!Wishlist);
              }}
            >
              {Wishlist == true ? (
                <a>
                  <Icon name="heart " color="red" />
                </a>
              ) : (
                <a>
                  <Icon name="heart outline" color="red" />
                </a>
              )}
            </Card.Content>
          </Card.Header>
          <Card.Meta>
            <span className="date">Launching in 2023</span>
          </Card.Meta>
          <Card.Description>
            Iphone 15 pro is the subsidiary of Iphone series ,this comes with
            Type-C charger with apple silicon m2 chip
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="star" color="yellow" />
            2223 Reviews
          </a>
        </Card.Content>
      </Card>
    </div>
  );
}
