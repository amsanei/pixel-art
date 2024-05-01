import happyIcon from "./assets/happy.png";
import chatIcon from "./assets/chat.png";
import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(1);
    const [saidYes, setSaidYes] = useState(false);
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/3 bg-white bg-opacity-70 shadow px-4 py-6 rounded-xl">
                <div className="flex items-center gap-4 justify-center mb-8">
                    {saidYes ? (
                        <img src={happyIcon} alt="happy" />
                    ) : (
                        <img
                            src={chatIcon}
                            alt="chat"
                            className="animate-pulse"
                        />
                    )}
                </div>
                <div className="text-xl text-center">
                  {saidYes ? "Tank you darling, i love my self too XXX" : "Hello! Can you awnser this hard qustion?"}
                    
                </div>
                {!saidYes && (
                    <>
                        <div className="text-3xl text-center">
                            Do You love me? *_*
                        </div>
                        <div className="flex justify-center items-center gap-2 mt-8">
                            <button
                                style={{ fontSize: 22 - counter + "px" }}
                                className="bg-white  border-b-4 border-b-pink-600 active:border-b rounded-lg px-8 py-1 transition-all"
                                onClick={() => setCounter((prev) => prev + 2)}
                            >
                                no
                            </button>
                            <button
                                style={{ fontSize: counter + 22 + "px" }}
                                className="bg-pink-400 text-white border-b-4 border-b-pink-600 active:border-b transition-all uppercase font-bold rounded-lg px-8 py-1"
                                onClick={() => setSaidYes(true)}
                            >
                                yes
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
