# TechCrush Web3 Blockchain Capstone: On-Chain Certificate Issuer

> **Decentralized, Soulbound ERC-721 Academic Credential Issuance & Verification Platform**

An immutable credentialing protocol and Web3 dApp engineered with Solidity on the Ethereum Sepolia Testnet. The platform mints tamper-proof, non-transferable (Soulbound) ERC-721 certificate tokens directly to student wallets while generating visual certificate vector graphics entirely on-chain through smart-contract data URIs.

---

## 🚀 Live Deployments & Network Details

| Resource | Value / Link |
| :--- | :--- |
| **Live Web3 Application (Vercel)** | [https://on-chain-certificate-issuer-1g7f.vercel.app/](https://on-chain-certificate-issuer-1g7f.vercel.app/) |
| **Smart Contract (Soulbound ERC-721)** | [`CertificateIssuer.sol`](src/CertificateIssuer.sol) |
| **Contract Address (Sepolia)** | [`0xAB1479424D52c04d2037c91310b6Cbb122d75fEe`](https://sepolia.etherscan.io/address/0xab1479424d52c04d2037c91310b6cbb122d75fee#code) |
| **Deployment Transaction** | [`0xbf7a0a6fa55c843806745d92a406b32fdaeaac0ecc85b4aff6b50dffbb59cbd6`](https://sepolia.etherscan.io/tx/0xbf7a0a6fa55c843806745d92a406b32fdaeaac0ecc85b4aff6b50dffbb59cbd6) |
| **Network & Chain ID** | Ethereum Sepolia (`11155111`) |
| **Contract Owner (Deployer)** | `0x97184EBAEB9FDCe449d5FbaF1311601005F8E811` |
| **Token Standards** | ERC-721, ERC-165, EIP-5114 (Soulbound semantics) |
| **Etherscan Verification** | Verified Source Code (Exact Match + Sourcify) |

---

## 🌟 Core Architecture & Capabilities

### 1. Multi-Tier Role Governance & Access Control
The smart contract implements a two-tiered role hierarchy with granular Solidity modifiers (`onlyOwner` and `onlyIssuer`):
- **Admin / Deployer (`onlyOwner`)**:
  - Authorize accredited institutions and issuer addresses (`authorizeIssuer(address)`).
  - De-authorize or revoke issuing permissions from institution wallets (`removeIssuer(address)`).
  - Revoke issued certificates in cases of academic fraud or administrative correction (`revokeCertificate(uint256)`).
- **Authorized Institutions / Issuers (`onlyIssuer`)**:
  - Connect with their authorized Ethereum wallet.
  - Issue certificates to student recipient addresses (`issueCertificate(...)`).
  - Restrained from administrative governance functions (cannot add/remove other issuers).
- **Recipients / Students**:
  - Receive an authentic Soulbound ERC-721 token in their wallet without needing to perform manual minting or paying gas fees.
  - Own the verifiable proof of completion perpetually.
- **Public Verifiers / Employers**:
  - Query and inspect any certificate by ID or URL without connecting a wallet or paying gas.
  - Instantly inspect cryptographic validity (`VALID` vs `REVOKED`), recipient identity, course title, and issuing institution.

### 2. Strictly Soulbound (Non-Transferable ERC-721)
Academic credentials represent personal merit and must stay tied to the recipient. The smart contract overrides OpenZeppelin v5 transfer internals:
- Peer-to-peer transfers via `transferFrom()` and `safeTransferFrom()` unconditionally revert with custom error `SoulboundTokenCannotBeTransferred()`.
- Approvals via `approve()` and `setApprovalForAll()` unconditionally revert with `SoulboundTokenCannotBeTransferred()`.
- Token ownership queries (`ownerOf()`, `balanceOf()`) remain fully functional for wallets, portfolio trackers, and indexers.

### 3. 100% On-Chain Dynamic SVG Generation (`tokenURI`)
No external servers, IPFS gateways, or centralized CDNs are used for certificate imagery:
- Calling `tokenURI(tokenId)` generates an on-chain `data:application/json;base64,...` metadata URI.
- The smart contract synthesizes a scalable vector graphic (SVG) containing the recipient's name, course, institution, timestamp, certificate ID, and real-time status badge (`VALID` in emerald or `REVOKED` in rose).
- Wallets, explorers, and marketplaces render the dynamic NFT graphic straight from the Ethereum state.

### 4. Public On-Chain Verification
- Direct, permissionless read methods (`verifyCertificate(id)` and `isCertificateValid(id)`) allow anyone on Earth to verify credentials against blockchain truth.
- Deep-link support (`/?id=1`) allows universities and employers to verify candidates with a single click.

---

## 📂 Repository Structure

```text
On-Chain-Certificate-Issuer/
├── src/
│   └── CertificateIssuer.sol          # Soulbound ERC-721 contract with on-chain SVG & access control
├── test/
│   └── CertificateIssuer.t.sol        # Foundry test suite (26/26 unit & integration tests)
├── script/
│   └── Deploy.s.sol                   # Foundry deployment automation script
├── frontend/                          # React + TypeScript + Vite + Tailwind CSS Web3 dApp
│   ├── src/
│   │   ├── config/                    # Contract address, network, and app URL configurations
│   │   ├── contracts/                 # Deployed ABI and TypeScript data definitions
│   │   ├── web3/                      # Ethers.js v6 providers, wallet context, on-chain reads/writes
│   │   ├── components/                # UI components (Result card, SVG renderer, Modals, Navbar)
│   │   └── pages/                     # Home, Public Verify, Issuance, and Admin Governance pages
│   ├── .env.example                   # Template configuration for frontend
│   └── README.md                      # Frontend-specific architecture and UI documentation
├── foundry.toml                       # Foundry profile configuration (optimizer & via_ir enabled)
├── .env.example                       # Root template for Foundry deployment keys
└── README.md                          # Master project documentation
```

---

## 🧪 Comprehensive Foundry Test Suite

All 26 smart contract test cases pass with 100% success rate:

```bash
$ forge test
```

```text
Ran 26 tests for test/CertificateIssuer.t.sol:CertificateIssuerTest
[PASS] testAuthorizedIssuerCanIssueCertificate()
[PASS] testCannotRevokeCertificateTwice()
[PASS] testCertificateIsValid()
[PASS] testCertificateIsValidWhenIssued()
[PASS] testERC721MintingAndOwnership()
[PASS] testIssueCertificate()
[PASS] testIssuerAuthorizationStatus()
[PASS] testMultipleCertificates()
[PASS] testNonOwnerCannotAuthorizeIssuer()
[PASS] testNonOwnerCannotIssueCertificate()
[PASS] testNonOwnerCannotRemoveIssuer()
[PASS] testNonOwnerCannotRevokeCertificate()
[PASS] testRemovedIssuerCannotIssueCertificate()
[PASS] testRevokeCertificate()
[PASS] testRevokeNonexistentCertificate()
[PASS] testRevokedCertificateIsInvalid()
[PASS] testSoulboundApproveReverts()
[PASS] testSoulboundSafeTransferFromReverts()
[PASS] testSoulboundSetApprovalForAllReverts()
[PASS] testSoulboundTransferFromReverts()
[PASS] testTokenURINonexistentTokenReverts()
[PASS] testTokenURIRevokedCertificate()
[PASS] testTokenURIValidCertificate()
[PASS] testUnauthorizedIssuerCannotIssueCertificate()
[PASS] testValidityCheckForNonexistentCertificate()
[PASS] testVerifyNonexistentCertificate()
Suite result: ok. 26 passed; 0 failed; 0 skipped
```

---

## 🛠️ Local Development & Quickstart

### Prerequisites
- [Foundry](https://getfoundry.sh/) (`forge`, `cast`)
- [Node.js](https://nodejs.org/) (v18+) & `npm`

### 1. Smart Contract Development
```bash
# Clone the repository
git clone https://github.com/Precious-20/On-Chain-Certificate-Issuer.git
cd On-Chain-Certificate-Issuer

# Install OpenZeppelin contracts and dependencies
forge install

# Compile contracts
forge build

# Run unit tests
forge test -vvv
```

### 2. Frontend Development
```bash
cd frontend

# Install dependencies
npm install

# Start local development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).