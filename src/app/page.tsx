import AppBar from "@/components/AppBar";
import { PingButton } from "@/components/PingButton";
import WalletContextProvider from "@/components/WalletContextProvider";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Wallet-Adapter Example</title>
        <meta
          name="description"
          content="Wallet-Adapter Example"
        />
      </Head>
      <WalletContextProvider>
          <AppBar />
          <div className="">
            <PingButton/>
          </div>
        </WalletContextProvider>
    </div>
  );
}
