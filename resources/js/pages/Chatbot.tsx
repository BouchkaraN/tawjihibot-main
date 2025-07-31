import ChatBot from '../components/ChatBot';

export default function Chat() {
  return (
    <div className="min-h-screen bg-background">
      <ChatBot guestMode={true} />
    </div>
  );
}
