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

const files = [
  {
    id: 1,
    name: "Deliverables Sample",
    type: "docx",
    date: "April 17, 2023",
    user: "A",
    pfp: "https://s3-alpha-sig.figma.com/img/295e/3945/83cd6f5739dcbd92dd0b60a9813dcac3?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fKThoAfRRX7aeIOUuDtyKUFrjY~ZrUqNH329arwIogc6VbinZJ8NL1QNP0GbXb2m1fF7ub7QDlZ31GaT0TEbaYdr36epogWz9ghv87STGg66MgEiu86zUbnpPeIzg-mOjgdDNuEmCza9TdH-HnGR5He6DOaxy1t5j7JZGNtEwBPfFalvyhGlYjsNaaO2MbdR2SHOT4e9X0yd46gUNwVjNr~oHzsqYhyg7AsIyJgdskM4LJbw07SnxJIs0XsrHCnH8UyVKybxjI5rf9jM1wGvTUV7ZeKJLWu~FgewdX2PgdgZ87fMHMaCQFwYic~3wvIGwxb5O1igL1SwyJ0bZHFzng__",
  },
  {
    id: 2,
    name: "Accounting",
    type: "xlsx",
    date: "January 06, 2023",
    user: "B",
    pfp: "https://s3-alpha-sig.figma.com/img/28f3/29d8/d569fce0f8530405d75202c568cef0d4?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DiQZiFJFbzLy-uV7XTyHswvZOz-Lk4UZF7uf~NMquy9U3VSTASsR0cxQTl6jaVBN~cQCbU6mGfIHci6x4mnZn2TqSxKCVbo9a8l4R~Y8~nlLCWXwPsgjSshtACL1eKNunkIRjEojeOKFWLQ~4sqrFVb7IWNODV74W1fmyeQqhA4U9bcS14Bbp1jSNODQK5gc5nOHUT2K4oVdOxXAIAT~tT~b5SbDgGE~UQ4ZRPR-GpTcWwGkoUmOygiRX3ApDxyru7NHU8EMf1k0GRdrpZfFQmzP1VhRSkZCQJP6aKmPhjszgdobdWv2y6wiVsR4GXLQEREtbUDBoxAeuZ-Z6zlhOQ__",
  },
  {
    id: 3,
    name: "Minutes of meeting",
    type: "docx",
    date: "December 26, 2022",
    user: "C",
    pfp: "https://s3-alpha-sig.figma.com/img/6e67/5606/e251d71c3423db0397a03934f2d1c3ee?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UDnDEA5QA9Zox6dAGIOFBMCkD~bAKJwa-wIdHsaNpjjJYhBKCCOGxSO~0PnRyJBkOdfJo9zF1g9UHxA9bKEi0I2Lp-cJLgrG8eBrEWhDfOAMBdPSk5MRA-eC7ekxqFLDEbhW8t2bESTnSOcaCFytLaPiyf6um7qMXuqPtP5EhD8teS9RlumR2XITHVlktNxyvTQ-VTogkQfyBFs68HjCORVwsholzWX3y3ZgVR~Hb4OIsQ3QKNuOuiihdKKG4pTXvp914ENWdR6hul256KaIF87tSu3nkrFPXhmFRhgEX38lVFaSmuV8oW2NDCY11dDrkkgDKqsNkppZVfVy3Q8S3w__",
  },
  {
    id: 4,
    name: "Kick-off.pptx",
    type: "pptx",
    date: "November 10, 2022",
    user: "D",
    pfp: "https://s3-alpha-sig.figma.com/img/21ed/2c2f/839fff5201e8d3cecd73dd593f1f8e91?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FZkaIIT6REOY3crHxZm9DppXH8ZIWRuItdRw9UHm8O8kQuO9sBebtSEfqQTzur83G4hA46z5DOnH2zGktE2Dp-FcS4BQ3MwczWVwyj66xQpQ5n0bKU5WFC3aw-PrPaxJvB-f~uMbayUzmTFDCNFGLur6efuc1Ed82S3HXEAaFL2BKG9MWSyYQRuk3Cg9jiLuhggoGeW1TlDJ3sbFdBo2JM786KK7cz9f4hm5ue8J4COukBekmM7aNkSgMkPlGwgleuA7RQauHwzWUC1gZAKwcFcQtJ2hTVnr7tzOIMvjdKxWaNqKYY3xjSjW87LMRRwZnva4oqgtDVPiFl4bjuWe5A__",
  },
  {
    id: 5,
    name: "Saled Deck.pptx",
    type: "pptx",
    date: "September 04, 2022",
    user: "E",
    pfp: "https://s3-alpha-sig.figma.com/img/da64/f02c/97a514e9e8c98d647f06c12400f1f0bd?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QbwOxpgRZO~DUBrHpUTt2qvJ2Xfc4AXBie6l3Nlyf-88RcPOY~RrjygzoMg9240bac3XhSNWIypEVme~usGkzZH86MyW7dyDeuH23SXgSlKYeugekyw3t~yOuS2D5tCJjKKb6-x8pGtnIm-UsyLU8wyoQH0Dqa8ucMcw69xzi-IIjjvXyo2xsd64l1JcaMl28Swtf5Dqpo6An~CioAUwjoAeYW2cNrHiJGRHTTAyVm2AxpTFfgyET941Q42Mqep6JMNTeL1FR9F6TfGX54Qwp5KHYVGFkmrByA3AfrdOXT482lSWPNVFDF6rcDcVLBDbVZyzrQvTSKwShDJxKXUFfQ__",
  },
  {
    id: 6,
    name: "HR Report",
    type: "docx",
    date: "September 30, 2022",
    user: "F",
    pfp: "https://s3-alpha-sig.figma.com/img/add5/8c1a...",
  },
];

export default function Dashboard() {
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
              {files.map((file, index) => (
                <TableRow
                  component={Link}
                  to={`/deliverables/${file.id}`}
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
                        src={file.type === "pptx" ? "/ppt.svg" : "/word.svg"}
                      >
                        {file.type === "pptx" ? "P" : "W"}
                      </Avatar>
                      {file.name}
                    </Stack>
                  </TableCell>
                  <TableCell>{file.date}</TableCell>
                  <TableCell>
                    <Avatar
                      sx={{ width: 24, height: 24, fontSize: 14 }}
                      src={file.pfp}
                    >
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
