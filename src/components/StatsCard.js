import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const StatsCard = ({ title, value }) => {
  return (
    <Card style={{ minWidth: 150, margin: "10px" }}>
      <CardContent>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="h4" color="primary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
