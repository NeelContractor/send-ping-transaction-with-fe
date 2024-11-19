"use client"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Image from "next/image"
import { FC } from "react"

const AppBar: FC = () => {
    return (
        <div className="">
            <Image src={"/solanaLogo.png"} alt={""} height={30} width={200} />
            <span>Wallet-Adapter Example</span>
            <WalletMultiButton />
        </div>
    )
}

export default AppBar;