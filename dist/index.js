"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
// Simulated transaction queue
var transactionQueue = [];
// Function to add transactions to the queue
var addTransactionToQueue = function (amount, instant) {
    var transaction = { amount: amount, instant: instant };
    transactionQueue.push(transaction);
    console.log("Transaction added to queue. Instant: ".concat(instant, ", Amount: ").concat(amount));
};
// Function to process the transaction queue
var processTransactionQueue = function () {
    console.log("Processing transaction queue...");
    // Sort the queue: prioritize instant payments
    transactionQueue.sort(function (a, b) { return Number(b.instant) - Number(a.instant); });
    // Process each transaction in the sorted queue
    for (var _i = 0, transactionQueue_1 = transactionQueue; _i < transactionQueue_1.length; _i++) {
        var transaction = transactionQueue_1[_i];
        processTransaction(transaction.amount, transaction.instant);
    }
    // Clear the transaction queue
    transactionQueue = [];
};
// Function to process individual transactions
var processTransaction = function (amount, instant) {
    var fee = instant ? 50 : 0; // Instant transactions incur a 50 unit fee
    var finalAmount = amount - fee;
    var command = "echo \"create_transfers id=1 debit_account_id=1 credit_account_id=2 amount=".concat(finalAmount * 100, " ledger=700 code=10;\" | ./tigerbeetle repl --cluster=0 --addresses=3000");
    (0, child_process_1.exec)(command, function (error, stdout, stderr) {
        if (error) {
            console.error("Error processing transaction: ".concat(error.message));
            return;
        }
        if (stderr) {
            console.error("Standard Error: ".concat(stderr));
            return;
        }
        console.log("Transaction processed successfully! Instant: ".concat(instant, ", Amount after fee: ").concat(finalAmount, ". Output: ").concat(stdout));
    });
};
// Simulate adding transactions to the queue
addTransactionToQueue(500, false); // Standard transaction
addTransactionToQueue(300, true); // Instant transaction
addTransactionToQueue(200, false); // Standard transaction
// Process the transaction queue (with priority for instant payments)
processTransactionQueue();
