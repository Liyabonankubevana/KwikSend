import { TextField } from "@mui/material";
import { useState } from "react";
import Toast from "../Toast";

export default function SendSMS() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSendSMS = async () => {
    try {
      const response = await fetch("/send-sms", {
        method: "POST",
        body: JSON.stringify({ to: phone, message: message }), // Properly stringify the body
      });
  
      // Check if the response status is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      return JSON.stringify(response);
    } catch (error) {
      // Handle any errors that occur during the fetch process
      console.error("Error sending SMS:", error);
      return (<Toast message="An error occurred while sending the SMS." />);
    }
  };

  return (
    <div>
      <TextField
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
     <Toast message={message} buttonMessage="Send SMS" clickLogic={handleSendSMS} />
    </div>
  );
}
