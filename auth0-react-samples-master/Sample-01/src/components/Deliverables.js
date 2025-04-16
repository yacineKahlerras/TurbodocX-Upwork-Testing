import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { Formik } from "formik";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

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

export default function DeliverableForm() {
  return (
    <Container sx={{ mt: 2 }}>
      {/* Top Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          mb: 4,
          gap: 5,
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
          <Button variant="text">Create Deliverable</Button>
          <Button variant="text">Need Help?</Button>
        </Box>
      </Box>

      <Grid sx={{ display: "flex", alignItems: "start", gap: 4 }}>
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
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="deliverableName"
                      label="Deliverable Name"
                      value={values.deliverableName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.deliverableName &&
                        Boolean(errors.deliverableName)
                      }
                      helperText={
                        touched.deliverableName && errors.deliverableName
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="activitiesList"
                      label="Activities List"
                      value={values.activitiesList}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.activitiesList && Boolean(errors.activitiesList)
                      }
                      helperText={
                        touched.activitiesList && errors.activitiesList
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="price"
                      label="Price"
                      type="number"
                      value={values.price}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.price && Boolean(errors.price)}
                      helperText={touched.price && errors.price}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="shortTermNextSteps"
                      label="Short Term Next Steps"
                      value={values.shortTermNextSteps}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.shortTermNextSteps &&
                        Boolean(errors.shortTermNextSteps)
                      }
                      helperText={
                        touched.shortTermNextSteps && errors.shortTermNextSteps
                      }
                    />
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Grid>

        {/* Right Preview Side */}
        <Grid>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1" mb={2}>
              Preview
            </Typography>
            <Box
              sx={{
                border: "1px solid #ddd",
                height: "100%",
                overflow: "auto",
              }}
            >
              <Document file="/resume.pdf">
                <Page pageNumber={1} />
              </Document>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Grid
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Button variant="outlined">Back</Button>
        <Button type="submit" variant="contained">
          Generate
        </Button>
      </Grid>
    </Container>
  );
}
