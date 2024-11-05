import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

const ProductFormModal = ({ open, handleClose, onSave, categories = [] }) => {
  // Default to empty array
  const [product, setProduct] = useState({
    title: "",
    image: "",
    category: "",
    description: "",
    rentPerMonth: "",
    minRentalPeriod: 1,
    maxRentalPeriod: 12,
    depositRequired: "",
    proof: "",
    location: "",
    contactNo: "",
    altContactNo: "",
    kycDetails: "",
    ownerPhoto: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSave = () => {
    onSave(product);
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
          mb: "10%",
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Add New Product
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Title"
          name="title"
          value={product.title}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Image URL"
          name="image"
          value={product.image}
          onChange={handleChange}
        />

        {/* Category Dropdown */}
        <Select
          fullWidth
          margin="normal"
          name="category"
          value={product.category}
          onChange={handleChange}
          displayEmpty
          sx={{ marginBottom: 2 }}
        >
          <MenuItem value="" disabled>
            Select Category
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </Select>

        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Rent per Month"
          name="rentPerMonth"
          type="number"
          value={product.rentPerMonth}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Minimum Rental Period (months)"
          name="minRentalPeriod"
          type="number"
          inputProps={{ min: 1, max: 12 }}
          value={product.minRentalPeriod}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Maximum Rental Period (months)"
          name="maxRentalPeriod"
          type="number"
          inputProps={{ min: 1, max: 12 }}
          value={product.maxRentalPeriod}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Deposit Required"
          name="depositRequired"
          type="number"
          value={product.depositRequired}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Proof"
          name="proof"
          value={product.proof}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Location"
          name="location"
          value={product.location}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Contact Number"
          name="contactNo"
          value={product.contactNo}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Alternative Number"
          name="altContactNo"
          value={product.altContactNo}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="KYC Details"
          name="kycDetails"
          value={product.kycDetails}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Owner Photo URL"
          name="ownerPhoto"
          value={product.ownerPhoto}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          style={{ marginTop: "20px" }}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default ProductFormModal;
