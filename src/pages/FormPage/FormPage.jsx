import { Box, Modal, TextField } from "@mui/material";
import React, { useContext } from "react";
import FormContext from "../../context/FormContext";

function FormPage() {
  const { open, setOpen } = useContext(FormContext);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
        />
      </Box>
    </Modal>
  );
}

export default FormPage;
