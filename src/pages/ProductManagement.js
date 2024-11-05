import React, { useState } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import ProductFormModal from "../components/ProductFormModal";

const ProductManagement = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Camera",
      category: "Electronics",
      rentPerMonth: 50,
      minRentalPeriod: 1,
      maxRentalPeriod: 12,
      contactNo: "123-456-7890",
    },
    {
      id: 2,
      title: "Bicycle",
      category: "Sports",
      rentPerMonth: 30,
      minRentalPeriod: 2,
      maxRentalPeriod: 6,
      contactNo: "098-765-4321",
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleOpenModal = (product = null, editMode = false) => {
    setSelectedProduct(product);
    setIsEditMode(editMode);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
    setIsEditMode(false);
  };

  const handleSaveProduct = (productData) => {
    if (isEditMode) {
      // Update existing product
      setProducts(
        products.map((product) =>
          product.id === productData.id ? productData : product
        )
      );
    } else {
      // Add new product
      setProducts([...products, { ...productData, id: products.length + 1 }]);
    }
    handleCloseModal();
  };

  const handleDeleteProduct = (productId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      setProducts(products.filter((product) => product.id !== productId));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Product Management
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenModal(null, false)}
        style={{ marginBottom: "20px" }}
      >
        Add New Product
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Rent per Month</TableCell>
              <TableCell>Rental Period (months)</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{`$${product.rentPerMonth}`}</TableCell>
                <TableCell>{`${product.minRentalPeriod}-${product.maxRentalPeriod} months`}</TableCell>
                <TableCell>{product.contactNo}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginRight: "10px" }}
                    onClick={() => handleOpenModal(product, true)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Product Form Modal */}
      <ProductFormModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        onSave={handleSaveProduct}
        productData={selectedProduct}
        isEditMode={isEditMode}
      />
    </div>
  );
};

export default ProductManagement;
