import React, { useState } from "react";
import {
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ProductFormModal from "../components/ProductFormModal";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
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
      setFeaturedProducts(
        featuredProducts.map((product) =>
          product.id === productData.id ? productData : product
        )
      );
    } else {
      setFeaturedProducts([
        ...featuredProducts,
        { ...productData, id: featuredProducts.length + 1 },
      ]);
    }
    handleCloseModal();
  };

  const handleDeleteProduct = (productId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      setFeaturedProducts(
        featuredProducts.filter((product) => product.id !== productId)
      );
    }
  };

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Featured Products
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenModal(null, false)}
        style={{ marginBottom: "20px" }}
      >
        Add Featured Product
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Rent per Month</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {featuredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{`$${product.rentPerMonth}`}</TableCell>
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

export default FeaturedProducts;
