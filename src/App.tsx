import happyIcon from "./assets/happy.png";
import chatIcon from "./assets/chat.png";

function App() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/3 bg-white bg-opacity-70 shadow px-4 py-6 rounded-xl">
                <div className="flex items-center gap-4 justify-center mb-8">
                    <img src={happyIcon} alt="happy" />
                    <img src={chatIcon} alt="chat" />
                </div>
                <div className="text-xl text-center">
                    Hello! Can you awnser this hard qustion?
                </div>
                <div className="text-3xl text-center">Do You love me? *_*</div>
                <div className="flex justify-center gap-2 mt-8">
                    <button className="bg-white rounded-full opacity-30 px-8 py-1">
                        no
                    </button>
                    <button className="bg-pink-400 uppercase font-bold rounded-full px-8 py-1">
                        yes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
