import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Toast from "./Toast";
import SendSMS from "./SMS/SendSMS";

export default function Main() {
  const [account, setAccount] = useState("");
  const [paymentPointer, setPaymentPointer] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [total, setTotal] = useState(0);

  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      account: account,
      paymentPointer: paymentPointer,
      email: email,
      phone: phone,
      country: country,
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      account,
      paymentPointer,
      email,
      phone,
      country,
    });
  };

  return (
    <div>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          color: "#fff",
          backgroundColor: "#F15A29",
          padding: "20px",
          borderRadius: "8px",
          borderColor: "gray",
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent={"center"}
          spacing={2}
        >
          <Grid item xs={12}>
            <Typography component="h1" variant="h5" sx={{ color: "#fff" }}>
              Send Money
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="p"
              variant="body1"
              sx={{ color: "#ffff", mt: 1 }}
            >
              Total Balance
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="h2"
              variant="h4"
              sx={{ color: "#fff", mb: 3 }}
            >
              {total.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>

        <Box component="form" onSubmit={handleSubmit}>
          <Typography variant="caption" sx={{ color: "#fff", mb: 1 }}>
            from
          </Typography>

          {/* Account Selector */}
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="account-label" sx={{ color: "#fff" }}>
              Select account
            </InputLabel>
            <Select
              {...register("account")}
              labelId="account-label"
              id="account"
              value={account}
              label="Select account"
              onChange={(e) => setAccount(e.target.value)}
              sx={{ color: "#fff", borderColor: "#db6eec" }}
            >
              <MenuItem value="">
                <em>Select account...</em>
              </MenuItem>
              <MenuItem value="account1">Account 1</MenuItem>
              <MenuItem value="account2">Account 2</MenuItem>
            </Select>
          </FormControl>

          {/* Payment Pointer Selector */}
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="payment-pointer-label" sx={{ color: "#fff" }}>
              Select payment pointer
            </InputLabel>
            <Select
              {...register("paymentPointer")}
              labelId="payment-pointer-label"
              id="payment-pointer"
              value={paymentPointer}
              label="Select payment pointer"
              onChange={(e) => setPaymentPointer(e.target.value)}
              sx={{ color: "#fff", borderColor: "#db6eec" }}
            >
              <MenuItem value="">
                <em>Select payment pointer...</em>
              </MenuItem>
              <MenuItem value="pointer1">Pointer 1</MenuItem>
              <MenuItem value="pointer2">Pointer 2</MenuItem>
            </Select>
          </FormControl>

          <Typography variant="caption" sx={{ color: "#fff", mb: 1 }}>
            to
          </Typography>

          {/* Amount + Send/Receive Toggle */}
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12}>
              {/* Email Address */}
              <TextField
                {...register("email")}
                fullWidth
                margin="normal"
                required
                id="Email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{ style: { color: "#fff" } }}
                sx={{ color: "#fff", borderColor: "#db6eec" }}
                error={!!errors?.email}
                helperText={!!errors?.email ? errors.email?.message : null}
              />
            </Grid>
            {/* Phone Number */}
            <Grid item xs={12}>
              <TextField
                {...register("phone")}
                fullWidth
                margin="normal"
                required
                id="Phone"
                label="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                InputLabelProps={{ style: { color: "#fff" } }}
                sx={{ color: "#fff", borderColor: "#db6eec" }}
                error={!!errors.phone}
                helperText={!!errors.phone ? errors.phone?.message : null}
              />

              {/* Country Name */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("country")}
                fullWidth
                margin="normal"
                required
                id="Country"
                label="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                InputLabelProps={{ style: { color: "#fff" } }}
                sx={{ color: "#fff", borderColor: "#db6eec" }}
                error={!!errors.country}
                helperText={!!errors.country ? errors.country?.message : null}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#fff", color: "#F15A29" }}
            onClick={() => handleSubmit}
          >Review Payment</Button>
        </Box>
      </Container>
    </div>
  );
}
