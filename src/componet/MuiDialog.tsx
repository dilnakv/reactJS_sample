import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const MuiDialog = () => {
  const [openSimple, setOpenSimple] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const [formValue, setFormValue] = useState("");

  return (
    <div style={{ display: "flex", gap: 16 }}>
      {/* --- Simple Dialog --- */}
      <Button variant="outlined" onClick={() => setOpenSimple(true)}>
        Open Simple Dialog
      </Button>
      <Dialog open={openSimple} onClose={() => setOpenSimple(false)}>
        <DialogTitle>Select an option</DialogTitle>
        <List>
          {["Option A", "Option B", "Option C"].map((option) => (
            <ListItem key={option} disablePadding>
              <ListItemButton onClick={() => setOpenSimple(false)}>
                <ListItemText primary={option} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Dialog>

      {/* --- Alert Dialog --- */}
      <Button variant="outlined" color="error" onClick={() => setOpenAlert(true)}>
        Open Alert Dialog
      </Button>
      <Dialog open={openAlert} onClose={() => setOpenAlert(false)}>
        <DialogTitle>{"Delete Item?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This action cannot be undone. Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAlert(false)}>Cancel</Button>
          <Button onClick={() => setOpenAlert(false)} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* --- Confirm Dialog --- */}
      <Button variant="outlined" onClick={() => setOpenConfirm(true)}>
        Open Confirm Dialog
      </Button>
      <Dialog open={openConfirm} onClose={() => setOpenConfirm(false)}>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you really want to proceed with this action?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirm(false)}>No</Button>
          <Button onClick={() => setOpenConfirm(false)} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      {/* --- Form Dialog --- */}
      <Button variant="outlined" onClick={() => setOpenForm(true)}>
        Open Form Dialog
      </Button>
      <Dialog open={openForm} onClose={() => setOpenForm(false)} fullWidth maxWidth="sm">
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your email address to subscribe:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenForm(false)}>Cancel</Button>
          <Button
            onClick={() => {
              console.log("Form submitted:", formValue);
              setOpenForm(false);
            }}
            variant="contained"
          >
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
