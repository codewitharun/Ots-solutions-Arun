import React from "react";
import { Segment, Form, Button } from "semantic-ui-react";
export default function ContactUs() {
  return (
    <>
      <div>
        <Segment inverted>
          <Form inverted>
            <Form.Group unstackable widths={2}>
              <Form.Input label="First name" placeholder="First name" />
              <Form.Input label="Last name" placeholder="Last name" />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input label="Address" placeholder="Address" />
              <Form.Input label="Phone" placeholder="Phone" />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.TextArea
                label="Message.."
                placeholder="Type your  message here..."
                type="text"
              />
            </Form.Group>
            <Form.Checkbox label="I agree to the Terms and Conditions" />
            <Button type="submit">Submit</Button>
          </Form>
        </Segment>
      </div>
    </>
  );
}
