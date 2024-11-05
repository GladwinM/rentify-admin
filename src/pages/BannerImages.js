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
  Select,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const BannerImages = () => {
  const [banners, setBanners] = useState([
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/100",
      type: "Home Page Banner",
      disabled: false,
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/100",
      type: "Offers",
      disabled: false,
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/100",
      type: "Server Down",
      disabled: true,
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [type, setType] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleAddBanner = () => {
    if (image && type) {
      const newBanner = {
        id: banners.length + 1,
        imageUrl: URL.createObjectURL(image),
        type,
        disabled: false,
      };
      setBanners([...banners, newBanner]);
      setImage(null);
      setType("");
      setModalOpen(false);
    } else {
      alert("Please select an image and type");
    }
  };

  const handleDeleteBanner = (id) => {
    setBanners(banners.filter((banner) => banner.id !== id));
  };

  const handleDisableBanner = (id) => {
    setBanners(
      banners.map((banner) =>
        banner.id === id ? { ...banner, disabled: !banner.disabled } : banner
      )
    );
  };

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Banner Images
      </Typography>

      {/* Add New Banner Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => setModalOpen(true)}
        style={{ marginBottom: "20px" }}
      >
        Add New Banner
      </Button>

      {/* Modal for Adding New Banner */}
      <Dialog open={isModalOpen} onClose={() => setModalOpen(false)}>
        <DialogTitle>Add New Banner</DialogTitle>
        <DialogContent>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ margin: "10px 0" }}
          />
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            displayEmpty
            style={{ width: "200px", marginTop: "10px" }}
          >
            <MenuItem value="" disabled>
              Select Type
            </MenuItem>
            <MenuItem value="Home Page Banner">Home Page Banner</MenuItem>
            <MenuItem value="Offers">Offers</MenuItem>
            <MenuItem value="Server Down">Server Down</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddBanner} color="primary">
            Add Banner
          </Button>
        </DialogActions>
      </Dialog>

      {/* Table of Banner Images */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {banners.map((banner) => (
              <TableRow key={banner.id}>
                <TableCell>{banner.id}</TableCell>
                <TableCell>
                  <img
                    src={banner.imageUrl}
                    alt={banner.type}
                    style={{ width: "100px" }}
                  />
                </TableCell>
                <TableCell>{banner.type}</TableCell>
                <TableCell>{banner.disabled ? "Disabled" : "Active"}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDisableBanner(banner.id)}
                    style={{ marginRight: "10px" }}
                  >
                    {banner.disabled ? "Enable" : "Disable"}
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDeleteBanner(banner.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BannerImages;
