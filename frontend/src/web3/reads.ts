import { ethers } from "ethers";
import { CONTRACT_ADDRESS, isContractConfigured } from "../config/contractConfig";
import { CERTIFICATE_ISSUER_ABI } from "../contracts/CertificateIssuerABI";
import type { FormattedCertificate, RawCertificate } from "../contracts/types";

function getContractInstance(runner: ethers.ContractRunner): ethers.Contract {
  if (!isContractConfigured()) {
    throw new Error(
      "Contract Not Configured: The smart contract has not been deployed yet."
    );
  }
  return new ethers.Contract(CONTRACT_ADDRESS, CERTIFICATE_ISSUER_ABI, runner);
}

/**
 * Fetch certificate by ID on-chain with Soulbound ERC-721 tokenURI decoding
 */
export async function fetchCertificateOnChain(
  runner: ethers.ContractRunner,
  certificateId: string | number | bigint
): Promise<FormattedCertificate> {
  const contract = getContractInstance(runner);
  
  const idBigInt = BigInt(certificateId);
  const rawCert: RawCertificate = await contract.verifyCertificate(idBigInt);

  const issueTimestamp = Number(rawCert.issueDate);
  const issueDateFormatted = new Date(issueTimestamp * 1000).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  let owner: string | undefined;
  let tokenURI: string | undefined;
  let svgImage: string | undefined;

  try {
    owner = await contract.ownerOf(idBigInt);
  } catch (e) {
    console.warn("Could not fetch ownerOf:", e);
  }

  try {
    tokenURI = await contract.tokenURI(idBigInt);
    if (tokenURI && tokenURI.startsWith("data:application/json;base64,")) {
      const base64Json = tokenURI.replace("data:application/json;base64,", "");
      const jsonString = atob(base64Json);
      const parsed = JSON.parse(jsonString);
      if (parsed.image) {
        svgImage = parsed.image;
      }
    }
  } catch (e) {
    console.warn("Could not fetch or decode tokenURI:", e);
  }

  return {
    id: rawCert.id.toString(),
    recipient: rawCert.recipient,
    recipientName: rawCert.recipientName,
    course: rawCert.course,
    institution: rawCert.institution,
    issueDateFormatted,
    issueTimestamp,
    revoked: rawCert.revoked,
    isValid: !rawCert.revoked,
    owner,
    tokenURI,
    svgImage,
  };
}

/**
 * Check certificate validity on-chain
 */
export async function checkCertificateValidityOnChain(
  runner: ethers.ContractRunner,
  certificateId: string | number | bigint
): Promise<boolean> {
  const contract = getContractInstance(runner);
  const idBigInt = BigInt(certificateId);
  return await contract.isCertificateValid(idBigInt);
}

/**
 * Check if address is contract owner
 */
export async function fetchContractOwnerOnChain(
  runner: ethers.ContractRunner
): Promise<string> {
  const contract = getContractInstance(runner);
  return await contract.owner();
}

/**
 * Check if address is an authorized issuer
 */
export async function checkIsAuthorizedIssuerOnChain(
  runner: ethers.ContractRunner,
  issuerAddress: string
): Promise<boolean> {
  const contract = getContractInstance(runner);
  return await contract.authorizedIssuers(issuerAddress);
}

/**
 * Query ERC-721 token balance of an account
 */
export async function fetchBalanceOfOnChain(
  runner: ethers.ContractRunner,
  account: string
): Promise<bigint> {
  const contract = getContractInstance(runner);
  return await contract.balanceOf(account);
}