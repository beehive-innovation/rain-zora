// SPDX-License-Identifier: CAL
pragma solidity ^0.8.10;

import "./ISingleEditionMintable.sol";
import { TierByConstruction } from "@beehiveinnovation/rain-protocol/contracts/tier/TierByConstruction.sol";
import { ITier } from "@beehiveinnovation/rain-protocol/contracts/tier/ITier.sol";

contract GatedSingleEditionMintable is TierByConstruction {
    address private underlyingContract;
    uint256 public minimumStatus;

    constructor (
        address underlyingContract_,
        ITier tier_,
        uint256 minimumStatus_
    ) TierByConstruction(tier_) {
        underlyingContract = underlyingContract_;
        minimumStatus = minimumStatus_;
    }

    function mintEdition(address to) external returns (uint256) {
        require(
            isTier(to, minimumStatus),
            "MIN_TIER"
        );
        return ISingleEditionMintable(underlyingContract).mintEdition(to);
    }

    function mintEditions(address[] memory to) external returns (uint256) {
        // TODO: Check tiers
        return ISingleEditionMintable(underlyingContract).mintEditions(to);
    }
}
