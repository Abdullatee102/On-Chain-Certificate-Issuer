# Frontend Web3 dApp: On-Chain Certificate Issuer

> **React + TypeScript + Vite + Tailwind CSS + Ethers.js v6 Interface for Soulbound ERC-721 Credentials**

This frontend provides a responsive Web3 user interface for issuing, managing, and publicly verifying on-chain educational certificates minted by the `CertificateIssuer` smart contract on Ethereum Sepolia.

---

## 🌐 Live Application & Contract Details

| Item | Details |
| :--- | :--- |
| **Live Web App** | [https://on-chain-certificate-issuer-1g7f.vercel.app/](https://on-chain-certificate-issuer-1g7f.vercel.app/) |
| **Contract Address (Sepolia)** | [`0xAB1479424D52c04d2037c91310b6Cbb122d75fEe`](https://sepolia.etherscan.io/address/0xab1479424d52c04d2037c91310b6cbb122d75fee#code) |
| **Contract Owner** | `0x97184EBAEB9FDCe449d5FbaF1311601005F8E811` |
| **Target Network** | Ethereum Sepolia Testnet (Chain ID: `11155111`) |
| **Fallback RPC Endpoint** | Alchemy Sepolia Gateway |

---

## 🎯 Key User Flows & System Roles

The application adapts based on the connected wallet state and user intentions:

### 1. Public Verifier / Employer (No Wallet Connection Required)
- **Zero-Friction Access**: Anyone can verify certificates without owning cryptocurrency, connecting a browser extension, or signing transactions.
- **Verification Methods**:
  1. Enter any positive integer Certificate ID into the search input.
  2. Open a direct verification URL: `https://on-chain-certificate-issuer-1g7f.vercel.app/?id=<certificateId>`.
- **Dynamic On-Chain Rendering**: Decodes the Base64 JSON and SVG artwork directly from `tokenURI()` and displays the verified certificate badge (`VALID` vs `REVOKED`), recipient identity, course title, issuing institution, and timestamp.

### 2. Authorized Institution / Issuer
- **Role Detection**: When an authorized address connects, the UI reveals the **Issuer Badge** and unlocks the Certificate Issuance Console.
- **Issuance Flow**:
  1. Input student recipient wallet address (`0x...`), student full name, course/program, and institution name.
  2. Submit the transaction to invoke `issueCertificate(...)`.
  3. Real-time transaction feedback tracks stages: *Prompting Wallet → Pending on Sepolia → Mined & Confirmed*.
  4. The newly minted Token ID is extracted directly from the mined receipt logs, rendering a confirmation card with one-click verification links.
- **Gasless For Student**: The issuing institution signs and pays the gas; the student receives the Soulbound NFT directly into their wallet.

### 3. Contract Owner / Admin Dashboard
- **Owner-Gated Interface**: Accessible to the deployer wallet (`0x97184EBAEB9FDCe449d5FbaF1311601005F8E811`).
- **Administrative Functions**:
  - **Authorize Issuer**: Grant certificate issuing authority to accredited institutions or university department wallets (`authorizeIssuer(address)`).
  - **Remove Issuer**: Revoke issuing permissions from any address (`removeIssuer(address)`).
  - **Query Issuer Status**: Read-only lookup to check whether any arbitrary wallet address currently holds issuing permissions.
  - **Revoke Certificate**: Owner-only authority to revoke invalid or fraudulent certificates (`revokeCertificate(tokenId)`), permanently marking them `REVOKED` on-chain.
- **Safety Modals**: Double-confirmation dialogs prevent accidental revocations or issuer removal.

---

## 🧩 Architecture & Component Breakdown

```text
frontend/src/
├── config/
│   ├── appConfig.ts             # Vercel URL & dynamic verification link builder
│   ├── contractConfig.ts        # Contract address & validation helper
│   └── networkConfig.ts         # Sepolia Chain ID (11155111), RPC, & explorer settings
├── contracts/
│   ├── CertificateIssuerABI.ts  # Full Soulbound ERC-721 ABI exported from Foundry compilation
│   └── types.ts                 # TypeScript types for Certificate, Wallet, and TxState
├── web3/
│   ├── provider.ts              # Injected EIP-1193 provider & fallback read-only JSON-RPC provider
│   ├── reads.ts                 # Contract read methods (verifyCertificate, tokenURI, ownerOf, etc.)
│   ├── writes.ts                # Contract write transactions (issue, revoke, authorize, remove)
│   ├── errors.ts                # Human-readable EVM, Soulbound, and User Rejection error parser
│   └── walletContext.tsx        # EIP-1193 wallet management, accountsChanged/chainChanged listeners
├── components/
│   ├── Navbar.tsx               # Responsive navigation header, contract banner & mobile drawer
│   ├── WalletButton.tsx         # Connect/disconnect button with network switch helper & error popovers
│   ├── CertificateResultCard.tsx# Certificate card displaying on-chain SVG graphic & verification link
│   ├── TransactionStatus.tsx    # Transaction lifecycle modal with direct Etherscan links
│   ├── ConfirmationModal.tsx    # Modal dialog for high-stakes administrative operations
│   ├── ErrorMessage.tsx         # User-friendly error alert box
│   ├── LoadingState.tsx         # Animated loading spinner with context messages
│   └── StatusBadge.tsx          # Dynamic badges for Valid, Revoked, Owner, and Issuer status
└── pages/
    ├── HomePage.tsx             # Interactive landing page and architectural summary
    ├── VerifyPage.tsx           # Public verification console with URL parameter auto-loading
    ├── IssuePage.tsx            # Certificate minting interface with event log receipt extraction
    └── AdminPage.tsx            # Multi-tab administration dashboard for governance and revocations
```

---

## 🎨 Responsive Design & Mobile Compatibility

The UI is built with Tailwind CSS and supports all screen resolutions:
- **Mobile Handsets (< 640px)**: Compact navbar, truncated contract headers, vertically stacked action buttons, and touch-optimized input forms.
- **Tablets (640px - 1024px)**: Responsive two-column layouts and auto-scrolling dashboard tabs.
- **Desktops (> 1024px)**: Full multi-pane dashboard and high-resolution on-chain SVG viewing container.

---

## ⚙️ Local Development Setup

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Configure Environment
Create a `.env.local` file inside `frontend/`:
```env
VITE_CONTRACT_ADDRESS=0xAB1479424D52c04d2037c91310b6Cbb122d75fEe
VITE_TARGET_CHAIN_ID=11155111
VITE_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/<YOUR_ALCHEMY_KEY>
VITE_BLOCK_EXPLORER_URL=https://sepolia.etherscan.io
VITE_APP_URL=https://on-chain-certificate-issuer-1g7f.vercel.app/
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```