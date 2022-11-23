const abi = [
    {
        "type": "constructor",
        "stateMutability": "nonpayable",
        "inputs": []
    },
    {
        "type": "event",
        "name": "Approval",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address",
                "indexed": true
            }, {
                "type": "address",
                "name": "approved",
                "internalType": "address",
                "indexed": true
            }, {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256",
                "indexed": true
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ApprovalForAll",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address",
                "indexed": true
            }, {
                "type": "address",
                "name": "operator",
                "internalType": "address",
                "indexed": true
            }, {
                "type": "bool",
                "name": "approved",
                "internalType": "bool",
                "indexed": false
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "MakePurchasable",
        "inputs": [
            {
                "type": "bool",
                "name": "isPurchasable",
                "internalType": "bool",
                "indexed": false
            }
        ],
        "anonymous": false
    }, {
        "type": "event",
        "name": "Mint",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "internalType": "address",
                "indexed": false
            }, {
                "type": "uint256",
                "name": "number",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    }, {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "previousOwner",
                "internalType": "address",
                "indexed": true
            }, {
                "type": "address",
                "name": "newOwner",
                "internalType": "address",
                "indexed": true
            }
        ],
        "anonymous": false
    }, {
        "type": "event",
        "name": "SetCurrentBatch",
        "inputs": [
            {
                "type": "uint256",
                "name": "newCurrentBatch",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    }, {
        "type": "event",
        "name": "SetErc20Cost",
        "inputs": [
            {
                "type": "uint256",
                "name": "newErc20Cost",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    }, {
        "type": "event",
        "name": "SetErc20Token",
        "inputs": [
            {
                "type": "address",
                "name": "newErc20Token",
                "internalType": "address",
                "indexed": false
            }
        ],
        "anonymous": false
    }, {
        "type": "event",
        "name": "SetMaxMintable",
        "inputs": [
            {
                "type": "uint256",
                "name": "newMax",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    }, {
        "type": "event",
        "name": "SetMetadata",
        "inputs": [
            {
                "type": "uint256",
                "name": "batchNumber",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    }, {
        "type": "event",
        "name": "Transfer",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "internalType": "address",
                "indexed": true
            }, {
                "type": "address",
                "name": "to",
                "internalType": "address",
                "indexed": true
            }, {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256",
                "indexed": true
            }
        ],
        "anonymous": false
    }, {
        "type": "event",
        "name": "Withdraw",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address",
                "indexed": false
            }, {
                "type": "uint256",
                "name": "amount",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "approve",
        "inputs": [
            {
                "type": "address",
                "name": "to",
                "internalType": "address"
            }, {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "balanceOf",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "currentBatch",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "currentPrice",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "erc20Cost",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "erc20Token",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "getApproved",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "isApprovedForAll",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address"
            }, {
                "type": "address",
                "name": "operator",
                "internalType": "address"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "isPurchasable",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "makePurchable",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "maxMintable",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "string",
                "name": "metadata",
                "internalType": "string"
            },
            {
                "type": "uint256",
                "name": "batchSize",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "name": "currentMint",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "name": "price1",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "price2",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "price3",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "price4",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "ratio1",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "ratio2",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "ratio3",
                "internalType": "uint256"
            }
        ],
        "name": "meta",
        "inputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "payable",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "mint",
        "inputs": [
            {
                "type": "uint256",
                "name": "nftNumber",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "string",
                "name": "",
                "internalType": "string"
            }
        ],
        "name": "name",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "owner",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "ownerOf",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "renounceOwnership",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "safeTransferFrom",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "internalType": "address"
            }, {
                "type": "address",
                "name": "to",
                "internalType": "address"
            }, {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "safeTransferFrom",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "internalType": "address"
            }, {
                "type": "address",
                "name": "to",
                "internalType": "address"
            }, {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }, {
                "type": "bytes",
                "name": "_data",
                "internalType": "bytes"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setApprovalForAll",
        "inputs": [
            {
                "type": "address",
                "name": "operator",
                "internalType": "address"
            }, {
                "type": "bool",
                "name": "approved",
                "internalType": "bool"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setCurrentBatch",
        "inputs": [
            {
                "type": "uint256",
                "name": "newCurrentBatch",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setErc20Cost",
        "inputs": [
            {
                "type": "uint256",
                "name": "newErc20Cost",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setErc20Token",
        "inputs": [
            {
                "type": "address",
                "name": "newErc20Token",
                "internalType": "address"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setMaxMintable",
        "inputs": [
            {
                "type": "uint256",
                "name": "newMax",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setMetadata",
        "inputs": [
            {
                "type": "uint256",
                "name": "batchNumber",
                "internalType": "uint256"
            },
            {
                "type": "string",
                "name": "newMetadata",
                "internalType": "string"
            },
            {
                "type": "uint256",
                "name": "newBatchSize",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "name": "price1",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "price2",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "price3",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "price4",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "ratio1",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "ratio2",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "ratio3",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "supportsInterface",
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId",
                "internalType": "bytes4"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "string",
                "name": "",
                "internalType": "string"
            }
        ],
        "name": "symbol",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "tokenByIndex",
        "inputs": [
            {
                "type": "uint256",
                "name": "index",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address"
            }, {
                "type": "uint256",
                "name": "index",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "string",
                "name": "",
                "internalType": "string"
            }
        ],
        "name": "tokenURI",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256[]",
                "name": "",
                "internalType": "uint256[]"
            }
        ],
        "name": "tokensByOwner",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "internalType": "address"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "totalSupply",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "transferFrom",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "internalType": "address"
            }, {
                "type": "address",
                "name": "to",
                "internalType": "address"
            }, {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "transferOwnership",
        "inputs": [
            {
                "type": "address",
                "name": "newOwner",
                "internalType": "address"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "withdraw",
        "inputs": []
    }, {
        "type": "receive",
        "stateMutability": "payable"
    }
]

const marketplace_abi = [
    {
        "type": "constructor",
        "stateMutability": "nonpayable",
        "inputs": []
    },
    {
        "type": "event",
        "name": "MarketItemCreated",
        "inputs": [
            {
                "type": "uint256",
                "name": "marketItemId",
                "internalType": "uint256",
                "indexed": true
            },
            {
                "type": "address",
                "name": "nftContract",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256",
                "indexed": true
            },
            {
                "type": "address",
                "name": "creator",
                "internalType": "address",
                "indexed": false
            }, {
                "type": "address",
                "name": "seller",
                "internalType": "address",
                "indexed": false
            }, {
                "type": "address",
                "name": "owner",
                "internalType": "address",
                "indexed": false
            }, {
                "type": "uint256",
                "name": "price",
                "internalType": "uint256",
                "indexed": false
            }, {
                "type": "bool",
                "name": "sold",
                "internalType": "bool",
                "indexed": false
            }, {
                "type": "bool",
                "name": "canceled",
                "internalType": "bool",
                "indexed": false
            }
        ],
        "anonymous": false
    },
    {
        "type": "function",
        "stateMutability": "payable",
        "outputs": [],
        "name": "cancelMarketItem",
        "inputs": [
            {
                "type": "address",
                "name": "nftContractAddress",
                "internalType": "address"
            }, {
                "type": "uint256",
                "name": "marketItemId",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "payable",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "createMarketItem",
        "inputs": [
            {
                "type": "address",
                "name": "nftContractAddress",
                "internalType": "address"
            }, {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "price",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "payable",
        "outputs": [],
        "name": "createMarketSale",
        "inputs": [
            {
                "type": "address",
                "name": "nftContractAddress",
                "internalType": "address"
            }, {
                "type": "uint256",
                "name": "marketItemId",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "tuple[]",
                "name": "",
                "internalType": "struct ECHPunks_Marketplace.MarketItem[]",
                "components": [
                    {
                        "type": "uint256",
                        "name": "marketItemId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "nftContractAddress",
                        "internalType": "address"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "creator",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "seller",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "owner",
                        "internalType": "address payable"
                    }, {
                        "type": "uint256",
                        "name": "price",
                        "internalType": "uint256"
                    }, {
                        "type": "bool",
                        "name": "sold",
                        "internalType": "bool"
                    }, {
                        "type": "bool",
                        "name": "canceled",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "name": "fetchAvailableMarketItems",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "tuple[]",
                "name": "",
                "internalType": "struct ECHPunks_Marketplace.MarketItem[]",
                "components": [
                    {
                        "type": "uint256",
                        "name": "marketItemId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "nftContractAddress",
                        "internalType": "address"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "creator",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "seller",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "owner",
                        "internalType": "address payable"
                    }, {
                        "type": "uint256",
                        "name": "price",
                        "internalType": "uint256"
                    }, {
                        "type": "bool",
                        "name": "sold",
                        "internalType": "bool"
                    }, {
                        "type": "bool",
                        "name": "canceled",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "name": "fetchMarketItemsByAddressProperty",
        "inputs": [
            {
                "type": "string",
                "name": "_addressProperty",
                "internalType": "string"
            }, {
                "type": "address",
                "name": "ownerOrSeller",
                "internalType": "address"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "tuple[]",
                "name": "",
                "internalType": "struct ECHPunks_Marketplace.MarketItem[]",
                "components": [
                    {
                        "type": "uint256",
                        "name": "marketItemId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "nftContractAddress",
                        "internalType": "address"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "creator",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "seller",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "owner",
                        "internalType": "address payable"
                    }, {
                        "type": "uint256",
                        "name": "price",
                        "internalType": "uint256"
                    }, {
                        "type": "bool",
                        "name": "sold",
                        "internalType": "bool"
                    }, {
                        "type": "bool",
                        "name": "canceled",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "name": "fetchOwnedMarketItems",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "internalType": "address"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "tuple[]",
                "name": "",
                "internalType": "struct ECHPunks_Marketplace.MarketItem[]",
                "components": [
                    {
                        "type": "uint256",
                        "name": "marketItemId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "nftContractAddress",
                        "internalType": "address"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "creator",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "seller",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "owner",
                        "internalType": "address payable"
                    }, {
                        "type": "uint256",
                        "name": "price",
                        "internalType": "uint256"
                    }, {
                        "type": "bool",
                        "name": "sold",
                        "internalType": "bool"
                    }, {
                        "type": "bool",
                        "name": "canceled",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "name": "fetchSellingMarketItems",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "internalType": "address"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "internalType": "struct ECHPunks_Marketplace.MarketItem",
                "components": [
                    {
                        "type": "uint256",
                        "name": "marketItemId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "nftContractAddress",
                        "internalType": "address"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "creator",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "seller",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "owner",
                        "internalType": "address payable"
                    }, {
                        "type": "uint256",
                        "name": "price",
                        "internalType": "uint256"
                    }, {
                        "type": "bool",
                        "name": "sold",
                        "internalType": "bool"
                    }, {
                        "type": "bool",
                        "name": "canceled",
                        "internalType": "bool"
                    }
                ]
            }, {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "getLatestMarketItemByTokenId",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "getListingFee",
        "inputs": []
    }
]

const abi2 = [{"type":"constructor","stateMutability":"nonpayable","inputs":[]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"approved","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"event","name":"ApprovalForAll","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"operator","internalType":"address","indexed":true},{"type":"bool","name":"approved","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"MakePurchasable","inputs":[{"type":"bool","name":"isPurchasable","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"Mint","inputs":[{"type":"address","name":"account","internalType":"address","indexed":false},{"type":"uint256","name":"number","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"SetCurrentBatch","inputs":[{"type":"uint256","name":"newCurrentBatch","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"SetErc20Cost","inputs":[{"type":"uint256","name":"newErc20Cost","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"SetErc20Token","inputs":[{"type":"address","name":"newErc20Token","internalType":"address","indexed":false}],"anonymous":false},{"type":"event","name":"SetMaxMintable","inputs":[{"type":"uint256","name":"newMax","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"SetMetadata","inputs":[{"type":"uint256","name":"batchNumber","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"event","name":"Whitelisted","inputs":[{"type":"address","name":"account","internalType":"address","indexed":false},{"type":"bool","name":"isWhitelisted","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"approve","inputs":[{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"owner","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"currentBatch","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"currentPrice","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"erc20Cost","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"erc20Token","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"getApproved","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isApprovedForAll","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"operator","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isPurchasable","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"makePurchable","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"maxMintable","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"metadata","internalType":"string"},{"type":"uint256","name":"price1","internalType":"uint256"},{"type":"uint256","name":"price2","internalType":"uint256"},{"type":"uint256","name":"price3","internalType":"uint256"},{"type":"uint256","name":"price4","internalType":"uint256"},{"type":"uint256","name":"ratio1","internalType":"uint256"},{"type":"uint256","name":"ratio2","internalType":"uint256"},{"type":"uint256","name":"ratio3","internalType":"uint256"}],"name":"meta","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"mint","inputs":[{"type":"uint256","name":"mints","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"ownerOf","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"bytes","name":"_data","internalType":"bytes"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setApprovalForAll","inputs":[{"type":"address","name":"operator","internalType":"address"},{"type":"bool","name":"approved","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setCurrentBatch","inputs":[{"type":"uint256","name":"newCurrentBatch","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setErc20Cost","inputs":[{"type":"uint256","name":"newErc20Cost","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setErc20Token","inputs":[{"type":"address","name":"newErc20Token","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setMaxMintable","inputs":[{"type":"uint256","name":"newMax","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setMetadata","inputs":[{"type":"uint256","name":"batchNumber","internalType":"uint256"},{"type":"string","name":"newMetadata","internalType":"string"},{"type":"uint256","name":"price1","internalType":"uint256"},{"type":"uint256","name":"price2","internalType":"uint256"},{"type":"uint256","name":"price3","internalType":"uint256"},{"type":"uint256","name":"price4","internalType":"uint256"},{"type":"uint256","name":"ratio1","internalType":"uint256"},{"type":"uint256","name":"ratio2","internalType":"uint256"},{"type":"uint256","name":"ratio3","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"supportsInterface","inputs":[{"type":"bytes4","name":"interfaceId","internalType":"bytes4"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenByIndex","inputs":[{"type":"uint256","name":"index","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenOfOwnerByIndex","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"uint256","name":"index","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"tokenURI","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256[]","name":"","internalType":"uint256[]"}],"name":"tokensByOwner","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"whitelistAccount","inputs":[{"type":"address","name":"account","internalType":"address"},{"type":"bool","name":"isWhitelisted","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"whitelisted","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[]},{"type":"receive","stateMutability":"payable"}]

const game_abi = [{"type":"event","name":"Canceled","inputs":[{"type":"address","name":"creator","internalType":"address","indexed":false},{"type":"uint256","name":"gameNumber","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Draw","inputs":[{"type":"uint256","name":"gameNumber","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"EarlyEndGame","inputs":[{"type":"address","name":"winner","internalType":"address","indexed":false},{"type":"uint256","name":"gameNumber","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"GameCreated","inputs":[{"type":"address","name":"player1","internalType":"address","indexed":false},{"type":"address","name":"player2","internalType":"address","indexed":false},{"type":"uint256","name":"gameNumber","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"GameOver","inputs":[{"type":"address","name":"winner","internalType":"address","indexed":false},{"type":"uint256","name":"gameNumber","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"GameStarted","inputs":[{"type":"address","name":"player1","internalType":"address","indexed":false},{"type":"address","name":"player2","internalType":"address","indexed":false},{"type":"uint256","name":"gameNumber","internalType":"uint256","indexed":false},{"type":"bool","name":"isGameLive","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Player1AttacksAndDefends","inputs":[{"type":"uint256","name":"gameNumber","internalType":"uint256","indexed":false},{"type":"bool","name":"defend","internalType":"bool","indexed":false},{"type":"bool","name":"attack","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"Player2AttacksAndDefends","inputs":[{"type":"uint256","name":"gameNumber","internalType":"uint256","indexed":false},{"type":"bool","name":"defend","internalType":"bool","indexed":false},{"type":"bool","name":"attack","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"WagerAmountChanged","inputs":[{"type":"uint256","name":"oldGameWager","internalType":"uint256","indexed":false},{"type":"uint256","name":"gameWager","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"WithdrawWinnings","inputs":[{"type":"address","name":"winner","internalType":"address","indexed":false},{"type":"uint256","name":"gameNumber","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"cancelGame","inputs":[{"type":"uint256","name":"gameNumber","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"changeGameWager","inputs":[{"type":"uint256","name":"newGameWager","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"clearPlayer","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"commitTime","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"commitVote","inputs":[{"type":"uint256","name":"gameNumber","internalType":"uint256"},{"type":"bytes32","name":"secretHash","internalType":"bytes32"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"createGame","inputs":[{"type":"address","name":"player2","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"earlyEndGame","inputs":[{"type":"uint256","name":"gameNumber","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"endDraw","inputs":[{"type":"uint256","name":"gameNumber","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"gameByAddress","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"gameCount","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"gameWager","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"gameWinner","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"gameIsLive","internalType":"bool"},{"type":"uint256","name":"gameTurn","internalType":"uint256"},{"type":"address","name":"player1","internalType":"address"},{"type":"address","name":"player2","internalType":"address"},{"type":"uint256","name":"roundStartTime","internalType":"uint256"},{"type":"uint256","name":"player1Hp","internalType":"uint256"},{"type":"uint256","name":"player2Hp","internalType":"uint256"},{"type":"bool","name":"isPlayer1Revealed","internalType":"bool"},{"type":"bool","name":"isPlayer2Revealed","internalType":"bool"},{"type":"bool","name":"isPlayer1Committed","internalType":"bool"},{"type":"bool","name":"isPlayer2Committed","internalType":"bool"},{"type":"bytes32","name":"Player1Commit","internalType":"bytes32"},{"type":"bytes32","name":"Player2Commit","internalType":"bytes32"},{"type":"uint256","name":"gameWager","internalType":"uint256"}],"name":"games","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"gen1Contract","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"gen2Contract","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getBlockTimestamp","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256[4]","name":"Player1Attacks","internalType":"uint256[4]"},{"type":"uint256[4]","name":"Player1Defends","internalType":"uint256[4]"},{"type":"uint256[4]","name":"Player2Attacks","internalType":"uint256[4]"},{"type":"uint256[4]","name":"Player2Defends","internalType":"uint256[4]"}],"name":"getGameMoves","inputs":[{"type":"uint256","name":"gameNumber","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"},{"type":"uint256","name":"","internalType":"uint256"}],"name":"getHash","inputs":[{"type":"uint256[4]","name":"attacks","internalType":"uint256[4]"},{"type":"uint256[4]","name":"defends","internalType":"uint256[4]"},{"type":"uint256","name":"salt","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isInGame","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"isPlayerOwner","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"joinGame","inputs":[{"type":"uint256","name":"gameNumber","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"live","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"loserWithdraw","inputs":[{"type":"uint256","name":"gameNumber","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"currentContract","internalType":"address"},{"type":"uint256","name":"currentNFTNumber","internalType":"uint256"},{"type":"uint256","name":"totalWins","internalType":"uint256"},{"type":"uint256","name":"totalLosses","internalType":"uint256"},{"type":"bool","name":"isPlayable","internalType":"bool"}],"name":"players","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"revealTime","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"revealVote","inputs":[{"type":"uint256","name":"gameNumber","internalType":"uint256"},{"type":"uint256[4]","name":"attacks","internalType":"uint256[4]"},{"type":"uint256[4]","name":"defends","internalType":"uint256[4]"},{"type":"uint256","name":"salt","internalType":"uint256"},{"type":"uint256","name":"blockNumber","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setCommitTime","inputs":[{"type":"uint256","name":"time","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setContract","inputs":[{"type":"address","name":"nftContract","internalType":"address"},{"type":"uint256","name":"contractNumber","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setPlayer","inputs":[{"type":"address","name":"gen1or2","internalType":"address"},{"type":"uint256","name":"nftNumber","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setRevealTime","inputs":[{"type":"uint256","name":"time","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"stopGames","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"winnerWithdraw","inputs":[{"type":"uint256","name":"gameNumber","internalType":"uint256"}]},{"type":"receive","stateMutability":"payable"}]

const click_abi = [{ "type": "constructor", "stateMutability": "nonpayable", "inputs": [{ "type": "address", "name": "_nft", "internalType": "address" }] }, { "type": "event", "name": "Click", "inputs": [{ "type": "address", "name": "account", "internalType": "address", "indexed": false }, { "type": "uint256", "name": "clicks", "internalType": "uint256", "indexed": false }], "anonymous": false }, { "type": "event", "name": "Mint", "inputs": [{ "type": "address", "name": "winner", "internalType": "address", "indexed": false }, { "type": "uint256", "name": "mintNumber", "internalType": "uint256", "indexed": false }], "anonymous": false }, { "type": "event", "name": "OwnershipTransferred", "inputs": [{ "type": "address", "name": "previousOwner", "internalType": "address", "indexed": true }, { "type": "address", "name": "newOwner", "internalType": "address", "indexed": true }], "anonymous": false }, { "type": "event", "name": "Withdraw", "inputs": [{ "type": "address", "name": "winner", "internalType": "address", "indexed": false }, { "type": "uint256", "name": "winnings", "internalType": "uint256", "indexed": false }], "anonymous": false }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "activePlayer", "inputs": [{ "type": "address", "name": "", "internalType": "address" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "player", "internalType": "address" }, { "type": "uint256", "name": "clicks", "internalType": "uint256" }, { "type": "uint256", "name": "cooldown", "internalType": "uint256" }], "name": "allPlayers", "inputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "click", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "coolDownByPlayer", "inputs": [{ "type": "address", "name": "player", "internalType": "address" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "emergencyEnd", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "endGame", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "tuple", "name": "", "internalType": "struct CLICK1.Player", "components": [{ "type": "address", "name": "player", "internalType": "address" }, { "type": "uint256", "name": "clicks", "internalType": "uint256" }, { "type": "uint256", "name": "cooldown", "internalType": "uint256" }] }], "name": "firstPlace", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "gameEndTime", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "tuple[]", "name": "", "internalType": "struct CLICK1.Player[]", "components": [{ "type": "address", "name": "player", "internalType": "address" }, { "type": "uint256", "name": "clicks", "internalType": "uint256" }, { "type": "uint256", "name": "cooldown", "internalType": "uint256" }] }], "name": "getPlayers", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "live", "inputs": [] }, { "type": "function", "stateMutability": "payable", "outputs": [], "name": "mintNFT", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "mints", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "nft", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "numberByAddress", "inputs": [{ "type": "address", "name": "", "internalType": "address" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "bytes4", "name": "", "internalType": "bytes4" }], "name": "onERC721Received", "inputs": [{ "type": "address", "name": "", "internalType": "address" }, { "type": "address", "name": "", "internalType": "address" }, { "type": "uint256", "name": "", "internalType": "uint256" }, { "type": "bytes", "name": "", "internalType": "bytes" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "oneMinute", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "oneWeek", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "owner", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "playerByNumber", "inputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "players", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "renounceOwnership", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "player_", "internalType": "address" }, { "type": "uint256", "name": "clicks_", "internalType": "uint256" }, { "type": "uint256", "name": "cooldown_", "internalType": "uint256" }], "name": "returnPlayer", "inputs": [{ "type": "address", "name": "_player", "internalType": "address" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "tuple[]", "name": "", "internalType": "struct CLICK1.Player[]", "components": [{ "type": "address", "name": "player", "internalType": "address" }, { "type": "uint256", "name": "clicks", "internalType": "uint256" }, { "type": "uint256", "name": "cooldown", "internalType": "uint256" }] }], "name": "sortByClicks", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "startGame", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "startTimestamp", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "transferOwnership", "inputs": [{ "type": "address", "name": "newOwner", "internalType": "address" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "winner", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "withdrawWinnings", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "withdrew", "inputs": [] }, { "type": "receive", "stateMutability": "payable" }]

const place_abi = [{ "type": "constructor", "stateMutability": "nonpayable", "inputs": [] }, { "type": "event", "name": "OwnershipTransferred", "inputs": [{ "type": "address", "name": "previousOwner", "internalType": "address", "indexed": true }, { "type": "address", "name": "newOwner", "internalType": "address", "indexed": true }], "anonymous": false }, { "type": "event", "name": "PixelPlaced", "inputs": [{ "type": "uint256", "name": "location", "internalType": "uint256", "indexed": false }, { "type": "bytes32", "name": "color", "internalType": "bytes32", "indexed": false }, { "type": "address", "name": "holder", "internalType": "address", "indexed": false }], "anonymous": false }, { "type": "function", "stateMutability": "pure", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "acceptedColor", "inputs": [{ "type": "bytes32", "name": "color", "internalType": "bytes32" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "cooldown", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "bytes32[]", "name": "", "internalType": "bytes32[]" }], "name": "fetchRow", "inputs": [{ "type": "uint256", "name": "multiplier", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "live", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "owner", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "bytes32", "name": "color", "internalType": "bytes32" }, { "type": "address", "name": "holder", "internalType": "address" }], "name": "pixels", "inputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "placePixel", "inputs": [{ "type": "uint256", "name": "_location", "internalType": "uint256" }, { "type": "bytes32", "name": "_color", "internalType": "bytes32" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "playerCoolDown", "inputs": [{ "type": "address", "name": "wallet", "internalType": "address" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "power", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "renounceOwnership", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "bytes32", "name": "color_", "internalType": "bytes32" }, { "type": "address", "name": "holder_", "internalType": "address" }], "name": "returnSinglePixel", "inputs": [{ "type": "uint256", "name": "_location", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "setCooldown", "inputs": [{ "type": "uint256", "name": "newCooldown", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "transferOwnership", "inputs": [{ "type": "address", "name": "newOwner", "internalType": "address" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "walletCoolDown", "inputs": [{ "type": "address", "name": "", "internalType": "address" }] }]