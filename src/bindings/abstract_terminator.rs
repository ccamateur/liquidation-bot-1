pub use abstractterminator_mod::*;
#[allow(clippy::too_many_arguments)]
mod abstractterminator_mod {
    #![allow(dead_code)]
    #![allow(unused_imports)]
    use ethers::{
        contract::{
            self as ethers_contract,
            builders::{ContractCall, Event},
            Contract, Lazy,
        },
        core::{
            self as ethers_core,
            abi::{Abi, Detokenize, InvalidOutputType, Token, Tokenizable},
            types::*,
        },
        providers::{self as ethers_providers, Middleware},
    };
    #[doc = "AbstractTerminator was auto-generated with ethers-rs Abigen. More information at: https://github.com/gakonst/ethers-rs"]
    use std::sync::Arc;
    pub static ABSTRACTTERMINATOR_ABI: ethers_contract::Lazy<ethers_core::abi::Abi> =
        ethers_contract::Lazy::new(|| {
            serde_json :: from_str ("[\n  {\n    \"anonymous\": false,\n    \"inputs\": [\n      {\n        \"indexed\": true,\n        \"internalType\": \"address\",\n        \"name\": \"previousOwner\",\n        \"type\": \"address\"\n      },\n      {\n        \"indexed\": true,\n        \"internalType\": \"address\",\n        \"name\": \"newOwner\",\n        \"type\": \"address\"\n      }\n    ],\n    \"name\": \"OwnershipTransferred\",\n    \"type\": \"event\"\n  },\n  {\n    \"inputs\": [\n      {\n        \"internalType\": \"address\",\n        \"name\": \"_executor\",\n        \"type\": \"address\"\n      }\n    ],\n    \"name\": \"allowExecutor\",\n    \"outputs\": [],\n    \"stateMutability\": \"nonpayable\",\n    \"type\": \"function\"\n  },\n  {\n    \"inputs\": [],\n    \"name\": \"beneficiary\",\n    \"outputs\": [\n      {\n        \"internalType\": \"address\",\n        \"name\": \"\",\n        \"type\": \"address\"\n      }\n    ],\n    \"stateMutability\": \"view\",\n    \"type\": \"function\"\n  },\n  {\n    \"inputs\": [\n      {\n        \"internalType\": \"address\",\n        \"name\": \"\",\n        \"type\": \"address\"\n      }\n    ],\n    \"name\": \"executors\",\n    \"outputs\": [\n      {\n        \"internalType\": \"bool\",\n        \"name\": \"\",\n        \"type\": \"bool\"\n      }\n    ],\n    \"stateMutability\": \"view\",\n    \"type\": \"function\"\n  },\n  {\n    \"inputs\": [\n      {\n        \"internalType\": \"address\",\n        \"name\": \"_executor\",\n        \"type\": \"address\"\n      }\n    ],\n    \"name\": \"forbidExecutor\",\n    \"outputs\": [],\n    \"stateMutability\": \"nonpayable\",\n    \"type\": \"function\"\n  },\n  {\n    \"inputs\": [\n      {\n        \"internalType\": \"address\",\n        \"name\": \"_creditManager\",\n        \"type\": \"address\"\n      },\n      {\n        \"internalType\": \"address\",\n        \"name\": \"_borrower\",\n        \"type\": \"address\"\n      },\n      {\n        \"components\": [\n          {\n            \"internalType\": \"uint256\",\n            \"name\": \"amountIn\",\n            \"type\": \"uint256\"\n          },\n          {\n            \"internalType\": \"address[]\",\n            \"name\": \"path\",\n            \"type\": \"address[]\"\n          },\n          {\n            \"internalType\": \"uint256\",\n            \"name\": \"amountOutMin\",\n            \"type\": \"uint256\"\n          }\n        ],\n        \"internalType\": \"struct ITerminator.UniV2Params[]\",\n        \"name\": \"_routes\",\n        \"type\": \"tuple[]\"\n      },\n      {\n        \"internalType\": \"address[]\",\n        \"name\": \"_yearnTokens\",\n        \"type\": \"address[]\"\n      }\n    ],\n    \"name\": \"liquidate\",\n    \"outputs\": [],\n    \"stateMutability\": \"nonpayable\",\n    \"type\": \"function\"\n  },\n  {\n    \"inputs\": [],\n    \"name\": \"owner\",\n    \"outputs\": [\n      {\n        \"internalType\": \"address\",\n        \"name\": \"\",\n        \"type\": \"address\"\n      }\n    ],\n    \"stateMutability\": \"view\",\n    \"type\": \"function\"\n  },\n  {\n    \"inputs\": [\n      {\n        \"internalType\": \"address[]\",\n        \"name\": \"creditManagers\",\n        \"type\": \"address[]\"\n      },\n      {\n        \"internalType\": \"address[]\",\n        \"name\": \"tokens\",\n        \"type\": \"address[]\"\n      }\n    ],\n    \"name\": \"provideAllowance\",\n    \"outputs\": [],\n    \"stateMutability\": \"nonpayable\",\n    \"type\": \"function\"\n  },\n  {\n    \"inputs\": [],\n    \"name\": \"renounceOwnership\",\n    \"outputs\": [],\n    \"stateMutability\": \"nonpayable\",\n    \"type\": \"function\"\n  },\n  {\n    \"inputs\": [\n      {\n        \"internalType\": \"address\",\n        \"name\": \"newOwner\",\n        \"type\": \"address\"\n      }\n    ],\n    \"name\": \"transferOwnership\",\n    \"outputs\": [],\n    \"stateMutability\": \"nonpayable\",\n    \"type\": \"function\"\n  },\n  {\n    \"inputs\": [\n      {\n        \"internalType\": \"address\",\n        \"name\": \"token\",\n        \"type\": \"address\"\n      },\n      {\n        \"internalType\": \"uint256\",\n        \"name\": \"amount\",\n        \"type\": \"uint256\"\n      }\n    ],\n    \"name\": \"transferToOwner\",\n    \"outputs\": [],\n    \"stateMutability\": \"nonpayable\",\n    \"type\": \"function\"\n  },\n  {\n    \"inputs\": [],\n    \"name\": \"uniV2Router\",\n    \"outputs\": [\n      {\n        \"internalType\": \"contract IUniswapV2Router02\",\n        \"name\": \"\",\n        \"type\": \"address\"\n      }\n    ],\n    \"stateMutability\": \"view\",\n    \"type\": \"function\"\n  },\n  {\n    \"inputs\": [],\n    \"name\": \"wethToken\",\n    \"outputs\": [\n      {\n        \"internalType\": \"address\",\n        \"name\": \"\",\n        \"type\": \"address\"\n      }\n    ],\n    \"stateMutability\": \"view\",\n    \"type\": \"function\"\n  },\n  {\n    \"stateMutability\": \"payable\",\n    \"type\": \"receive\"\n  }\n]\n") . expect ("invalid abi")
        });
    #[derive(Clone)]
    pub struct AbstractTerminator<M>(ethers_contract::Contract<M>);
    impl<M> std::ops::Deref for AbstractTerminator<M> {
        type Target = ethers_contract::Contract<M>;
        fn deref(&self) -> &Self::Target {
            &self.0
        }
    }
    impl<M: ethers_providers::Middleware> std::fmt::Debug for AbstractTerminator<M> {
        fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
            f.debug_tuple(stringify!(AbstractTerminator))
                .field(&self.address())
                .finish()
        }
    }
    impl<'a, M: ethers_providers::Middleware> AbstractTerminator<M> {
        #[doc = r" Creates a new contract instance with the specified `ethers`"]
        #[doc = r" client at the given `Address`. The contract derefs to a `ethers::Contract`"]
        #[doc = r" object"]
        pub fn new<T: Into<ethers_core::types::Address>>(
            address: T,
            client: ::std::sync::Arc<M>,
        ) -> Self {
            let contract = ethers_contract::Contract::new(
                address.into(),
                ABSTRACTTERMINATOR_ABI.clone(),
                client,
            );
            Self(contract)
        }
        #[doc = "Calls the contract's `allowExecutor` (0xb1b05f2a) function"]
        pub fn allow_executor(
            &self,
            executor: ethers_core::types::Address,
        ) -> ethers_contract::builders::ContractCall<M, ()> {
            self.0
                .method_hash([177, 176, 95, 42], executor)
                .expect("method not found (this should never happen)")
        }
        #[doc = "Calls the contract's `beneficiary` (0x38af3eed) function"]
        pub fn beneficiary(
            &self,
        ) -> ethers_contract::builders::ContractCall<M, ethers_core::types::Address> {
            self.0
                .method_hash([56, 175, 62, 237], ())
                .expect("method not found (this should never happen)")
        }
        #[doc = "Calls the contract's `executors` (0x9ac2a011) function"]
        pub fn executors(
            &self,
            p0: ethers_core::types::Address,
        ) -> ethers_contract::builders::ContractCall<M, bool> {
            self.0
                .method_hash([154, 194, 160, 17], p0)
                .expect("method not found (this should never happen)")
        }
        #[doc = "Calls the contract's `forbidExecutor` (0x6e9d5987) function"]
        pub fn forbid_executor(
            &self,
            executor: ethers_core::types::Address,
        ) -> ethers_contract::builders::ContractCall<M, ()> {
            self.0
                .method_hash([110, 157, 89, 135], executor)
                .expect("method not found (this should never happen)")
        }
        #[doc = "Calls the contract's `liquidate` (0x35eb19ad) function"]
        pub fn liquidate(
            &self,
            credit_manager: ethers_core::types::Address,
            borrower: ethers_core::types::Address,
            routes: Vec<(
                ethers_core::types::U256,
                Vec<ethers_core::types::Address>,
                ethers_core::types::U256,
            )>,
            yearn_tokens: Vec<ethers_core::types::Address>,
        ) -> ethers_contract::builders::ContractCall<M, ()> {
            self.0
                .method_hash(
                    [53, 235, 25, 173],
                    (credit_manager, borrower, routes, yearn_tokens),
                )
                .expect("method not found (this should never happen)")
        }
        #[doc = "Calls the contract's `owner` (0x8da5cb5b) function"]
        pub fn owner(
            &self,
        ) -> ethers_contract::builders::ContractCall<M, ethers_core::types::Address> {
            self.0
                .method_hash([141, 165, 203, 91], ())
                .expect("method not found (this should never happen)")
        }
        #[doc = "Calls the contract's `provideAllowance` (0x35f4c03a) function"]
        pub fn provide_allowance(
            &self,
            credit_managers: Vec<ethers_core::types::Address>,
            tokens: Vec<ethers_core::types::Address>,
        ) -> ethers_contract::builders::ContractCall<M, ()> {
            self.0
                .method_hash([53, 244, 192, 58], (credit_managers, tokens))
                .expect("method not found (this should never happen)")
        }
        #[doc = "Calls the contract's `renounceOwnership` (0x715018a6) function"]
        pub fn renounce_ownership(&self) -> ethers_contract::builders::ContractCall<M, ()> {
            self.0
                .method_hash([113, 80, 24, 166], ())
                .expect("method not found (this should never happen)")
        }
        #[doc = "Calls the contract's `transferOwnership` (0xf2fde38b) function"]
        pub fn transfer_ownership(
            &self,
            new_owner: ethers_core::types::Address,
        ) -> ethers_contract::builders::ContractCall<M, ()> {
            self.0
                .method_hash([242, 253, 227, 139], new_owner)
                .expect("method not found (this should never happen)")
        }
        #[doc = "Calls the contract's `transferToOwner` (0x8568523a) function"]
        pub fn transfer_to_owner(
            &self,
            token: ethers_core::types::Address,
            amount: ethers_core::types::U256,
        ) -> ethers_contract::builders::ContractCall<M, ()> {
            self.0
                .method_hash([133, 104, 82, 58], (token, amount))
                .expect("method not found (this should never happen)")
        }
        #[doc = "Calls the contract's `uniV2Router` (0x958c2e52) function"]
        pub fn uni_v2_router(
            &self,
        ) -> ethers_contract::builders::ContractCall<M, ethers_core::types::Address> {
            self.0
                .method_hash([149, 140, 46, 82], ())
                .expect("method not found (this should never happen)")
        }
        #[doc = "Calls the contract's `wethToken` (0x4b57b0be) function"]
        pub fn weth_token(
            &self,
        ) -> ethers_contract::builders::ContractCall<M, ethers_core::types::Address> {
            self.0
                .method_hash([75, 87, 176, 190], ())
                .expect("method not found (this should never happen)")
        }
        #[doc = "Gets the contract's `OwnershipTransferred` event"]
        pub fn ownership_transferred_filter(
            &self,
        ) -> ethers_contract::builders::Event<M, OwnershipTransferredFilter> {
            self.0.event()
        }
        #[doc = r" Returns an [`Event`](ethers_contract::builders::Event) builder for all events of this contract"]
        pub fn events(&self) -> ethers_contract::builders::Event<M, OwnershipTransferredFilter> {
            self.0.event_with_filter(Default::default())
        }
    }
    #[derive(Clone, Debug, Default, Eq, PartialEq, ethers_contract :: EthEvent)]
    #[ethevent(
        name = "OwnershipTransferred",
        abi = "OwnershipTransferred(address,address)"
    )]
    pub struct OwnershipTransferredFilter {
        #[ethevent(indexed)]
        pub previous_owner: ethers_core::types::Address,
        #[ethevent(indexed)]
        pub new_owner: ethers_core::types::Address,
    }
}
