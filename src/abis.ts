import type { InterfaceAbi } from 'ethers';
export const CONTRACT_ABIS: Record<string, InterfaceAbi> = {
  "QairosOracle": [
    {
      "type": "constructor",
      "inputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "MAX_LEVEL",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "canary",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "deployer",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "firstBreakTime",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint64",
          "internalType": "uint64"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "lastBreak",
      "inputs": [],
      "outputs": [
        {
          "name": "bits",
          "type": "uint16",
          "internalType": "uint16"
        },
        {
          "name": "ts",
          "type": "uint64",
          "internalType": "uint64"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "report",
      "inputs": [
        {
          "name": "bits",
          "type": "uint16",
          "internalType": "uint16"
        },
        {
          "name": "armed",
          "type": "bool",
          "internalType": "bool"
        },
        {
          "name": "solver",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "rungBroken",
      "inputs": [
        {
          "name": "bits",
          "type": "uint16",
          "internalType": "uint16"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "setCanary",
      "inputs": [
        {
          "name": "canary_",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "threatLevel",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "event",
      "name": "ThreatRaised",
      "inputs": [
        {
          "name": "level",
          "type": "uint8",
          "indexed": false,
          "internalType": "uint8"
        },
        {
          "name": "bits",
          "type": "uint16",
          "indexed": false,
          "internalType": "uint16"
        },
        {
          "name": "solver",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "CanaryAlreadySet",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotCanary",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotDeployer",
      "inputs": []
    }
  ],
  "QairosCanary": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "oracle_",
          "type": "address",
          "internalType": "contract IQairosOracle"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "addRung",
      "inputs": [
        {
          "name": "bits",
          "type": "uint16",
          "internalType": "uint16"
        },
        {
          "name": "armed",
          "type": "bool",
          "internalType": "bool"
        },
        {
          "name": "p",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "a",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "b",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "gx",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "gy",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "qx",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "qy",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "label",
          "type": "string",
          "internalType": "string"
        }
      ],
      "outputs": [
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "commit",
      "inputs": [
        {
          "name": "commitment",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "commitBlock",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "commitmentFor",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "k",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "solver",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "curator",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "fund",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "oracle",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract IQairosOracle"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "renounceCuration",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "reveal",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "k",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "rung",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct QairosCanary.Rung",
          "components": [
            {
              "name": "bits",
              "type": "uint16",
              "internalType": "uint16"
            },
            {
              "name": "armed",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "broken",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "solver",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "brokenAt",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "bounty",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "curve",
              "type": "tuple",
              "internalType": "struct QairosMath.Curve",
              "components": [
                {
                  "name": "p",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "a",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "b",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ]
            },
            {
              "name": "gx",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "gy",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "qx",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "qy",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "label",
              "type": "string",
              "internalType": "string"
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "rungCount",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "verify",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "k",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "event",
      "name": "Committed",
      "inputs": [
        {
          "name": "solver",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "commitment",
          "type": "bytes32",
          "indexed": false,
          "internalType": "bytes32"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Funded",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "from",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RungAdded",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "bits",
          "type": "uint16",
          "indexed": false,
          "internalType": "uint16"
        },
        {
          "name": "armed",
          "type": "bool",
          "indexed": false,
          "internalType": "bool"
        },
        {
          "name": "label",
          "type": "string",
          "indexed": false,
          "internalType": "string"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RungBroken",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "bits",
          "type": "uint16",
          "indexed": false,
          "internalType": "uint16"
        },
        {
          "name": "solver",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "k",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "bounty",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "AlreadyBroken",
      "inputs": []
    },
    {
      "type": "error",
      "name": "BadRung",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NoCommit",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotCurator",
      "inputs": []
    },
    {
      "type": "error",
      "name": "PayoutFailed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "Reentrancy",
      "inputs": []
    },
    {
      "type": "error",
      "name": "RevealTooEarly",
      "inputs": []
    },
    {
      "type": "error",
      "name": "WrongKey",
      "inputs": []
    }
  ],
  "QairosArk": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "oracle_",
          "type": "address",
          "internalType": "contract IQairosOracle"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "commit",
      "inputs": [
        {
          "name": "commitment",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "commitmentFor",
      "inputs": [
        {
          "name": "pqPublicKey",
          "type": "bytes",
          "internalType": "bytes"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "entries",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "commitment",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "committedAt",
          "type": "uint64",
          "internalType": "uint64"
        },
        {
          "name": "blockNumber",
          "type": "uint64",
          "internalType": "uint64"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isPreMoment",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "oracle",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract IQairosOracle"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalEntries",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "verify",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "pqPublicKey",
          "type": "bytes",
          "internalType": "bytes"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "event",
      "name": "Committed",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "commitment",
          "type": "bytes32",
          "indexed": false,
          "internalType": "bytes32"
        },
        {
          "name": "timestamp",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        },
        {
          "name": "preQairosMoment",
          "type": "bool",
          "indexed": false,
          "internalType": "bool"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "MomentPassed",
      "inputs": []
    }
  ],
  "QairosVault": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "oracle_",
          "type": "address",
          "internalType": "contract IQairosOracle"
        },
        {
          "name": "ark_",
          "type": "address",
          "internalType": "contract QairosArk"
        },
        {
          "name": "tripLevel_",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "ark",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract QairosArk"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "breakerTripped",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "commitRecovery",
      "inputs": [
        {
          "name": "commitment",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "deposit",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "qOracle",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract IQairosOracle"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "recover",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "pqPublicKey",
          "type": "bytes",
          "internalType": "bytes"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "recoveryCommitBlock",
      "inputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "recoveryCommitment",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "pqPublicKey",
          "type": "bytes",
          "internalType": "bytes"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "tripLevel",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "withdraw",
      "inputs": [
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Deposited",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Recovered",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RecoveryCommitted",
      "inputs": [
        {
          "name": "commitment",
          "type": "bytes32",
          "indexed": false,
          "internalType": "bytes32"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Withdrawn",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "ArkMismatch",
      "inputs": []
    },
    {
      "type": "error",
      "name": "Insufficient",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NoRecoveryCommit",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotPreMoment",
      "inputs": []
    },
    {
      "type": "error",
      "name": "QuantumBreakerTripped",
      "inputs": [
        {
          "name": "level",
          "type": "uint8",
          "internalType": "uint8"
        },
        {
          "name": "threshold",
          "type": "uint8",
          "internalType": "uint8"
        }
      ]
    },
    {
      "type": "error",
      "name": "RecoveryTooEarly",
      "inputs": []
    },
    {
      "type": "error",
      "name": "Reentrancy",
      "inputs": []
    },
    {
      "type": "error",
      "name": "TransferFailed",
      "inputs": []
    }
  ],
  "QairosMarket": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "oracle_",
          "type": "address",
          "internalType": "contract IQairosOracle"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "buy",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "yes",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "claim",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "createMarket",
      "inputs": [
        {
          "name": "bits",
          "type": "uint16",
          "internalType": "uint16"
        },
        {
          "name": "deadline",
          "type": "uint64",
          "internalType": "uint64"
        },
        {
          "name": "question",
          "type": "string",
          "internalType": "string"
        }
      ],
      "outputs": [
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "creator",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "impliedYesBps",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "market",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct QairosMarket.Market",
          "components": [
            {
              "name": "bits",
              "type": "uint16",
              "internalType": "uint16"
            },
            {
              "name": "deadline",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "settled",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "yesWon",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "yesPool",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "noPool",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "question",
              "type": "string",
              "internalType": "string"
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "marketCount",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "noStake",
      "inputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "oracle",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract IQairosOracle"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "settle",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "yesStake",
      "inputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "event",
      "name": "Bought",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "buyer",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "yes",
          "type": "bool",
          "indexed": false,
          "internalType": "bool"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Claimed",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "account",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "payout",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "MarketCreated",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "bits",
          "type": "uint16",
          "indexed": false,
          "internalType": "uint16"
        },
        {
          "name": "deadline",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        },
        {
          "name": "question",
          "type": "string",
          "indexed": false,
          "internalType": "string"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Settled",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "yesWon",
          "type": "bool",
          "indexed": false,
          "internalType": "bool"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "Closed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotCreator",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotSettleable",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotSettled",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NothingToClaim",
      "inputs": []
    },
    {
      "type": "error",
      "name": "Reentrancy",
      "inputs": []
    },
    {
      "type": "error",
      "name": "TransferFailed",
      "inputs": []
    }
  ],
  "QairosInsurance": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "oracle_",
          "type": "address",
          "internalType": "contract IQairosOracle"
        },
        {
          "name": "market_",
          "type": "address",
          "internalType": "contract QairosMarket"
        },
        {
          "name": "marketId_",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "BASE_BPS",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "MAX_YEARS",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "SLOPE_BPS",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "buyPolicy",
      "inputs": [
        {
          "name": "coverage",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "years_",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "claim",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "expire",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "freeCapital",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "lockedCoverage",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "market",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract QairosMarket"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "marketId",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "oracle",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract IQairosOracle"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "policies",
      "inputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "holder",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "coverage",
          "type": "uint128",
          "internalType": "uint128"
        },
        {
          "name": "start",
          "type": "uint64",
          "internalType": "uint64"
        },
        {
          "name": "expiry",
          "type": "uint64",
          "internalType": "uint64"
        },
        {
          "name": "closed",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "policyCount",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "quote",
      "inputs": [
        {
          "name": "coverage",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "years_",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "rateBps",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "shares",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalShares",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "underwrite",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "withdraw",
      "inputs": [
        {
          "name": "s",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "PolicyBought",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "holder",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "coverage",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "premium",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "expiry",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "PolicyExpired",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "PolicyPaid",
      "inputs": [
        {
          "name": "id",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "coverage",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Underwritten",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "shares",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Withdrawn",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "shares",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "BadTerm",
      "inputs": []
    },
    {
      "type": "error",
      "name": "Locked",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NoCapacity",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotCovered",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotHolder",
      "inputs": []
    },
    {
      "type": "error",
      "name": "PolicyClosed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "Reentrancy",
      "inputs": []
    },
    {
      "type": "error",
      "name": "StillActive",
      "inputs": []
    },
    {
      "type": "error",
      "name": "TransferFailed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "WrongPremium",
      "inputs": [
        {
          "name": "expected",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    }
  ]
};
