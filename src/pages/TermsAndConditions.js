import React, { useState } from "react";
import { Typography, TextField, Button, Box, Paper } from "@mui/material";

const TermsAndConditions = () => {
  const [terms, setTerms] = useState("Enter Terms and Conditions...");
  const [privacy, setPrivacy] = useState("Enter Privacy Policy...");
  const [refund, setRefund] = useState("Enter Refund Policy...");

  const handleSave = () => {
    // This is where you would integrate with backend services to save the data
    alert("Policies saved successfully.");
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Terms and Conditions
      </Typography>

      <Paper sx={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Terms and Conditions
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          value={terms}
          onChange={(e) => setTerms(e.target.value)}
          sx={{ marginBottom: "20px" }}
        />
      </Paper>

      <Paper sx={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Privacy Policy
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          value={privacy}
          onChange={(e) => setPrivacy(e.target.value)}
          sx={{ marginBottom: "20px" }}
        />
      </Paper>

      <Paper sx={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Refund Policy
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          value={refund}
          onChange={(e) => setRefund(e.target.value)}
        />
      </Paper>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        sx={{ marginTop: "20px" }}
      >
        Save Changes
      </Button>
    </Box>
  );
};

export default TermsAndConditions;
