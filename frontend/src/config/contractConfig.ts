/**
 * Contract Configuration
 * Configured for the deployed Soulbound ERC-721 CertificateIssuer on Ethereum Sepolia Testnet.
 * Override via VITE_CONTRACT_ADDRESS in .env.local if needed.
 */

export const CONTRACT_ADDRESS = (
  import.meta.env.VITE_CONTRACT_ADDRESS ||
  "0xAB1479424D52c04d2037c91310b6Cbb122d75fEe"
).trim();

export function isContractConfigured(): boolean {
  return (
    typeof CONTRACT_ADDRESS === "string" &&
    CONTRACT_ADDRESS.length === 42 &&
    CONTRACT_ADDRESS.startsWith("0x") &&
    CONTRACT_ADDRESS !== "0x0000000000000000000000000000000000000000"
  );
}