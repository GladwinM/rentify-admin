import React from "react";
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

const RentalManagement = () => {
  // Sample rental data
  const rentals = [
    { id: 1, product: "Camera", renter: "John Doe", status: "In Progress" },
    { id: 2, product: "Bicycle", renter: "Jane Smith", status: "Completed" },
  ];

  // Function to mark rental as resolved
  const handleResolveRental = (rentalId) => {
    alert(`Rental with ID ${rentalId} has been resolved (simulation).`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Rental Management
      </Typography>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Renter</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rentals.map((rental) => (
              <TableRow key={rental.id}>
                <TableCell>{rental.id}</TableCell>
                <TableCell>{rental.product}</TableCell>
                <TableCell>{rental.renter}</TableCell>
                <TableCell>{rental.status}</TableCell>
                <TableCell>
                  {rental.status === "In Progress" ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleResolveRental(rental.id)}
                    >
                      Mark as Resolved
                    </Button>
                  ) : (
                    <Typography variant="body2">Completed</Typography>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RentalManagement;
