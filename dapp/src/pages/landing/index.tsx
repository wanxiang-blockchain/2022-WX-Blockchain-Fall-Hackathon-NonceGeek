import { useState, useEffect } from 'react';
import { history } from 'umi';

import Button from '@/components/Button';
import Header from '@/components/Header';
import GradientText from '@/components/GradientText';

import CloseIcon from '@/assets/img/close-icon.png';
import MetaMaskIcon from '@/assets/img/metamask.png';
import OkIcon from '@/assets/img/ok.png';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

import { showAccount } from '@/utils/funUtils';
import './index.less';

enum LoginStatus {
  UnloggedIn = 'UnloggedIn',
  Logging = 'Logging',
  LoggedIn = 'LoggedIn',
}

export default function IndexPage() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const [showMask, setShowMask] = useState(false);
  const [currLoginStatus, setCurrLoginStatus] = useState(
    LoginStatus.UnloggedIn,
  );

  const toggleShowMask = () => {
    setShowMask(!showMask);
  };

  const hideMask = () => {
    setShowMask(false);
  };

  const beginLogin = () => {
    if (address) {
      setCurrLoginStatus(LoginStatus.Logging);
    } else {
      connect();
      setCurrLoginStatus(LoginStatus.Logging);
    }
  };

  const finishLogin = () => {
    setCurrLoginStatus(LoginStatus.LoggedIn);
  };

  const goToHome = () => {
    history.push(`/home?addr=${address}`);
  };
  const maskBlur = {
    backdropFilter: 'blur(30px)',
  };
  useEffect(() => {
    console.log(address);
  }, [address]);
  return (
    <div className="page w-full min-h-screen relative bg-black text-white font-IBMPlexMono">
      <div className="content w-main h-full mx-auto flex flex-col">
        <Header />
        <div className="slogon pt-40 flex flex-col items-end text-[56px] text-white font-bold">
          <span>Let all DAOs and Buidlers</span>
          <span>show themselves to the</span>
          <span>world a full play.</span>
        </div>
        <div className="vision w-full flex justify-end">
          <span className="mt-52 w-[44%] text-right">
          Focus on DAOs, developers and other creators, based on Venachain, IPFS and other technology stacks, SoulCard provides on-chain interactive namecards with high information density that can be Mint as SBT, allowing users to fully display themselves in the cyber world and build a personal brand / DAO brand.
          </span>
        </div>
        <div
          className="go mt-40 pb-20 flex justify-center"
          onClick={() => toggleShowMask()}
        >
          <Button
            colorStyle="green"
            buttonText="Get Started"
            withSpace={false}
            font="IBMPlexMonoBold"
            fontSize="lg"
          />
        </div>
      </div>
      {showMask && (
        <div
          className="mask fixed top-0 left-0 right-0 bottom-0 bg-black/30 flex justify-center items-center"
          style={maskBlur}
        >
          <div className="dialog-wrapper">
            <div className="dialog w-[422px] bg-black p-4 flex flex-col items-center">
              <div className="close-icon w-full flex justify-end items-center">
                <img
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => hideMask()}
                  src={CloseIcon}
                  alt="close"
                />
              </div>
              <div className="title mt-2 font-IBMPlexMonoBold text-[24px]">
                {currLoginStatus !== LoginStatus.LoggedIn
                  ? 'CONNECT TO WALLET'
                  : 'SUCCESSFULLY CONNECTED'}
              </div>
              {currLoginStatus === LoginStatus.UnloggedIn && (
                <>
                  <div className="metamask-wrapper mt-8">
                    <div
                      className="metamask bg-black hover:bg-transparent py-1 pl-4 pr-6 flex items-center text-white hover:text-black cursor-pointer"
                      onClick={() => beginLogin()}
                    >
                      <img className="w-8 h-8" src={MetaMaskIcon} alt="" />
                      <div className="ml-4 font-IBMPlexMonoBold text-[14px]">
                        MetaMask
                      </div>
                    </div>
                  </div>
                  <div className="no-wallet mt-7 font-IBMPlexMono underline">
                    I don't have a wallet
                  </div>
                  <div className="agree mt-5 flex items-center">
                    <input
                      className="accent-green-300"
                      type="checkbox"
                      name="agree"
                      id="agree"
                    />
                    <label
                      htmlFor="agree"
                      className="ml-2 opacity-50 font-IBMPlexMono text-[12px]"
                    >
                      I agree to Top5 Terms and Privacy Policy.
                    </label>
                  </div>
                </>
              )}
              {currLoginStatus === LoginStatus.Logging && (
                <>
                  <div className="mt-3 px-9 font-IBMPlexMono text-[14px]">
                    Skip approving every interaction with your wallet by
                    allowing SoulCard to remember you.
                  </div>
                  <div className="address mt-5 px-1 py-2 bg-[#4a4a4a] opacity-50">
                    <span className="font-Inter font-bold text-[#c5c5c5] text-[14px]">
                      {address && showAccount(address)}
                    </span>
                  </div>
                  <div className="mt-6" onClick={() => finishLogin()}>
                    <Button
                      colorStyle="green"
                      buttonText="Remember Me"
                      withSpace={false}
                      wide={true}
                      font="IBMPlexMonoBold"
                    />
                  </div>
                  <div className="notice mt-7 px-9 font-IBMPlexMono text-[12px] text-white opacity-40">
                    Signing keys can only sign messgaes and cannot hold funds.
                    They are Stored securely in the browser database system.
                  </div>
                </>
              )}
              {currLoginStatus === LoginStatus.LoggedIn && (
                <>
                  <div className="mt-12">
                    <img className="w-20 mx-auto" src={OkIcon} alt="" />
                  </div>
                  <div className="mt-12 mb-12" onClick={() => goToHome()}>
                    <Button
                      colorStyle="green"
                      buttonText="Start"
                      withSpace={false}
                      wide={true}
                      font="IBMPlexMonoBold"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
