import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Contacts = ({ contact }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={contact.image} width={75} />
      <Card.Title>{contact.firstname} {contact.lastname}</Card.Title>
      <Card.Subtitle>{contact.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Contacts.propTypes = {
  contact: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    image: PropTypes.string,
    address: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Contacts;
