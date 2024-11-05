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
import UserFormModal from "../components/UserFormModal";

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phoneNumber: "123-456-7890",
      inCart: "Camera",
      wishlist: "Laptop",
      myListing: "Car",
      myRenting: "Bike",
      status: true, // Active by default
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phoneNumber: "098-765-4321",
      inCart: "",
      wishlist: "",
      myListing: "",
      myRenting: "",
      status: false, // Disabled by default
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);

  const handleOpenModal = (user = null, editMode = false, readOnly = false) => {
    setSelectedUser(user);
    setIsEditMode(editMode);
    setIsReadOnly(readOnly);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedUser(null);
    setIsEditMode(false);
    setIsReadOnly(false);
  };

  const handleSaveUser = (updatedUser) => {
    if (isEditMode) {
      setUsers(
        users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      );
    } else {
      setUsers([...users, { ...updatedUser, id: users.length + 1 }]);
    }
  };

  const handleDeleteUser = (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        User Management
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenModal(null, false)}
        style={{ marginBottom: "20px" }}
      >
        Add New User
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
                <TableCell>{user.status ? "Active" : "Disabled"}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpenModal(user, false, true)}
                    style={{ marginRight: "10px" }}
                  >
                    View
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleOpenModal(user, true)}
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* User Form Modal */}
      <UserFormModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        onSave={handleSaveUser}
        userData={selectedUser}
        isEditMode={isEditMode}
        readOnly={isReadOnly}
      />
    </div>
  );
};

export default UserManagement;
