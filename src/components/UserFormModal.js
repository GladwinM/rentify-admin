import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Switch,
  FormControlLabel,
} from "@mui/material";

const UserFormModal = ({
  open,
  handleClose,
  onSave,
  userData,
  isEditMode,
  readOnly,
}) => {
  const [user, setUser] = useState({
    image: null,
    name: "",
    age: "",
    email: "",
    address: "",
    phoneNumber: "",
    gender: "",
    inCart: "",
    wishlist: "",
    myListing: "",
    myRenting: "",
    status: true, // Default to enabled
  });
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if ((isEditMode || readOnly) && userData) {
      setUser(userData);
      if (userData.image) {
        setImagePreview(userData.image);
      }
    }
  }, [isEditMode, readOnly, userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files ? e.target.files[0] : e.dataTransfer.files[0];
    if (file) {
      setUser({ ...user, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleStatusToggle = () => {
    setUser({ ...user, status: !user.status });
  };

  const handleSave = () => {
    onSave(user);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: 400,
          maxHeight: "80vh",
          overflowY: "auto",
          p: 4,
          bgcolor: "background.paper",
          m: "auto",
          mt: "3%",
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          {readOnly ? "View User" : isEditMode ? "Edit User" : "Add New User"}
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
          disabled={readOnly}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Age"
          name="age"
          type="number"
          value={user.age}
          onChange={handleChange}
          disabled={readOnly}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
          disabled={readOnly}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Address"
          name="address"
          value={user.address}
          onChange={handleChange}
          disabled={readOnly}
        />

        {/* Phone Number and Status Row */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            fullWidth
            margin="normal"
            label="Phone Number"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleChange}
            disabled={readOnly}
          />
          <FormControlLabel
            control={
              <Switch
                checked={user.status}
                onChange={handleStatusToggle}
                color="primary"
                disabled={readOnly}
              />
            }
            label={user.status ? "Enabled" : "Disabled"}
            sx={{ marginTop: "8px" }}
          />
        </Box>

        <TextField
          fullWidth
          margin="normal"
          label="Gender"
          name="gender"
          value={user.gender}
          onChange={handleChange}
          disabled={readOnly}
        />

        {isEditMode || readOnly ? (
          <>
            <TextField
              fullWidth
              margin="normal"
              label="In Cart"
              name="inCart"
              value={user.inCart}
              onChange={handleChange}
              disabled={readOnly}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Wishlist"
              name="wishlist"
              value={user.wishlist}
              onChange={handleChange}
              disabled={readOnly}
            />
            <TextField
              fullWidth
              margin="normal"
              label="My Listing"
              name="myListing"
              onChange={handleChange}
              value={user.myListing}
              disabled={readOnly}
            />
            <TextField
              fullWidth
              margin="normal"
              label="My Renting"
              name="myRenting"
              onChange={handleChange}
              value={user.myRenting}
              disabled={readOnly}
            />
          </>
        ) : null}

        {/* Image Upload Section at the bottom */}
        <Typography variant="subtitle1" gutterBottom>
          Upload Photo
        </Typography>
        <Box
          onDrop={handleImageUpload}
          onDragOver={handleDragOver}
          component="label"
          sx={{
            border: "2px dashed #ccc",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            color: "#777",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />
          {imagePreview ? (
            <Box
              component="img"
              src={imagePreview}
              alt="User Image"
              sx={{
                width: "100%",
                maxHeight: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          ) : (
            "Drop your image here or click to upload"
          )}
        </Box>

        {!readOnly && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            sx={{ marginTop: "20px" }}
          >
            {isEditMode ? "Save Changes" : "Save"}
          </Button>
        )}
      </Box>
    </Modal>
  );
};

export default UserFormModal;
