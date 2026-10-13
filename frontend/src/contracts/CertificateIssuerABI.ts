export const CertificateIssuerABI = [
    {
        "type":  "constructor",
        "inputs":  [

                   ],
        "stateMutability":  "nonpayable"
    },
    {
        "type":  "function",
        "name":  "approve",
        "inputs":  [
                       {
                           "name":  "",
                           "type":  "address",
                           "internalType":  "address"
                       },
                       {
                           "name":  "",
                           "type":  "uint256",
                           "internalType":  "uint256"
                       }
                   ],
        "outputs":  [

                    ],
        "stateMutability":  "nonpayable"
    },
    {
        "type":  "function",
        "name":  "authorizeIssuer",
        "inputs":  [
                       {
                           "name":  "issuer",
                           "type":  "address",
                           "internalType":  "address"
                       }
                   ],
        "outputs":  [

                    ],
        "stateMutability":  "nonpayable"
    },
    {
        "type":  "function",
        "name":  "authorizedIssuers",
        "inputs":  [
                       {
                           "name":  "",
                           "type":  "address",
                           "internalType":  "address"
                       }
                   ],
        "outputs":  [
                        {
                            "name":  "",
                            "type":  "bool",
                            "internalType":  "bool"
                        }
                    ],
        "stateMutability":  "view"
    },
    {
        "type":  "function",
        "name":  "balanceOf",
        "inputs":  [
                       {
                           "name":  "owner",
                           "type":  "address",
                           "internalType":  "address"
                       }
                   ],
        "outputs":  [
                        {
                            "name":  "",
                            "type":  "uint256",
                            "internalType":  "uint256"
                        }
                    ],
        "stateMutability":  "view"
    },
    {
        "type":  "function",
        "name":  "getApproved",
        "inputs":  [
                       {
                           "name":  "tokenId",
                           "type":  "uint256",
                           "internalType":  "uint256"
                       }
                   ],
        "outputs":  [
                        {
                            "name":  "",
                            "type":  "address",
                            "internalType":  "address"
                        }
                    ],
        "stateMutability":  "view"
    },
    {
        "type":  "function",
        "name":  "isApprovedForAll",
        "inputs":  [
                       {
                           "name":  "owner",
                           "type":  "address",
                           "internalType":  "address"
                       },
                       {
                           "name":  "operator",
                           "type":  "address",
                           "internalType":  "address"
                       }
                   ],
        "outputs":  [
                        {
                            "name":  "",
                            "type":  "bool",
                            "internalType":  "bool"
                        }
                    ],
        "stateMutability":  "view"
    },
    {
        "type":  "function",
        "name":  "isCertificateValid",
        "inputs":  [
                       {
                           "name":  "certificateId",
                           "type":  "uint256",
                           "internalType":  "uint256"
                       }
                   ],
        "outputs":  [
                        {
                            "name":  "",
                            "type":  "bool",
                            "internalType":  "bool"
                        }
                    ],
        "stateMutability":  "view"
    },
    {
        "type":  "function",
        "name":  "issueCertificate",
        "inputs":  [
                       {
                           "name":  "recipient",
                           "type":  "address",
                           "internalType":  "address"
                       },
                       {
                           "name":  "recipientName",
                           "type":  "string",
                           "internalType":  "string"
                       },
                       {
                           "name":  "course",
                           "type":  "string",
                           "internalType":  "string"
                       },
                       {
                           "name":  "institution",
                           "type":  "string",
                           "internalType":  "string"
                       }
                   ],
        "outputs":  [

                    ],
        "stateMutability":  "nonpayable"
    },
    {
        "type":  "function",
        "name":  "name",
        "inputs":  [

                   ],
        "outputs":  [
                        {
                            "name":  "",
                            "type":  "string",
                            "internalType":  "string"
                        }
                    ],
        "stateMutability":  "view"
    },
    {
        "type":  "function",
        "name":  "owner",
        "inputs":  [

                   ],
        "outputs":  [
                        {
                            "name":  "",
                            "type":  "address",
                            "internalType":  "address"
                        }
                    ],
        "stateMutability":  "view"
    },
    {
        "type":  "function",
        "name":  "ownerOf",
        "inputs":  [
                       {
                           "name":  "tokenId",
                           "type":  "uint256",
                           "internalType":  "uint256"
                       }
                   ],
        "outputs":  [
                        {
                            "name":  "",
                            "type":  "address",
                            "internalType":  "address"
                        }
                    ],
        "stateMutability":  "view"
    },
    {
        "type":  "function",
        "name":  "removeIssuer",
        "inputs":  [
                       {
                           "name":  "issuer",
                           "type":  "address",
                           "internalType":  "address"
                       }
                   ],
        "outputs":  [

                    ],
        "stateMutability":  "nonpayable"
    },
    {
        "type":  "function",
        "name":  "revokeCertificate",
        "inputs":  [
                       {
                           "name":  "certificateId",
                           "type":  "uint256",
                           "internalType":  "uint256"
                       }
                   ],
        "outputs":  [

                    ],
        "stateMutability":  "nonpayable"
    },
    {
        "type":  "function",
        "name":  "safeTransferFrom",
        "inputs":  [
                       {
                           "name":  "from",
                           "type":  "address",
                           "internalType":  "address"
                       },
                       {
                           "name":  "to",
                           "type":  "address",
                           "internalType":  "address"
                       },
                       {
                           "name":  "tokenId",
                           "type":  "uint256",
                           "internalType":  "uint256"
                       }
                   ],
        "outputs":  [

                    ],
        "stateMutability":  "nonpayable"
    },
    {
        "type":  "function",
        "name":  "safeTransferFrom",
        "inputs":  [
                       {
                           "name":  "from",
                           "type":  "address",
                           "internalType":  "address"
                       },
                       {
                           "name":  "to",
                           "type":  "address",
                           "internalType":  "address"
                       },
                       {
                           "name":  "tokenId",
                           "type":  "uint256",
                           "internalType":  "uint256"
                       },
                       {
                           "name":  "data",
                           "type":  "bytes",
                           "internalType":  "bytes"
                       }
                   ],
        "outputs":  [

                    ],
        "stateMutability":  "nonpayable"
    },
    {
        "type":  "function",
        "name":  "setApprovalForAll",
        "inputs":  [
                       {
                           "name":  "",
                           "type":  "address",
                           "internalType":  "address"
                       },
                       {
                           "name":  "",
                           "type":  "bool",
                           "internalType":  "bool"
                       }
                   ],
        "outputs":  [

                    ],
        "stateMutability":  "nonpayable"
    },
    {
        "type":  "function",
        "name":  "supportsInterface",
        "inputs":  [
                       {
                           "name":  "interfaceId",
                           "type":  "bytes4",
                           "internalType":  "bytes4"
                       }
                   ],
        "outputs":  [
                        {
                            "name":  "",
                            "type":  "bool",
                            "internalType":  "bool"
                        }
                    ],
        "stateMutability":  "view"
    },
    {
        "type":  "function",
        "name":  "symbol",
        "inputs":  [

                   ],
        "outputs":  [
                        {
                            "name":  "",
                            "type":  "string",
                            "internalType":  "string"
                        }
                    ],
        "stateMutability":  "view"
    },
    {
        "type":  "function",
        "name":  "tokenURI",
        "inputs":  [
                       {
                           "name":  "tokenId",
                           "type":  "uint256",
                           "internalType":  "uint256"
                       }
                   ],
        "outputs":  [
                        {
                            "name":  "",
                            "type":  "string",
                            "internalType":  "string"
                        }
                    ],
        "stateMutability":  "view"
    },
    {
        "type":  "function",
        "name":  "transferFrom",
        "inputs":  [
                       {
                           "name":  "from",
                           "type":  "address",
                           "internalType":  "address"
                       },
                       {
                           "name":  "to",
                           "type":  "address",
                           "internalType":  "address"
                       },
                       {
                           "name":  "tokenId",
                           "type":  "uint256",
                           "internalType":  "uint256"
                       }
                   ],
        "outputs":  [

                    ],
        "stateMutability":  "nonpayable"
    },
    {
        "type":  "function",
        "name":  "verifyCertificate",
        "inputs":  [
                       {
                           "name":  "certificateId",
                           "type":  "uint256",
                           "internalType":  "uint256"
                       }
                   ],
        "outputs":  [
                        {
                            "name":  "",
                            "type":  "tuple",
                            "internalType":  "struct CertificateIssuer.Certificate",
                            "components":  [
                                               {
                                                   "name":  "id",
                                                   "type":  "uint256",
                                                   "internalType":  "uint256"
                                               },
                                               {
                                                   "name":  "recipient",
                                                   "type":  "address",
                                                   "internalType":  "address"
                                               },
                                               {
                                                   "name":  "recipientName",
                                                   "type":  "string",
                                                   "internalType":  "string"
                                               },
                                               {
                                                   "name":  "course",
                                                   "type":  "string",
                                                   "internalType":  "string"
                                               },
                                               {
                                                   "name":  "institution",
                                                   "type":  "string",
                                                   "internalType":  "string"
                                               },
                                               {
                                                   "name":  "issueDate",
                                                   "type":  "uint256",
                                                   "internalType":  "uint256"
                                               },
                                               {
                                                   "name":  "revoked",
                                                   "type":  "bool",
                                                   "internalType":  "bool"
                                               }
                                           ]
                        }
                    ],
        "stateMutability":  "view"
    },
    {
        "type":  "event",
        "name":  "Approval",
        "inputs":  [
                       {
                           "name":  "owner",
                           "type":  "address",
                           "indexed":  true,
                           "internalType":  "address"
                       },
                       {
                           "name":  "approved",
                           "type":  "address",
                           "indexed":  true,
                           "internalType":  "address"
                       },
                       {
                           "name":  "tokenId",
                           "type":  "uint256",
                           "indexed":  true,
                           "internalType":  "uint256"
                       }
                   ],
        "anonymous":  false
    },
    {
        "type":  "event",
        "name":  "ApprovalForAll",
        "inputs":  [
                       {
                           "name":  "owner",
                           "type":  "address",
                           "indexed":  true,
                           "internalType":  "address"
                       },
                       {
                           "name":  "operator",
                           "type":  "address",
                           "indexed":  true,
                           "internalType":  "address"
                       },
                       {
                           "name":  "approved",
                           "type":  "bool",
                           "indexed":  false,
                           "internalType":  "bool"
                       }
                   ],
        "anonymous":  false
    },
    {
        "type":  "event",
        "name":  "CertificateIssued",
        "inputs":  [
                       {
                           "name":  "certificateId",
                           "type":  "uint256",
                           "indexed":  true,
                           "internalType":  "uint256"
                       },
                       {
                           "name":  "recipient",
                           "type":  "address",
                           "indexed":  true,
                           "internalType":  "address"
                       },
                       {
                           "name":  "recipientName",
                           "type":  "string",
                           "indexed":  false,
                           "internalType":  "string"
                       },
                       {
                           "name":  "course",
                           "type":  "string",
                           "indexed":  false,
                           "internalType":  "string"
                       },
                       {
                           "name":  "institution",
                           "type":  "string",
                           "indexed":  false,
                           "internalType":  "string"
                       },
                       {
                           "name":  "issueDate",
                           "type":  "uint256",
                           "indexed":  false,
                           "internalType":  "uint256"
                       }
                   ],
        "anonymous":  false
    },
    {
        "type":  "event",
        "name":  "CertificateRevoked",
        "inputs":  [
                       {
                           "name":  "certificateId",
                           "type":  "uint256",
                           "indexed":  true,
                           "internalType":  "uint256"
                       }
                   ],
        "anonymous":  false
    },
    {
        "type":  "event",
        "name":  "IssuerAuthorized",
        "inputs":  [
                       {
                           "name":  "issuer",
                           "type":  "address",
                           "indexed":  true,
                           "internalType":  "address"
                       }
                   ],
        "anonymous":  false
    },
    {
        "type":  "event",
        "name":  "IssuerRemoved",
        "inputs":  [
                       {
                           "name":  "issuer",
                           "type":  "address",
                           "indexed":  true,
                           "internalType":  "address"
                       }
                   ],
        "anonymous":  false
    },
    {
        "type":  "event",
        "name":  "Transfer",
        "inputs":  [
                       {
                           "name":  "from",
                           "type":  "address",
                           "indexed":  true,
                           "internalType":  "address"
                       },
                       {
                           "name":  "to",
                           "type":  "address",
                           "indexed":  true,
                           "internalType":  "address"
                       },
                       {
                           "name":  "tokenId",
                           "type":  "uint256",
                           "indexed":  true,
                           "internalType":  "uint256"
                       }
                   ],
        "anonymous":  false
    },
    {
        "type":  "error",
        "name":  "CertificateAlreadyRevoked",
        "inputs":  [

                   ]
    },
    {
        "type":  "error",
        "name":  "CertificateDoesNotExist",
        "inputs":  [

                   ]
    },
    {
        "type":  "error",
        "name":  "ERC721IncorrectOwner",
        "inputs":  [
                       {
                           "name":  "sender",
                           "type":  "address",
                           "internalType":  "address"
                       },
                       {
                           "name":  "tokenId",
                           "type":  "uint256",
                           "internalType":  "uint256"
                       },
                       {
                           "name":  "owner",
                           "type":  "address",
                           "internalType":  "address"
                       }
                   ]
    },
    {
        "type":  "error",
        "name":  "ERC721InsufficientApproval",
        "inputs":  [
                       {
                           "name":  "operator",
                           "type":  "address",
                           "internalType":  "address"
                       },
                       {
                           "name":  "tokenId",
                           "type":  "uint256",
                           "internalType":  "uint256"
                       }
                   ]
    },
    {
        "type":  "error",
        "name":  "ERC721InvalidApprover",
        "inputs":  [
                       {
                           "name":  "approver",
                           "type":  "address",
                           "internalType":  "address"
                       }
                   ]
    },
    {
        "type":  "error",
        "name":  "ERC721InvalidOperator",
        "inputs":  [
                       {
                           "name":  "operator",
                           "type":  "address",
                           "internalType":  "address"
                       }
                   ]
    },
    {
        "type":  "error",
        "name":  "ERC721InvalidOwner",
        "inputs":  [
                       {
                           "name":  "owner",
                           "type":  "address",
                           "internalType":  "address"
                       }
                   ]
    },
    {
        "type":  "error",
        "name":  "ERC721InvalidReceiver",
        "inputs":  [
                       {
                           "name":  "receiver",
                           "type":  "address",
                           "internalType":  "address"
                       }
                   ]
    },
    {
        "type":  "error",
        "name":  "ERC721InvalidSender",
        "inputs":  [
                       {
                           "name":  "sender",
                           "type":  "address",
                           "internalType":  "address"
                       }
                   ]
    },
    {
        "type":  "error",
        "name":  "ERC721NonexistentToken",
        "inputs":  [
                       {
                           "name":  "tokenId",
                           "type":  "uint256",
                           "internalType":  "uint256"
                       }
                   ]
    },
    {
        "type":  "error",
        "name":  "NotAuthorized",
        "inputs":  [

                   ]
    },
    {
        "type":  "error",
        "name":  "SoulboundTokenCannotBeTransferred",
        "inputs":  [

                   ]
    },
    {
        "type":  "error",
        "name":  "StringsInsufficientHexLength",
        "inputs":  [
                       {
                           "name":  "value",
                           "type":  "uint256",
                           "internalType":  "uint256"
                       },
                       {
                           "name":  "length",
                           "type":  "uint256",
                           "internalType":  "uint256"
                       }
                   ]
    }
] as const;
export const CERTIFICATE_ISSUER_ABI = CertificateIssuerABI;