import { Request, Response } from "express";
import { createAuthenticatedClient, Grant } from "@interledger/open-payments";
import path from 'path';
import fs from 'fs'

export const handleRedirect = async (req: Request, res: Response) => {
    const keyPath  = path.join(__dirname, '../../private.key');

  const client = await createAuthenticatedClient({
    walletAddressUrl: "https://ilp.interledger-test.dev/kwiksend",
    privateKey: keyPath,
    keyId: "ed32ca24-bb4a-480d-8eb9-1b0346202432",
  });

  let jsonData;

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file', err);
    return;
  }
  try {
    jsonData = JSON.parse(data);
    console.log(jsonData);
  } catch (error) {
    console.error('Error parsing JSON', error);
  }
});

  const outgoingPayment = await client.outgoingPayment.create(
    {
      url: new URL("https://ilp.interledger-test.dev/a2ed2ca1").origin,
      accessToken: jsonData?.outgoingPaymentGrant,
    },
    {
      walletAddress: WALLET_ADDRESS,
      quoteId: QUOTE_URL,
    },
  );

  res.json({ message: "Hello from the example route!" });
};
