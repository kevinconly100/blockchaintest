import React, { useState, useEffect } from "react";
import {
  BookOpen,
  CheckCircle,
  ChevronRight,
  Trophy,
  Search,
  Layers,
  Code,
  Database,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

const questions = [
  // PART 1: Architecture
  {
    id: 1,
    category: "LO1: Architecture",
    q: "Which module code corresponds to 'Fundamental of Blockchain Application'?",
    options: ["SWDFB401", "SWDFB501", "SWDFB601", "SWDFB701"],
    correct: 1,
  },
  {
    id: 2,
    category: "LO1: Architecture",
    q: "What is defined as a decentralized, distributed ledger system that ensures transparency?",
    options: [
      "Centralized Database",
      "Blockchain Architecture",
      "Cloud Computing",
      "Local Area Network",
    ],
    correct: 1,
  },
  {
    id: 3,
    category: "LO1: Architecture",
    q: "Which of the following is NOT a core component of blockchain architecture?",
    options: ["Blocks", "Nodes", "Central Server", "Smart Contracts"],
    correct: 2,
  },
  {
    id: 4,
    category: "LO1: Architecture",
    q: "What component contains a timestamp and a cryptographic hash linking it to the previous entry?",
    options: ["Node", "Smart Contract", "Block", "API"],
    correct: 2,
  },
  {
    id: 5,
    category: "LO1: Architecture",
    q: "Independent computers that store a copy of the ledger are called:",
    options: ["Servers", "Nodes", "Clients", "Miners"],
    correct: 1,
  },
  {
    id: 6,
    category: "LO1: Architecture",
    q: "The process used to validate transactions across a decentralized network is the:",
    options: [
      "Operating System",
      "Hashing Algorithm",
      "Consensus Mechanism",
      "P2P Protocol",
    ],
    correct: 2,
  },
  {
    id: 7,
    category: "LO1: Architecture",
    q: "What are 'self-executing contracts with terms directly written into code'?",
    options: [
      "Legal Briefs",
      "Smart Contracts",
      "Block Headers",
      "Digital Signatures",
    ],
    correct: 1,
  },
  {
    id: 8,
    category: "LO1: Architecture",
    q: "According to the manual, which body owns the copyright to this training material?",
    options: [
      "KOICA",
      "TQUM Project",
      "Rwanda TVET Board (RTB)",
      "Ministry of ICT",
    ],
    correct: 2,
  },
  {
    id: 9,
    category: "LO1: Architecture",
    q: "Which blockchain layer is responsible for peer-to-peer interactions?",
    options: [
      "Application Layer",
      "Network Layer",
      "Storage Layer",
      "Execution Layer",
    ],
    correct: 1,
  },
  {
    id: 10,
    category: "LO1: Architecture",
    q: "In blockchain, nodes connect through which type of network?",
    options: [
      "Client-Server",
      "Peer-to-Peer (P2P)",
      "Wide Area Network",
      "Virtual Private Network",
    ],
    correct: 1,
  },
  {
    id: 11,
    category: "LO1: Architecture",
    q: "What does the acronym P2P stand for?",
    options: [
      "Private-to-Public",
      "Point-to-Point",
      "Peer-to-Peer",
      "Payment-to-Payment",
    ],
    correct: 2,
  },
  {
    id: 12,
    category: "LO1: Architecture",
    q: "Which consensus mechanism involves solving complex mathematical puzzles?",
    options: [
      "Proof of Stake",
      "Proof of Work",
      "Proof of History",
      "Proof of Authority",
    ],
    correct: 1,
  },
  {
    id: 13,
    category: "LO1: Architecture",
    q: "Which attack involves taking control of 51% of the network?",
    options: [
      "Phishing",
      "Attack in consensus mechanism",
      "DDoS",
      "Sybil Attack",
    ],
    correct: 1,
  },
  {
    id: 14,
    category: "LO1: Architecture",
    q: "What is 'Transaction Malleability'?",
    options: [
      "Confirming a block",
      "Changing a transaction ID before confirmation",
      "Deleting the chain",
      "Sending to wrong address",
    ],
    correct: 1,
  },
  {
    id: 15,
    category: "LO1: Architecture",
    q: "A 'Routing Attack' targets:",
    options: [
      "Private keys",
      "ISP/Network partitioning",
      "Contract logic",
      "Passwords",
    ],
    correct: 1,
  },
  {
    id: 16,
    category: "LO1: Architecture",
    q: "Software recommended for drawing blockchain architecture?",
    options: ["Photoshop", "EdrawMax", "AutoCAD", "Excel"],
    correct: 1,
  },
  {
    id: 17,
    category: "LO1: Architecture",
    q: "Shape typically used for external databases in architecture diagrams?",
    options: ["Circle", "Triangle", "Database icon/cylinder", "Hexagon"],
    correct: 2,
  },
  {
    id: 18,
    category: "LO1: Architecture",
    q: "Layer where consensus and transaction validation happen?",
    options: [
      "Consensus Layer",
      "Network Layer",
      "Protocol Layer",
      "Application Layer",
    ],
    correct: 0,
  },
  {
    id: 19,
    category: "LO1: Architecture",
    q: "In diagrams, arrows are primarily used to show:",
    options: [
      "Security levels",
      "Information flow",
      "Node power",
      "User hierarchy",
    ],
    correct: 1,
  },
  {
    id: 20,
    category: "LO1: Architecture",
    q: "Why use a layered approach in design?",
    options: [
      "For color",
      "To organize complex components",
      "To use less memory",
      "To bypass laws",
    ],
    correct: 1,
  },

  // PART 2: Solidity
  {
    id: 21,
    category: "LO2: Solidity",
    q: "The execution environment for Ethereum contracts is:",
    options: ["Remix", "EVM", "Solidity Compiler", "Blockchain Explorer"],
    correct: 1,
  },
  {
    id: 22,
    category: "LO2: Solidity",
    q: "Unit used to measure computational effort in Ethereum?",
    options: ["Watt", "Gwei", "Gas", "Ether"],
    correct: 2,
  },
  {
    id: 23,
    category: "LO2: Solidity",
    q: "Most common browser-based IDE for Solidity?",
    options: ["Visual Studio", "Remix IDE", "Sublime Text", "IntelliJ"],
    correct: 1,
  },
  {
    id: 24,
    category: "LO2: Solidity",
    q: "Which array type has a predefined length in Solidity?",
    options: ["Dynamic-size", "Fixed-size", "Pointer-size", "Infinite-size"],
    correct: 1,
  },
  {
    id: 25,
    category: "LO2: Solidity",
    q: "A function that reads state but does not modify it is marked:",
    options: ["Pure", "View", "Payable", "Public"],
    correct: 1,
  },
  {
    id: 26,
    category: "LO2: Solidity",
    q: "A 'Pure' function differs from 'View' because it:",
    options: [
      "Modifies state",
      "Accepts Ether",
      "Does not even read state",
      "Is private",
    ],
    correct: 2,
  },
  {
    id: 27,
    category: "LO2: Solidity",
    q: "Modifier required to receive native cryptocurrency:",
    options: ["View", "Internal", "Payable", "External"],
    correct: 2,
  },
  {
    id: 28,
    category: "LO2: Solidity",
    q: "Loops supported by Solidity include:",
    options: [
      "For, While, Do-While",
      "Only For",
      "Map/Reduce",
      "Recursive only",
    ],
    correct: 0,
  },
  {
    id: 29,
    category: "LO2: Solidity",
    q: "Custom data type grouping multiple variables:",
    options: ["Array", "Struct", "Mapping", "Enum"],
    correct: 1,
  },
  {
    id: 30,
    category: "LO2: Solidity",
    q: "Data structure providing key-value pairs:",
    options: ["List", "Mapping", "Vector", "Queue"],
    correct: 1,
  },
  {
    id: 31,
    category: "LO2: Solidity",
    q: "Keyword to get the contract's own address:",
    options: ["address(this)", "this.addr", "contract.self", "me.address"],
    correct: 0,
  },
  {
    id: 32,
    category: "LO2: Solidity",
    q: "Required browser wallet for interaction:",
    options: ["PayPal", "MetaMask", "Google Pay", "Trust Wallet"],
    correct: 1,
  },
  {
    id: 33,
    category: "LO2: Solidity",
    q: "State-changing operations require paying:",
    options: ["Nothing", "Gas fees", "Subscription", "License"],
    correct: 1,
  },

  // PART 3: Explorers
  {
    id: 34,
    category: "LO2.3: Explorers",
    q: "Primary function of a Blockchain Explorer?",
    options: [
      "Mining",
      "Searchable UI for chain data",
      "Creating private keys",
      "Writing code",
    ],
    correct: 1,
  },
  {
    id: 35,
    category: "LO2.3: Explorers",
    q: "Which is NOT visible on a public explorer?",
    options: [
      "Transaction Hash",
      "Sender Private Key",
      "Block Height",
      "Gas Price",
    ],
    correct: 1,
  },
  {
    id: 36,
    category: "LO2.3: Explorers",
    q: "Famous Ethereum explorer mentioned:",
    options: ["Etherscan", "Explorer.io", "EthLook", "ChainFinder"],
    correct: 0,
  },
  {
    id: 37,
    category: "LO2.3: Explorers",
    q: "A 'Layer 2' explorer tracks:",
    options: [
      "Bitcoin core",
      "Scaling solutions (like Arbitrum/Optimism)",
      "Email logs",
      "Local files",
    ],
    correct: 1,
  },
  {
    id: 38,
    category: "LO2.3: Explorers",
    q: "Benefit of explorers for auditing:",
    options: [
      "Encryption",
      "Transparency/Verifiability",
      "Deleting old logs",
      "Speed",
    ],
    correct: 1,
  },
  {
    id: 39,
    category: "LO2.3: Explorers",
    q: "A 'Multi-Blockchain' explorer works by:",
    options: [
      "Only tracking Bitcoin",
      "Tracking multiple disparate chains",
      "Connecting to SQL",
      "Mining",
    ],
    correct: 1,
  },
  {
    id: 40,
    category: "LO2.3: Explorers",
    q: "Explorers categorize hashrate and difficulty under:",
    options: [
      "Token Info",
      "Mining/Network Stats",
      "Address History",
      "Code Editor",
    ],
    correct: 1,
  },
];

const StudyGuide = () => (
  <div className="space-y-6">
    <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-indigo-700">
        <Layers className="w-5 h-5" /> LO 1: Blockchain Architecture
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="bg-slate-50 p-3 rounded">
          <p className="font-semibold text-slate-700">Core Components:</p>
          <ul className="list-disc ml-5 text-slate-600">
            <li>Blocks (Data structures with hashes)</li>
            <li>Nodes (Network participants)</li>
            <li>Consensus (Rules of agreement)</li>
            <li>Smart Contracts (Self-executing logic)</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-3 rounded">
          <p className="font-semibold text-slate-700">Layered Architecture:</p>
          <ul className="list-disc ml-5 text-slate-600">
            <li>Application (UI/Frontend)</li>
            <li>Execution (Smart contracts/EVM)</li>
            <li>Consensus (PoW/PoS)</li>
            <li>Network (P2P communication)</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-indigo-700">
        <Code className="w-5 h-5" /> LO 2.1-2.2: Solidity Basics
      </h3>
      <p className="text-sm text-slate-600 mb-2">
        Learn the fundamentals of Solidity programming language for Ethereum
        smart contracts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="bg-slate-50 p-3 rounded">
          <p className="font-semibold text-slate-700">Key Concepts:</p>
          <ul className="list-disc ml-5 text-slate-600">
            <li>Contracts and Functions</li>
            <li>Data Types and Variables</li>
            <li>Modifiers and Events</li>
            <li>Gas and Execution</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-3 rounded">
          <p className="font-semibold text-slate-700">Tools:</p>
          <ul className="list-disc ml-5 text-slate-600">
            <li>Remix IDE for coding</li>
            <li>EVM for execution</li>
            <li>MetaMask for interaction</li>
            <li>Gas fees for transactions</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-indigo-700">
        <Search className="w-5 h-5" /> LO 2.3.4: Blockchain Explorers
      </h3>
      <p className="text-sm text-slate-600 mb-2">
        Tools like <strong>Etherscan</strong> provide visibility into the
        blockchain:
      </p>
      <div className="grid grid-cols-3 gap-2 text-xs font-mono">
        <div className="bg-indigo-50 p-2 text-center rounded border border-indigo-100">
          Tx Hash Tracking
        </div>
        <div className="bg-indigo-50 p-2 text-center rounded border border-indigo-100">
          Block Auditing
        </div>
        <div className="bg-indigo-50 p-2 text-center rounded border border-indigo-100">
          Gas Monitoring
        </div>
      </div>
    </section>
  </div>
);

const Quiz = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (idx) => {
    if (isAnswered) return;
    setSelectedAnswer(idx);
    setIsAnswered(true);
    if (idx === questions[currentIdx].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setCurrentIdx(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  if (showResult) {
    return (
      <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-200 text-center">
        <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-slate-800 mb-2">
          Exam Completed!
        </h2>
        <p className="text-slate-600 mb-6">
          Your score for SWDBF501 Assessment:
        </p>
        <div className="text-6xl font-black text-indigo-600 mb-8">
          {Math.round((score / questions.length) * 100)}%
        </div>
        <p className="text-slate-500 mb-8">
          ({score} / {questions.length} correct answers)
        </p>
        <button
          onClick={reset}
          className="flex items-center gap-2 mx-auto px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          <RefreshCw className="w-4 h-4" /> Retake Quiz
        </button>
      </div>
    );
  }

  const q = questions[currentIdx];

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-slate-200">
      <div className="flex justify-between items-center mb-6">
        <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
          {q.category}
        </span>
        <span className="text-slate-400 text-sm font-medium">
          Question {currentIdx + 1} of {questions.length}
        </span>
      </div>

      <h2 className="text-xl font-semibold text-slate-800 mb-8 leading-relaxed">
        {q.q}
      </h2>

      <div className="space-y-3 mb-6">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            disabled={isAnswered}
            className={`w-full p-4 text-left rounded-xl border-2 transition-all flex items-center justify-between
              ${
                isAnswered
                  ? i === q.correct
                    ? "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm"
                    : selectedAnswer === i
                      ? "border-rose-400 bg-rose-50 text-rose-900"
                      : "border-slate-100 bg-white text-slate-400 opacity-60"
                  : "border-slate-100 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700"
              }
            `}
          >
            <span className="font-medium">{opt}</span>
            {isAnswered && i === q.correct && (
              <CheckCircle className="w-5 h-5 text-emerald-500" />
            )}
            {isAnswered && selectedAnswer === i && i !== q.correct && (
              <AlertCircle className="w-5 h-5 text-rose-500" />
            )}
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className="space-y-4 animate-in fade-in duration-500">
          <button
            onClick={nextQuestion}
            className="w-full flex items-center justify-center gap-2 p-4 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition font-bold shadow-lg"
          >
            {currentIdx === questions.length - 1
              ? "See Results"
              : "Next Question"}{" "}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState("study");

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Header */}
      <header className="bg-indigo-700 text-white p-6 shadow-lg sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight">
                BLOCKCHAIN CLASSROOM
              </h1>
              <p className="text-indigo-100 text-xs font-medium flex items-center gap-2">
                SWDBF501 • TVET Rwanda 2024
              </p>
            </div>
          </div>
          <div className="flex bg-indigo-800/50 p-1 rounded-xl gap-1">
            <button
              onClick={() => setActiveTab("study")}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition flex items-center gap-2 ${activeTab === "study" ? "bg-white text-indigo-700 shadow-sm" : "text-indigo-200 hover:bg-white/10"}`}
            >
              <BookOpen className="w-4 h-4" /> Study Guide
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition flex items-center gap-2 ${activeTab === "quiz" ? "bg-white text-indigo-700 shadow-sm" : "text-indigo-200 hover:bg-white/10"}`}
            >
              <Trophy className="w-4 h-4" /> Exam Mode
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto mt-8 px-4">
        {activeTab === "study" ? (
          <div>
            <StudyGuide />
          </div>
        ) : (
          <Quiz />
        )}
      </main>

      <footer className="max-w-4xl mx-auto mt-16 text-center text-slate-400 text-[10px] uppercase tracking-widest">
        <p>© 2024 Rwanda TVET Board</p>
      </footer>
    </div>
  );
}
