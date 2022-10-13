import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function FormSubmission({ addTask, handleClose, open }) {
  const [state, setState] = useState("");

  function handleInput(e) {
    setState(e.target.value);
  }
  function handleSubmition(e) {
    e.preventDefault();
    addTask(state);
    // console.log(state);
    handleClose();
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, width: 600 }}>
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <form>
              <Grid container>
                <Grid item xs={16}>
                  <TextField
                    id="outlined-basic"
                    label="Nama"
                    value={state}
                    type="text"
                    onChange={handleInput}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </form>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              onClick={handleSubmition}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              size="small"
              color="success"
              onClick={handleClose}
            >
              Close
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Modal>
  );
}

export default FormSubmission;
