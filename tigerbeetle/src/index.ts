import { exec } from 'child_process';

// Define a transaction interface
interface Transaction {
  amount: number;
  instant: boolean;
}

// Simulated transaction queue
let transactionQueue: Transaction[] = [];

// Function to add transactions to the queue
const addTransactionToQueue = (amount: number, instant: boolean) => {
  const transaction: Transaction = { amount, instant };
  transactionQueue.push(transaction);
  console.log(`Transaction added to queue. Instant: ${instant}, Amount: ${amount}`);
};

// Function to process the transaction queue
const processTransactionQueue = () => {
  console.log("Processing transaction queue...");

  // Sort the queue: prioritize instant payments
  transactionQueue.sort((a, b) => Number(b.instant) - Number(a.instant));

  // Process each transaction in the sorted queue
  for (const transaction of transactionQueue) {
    processTransaction(transaction.amount, transaction.instant);
  }

  // Clear the transaction queue
  transactionQueue = [];
};

// Function to process individual transactions
const processTransaction = (amount: number, instant: boolean) => {
  const fee = instant ? 50 : 0;  // Instant transactions incur a 50 unit fee
  const finalAmount = amount - fee;

  const command = `echo "create_transfers id=1 debit_account_id=1 credit_account_id=2 amount=${finalAmount * 100} ledger=700 code=10;" | ./tigerbeetle repl --cluster=0 --addresses=3000`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error processing transaction: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Standard Error: ${stderr}`);
      return;
    }
    console.log(`Transaction processed successfully! Instant: ${instant}, Amount after fee: ${finalAmount}. Output: ${stdout}`);
  });
};

// Simulate adding transactions to the queue
addTransactionToQueue(500, false);  // Standard transaction
addTransactionToQueue(300, true);   // Instant transaction
addTransactionToQueue(200, false);  // Standard transaction

// Process the transaction queue (with priority for instant payments)
processTransactionQueue();