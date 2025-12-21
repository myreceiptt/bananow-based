'use client';

import Image from "next/image";
import { ConnectButton, MediaRenderer, TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";
import { defineChain, getContract, toEther } from "thirdweb";
import { base } from "thirdweb/chains";
import { getContractMetadata } from "thirdweb/extensions/common";
import {
  claimTo,
  getActiveClaimCondition,
  getTotalClaimedSupply,
  nextTokenIdToMint,
} from "thirdweb/extensions/erc721";
import { useState } from "react";

export default function Home() {
  const account = useActiveAccount();
  const chain = defineChain(base);

  const [quantity, setQuantity] = useState(1);

  const contract = getContract({
    client,
    chain,
    address: "0xfd039aC57cc8E646802dBA4b7Cf6bc561E13A09A",
  });

  const { data: contractMetadata, isLoading: isContractMetadataLoading } = useReadContract(getContractMetadata, {
    contract: contract,
  });

  const { data: claimedSupply, isLoading: isClaimedSupplyLoading } = useReadContract(getTotalClaimedSupply, {
    contract: contract,
  });

  const { data: totalSupply, isLoading: isTotalSupplyLoading } = useReadContract(nextTokenIdToMint, {
    contract: contract,
  });

  const { data: claimCondition } = useReadContract(getActiveClaimCondition, {
    contract: contract,
  });

  const getPrice = (quantity: number) => {
    const total =
      quantity * parseInt(claimCondition?.pricePerToken.toString() || "0 ");
    return toEther(BigInt(total));
  };

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20 text-center">
        <Header />
        <ConnectButton
          client={client}
          chain={chain}
          appMetadata={{
            name: "BANANOW BASED NFTs Mint Page",
            url: "https://bananownfts.endhonesa.com",
          }}
        />
        <div className="flex flex-col items-center mt-4">
          {isContractMetadataLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <MediaRenderer
                client={client}
                src={
                  typeof contractMetadata?.image === "string"
                    ? contractMetadata.image
                    : undefined
                }
                className="rounded-xl"
              />
              <h2 className="text-xl font-semibold mt-4">
                {typeof contractMetadata?.name === "string" ? contractMetadata.name : ""}
              </h2>
              <p className="text-sm mt-2">
                {typeof contractMetadata?.description === "string" ? contractMetadata.description : ""}
              </p>
            </>
          )}
          {isClaimedSupplyLoading || isTotalSupplyLoading ? (
            <p>Loading...</p>
          ) : (
            <p className="text-base mt-2 font-bold">
              Total NFTs Supply: {claimedSupply?.toString()}/{totalSupply?.toString()}
            </p>
          )}
          <div className="flex flex-row items-center justify-center my-4">
            <button
              className="bg-black text-white px-4 py-2 rounded-md mr-4"
              onClick={() => setQuantity(Math.max(0, quantity - 0))}
            >-</button>
            <input
              type="number"
              value="0"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-10 text-center border border-gray-300 rounded-md bg-black text-white"
            />
            <button
              className="bg-black text-white px-4 py-2 rounded-md mr-4"
              onClick={() => setQuantity(quantity + 0)}
            >+</button>
          </div>
          <h2 className="text-xl font-semibold mt-4">
                MINTED OUT - SOLD OUT
              </h2>
{/*           <TransactionButton
            transaction={() => claimTo({
              contract: contract,
              to: account?.address || "",
              quantity: BigInt(quantity),
            })}
            onTransactionConfirmed={async () => {
              alert("Yeah, NFT Minted!");
              setQuantity(1);
            }}
          >
             {`Mint NFT (${getPrice(quantity)} ETH)`}
          </TransactionButton> */}
        </div>
        <div className="flex flex-col items-center mt-4">
          <p className="text-sm mt-2">Go to OpenSea.IO to get BANANOW BASED NFTs from the secondary market. Here is the link: <a href="https://bananow.endhonesa.com/base" target="_blank">BANANOW on OpenSea.IO</a>.</p>
          <p className="text-sm mt-2">Please DYOR, visit and read everything on <a href="https://bananow.endhonesa.com" target="_blank" title="Home Page of BANANOW.ENDHONESA.COM">BANANOW.LAND</a> home page.</p>
          <p className="text-sm mt-2">The official domain for BANANOW.LAND is BANANOW dot LAND, including all of its subdomains. Prof. NOTA Inc. is responsible for the website&apos;s availability, but this does not include the domain&apos;s availability. So, Prof. NOTA Inc. provides alternate addresses using some subdomains of ENDHONESA dot COM as our guarantee of website availability.</p>
          <p className="text-sm mt-2">Stay alert! Beware of scams! Hack them all, ethically!</p>
        </div>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl text-center font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        <a href="https://bananow.endhonesa.com" target="_blank" title="Home Page of BANANOW.ENDHONESA.COM">BANANOW.LAND</a>
      </h1>
    </header>
  );
}
