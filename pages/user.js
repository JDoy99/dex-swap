import { getSession, signOut } from "next-auth/react";
import Moralis from "moralis";
import { useState } from "react";
import axios from "axios";
import { useSendTransaction } from "wagmi";
import tokensJson from "./tokens";

function User({ user, balance }) {
  const [fromToken] = useState("0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE");
  const [toToken, setToToken] = useState("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48");
  const [value, setValue] = useState("1000000000000000");
  const [valueExchanged, setValueExchanged] = useState("");
  const [valueExchangedDecimals, setValueExchangedDecimals] = useState(1e18);
  const [to, setTo] = useState("");
  const [txData, setTxData] = useState("");

  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
    request: {
      from: user.address,
      to: String(to),
      data: String(txData),
      value: String(value),
    },
  });

  function changeToToken(e) {
    setToToken(e.target.value);
    setValueExchanged("");
  }

  function changeValue(e) {
    setValue(e.target.value * 1e18);
    setValueExchanged("");
  }

  async function get1inchSwap() {
    const tx = await axios.get(
      `https://api.1inch.io/v4.0/1/swap?fromTokenAddress=${fromToken}&toTokenAddress=${toToken}&amount=${value}&fromAddress=${user.address}&slippage=1`
    );
    console.log(tx.data);
    setTo(tx.data.tx.to);
    setTxData(tx.data.tx.data);
    setValueExchangedDecimals(Number(`1E${tx.data.toToken.decimals}`));
    setValueExchanged(tx.data.toTokenAmount);
  }

  return (
    <div>
      <div>Connected: {user.address}</div>
      <br />
      <div>Ethereum Balance: {(balance.balance / 1e18).toFixed(4)}</div>
      <br />
      <select name={tokensJson.symbol} value={tokensJson.address}>
        <option value="0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE">ETH</option>
      </select>
      <input
        onChange={(e) => changeValue(e)}
        value={value / 1e18}
        type="number"
        min={0}
        max={balance.balance / 1e18}
      ></input>
      <br />
      <br />
      <select name={tokensJson.symbol} value={tokensJson.address} onChange={(e) => changeToToken(e)}>
        <option value={tokensJson[0].address}>{tokensJson[0].symbol}</option>
        <option value={tokensJson[1].address}>{tokensJson[1].symbol}</option>
        <option value={tokensJson[2].address}>{tokensJson[2].symbol}</option>
        <option value={tokensJson[3].address}>{tokensJson[3].symbol}</option>
        <option value={tokensJson[4].address}>{tokensJson[4].symbol}</option>
        <option value={tokensJson[5].address}>{tokensJson[5].symbol}</option>
        <option value={tokensJson[6].address}>{tokensJson[6].symbol}</option>
        <option value={tokensJson[7].address}>{tokensJson[7].symbol}</option>
        <option value={tokensJson[8].address}>{tokensJson[8].symbol}</option>
        <option value={tokensJson[9].address}>{tokensJson[9].symbol}</option>
      </select>
      <input value={!valueExchanged ? "" : (valueExchanged / valueExchangedDecimals).toFixed(3)} disabled={true}></input>
      <br />
      <br />
      <button onClick={get1inchSwap}>Get Conversion</button>
      <button disabled={!valueExchanged} onClick={sendTransaction}>
        Swap Tokens
      </button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
      <br />
      <br />
      <button onClick={() => signOut({ redirect: "/signin" })}>Sign out</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  const response = await Moralis.EvmApi.account.getNativeBalance({
    address: session.user.address,
    chain: 0x1,
  });

  return {
    props: { user: session.user, balance: response.raw },
  };
}

export default User;
