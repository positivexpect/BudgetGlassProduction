'use client';

import { useChat } from 'ai/react';
import { useState, useRef, useEffect } from 'react';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    reload,
    setMessages
  } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: 'welcome',
        role: 'assistant',
        content: "Hi there! I'm Digital Butch, and I've been helping folks with their glass needs since '87. What can I help you with today?"
      }
    ],
    onError: (error) => {
      console.error('Chat error:', error);
      // Reset messages to last known good state if we get a stream error
      if (error.message?.includes('stream') || error.message?.includes('parse')) {
        const lastUserMessage = messages[messages.length - 1];
        if (lastUserMessage?.role === 'user') {
          setMessages(messages.slice(0, -1));
        }
      }
    },
    onFinish: () => {
      setRetryCount(0);
      if (bottomRef.current) {
        bottomRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  const bottomRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    try {
      const currentMessages = messages;
      await handleSubmit(e);
      
      // If we get here without an error, reset retry count
      setRetryCount(0);
    } catch (err) {
      console.error('Failed to send message:', err);
      // If the submission fails, try to restore the previous state
      setMessages(messages);
    }
  };

  const handleRetry = async () => {
    if (retryCount >= 3) {
      // If we've retried 3 times, reset the chat
      setMessages([messages[0]]);
      setRetryCount(0);
      return;
    }

    setRetryCount(prev => prev + 1);
    try {
      await reload();
    } catch (err) {
      console.error('Failed to retry:', err);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700"
      >
        {open ? '×' : '💬'}
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 w-80 max-h-[70vh] bg-white border rounded-xl shadow-xl flex flex-col">
          <header className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-t-xl">
            Digital Butch
          </header>

          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`message-bubble ${
                  m.role === 'user' ? 'text-right text-blue-700' : 'text-gray-800'
                }`}
              >
                <p className={`inline-block rounded-lg px-4 py-2 ${
                  m.role === 'user' 
                    ? 'bg-blue-100' 
                    : 'bg-gray-100'
                }`}>
                  {m.content}
                </p>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center space-x-2 text-gray-500">
                <span className="animate-pulse">●</span>
                <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>●</span>
                <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>●</span>
              </div>
            )}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg text-sm">
                <p className="font-semibold">Error</p>
                <p>{error.message || 'Failed to send message. Please try again.'}</p>
                <button
                  onClick={handleRetry}
                  className="mt-2 text-red-600 hover:text-red-700 underline"
                >
                  {retryCount >= 3 ? 'Reset Chat' : 'Retry'}
                </button>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <form onSubmit={handleFormSubmit} className="p-2 border-t flex gap-2">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask me anything..."
              className="flex-1 border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className={`px-4 py-2 rounded bg-blue-600 text-white transition-colors ${
                isLoading || !input.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
              }`}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
} 