import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useMemo } from "react";
import { UmiProvider } from "../utils/UmiProvider";
import "@/styles/globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import { ChakraProvider } from '@chakra-ui/react'
import { image, headerText } from 'settings'
import { SolanaTimeProvider } from "@/utils/SolanaTimeContext";


export default function App({ Component, pageProps }: AppProps) {
  let network = WalletAdapterNetwork.Devnet;
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === "mainnet-beta" || process.env.NEXT_PUBLIC_ENVIRONMENT === "mainnet") {
    network = WalletAdapterNetwork.Mainnet;
  }
  let endpoint = "https://api.devnet.solana.com";
  if (process.env.NEXT_PUBLIC_RPC) {
    endpoint = process.env.NEXT_PUBLIC_RPC;
  }
  const wallets = useMemo(
    () => [
    ],
    []
  );
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>{headerText}</title>
        <link rel="icon" href="/favicon.ico"/>

        <meta charSet="UTF-8"/>
        <meta content="IE=Edge" http-equiv="X-UA-Compatible"/>

        <meta name="title" property="og:title" content={headerText}/>
        <meta name="description" property="og:description"
              content="·-· Guanteen 🤪🦶🏻 is a collection of 3,456 unique beings from the world of WTF who don't give dips-hit to other people and be twerking 🍑 all day, everyday and everywhere. This is the first ·-· Guanteen 🤪🦶🏻 collection by us."/>
        <meta name="image" property="og:image" content="https://i.imgur.com/20FkI66.jpg"/>
        <meta name="keywords"
              content="Guanteen, Guanteen NFT, NFT, DMT, Digital Matter Theory, Ordinal"/>
        <meta name="author" content="Guanteen NFT"/>
        <meta name="theme-color" content="#f8dcc4"/>

        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <meta name="apple-mobile-web-app-title" content={headerText}/>

        <meta property="og:type" content="website"/>
        <meta property="og:image:secure_url" content="https://i.imgur.com/20FkI66.jpg"/>
        <meta property="og:image:type" content="image/jpg"/>
        <meta property="og:image:alt" content="Guanteen NFT collection"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:url" content="https://guanteen.wtf"/>
        <meta property="og:site_name" content={headerText}/>

        <meta name="twitter:site" content="@guanteen_nft"/>
        <meta name="twitter:creator" content="@guanteen_nft"/>
        <meta name="twitter:title" content={headerText}/>
        <meta name="twitter:description"
              content="·-· Guanteen 🤪🦶🏻 is a collection of 3,456 unique beings from the world of WTF who don't give dips-hit to other people and be twerking 🍑 all day, everyday and everywhere. This is the first ·-· Guanteen 🤪🦶🏻 collection by us."/>
        <meta name="twitter:image" content="https://i.imgur.com/20FkI66.jpg"/>
        <meta name="twitter:image:alt" content="Guanteen NFT collection"/>


      </Head>
      <ChakraProvider>
        <WalletProvider wallets={wallets}>
          <UmiProvider endpoint={endpoint}>
            <WalletModalProvider>
              <SolanaTimeProvider>
                <Component {...pageProps} />
              </SolanaTimeProvider>
            </WalletModalProvider>
          </UmiProvider>
        </WalletProvider>
      </ChakraProvider>
    </>
  );
}
