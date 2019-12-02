import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const PlayerModal = props => {
  const ADD_PLAYER = gql`
    mutation PlayerMutation($player: PlayerInput!) {
      createPlayer(player: $player) {
        id
      }
    }
  `;

  const [addPlayer, { data }] = useMutation(ADD_PLAYER);

  const schema = yup.object({
    name: yup.string().required(),
    birthPlace: yup.string().required(),
    height: yup.string().required(),
    weightLbs: yup.number().required(),
    birthDate: yup.date().required()
  });

  const createPlayer = player => {
    addPlayer({ variables: { player } }).then(response => {
      Object.assign(player, response.data.createPlayer);
      props.onAdd(player);
      props.onHide();
    });
  };

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Formik
        validationSchema={schema}
        onSubmit={createPlayer}
        initialValues={{}}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Modal.Dialog style={{ margin: "0px" }}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {props.new ? "Add New Player" : "Edit Player"}
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Row>
                  <Col>
                    <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        type="text"
                        isInvalid={errors.name}
                        placeholder="Enter player name"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="formBirthday">
                      <Form.Label>Birthday</Form.Label>
                      <Form.Control
                        name="birthDate"
                        value={values.birthDate}
                        onChange={handleChange}
                        isInvalid={errors.birthDate}
                        type="date"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.birthDate}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBirtPlace">
                      <Form.Label>Birthplace</Form.Label>
                      <Form.Control
                        name="birthPlace"
                        value={values.birthPlace}
                        onChange={handleChange}
                        isInvalid={errors.birthPlace}
                        type="text"
                        placeholder="Where was he born?"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="formHeight">
                      <Form.Label>Height</Form.Label>
                      <Form.Control
                        name="height"
                        value={values.height}
                        onChange={handleChange}
                        isInvalid={errors.height}
                        type="text"
                        placeholder="Height in inches"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formWeight">
                      <Form.Label>Weight</Form.Label>
                      <Form.Control
                        name="weightLbs"
                        value={values.weightLbs}
                        onChange={handleChange}
                        isInvalid={errors.weight}
                        type="number"
                        placeholder="Weight in lbs"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={() => props.onHide()}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Save
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default PlayerModal;
