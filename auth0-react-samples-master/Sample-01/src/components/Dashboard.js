import React from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
} from "@mui/material";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

const files = [
  {
    name: "Deliverables Sample",
    type: "docx",
    date: "April 17, 2023",
    user: "A",
  },
  { name: "Accounting", type: "xlsx", date: "April 17, 2023", user: "B" },
  {
    name: "Minutes of meeting",
    type: "docx",
    date: "April 17, 2023",
    user: "C",
  },
  { name: "Kick-off.pptx", type: "pptx", date: "April 17, 2023", user: "D" },
  { name: "Saled Deck.pptx", type: "pptx", date: "April 17, 2023", user: "E" },
  { name: "HR Report", type: "docx", date: "April 17, 2023", user: "F" },
];

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: 240,
          bgcolor: "#fafafa",
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <img src="/logo.svg" alt="Logo" />
          {/* Logo placeholder */}
          <Typography variant="h6" sx={{ mb: 4 }}>
            Templates
          </Typography>
        </Box>

        {/* Profile */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Avatar alt="Nicolas Fry" src="/avatar.jpg" />
          <Box>
            <Typography fontWeight={600}>Nicolas Fry</Typography>
            <Typography variant="body2" color="text.secondary">
              Admin
            </Typography>
          </Box>
          <IconButton
            sx={{
              outline: "none",
              "&:focus": {
                outline: "none",
              },
              "&:focus-visible": {
                outline: "none",
              },
              border: "none",
              padding: 0,
            }}
          >
            <EllipsisVerticalIcon style={{ width: "2rem" }} />
          </IconButton>
        </Stack>
      </Box>

      {/* Main content */}
      <Container maxWidth={false} sx={{ flexGrow: 1, p: 4 }}>
        {/* Search Bar */}
        <Paper
          component="form"
          sx={{
            mb: 3,
            p: "4px 8px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search files" }}
          />
        </Paper>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Created</TableCell>
                <TableCell>By</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {files.map((file, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:hover": { backgroundColor: "#f9f9f9" },
                    cursor: "pointer",
                  }}
                >
                  <TableCell>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar
                        variant="square"
                        sx={{ width: 24, height: 24, fontSize: 14 }}
                      >
                        {file.type === "pptx" ? "P" : "W"}
                      </Avatar>
                      {file.name}
                    </Stack>
                  </TableCell>
                  <TableCell>{file.date}</TableCell>
                  <TableCell>
                    <Avatar sx={{ width: 24, height: 24, fontSize: 14 }}>
                      {file.user}
                    </Avatar>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
