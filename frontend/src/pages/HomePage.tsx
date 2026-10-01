import React from "react";
import { useWallet } from "../web3/walletContext";
import { ShieldCheck, Search, Award, Lock, ArrowRight } from "lucide-react";
import type { NavTab } from "../components/Navbar";

interface HomePageProps {
  onNavigate: (tab: NavTab) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { isConnected, connectWallet } = useWallet();

  return (
    <div className="space-y-12 sm:space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-12 pb-6 sm:pb-8 text-center max-w-4xl mx-auto px-3 sm:px-4">
        {/* Decorative ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-4 sm:mb-6">
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          Web3 Blockchain Capstone
        </div>

        <h1 className="text-3xl xs:text-4xl sm:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
          Tamper-Proof Educational Credentials <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            On the EVM Blockchain
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 text-slate-400 text-xs xs:text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Verify academic diplomas and professional certificates directly against smart contract logic.
          Immutable, decentralized, and instantly verifiable by employers worldwide without third-party intermediaries.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => onNavigate("verify")}
            className="w-full xs:w-auto px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl text-xs sm:text-sm transition shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4 shrink-0" />
            Verify Certificate Now
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>

          <button
            onClick={() => onNavigate("issue")}
            className="w-full xs:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold rounded-2xl text-xs sm:text-sm transition flex items-center justify-center gap-2"
          >
            <Award className="w-4 h-4 text-cyan-400 shrink-0" />
            Issue Certificate
          </button>

          {!isConnected && (
            <button
              onClick={connectWallet}
              className="w-full xs:w-auto px-6 py-3.5 bg-purple-950/60 hover:bg-purple-900/80 text-purple-300 border border-purple-800/80 font-bold rounded-2xl text-xs sm:text-sm transition flex items-center justify-center gap-2"
            >
              Connect Web3 Wallet
            </button>
          )}
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="max-w-6xl mx-auto px-3 sm:px-4 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 sm:p-6 backdrop-blur-md hover:border-slate-700 transition">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
            <Search className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-100">Public Verification</h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
            Anyone can look up a certificate by its unique numeric ID. View recipient details, institution credentials, issue date, and validity state.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 sm:p-6 backdrop-blur-md hover:border-slate-700 transition">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
            <Award className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-100">Authorized Issuance</h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
            Only authorized issuer wallets or the smart contract owner can mint and issue new certificates, enforcing governance.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 sm:p-6 backdrop-blur-md hover:border-slate-700 transition">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
            <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-100">Owner Revocation</h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
            In case of fraud or administrative correction, the contract owner retains ultimate authority to revoke certificates on-chain.
          </p>
        </div>
      </section>

      {/* How the System Works */}
      <section className="max-w-5xl mx-auto px-3 sm:px-4 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100">How On-Chain Issuance Works</h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Understanding the architecture behind Solidity smart contract certificate validation
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 text-indigo-400 font-extrabold flex items-center justify-center border border-slate-700 mb-3 text-xs sm:text-sm">
              1
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-200">Connect Wallet</h4>
            <p className="text-xs text-slate-400 mt-1">
              Connect Web3 wallet (MetaMask, Coinbase Wallet, etc.) to authenticate your address.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 text-indigo-400 font-extrabold flex items-center justify-center border border-slate-700 mb-3 text-xs sm:text-sm">
              2
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-200">Authorization Check</h4>
            <p className="text-xs text-slate-400 mt-1">
              Smart contract verifies if your address is the Contract Owner or an Authorized Issuer.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 text-indigo-400 font-extrabold flex items-center justify-center border border-slate-700 mb-3 text-xs sm:text-sm">
              3
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-200">Emit On-Chain Event</h4>
            <p className="text-xs text-slate-400 mt-1">
              Issuance generates an incremental Certificate ID and emits `CertificateIssued` event.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 text-indigo-400 font-extrabold flex items-center justify-center border border-slate-700 mb-3 text-xs sm:text-sm">
              4
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-200">Instant Verification</h4>
            <p className="text-xs text-slate-400 mt-1">
              Anyone queries `verifyCertificate(id)` to retrieve immutable recipient and status data.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};