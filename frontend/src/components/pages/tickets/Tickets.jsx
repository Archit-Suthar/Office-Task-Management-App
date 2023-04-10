import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { fetchAllTickets } from "../../../redux/ticket/ticketThunks";

const TicketList = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(fetchAllTickets());
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="ticket table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Priority</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Requester</TableCell>
            <TableCell align="left">Assignee</TableCell>
            <TableCell align="left">Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket._id}>
              <TableCell component="th" scope="row">
                {ticket._id}
              </TableCell>
              <TableCell align="left">{ticket.ticket_title}</TableCell>
              <TableCell align="left">{ticket.ticket_desc}</TableCell>
              <TableCell align="left">{ticket.ticket_type}</TableCell>
              <TableCell align="left">{ticket.ticket_priority}</TableCell>
              <TableCell align="left">{ticket.ticket_status}</TableCell>
              <TableCell align="left">{ticket.ticket_requester}</TableCell>
              <TableCell align="left">
                {ticket.ticket_assigned_to || "-"}
              </TableCell>
              <TableCell align="left">
                {new Date(ticket.createdAt).toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TicketList;
