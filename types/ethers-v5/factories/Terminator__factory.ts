/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Terminator, TerminatorInterface } from "../Terminator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_wethToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "allowExecutor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "executors",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "forbidExecutor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creditManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_borrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "amountOutMin",
            type: "uint256",
          },
        ],
        internalType: "struct Terminator.UniV2Params[]",
        name: "_paths",
        type: "tuple[]",
      },
    ],
    name: "liquidateAndSellOnV2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferToOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "wethToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620028ff380380620028ff83398181016040528101906200003791906200014e565b6000620000496200012f60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620001c8565b600033905090565b6000815190506200014881620001ae565b92915050565b6000602082840312156200016157600080fd5b6000620001718482850162000137565b91505092915050565b600062000187826200018e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620001b9816200017a565b8114620001c557600080fd5b50565b61272780620001d86000396000f3fe60806040526004361061008a5760003560e01c80638da5cb5b116100595780638da5cb5b1461012a5780639ac2a01114610155578063b1b05f2a14610192578063b6fa37b1146101bb578063f2fde38b146101e457610091565b80634b57b0be146100965780636e9d5987146100c1578063715018a6146100ea5780638568523a1461010157610091565b3661009157005b600080fd5b3480156100a257600080fd5b506100ab61020d565b6040516100b89190612245565b60405180910390f35b3480156100cd57600080fd5b506100e860048036038101906100e39190611efb565b610233565b005b3480156100f657600080fd5b506100ff61033d565b005b34801561010d57600080fd5b5061012860048036038101906101239190611fcd565b6104aa565b005b34801561013657600080fd5b5061013f610588565b60405161014c9190612245565b60405180910390f35b34801561016157600080fd5b5061017c60048036038101906101779190611efb565b6105b1565b6040516101899190612304565b60405180910390f35b34801561019e57600080fd5b506101b960048036038101906101b49190611efb565b6105d1565b005b3480156101c757600080fd5b506101e260048036038101906101dd9190611f4d565b6106db565b005b3480156101f057600080fd5b5061020b60048036038101906102069190611efb565b61115e565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61023b611350565b73ffffffffffffffffffffffffffffffffffffffff16610259610588565b73ffffffffffffffffffffffffffffffffffffffff16146102e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b610345611350565b73ffffffffffffffffffffffffffffffffffffffff16610363610588565b73ffffffffffffffffffffffffffffffffffffffff16146103ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6104b2611350565b73ffffffffffffffffffffffffffffffffffffffff166104d0610588565b73ffffffffffffffffffffffffffffffffffffffff1614610559576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b61058433828473ffffffffffffffffffffffffffffffffffffffff166113589092919063ffffffff16565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60026020528060005260406000206000915054906101000a900460ff1681565b6105d9611350565b73ffffffffffffffffffffffffffffffffffffffff166105f7610588565b73ffffffffffffffffffffffffffffffffffffffff1614610680576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610767576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075e9061235f565b60405180910390fd5b600085905060008173ffffffffffffffffffffffffffffffffffffffff1663f93f515b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156107b457600080fd5b505afa1580156107c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ec9190612073565b905060008273ffffffffffffffffffffffffffffffffffffffff1663e958b704886040518263ffffffff1660e01b81526004016108299190612245565b60206040518083038186803b15801561084157600080fd5b505afa158015610855573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108799190611f24565b905060008273ffffffffffffffffffffffffffffffffffffffff166320a05ff76040518163ffffffff1660e01b815260040160206040518083038186803b1580156108c357600080fd5b505afa1580156108d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fb919061209c565b905060008167ffffffffffffffff8111801561091657600080fd5b506040519080825280602002602001820160405280156109455781602001602082028036833780820191505090505b50905060008473ffffffffffffffffffffffffffffffffffffffff1663b451cecc856040518263ffffffff1660e01b81526004016109839190612245565b60206040518083038186803b15801561099b57600080fd5b505afa1580156109af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d3919061209c565b90506000838989905014610a1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a139061233f565b60405180910390fd5b6000600190505b84811015610b7a57806001901b915060008284161115610b6d5760008773ffffffffffffffffffffffffffffffffffffffff16635e5f2e26836040518263ffffffff1660e01b8152600401610a78919061237f565b60206040518083038186803b158015610a9057600080fd5b505afa158015610aa4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac89190611f24565b90508073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610b039190612260565b60206040518083038186803b158015610b1b57600080fd5b505afa158015610b2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b53919061209c565b858381518110610b5f57fe5b602002602001018181525050505b8080600101915050610a23565b50610c02878873ffffffffffffffffffffffffffffffffffffffff16632495a5996040518163ffffffff1660e01b815260040160206040518083038186803b158015610bc557600080fd5b505afa158015610bd9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bfd9190611f24565b6113fa565b8673ffffffffffffffffffffffffffffffffffffffff1663a69a7dd68c3060006040518463ffffffff1660e01b8152600401610c40939291906122a4565b600060405180830381600087803b158015610c5a57600080fd5b505af1158015610c6e573d6000803e3d6000fd5b50505050600173e5267045739e4d6fca15bb4a79190012f146893b73ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610cc19190612260565b60206040518083038186803b158015610cd957600080fd5b505afa158015610ced573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d11919061209c565b1115610dad5773e5267045739e4d6fca15bb4a79190012f146893b73ffffffffffffffffffffffffffffffffffffffff16633ccfd60b6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610d7357600080fd5b505af1158015610d87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dab919061209c565b505b600173980e4d8a22105c2a2fa2252b7685f32fc756451273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610dfc9190612260565b60206040518083038186803b158015610e1457600080fd5b505afa158015610e28573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4c919061209c565b1115610ee85773980e4d8a22105c2a2fa2252b7685f32fc756451273ffffffffffffffffffffffffffffffffffffffff16633ccfd60b6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610eae57600080fd5b505af1158015610ec2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee6919061209c565b505b6000600190505b8481101561114f57806001901b9150600082841611156111425760008773ffffffffffffffffffffffffffffffffffffffff16635e5f2e26836040518263ffffffff1660e01b8152600401610f44919061237f565b60206040518083038186803b158015610f5c57600080fd5b505afa158015610f70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f949190611f24565b905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610fd19190612260565b60206040518083038186803b158015610fe957600080fd5b505afa158015610ffd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611021919061209c565b9050600186848151811061103157fe5b60200260200101510181111561113f57600186848151811061104f57fe5b602002602001015182030390508b8b8481811061106857fe5b905060200281019061107a919061249b565b80602001906110899190612444565b600081811061109457fe5b90506020020160208101906110a99190611efb565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611116576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110d9061231f565b60405180910390fd5b61113e8d828e8e8781811061112757fe5b9050602002810190611139919061249b565b6115f2565b5b50505b8080600101915050610eef565b50505050505050505050505050565b611166611350565b73ffffffffffffffffffffffffffffffffffffffff16611184610588565b73ffffffffffffffffffffffffffffffffffffffff161461120d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611293576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061265b6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b6113f58363a9059cbb60e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061183e565b505050565b61148d8173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b815260040161143892919061227b565b60206040518083038186803b15801561145057600080fd5b505afa158015611464573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611488919061209c565b61192d565b7f3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b81526004016114e992919061227b565b60206040518083038186803b15801561150157600080fd5b505afa158015611515573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611539919061209c565b10156115ee578073ffffffffffffffffffffffffffffffffffffffff1663095ea7b3837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b815260040161159a9291906122db565b602060405180830381600087803b1580156115b457600080fd5b505af11580156115c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ec919061204a565b505b5050565b61162b838280602001906116069190612444565b600081811061161157fe5b90506020020160208101906116269190611efb565b6113fa565b600061165a826000013561164c8585604001356119c690919063ffffffff16565b611a4c90919063ffffffff16565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168280602001906116a59190612444565b60008181106116b057fe5b90506020020160208101906116c59190611efb565b73ffffffffffffffffffffffffffffffffffffffff16141561178e578373ffffffffffffffffffffffffffffffffffffffff16637ff36ab5848385806020019061170f9190612444565b30426040518763ffffffff1660e01b815260040161173195949392919061239a565b6000604051808303818588803b15801561174a57600080fd5b505af115801561175e573d6000803e3d6000fd5b50505050506040513d6000823e3d601f19601f820116820180604052508101906117889190612009565b50611838565b8373ffffffffffffffffffffffffffffffffffffffff166338ed173984838580602001906117bc9190612444565b30426040518763ffffffff1660e01b81526004016117df969594939291906123e8565b600060405180830381600087803b1580156117f957600080fd5b505af115801561180d573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906118369190612009565b505b50505050565b60006118a0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611ad59092919063ffffffff16565b9050600081511115611928578080602001905160208110156118c157600080fd5b8101908080519060200190929190505050611927576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806126c8602a913960400191505060405180910390fd5b5b505050565b6119c381604051602401808281526020019150506040516020818303038152906040527ff5b1bba9000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611aed565b50565b6000808314156119d95760009050611a46565b60008284029050828482816119ea57fe5b0414611a41576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806126a76021913960400191505060405180910390fd5b809150505b92915050565b6000808211611ac3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060200191505060405180910390fd5b818381611acc57fe5b04905092915050565b6060611ae48484600085611b16565b90509392505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b606082471015611b71576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806126816026913960400191505060405180910390fd5b611b7a85611cbe565b611bec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310611c3b5780518252602082019150602081019050602083039250611c18565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611c9d576040519150601f19603f3d011682016040523d82523d6000602084013e611ca2565b606091505b5091509150611cb2828286611cd1565b92505050949350505050565b600080823b905060008111915050919050565b60608315611ce157829050611d96565b600083511115611cf45782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611d5b578082015181840152602081019050611d40565b50505050905090810190601f168015611d885780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b9392505050565b6000611db0611dab846124f0565b6124bf565b90508083825260208201905082856020860282011115611dcf57600080fd5b60005b85811015611dff5781611de58882611ee6565b845260208401935060208301925050600181019050611dd2565b5050509392505050565b600081359050611e18816125fe565b92915050565b600081519050611e2d816125fe565b92915050565b60008083601f840112611e4557600080fd5b8235905067ffffffffffffffff811115611e5e57600080fd5b602083019150836020820283011115611e7657600080fd5b9250929050565b600082601f830112611e8e57600080fd5b8151611e9e848260208601611d9d565b91505092915050565b600081519050611eb681612615565b92915050565b600081519050611ecb8161262c565b92915050565b600081359050611ee081612643565b92915050565b600081519050611ef581612643565b92915050565b600060208284031215611f0d57600080fd5b6000611f1b84828501611e09565b91505092915050565b600060208284031215611f3657600080fd5b6000611f4484828501611e1e565b91505092915050565b600080600080600060808688031215611f6557600080fd5b6000611f7388828901611e09565b9550506020611f8488828901611e09565b9450506040611f9588828901611e09565b935050606086013567ffffffffffffffff811115611fb257600080fd5b611fbe88828901611e33565b92509250509295509295909350565b60008060408385031215611fe057600080fd5b6000611fee85828601611e09565b9250506020611fff85828601611ed1565b9150509250929050565b60006020828403121561201b57600080fd5b600082015167ffffffffffffffff81111561203557600080fd5b61204184828501611e7d565b91505092915050565b60006020828403121561205c57600080fd5b600061206a84828501611ea7565b91505092915050565b60006020828403121561208557600080fd5b600061209384828501611ebc565b91505092915050565b6000602082840312156120ae57600080fd5b60006120bc84828501611ee6565b91505092915050565b60006120d183836120ec565b60208301905092915050565b6120e6816125c6565b82525050565b6120f58161256c565b82525050565b6121048161256c565b82525050565b60006121168385612533565b93506121218261251c565b8060005b8581101561215a576121378284612555565b61214188826120c5565b975061214c83612526565b925050600181019050612125565b5085925050509392505050565b6121708161257e565b82525050565b6000612183600e83612544565b91507f696e636f727265637420706174680000000000000000000000000000000000006000830152602082019050919050565b60006121c3601583612544565b91507f496e636f72726563742070617468206c656e67746800000000000000000000006000830152602082019050919050565b6000612203601283612544565b91507f466f72206578656375746f7273206f6e6c7900000000000000000000000000006000830152602082019050919050565b61223f816125bc565b82525050565b600060208201905061225a60008301846120fb565b92915050565b600060208201905061227560008301846120dd565b92915050565b600060408201905061229060008301856120dd565b61229d60208301846120fb565b9392505050565b60006060820190506122b960008301866120fb565b6122c660208301856120dd565b6122d36040830184612167565b949350505050565b60006040820190506122f060008301856120fb565b6122fd6020830184612236565b9392505050565b60006020820190506123196000830184612167565b92915050565b6000602082019050818103600083015261233881612176565b9050919050565b60006020820190508181036000830152612358816121b6565b9050919050565b60006020820190508181036000830152612378816121f6565b9050919050565b60006020820190506123946000830184612236565b92915050565b60006080820190506123af6000830188612236565b81810360208301526123c281868861210a565b90506123d160408301856120dd565b6123de6060830184612236565b9695505050505050565b600060a0820190506123fd6000830189612236565b61240a6020830188612236565b818103604083015261241d81868861210a565b905061242c60608301856120dd565b6124396080830184612236565b979650505050505050565b6000808335600160200384360303811261245d57600080fd5b80840192508235915067ffffffffffffffff82111561247b57600080fd5b60208301925060208202360383131561249357600080fd5b509250929050565b6000823560016060038336030381126124b357600080fd5b80830191505092915050565b6000604051905081810181811067ffffffffffffffff821117156124e6576124e56125fc565b5b8060405250919050565b600067ffffffffffffffff82111561250b5761250a6125fc565b5b602082029050602081019050919050565b6000819050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006125646020840184611e09565b905092915050565b60006125778261259c565b9050919050565b60008115159050919050565b60006125958261256c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006125d1826125d8565b9050919050565b60006125e3826125ea565b9050919050565b60006125f58261259c565b9050919050565bfe5b6126078161256c565b811461261257600080fd5b50565b61261e8161257e565b811461262957600080fd5b50565b6126358161258a565b811461264057600080fd5b50565b61264c816125bc565b811461265757600080fd5b5056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220a5be10e5a9a8cb17fc0fcd9ecdd80c01c553653a8474e58d822e7681752171bd64736f6c63430007060033";

export class Terminator__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _wethToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Terminator> {
    return super.deploy(_wethToken, overrides || {}) as Promise<Terminator>;
  }
  getDeployTransaction(
    _wethToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_wethToken, overrides || {});
  }
  attach(address: string): Terminator {
    return super.attach(address) as Terminator;
  }
  connect(signer: Signer): Terminator__factory {
    return super.connect(signer) as Terminator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TerminatorInterface {
    return new utils.Interface(_abi) as TerminatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Terminator {
    return new Contract(address, _abi, signerOrProvider) as Terminator;
  }
}
