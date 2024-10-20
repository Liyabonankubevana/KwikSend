import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProps {
  message?: string;
  buttonMessage?: string
  clickLogic?: any
}

export default function Toast({ message, buttonMessage, clickLogic }: ToastProps) {
  const notify = (customMessage?: string) =>
    toast(`${customMessage}` || "Payment Received!!!");

  return (
    <div>
      <ToastContainer />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: "#fff", color: "#F15A29" }}
        onClick={(e: any) => {
            notify(message)
            clickLogic(e.target.value);
        }}
      >
        {buttonMessage ? buttonMessage : 'Review Payment'}
      </Button>
    </div>
  );
}
