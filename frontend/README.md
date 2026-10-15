# TechCrush Web3 Blockchain Capstone: On-Chain Certificate Issuer

> **Production Soulbound ERC-721 Certificate Issuance & Verification Platform**

An immutable, decentralized educational credential verification and certificate issuance platform powered by an EVM Soulbound ERC-721 Solidity smart contract (`src/CertificateIssuer.sol`) deployed live on Ethereum Sepolia Testnet and a modern Web3 React application (`frontend/`).

---

## 🌐 Deployed Sepolia Contract Information

| Parameter                    | Value                                                                                                                                                                      |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Network**                  | Ethereum Sepolia Testnet                                                                                                                                                   |
| **Chain ID**                 | `11155111`                                                                                                                                                                 |
| **Contract**                 | `CertificateIssuer` (Soulbound ERC-721)                                                                                                                                    |
| **Contract Address**         | [`0xAB1479424D52c04d2037c91310b6Cbb122d75fEe`](https://sepolia.etherscan.io/address/0xAB1479424D52c04d2037c91310b6Cbb122d75fEe#code)                                    |
| **Deployment Transaction**   | [`0xbf7a0a6fa55c843806745d92a406b32fdaeaac0ecc85b4aff6b50dffbb59cbd6`](https://sepolia.etherscan.io/tx/0xbf7a0a6fa55c843806745d92a406b32fdaeaac0ecc85b4aff6b50dffbb59cbd6) |
| **Block Explorer**           | [https://sepolia.etherscan.io](https://sepolia.etherscan.io)                                                                                                               |
| **Confirmed Contract Owner** | `0x97184EBAEB9FDCe449d5FbaF1311601005F8E811`                                                                                                                               |
| **Live Vercel Application**  | [https://on-chain-certificate-issuer-1g7f.vercel.app/](https://on-chain-certificate-issuer-1g7f.vercel.app/)                                                                         |

---

## 📊 Soulbound ERC-721 Verification Suite

- **Foundry Test Suite**: 26/26 Tests Passed (100% Pass Rate).
- **On-Chain Soulbound Guard**: `transferFrom()`, `safeTransferFrom()`, `approve()`, and `setApprovalForAll()` revert with custom error `SoulboundTokenCannotBeTransferred()`.
- **On-Chain Dynamic SVG Renderer**: Direct Base64 Data URI output via `tokenURI(tokenId)`.
- **Frontend Production Build**: Clean Vite + TypeScript build (0 errors).