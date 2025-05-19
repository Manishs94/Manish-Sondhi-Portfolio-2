import React from 'react';

const Chat = () => {
  const openChat = () => {
    window.open('https://my-awesome-chatbot-six-hazel.vercel.app/', '_blank', 
      'width=400,height=600,location=yes,resizable=yes,scrollbars=yes,status=yes'
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={openChat}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all duration-200 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span>Chat</span>
      </button>
    </div>
  );
};

export default Chat;
