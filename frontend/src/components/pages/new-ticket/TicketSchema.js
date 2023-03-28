import * as Yup from "yup";

export const TicketCreateSchema = Yup.object().shape({
  ticket_title: Yup.string()
    .min(5, "Atleast 5 characters are required")
    .required("Please Enter Ticket Title"),
  ticket_desc: Yup.string()
    .min(30, "Atleast 30 characters long descritpion is required")
    .required("Please Enter Description for the Ticket"),
  ticket_type: Yup.string()
    .min(2, "Minimum 2 characters are required")
    .max(20, "Type cannot be longer than 20 characters")
    .required("Please Enter Ticket Type"),
});
