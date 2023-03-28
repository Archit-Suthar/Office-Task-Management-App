import {
  Box,
  Container,
  FormLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { Field, Form, Formik } from "formik";
import CustomButton from "../../atoms/custombutton/CustomButton";
import React from "react";
import { TicketCreateSchema } from "./TicketSchema";

const NewTicket = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Container>
      <Formik
        initialValues={{
          ticket_title: "",
          ticket_desc: "",
          ticket_type: "",
          ticket_priority: "Low",
        }}
        onSubmit={handleSubmit}
        validationSchema={TicketCreateSchema}
      >
        {({ errors, isValid, touched, dirty, values }) => (
          <Box
            sx={{
              my: 1,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Create New Ticket
            </Typography>
            <Form>
              <Field
                name="ticket_title"
                type="name"
                label="Ticket Title"
                as={TextField}
                margin="normal"
                fullWidth
                error={
                  Boolean(errors.ticket_title) && Boolean(touched.ticket_title)
                }
                helperText={
                  Boolean(touched.ticket_title) && errors.ticket_title
                }
              />
              <Field
                name="ticket_desc"
                type="name"
                label="Ticket Description (tip: Good description can help others to understand the ticket)"
                as={TextField}
                multiline
                rows={3}
                margin="normal"
                fullWidth
                error={
                  Boolean(errors.ticket_desc) && Boolean(touched.ticket_desc)
                }
                helperText={Boolean(touched.ticket_desc) && errors.ticket_desc}
              />
              <Field
                name="ticket_type"
                type="name"
                label="Type or Category e.g Hardware issue"
                as={TextField}
                margin="normal"
                fullWidth
                error={
                  Boolean(errors.ticket_type) && Boolean(touched.ticket_type)
                }
                helperText={Boolean(touched.ticket_type) && errors.ticket_type}
              />
              <Box mt={1}>
                <FormLabel>Priority</FormLabel>
                <Field
                  name="ticket_priority"
                  value={values.ticket_priority}
                  displayEmpty
                  as={Select}
                  fullWidth
                  style={{ width: "40%", margin: "1rem 1rem" }}
                >
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Field>
              </Box>
              {/* File upload attachment field comes here */}

              <CustomButton text="Create Ticket" type="submit" />
            </Form>

            {/* <Copyright sx={{ mt: 5 }} /> */}
          </Box>
        )}
      </Formik>
    </Container>
  );
};

export default NewTicket;
