import React from "react";
import { Typography, Card, CardContent, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import StatsCard from "../components/StatsCard";

const Dashboard = () => {
  const totalUsers = 120;
  const totalProducts = 45;
  const totalRentals = 78;

  return (
    <div style={{ padding: "20px" }}>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            Rentify Admin Dashboard
          </Typography>
          <Typography variant="body1">
            Welcome to the Rentify Admin Dashboard. Here you can manage users,
            products, and rentals.
          </Typography>
        </CardContent>
      </Card>

      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        <Grid item xs={12} sm={4}>
          <StatsCard title="Total Users" value={totalUsers} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatsCard title="Total Products" value={totalProducts} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatsCard title="Total Rentals" value={totalRentals} />
        </Grid>
      </Grid>

      <div style={{ marginTop: "20px" }}>
        <Link
          to="/users"
          style={{ textDecoration: "none", marginRight: "10px" }}
        >
          <Button variant="contained" color="primary">
            Manage Users
          </Button>
        </Link>
        <Link
          to="/products"
          style={{ textDecoration: "none", marginRight: "10px" }}
        >
          <Button variant="contained" color="primary">
            Manage Products
          </Button>
        </Link>
        <Link to="/rentals" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Manage Rentals
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
