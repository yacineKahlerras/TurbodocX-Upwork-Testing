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
  Grid,
} from "@mui/material";
import {
  EllipsisVerticalIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import getAllDeliverables from "../utils/getAllDeliverables";
import PageLoading from "./PageLoading";

export default function Dashboard() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const {
    data: deliverablesData,
    isLoading: isLoadingDeliverables,
    error: deliverablesError,
  } = useQuery({
    queryKey: ["deliverables"],
    queryFn: () => getAllDeliverables(getAccessTokenSilently),
    enabled: !!isAuthenticated,
  });

  if (isLoadingDeliverables) return <PageLoading />;
  if (deliverablesError) return <h1>oops...error happened</h1>;

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: 350,
          bgcolor: "#fafafa",
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingTop: "2rem",
        }}
      >
        <Box
          sx={{
            color: "#2B579A",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 4,
          }}
        >
          <img src="/logo.svg" alt="Logo" />
          {/* Logo placeholder */}
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textSize: "2rem",
              fontWeight: 500,
              paddingLeft: "1.5rem",
            }}
          >
            <RectangleGroupIcon style={{ width: "1.5rem" }} />
            Templates
          </Typography>
        </Box>

        {/* Profile */}
        <Grid
          sx={{
            mb: 2,
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 2,
            paddingLeft: "1rem",
          }}
        >
          <Avatar
            alt="Nicolas Fry"
            src="https://s3-alpha-sig.figma.com/img/32d6/693f/2597806fe5ebd857dc3e5d9a1b9e1186?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=evddapTLn5atFE~Hyj8MsHgLsRb9iiu1mpqb3a2dCURbx4bQmnZ85EKCZBiiRnfWYNfGHjcd4KJkL9ZkNhdaFDAsEc9IpY14tamztpk0UDw6ZAX~NsGwsa3fBZpX8w-aijvI4XCx~Nd7szJ1DY6k57t6Ld~mzsyqKQdGPWPFrt1mRF6iE4seiOcvIW9v-otNe87awcNIs-vo3yONBR0Y-YUprwyO0TSS5gR20oQ7SlVNTzjQoLAHWCQhFNCPc~y6HVEW3FxcxDLmwDPUBt93rmmdkhskW8XQ0jOMV09NzTftkLbrQW3LxN1hb~efRrT2lZG1ViDaq7oaHsjhHF5T~Q__"
          />
          <Box
            sx={{
              marginRight: "auto",
            }}
          >
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
              marginLeft: "auto",
            }}
          >
            <EllipsisVerticalIcon style={{ width: "2rem" }} />
          </IconButton>
        </Grid>
      </Box>

      {/* Main content */}
      <Container
        maxWidth={false}
        sx={{ flexGrow: 1, p: 4, paddingTop: "2rem" }}
      >
        {/* Search Bar */}
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "none",
            px: 1,
            maxWidth: "350px",
            py: 0.5,
            marginBottom: "1rem",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search files" }}
          />
        </Paper>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            border: "1px solid #ccc",
            boxShadow: "none",
            borderRadius: "8px",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Created</TableCell>
                <TableCell>By</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {deliverablesData.map((deliv, index) => (
                <TableRow
                  component={Link}
                  to={`/deliverables/${deliv.id}`}
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
                        src={deliv.type === "pptx" ? "/ppt.svg" : "/word.svg"}
                      >
                        {deliv.type === "pptx" ? "P" : "W"}
                      </Avatar>
                      {deliv.deliverableName}
                    </Stack>
                  </TableCell>
                  <TableCell>
                    {new Date(deliv.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </TableCell>
                  <TableCell>
                    <Avatar
                      sx={{ width: 24, height: 24, fontSize: 14 }}
                      src={deliv.user.profilePicture}
                    >
                      {deliv.user.name}
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
