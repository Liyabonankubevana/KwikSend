# KwikSend

KwikSend is a cutting-edge remittance platform designed to provide fast, secure, and affordable cross-border payments. Leveraging Web3 technology, Interledger's API, and TigerBeetle for high-performance transactions, KwikSend enables instant money transfers with transparent fees and real-time tracking.

---

## Features

- **Instant Cross-Border Transfers**: Near-instant transactions across borders, reducing transfer times from days to seconds.
- **Transparent Fees**: Clear, upfront breakdown of all fees and exchange rates before each transaction.
- **Real-Time Tracking**: Track transactions from initiation to completion with real-time status updates.
- **Real-Time Currency Covertion**: Automatically converts currencies at accurate, real-time rates, ensuring fair value for both the sender and the recipient. 
- **Fee-Free Small Transfers**: A zero-free model for mico-transfers, making the platform accessibleeven to lower-income workers sending smaller amounts. 
- **Offline Cash-Out**: Access funds even in unbanked or rural areas through local agents.

---

## Tech Stack

- **Web3**: Single sign-on for secure and decentralized login.
- **Interledger**: Cross-border payment routing and settlement.
- **TigerBeetle**: High-performance database for financial transactions.
- **TypeScript**: For building scalable and maintainable code.
- **AWS**: Cloud infrastructure and storage with S3.
- **Figma**: For designing platform UI/UX. 
- **GitHub Actions**: CI/CD automation for testing and deployment.

---

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Deployment](#deployment)


---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Liyabonankubevana/KwikSend.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd KwikSend
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**: Create a `.env` file in the root directory with the following variables:
   ```bash
   WEB3_PROVIDER=<your-web3-provider-url>
   AWS_ACCESS_KEY_ID=<your-aws-access-key>
   AWS_SECRET_ACCESS_KEY=<your-aws-secret-key>
   INTERLEDGER_API_KEY=<your-interledger-api-key>
   ```

---

## Usage

1. **Run the application locally**:
   ```bash
   npm start
   ```

   This will start the application on `http://localhost:3000`.

2. **Web3 Single Sign-On**: To test the Web3 login, connect your wallet (e.g., MetaMask) via the browser extension.

3. **Send a Payment**:
   - Go to the "Send Money" page, enter the amount, currency, and recipient details, and click **Send**.
   - The platform will calculate the fees and conversion rates in real-time.
   - You can track the transaction status on the "Transactions" page.

---

## Running Tests

Run the automated tests to ensure the codebase is functioning properly.

1. **Run Unit Tests**:
   ```bash
   npm test
   ```

2. **End-to-End Tests** (if applicable):
   Add scripts to perform e2e tests for full flow coverage.

---

## Deployment

Follow these steps to deploy **KwikSend** to AWS (or your preferred cloud provider).

1. **Ensure you have an AWS account** and have configured your credentials locally.
2. **Create a `deploy.sh` script** to handle the deployment of your app to an EC2 instance or other hosting platform.
3. **Set up the GitHub Actions workflow** to automatically deploy on every push to the `main` branch.

---

## Contributing

We welcome contributions to KwikSend! Here's how you can contribute:

1. **Fork the repository**.
2. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. **Make your changes** and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. **Push to your branch**:
   ```bash
   git push origin feature-name
   ```
5. **Open a pull request** to the `dev` branch and describe your changes.

---

## License

KwikSend is licensed under the [MIT License](LICENSE).

---
