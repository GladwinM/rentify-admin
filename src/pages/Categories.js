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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Car", imageUrl: "https://via.placeholder.com/100" },
    { id: 2, name: "Bike", imageUrl: "https://via.placeholder.com/100" },
    // Add other categories here for initial testing
  ]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCategoryImage(file);
    }
  };

  const handleOpenModal = (category = null) => {
    setIsEditMode(Boolean(category));
    setSelectedCategory(category);
    setCategoryName(category ? category.name : "");
    setCategoryImage(null);
    setModalOpen(true);
  };

  const handleSaveCategory = () => {
    if (categoryName && categoryImage) {
      const newCategory = {
        id: isEditMode ? selectedCategory.id : categories.length + 1,
        name: categoryName,
        imageUrl:
          isEditMode && !categoryImage
            ? selectedCategory.imageUrl
            : URL.createObjectURL(categoryImage),
      };
      setCategories((prevCategories) =>
        isEditMode
          ? prevCategories.map((cat) =>
              cat.id === selectedCategory.id ? newCategory : cat
            )
          : [...prevCategories, newCategory]
      );
      setModalOpen(false);
      setCategoryName("");
      setCategoryImage(null);
    } else {
      alert("Please enter a name and select an image.");
    }
  };

  const handleOpenDeleteDialog = (category) => {
    setCategoryToDelete(category);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setCategoryToDelete(null);
  };

  const handleConfirmDelete = () => {
    setCategories(categories.filter((cat) => cat.id !== categoryToDelete.id));
    handleCloseDeleteDialog();
  };

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Categories
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenModal(null)}
        style={{ marginBottom: "20px" }}
      >
        Add New Category
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.id}</TableCell>
                <TableCell>
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    style={{ width: "100px" }}
                  />
                </TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleOpenModal(category)}
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleOpenDeleteDialog(category)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal for Adding/Editing Categories */}
      <Dialog open={isModalOpen} onClose={() => setModalOpen(false)}>
        <DialogTitle>
          {isEditMode ? "Edit Category" : "Add New Category"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Category Name"
            fullWidth
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ marginTop: "10px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveCategory} color="primary">
            {isEditMode ? "Save Changes" : "Add Category"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete the category "{categoryToDelete?.name}
          "?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Categories;
