import React, { useState, useEffect, useRef } from 'react';
import axios, { AxiosError } from 'axios';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

interface ApiResponse {
  response: string;
}

interface ChatBotProps {
  guestMode?: boolean;
}

interface ApiErrorResponse {
  error?: string;
}

axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default function ChatBot({ guestMode }: ChatBotProps): React.ReactNode {
  const inputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessions, setSessions] = useState<Message[][]>([]);
  const [currentSessionIndex, setCurrentSessionIndex] = useState<number>(0);
  const [inputValue, setInputValue] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const loadChatHistory = async () => {
    try {
      const response = await axios.get('/api/chatbot/history');
      if (response.data.messages && response.data.messages.length > 0) {
        const formattedMessages = response.data.messages.map((msg: any) => ({
          id: msg.id?.toString() || Math.random().toString(),
          content: msg.content,
          sender: msg.sender,
          timestamp: msg.created_at || new Date().toISOString()
        }));
        console.log('Historique chargé:', formattedMessages); // Ajout de log
        if (guestMode) {
          setSessions([formattedMessages]);
        } else {
          setMessages(formattedMessages);
        }
      } else {
        console.log('Aucun message trouvé dans l\'historique'); // Ajout de log
      }
    } catch (err) {
      console.error('Erreur lors du chargement de l\'historique:', err);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [guestMode ? sessions[currentSessionIndex] : messages, currentSessionIndex]);

  useEffect(() => {
    if (!guestMode) {
      loadChatHistory();
    } else if (guestMode && sessions.length === 0) {
      setSessions([[]]);
      setCurrentSessionIndex(0);
    }
  }, [guestMode, sessions.length]);

  const addMessageToCurrentSession = (content: string, sender: 'user' | 'bot') => {
    setSessions(prev => {
      const updated = [...prev];
      updated[currentSessionIndex] = [
        ...(updated[currentSessionIndex] || []),
        { id: Math.random().toString(), content, sender, timestamp: new Date().toISOString() },
      ];
      return updated;
    });
  };

  const addMessage = (content: string, sender: 'user' | 'bot') => {
    setMessages(prev => [
      ...prev,
      { id: Math.random().toString(), content, sender, timestamp: new Date().toISOString() },
    ]);
  };

  const handleNewConversation = () => {
    if (guestMode) {
      setSessions(prev => [...prev, []]);
      setCurrentSessionIndex(sessions.length);
      setError(null);
    } else {
      setMessages([]);
      setInputValue('');
      setError(null);
    }
  };

  const login = async () => {
    try {
      await axios.get('/sanctum/csrf-cookie');
      await axios.post('/api/login', {
        email: 'test@example.com',
        password: 'password',
      });
    } catch (err) {
      setError('Erreur lors de la connexion');
      throw err;
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !selectedType) return;
    setLoading(true);
    setError(null);
    try {
      if (!guestMode) {
        await login();
        addMessage(inputValue, 'user');
        const response = await axios.post<ApiResponse>('/api/chatbot/messages/authmode', {
          content: inputValue,
          type: selectedType,
        });
        addMessage(response.data.response, 'bot');
      } else {
        addMessageToCurrentSession(inputValue, 'user');
        const response = await axios.post<ApiResponse>('/api/chatbot/messages', {
          content: inputValue,
          type: selectedType,
        });
        addMessageToCurrentSession(response.data.response, 'bot');
      }
    } catch (err: unknown) {
      let errorMessage = 'Une erreur est survenue lors de l\'envoi du message.';
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;
        if (axiosError.response) {
          errorMessage = `Erreur ${axiosError.response?.status}: ${axiosError.response?.statusText}`;
          const errorData = axiosError.response?.data as ApiErrorResponse;
          if (errorData?.error) {
            errorMessage += ` - ${errorData.error}`;
          }
        } else if (axiosError.request) {
          errorMessage = 'Impossible de se connecter au serveur. Vérifiez votre connexion internet.';
        } else {
          errorMessage = `Erreur de configuration: ${axiosError.message}`;
        }
      } else if (err instanceof Error) {
        errorMessage = `Erreur inattendue: ${(err as Error).message}`;
      } else {
        errorMessage = 'Une erreur inconnue est survenue.';
      }
      setError(errorMessage);
      console.error('Erreur détaillée:', err);
    } finally {
      setInputValue('');
      inputRef.current?.focus();
      setLoading(false);
    }
  };

  const deleteSession = (index: number) => {
    if (guestMode) {
      setSessions(prev => prev.filter((_, i) => i !== index));
      if (index === currentSessionIndex) {
        setCurrentSessionIndex(0);
      }
    } else {
      setError('La suppression de sessions n\'est pas autorisée pour les utilisateurs authentifiés.');
    }
  };

  const currentMessages = guestMode ? sessions[currentSessionIndex] || [] : messages;

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 text-gray-900 border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-sm font-semibold">Historique des Sessions</h2>
        </div>
        <div className="h-full overflow-y-auto p-4 bg-white">
          {guestMode ? (
            sessions.length > 0 ? (
              <div className="space-y-4">
                {sessions.map((session, idx) => (
                  <div
                    key={`session-${idx}`}
                    className={`bg-gray-50 rounded-lg p-4 mb-4 cursor-pointer ${
                      idx === currentSessionIndex ? 'bg-blue-200' : ''
                    }`}
                    onClick={() => setCurrentSessionIndex(idx)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-medium">Session {idx + 1}</h3>
                      <span className="text-xs text-gray-500">{session.length} messages</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteSession(idx);
                        }}
                        className="text-red-500 text-xs"
                      >
                        Supprimer
                      </button>
                    </div>
                    <div className="space-y-2">
                      {session.slice(0, 2).map((msg, i) => (
                        <p key={i} className="text-sm text-gray-300">{msg.content}</p>
                      ))}
                      {session.length > 2 && (
                        <span className="text-xs text-gray-500">+{session.length - 2} autres messages</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">Pas de sessions pour le moment.</p>
            )
          ) : (
            messages.length > 0 ? (
              <div className="space-y-4">
                <div
                  key={`session-0`}
                  className={`bg-gray-50 rounded-lg p-4 mb-4 cursor-pointer bg-blue-200`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-medium">Session Active</h3>
                    <span className="text-xs text-gray-500">{messages.length} messages</span>
                  </div>
                  <div className="space-y-2">
                    {messages.slice(0, 2).map((msg, i) => (
                      <p key={i} className="text-sm text-gray-300">{msg.content}</p>
                    ))}
                    {messages.length > 2 && (
                      <span className="text-xs text-gray-500">+{messages.length - 2} autres messages</span>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-400 text-sm">Pas de messages pour le moment.</p>
            )
          )}
        </div>
      </div>
      {/* Main Chat Window */}
      <div className="flex-1 flex flex-col bg-gray-50">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Chatbot d'Orientation</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-6 bg-white">
          {error && (
            <div className="p-4 bg-red-100 text-red-600 rounded-lg mb-6">
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}
          {currentMessages.length > 0 && (
            <div className="space-y-4">
              {currentMessages.map((message) => (
                <div
                  key={`message-${message.id}`}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    message.sender === 'user'
                      ? 'bg-green-100 text-black self-end ml-auto max-w-md'
                      : 'bg-gray-100 text-black mr-auto max-w-md'
                  }`}
                >
                  <p className="text-base">{message.content}</p>
                  <p className="text-xs text-gray-500 mt-1">{new Date(message.timestamp).toLocaleTimeString()}</p>
                </div>
              ))}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="border-t border-gray-200 p-6 space-y-4">
          <button
            onClick={handleNewConversation}
            className="w-full px-4 py-2 bg-[#8aabb2] text-white rounded-xl hover:bg-[#708b9d] focus:outline-none focus:ring-2 focus:ring-[#8aabb2] focus:ring-offset-2"
          >
            Nouvelle conversation
          </button>
          <form onSubmit={handleSendMessage} className="flex space-x-4">
            <input
              type="text"
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Tapez votre message..."
              className="flex-1 p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8aabb2] bg-gray-50 text-gray-800"
              disabled={loading}
            />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8aabb2] bg-gray-50 text-gray-800"
              disabled={loading}
              required
            >
              <option value="" disabled>
                Type de message
              </option>
              <option value="école">école</option>
              <option value="conseil">Conseil</option>
              <option value="filiere">filiere</option>
            </select>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-4 bg-[#8aabb2] text-white rounded-xl hover:bg-[#708b9d] focus:outline-none focus:ring-2 focus:ring-[#8aabb2] focus:ring-offset-2 disabled:opacity-50"
            >
              {loading ? 'Envoi...' : 'Envoyer'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};