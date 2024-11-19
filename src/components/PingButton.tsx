"use client"
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction, TransactionInstruction } from "@solana/web3.js";
import { FC } from "react"

const PROGRAM_ID = "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa";
const DATA_ACCOUNT_PUBKEY = "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod";

export const PingButton: FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const {sign, setSign} = useState<string | null>(null);

    const onClickHandler = async () => {
        // console.log("Ping!");
        if(!connection || !publicKey) {
            console.error("Wallet not connected or connection unavailble");
        }

        try {
            const programId = new PublicKey(PROGRAM_ID);
            const programDataAccount = new PublicKey(DATA_ACCOUNT_PUBKEY);
            const transaction = new Transaction();

            const instruction = new TransactionInstruction({
                keys: [
                    {
                        pubkey: programDataAccount,
                        isSigner: false,
                        isWritable: true
                    },
                ],
                programId
            });

            transaction.add(instruction);
            
            const signature = await sendTransaction(transaction, connection);
            console.log("Transaction Signature: ", signature);
            console.log(
                `You can view your transaction on Solana Explorer at:\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`,
              );
        } catch (error) {
            console.error("Transaction failed: ", error);
        }
    } 

    return (
        <div className="">
            <button className="" onClick={onClickHandler}>Ping!</button>
            <div>{sign === null ? "" : sign}</div>
        </div>
    );
}