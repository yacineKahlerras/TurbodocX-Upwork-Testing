import React from "react";
import { Box, Button, Grid, TextField, Typography, Paper } from "@mui/material";
import { Formik } from "formik";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.mjs`;

const validate = (values) => {
  const errors = {};
  if (!values.deliverableName) errors.deliverableName = "Required";
  if (!values.activitiesList) errors.activitiesList = "Required";

  const price = parseFloat(values.price);
  if (isNaN(price) || price < 0) errors.price = "Must be a valid number";
  else if (price > 0 && price < 20000)
    errors.price = "Must be greater than 20,000 or zero";

  if (!values.shortTermNextSteps) errors.shortTermNextSteps = "Required";
  return errors;
};

const formFields = [
  {
    name: "deliverableName",
    label: "Deliverable Name",
    type: "text",
    placeholder: "e.g. Monthly SEO Report",
  },
  {
    name: "activitiesList",
    label: "Activities List",
    type: "text",
    placeholder: "e.g. Keyword research, blog writing...",
  },
  {
    name: "price",
    label: "Price",
    type: "number",
    placeholder: "e.g. 25000",
  },
  {
    name: "shortTermNextSteps",
    label: "Short Term Next Steps",
    type: "text",
    placeholder: "e.g. Schedule kickoff call",
  },
];

export default function DeliverableForm() {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        width: "min(100%,1440px)",
        mx: "auto",
        px: "1.5rem",
        pt: 2,
        pb: 2.3,
      }}
    >
      {/* Top Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: 5,
          pb: 3,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <img src="/logo.svg" alt="Logo" />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button
            sx={{
              color: "black",
              textTransform: "none",
              textDecoration: "none",
            }}
            variant="text"
          >
            Create Deliverable
          </Button>
          <Button
            sx={{
              color: "black",
              textTransform: "none",
              textDecoration: "none",
            }}
            variant="text"
          >
            Need Help?
          </Button>
        </Box>
      </Box>

      <Grid sx={{ display: "flex", alignItems: "start", gap: 4, mx: "auto" }}>
        {/* Left Form Side */}
        <Grid sx={{ minWidth: "600px" }}>
          <Typography variant="h6" mb={1}>
            Fill in deliverable variables
          </Typography>
          <Typography variant="body2" color="gray" mb={3}>
            Further instructions in one line
          </Typography>

          <Formik
            initialValues={{
              deliverableName: "",
              activitiesList: "",
              price: "",
              shortTermNextSteps: "",
            }}
            validate={validate}
            onSubmit={(values) => {
              console.log(values);
              alert("Generated!");
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  spacing={2}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  {formFields.map(({ name, label, type, placeholder }) => (
                    <Grid item xs={12} key={name}>
                      <Typography variant="subtitle2" mb={0.5}>
                        {label}
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        name={name}
                        type={type}
                        value={values[name]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched[name] && Boolean(errors[name])}
                        helperText={touched[name] && errors[name]}
                        sx={{ py: 0.5 }}
                        placeholder={placeholder}
                      />
                    </Grid>
                  ))}
                </Grid>
              </form>
            )}
          </Formik>
        </Grid>

        {/* Right Preview Side */}
        <Paper
          sx={{
            p: 2,
            textAlign: "center",
            background: "#f5f5f5",
            borderRadius: "1rem",
            boxShadow: "none",
            px: 3,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, fontWeight: 500, color: "#bbbbbb" }}
          >
            Preview
          </Typography>
          <Box>
            <Document file="/resume.pdf">
              <Page
                width={400}
                pageNumber={1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </Box>
        </Paper>
      </Grid>

      <Grid
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Button
          sx={{
            color: "black",
            textTransform: "none",
            textDecoration: "none",
          }}
          variant="text"
        >
          Back
        </Button>
        <Button
          sx={{
            textTransform: "none",
            textDecoration: "none",
            backgroundColor: "#2B579A",
            py: "0.5rem",
            boxShadow: "none",
          }}
          variant="contained"
        >
          Generate
        </Button>
      </Grid>
    </Grid>
  );
}
