// import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton
} from "@fv-components/dialog";
import React, { FC, FormEvent } from "react";
import { object, string, date, number } from "yup";
import { Formik } from "formik";
import TextField, { HelperText, Input } from "@fv-components/text-field";
import Grid, { Cell, Row } from "@fv-components/layout-grid";
import { Player } from "../../../../Models/Player";
import { ExecutionResult } from "apollo-boost";

interface PlayerModalProps {
  onHide: () => void;
  show: boolean;
  new: boolean;
  addPlayer: (player: Player) => Promise<ExecutionResult<Player>>;
}

const PlayerModal: FC<PlayerModalProps> = (props: PlayerModalProps) => {
  const schema = object({
    name: string().required(),
    birthPlace: string().required(),
    height: string().required(),
    weightLbs: number().required(),
    birthDate: date().required()
  });

  const createPlayer = (player: Player) => {
    props.addPlayer(player).then(response => {
      props.onHide();
    });
  };

  return (
    <Dialog
      open={props.show}
      onOpen={() => {
        // TODO do something here to clear the form
      }}
      onClose={props.onHide}
    >
      <Formik
        validationSchema={schema}
        onSubmit={createPlayer}
        initialValues={{} as Player}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <DialogTitle>
              {props.new ? "Add New Player" : "Edit Player"}
            </DialogTitle>

            <DialogContent>
              <Grid>
                <Row>
                  <Cell columns={12}>
                    <TextField
                      style={{ width: "100%" }}
                      outlined
                      label="Name"
                      helperText={
                        <HelperText validation>{errors.name}</HelperText>
                      }
                    >
                      <Input
                        isValid={!errors.name}
                        id="name"
                        value={values.name}
                        onChange={handleChange}
                      />
                    </TextField>
                  </Cell>
                </Row>
                <Row>
                  <Cell columns={6}>
                    <TextField
                      outlined
                      label="Birthday"
                      helperText={
                        <HelperText validation>{errors.birthDate}</HelperText>
                      }
                    >
                      <Input
                        id="birthDate"
                        isValid={!errors.birthDate}
                        value={values.birthDate}
                        onChange={handleChange}
                      />
                    </TextField>
                  </Cell>
                  <Cell columns={6}>
                    <TextField
                      outlined
                      label="Birthplace"
                      helperText={
                        <HelperText validation>{errors.birthPlace}</HelperText>
                      }
                    >
                      <Input
                        id="birthPlace"
                        isValid={!errors.birthPlace}
                        value={values.birthPlace}
                        onChange={handleChange}
                      />
                    </TextField>
                  </Cell>
                </Row>
                <Row>
                  <Cell columns={6}>
                    <TextField
                      outlined
                      label="Height"
                      helperText={
                        <HelperText validation>{errors.height}</HelperText>
                      }
                    >
                      <Input
                        id="height"
                        isValid={!errors.height}
                        value={values.height}
                        onChange={handleChange}
                      />
                    </TextField>
                  </Cell>
                  <Cell columns={6}>
                    <TextField
                      outlined
                      label="Weight"
                      helperText={
                        <HelperText validation>
                          {!errors.weightLbs
                            ? "Weight in lbs"
                            : errors.weightLbs}
                        </HelperText>
                      }
                    >
                      <Input
                        id="weightLbs"
                        isValid={!errors.weightLbs}
                        value={values.weightLbs}
                        onChange={handleChange}
                      />
                    </TextField>
                  </Cell>
                </Row>
              </Grid>
            </DialogContent>

            <DialogFooter>
              <DialogButton
                action="cancel"
                raised
                onClick={() => props.onHide()}
              >
                Cancel
              </DialogButton>
              <DialogButton action="save" raised type="submit">
                Save
              </DialogButton>
            </DialogFooter>
          </form>
        )}
      </Formik>
    </Dialog>
  );
};

export default PlayerModal;
