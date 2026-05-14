import ChatInterface from "../../components/Chat/ChatInterface";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";

export const metadata = {
  title: "Chat — Faisal Haroon",
  description: "Chat with my personal AI twin.",
};

export default function ChatPage() {
  return (
    <LayoutWrapper>
      <main className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:py-14">
        <ChatInterface
          title="Faisal Haroon"
          subtitle="Personal AI Twin"
          aiAvatarSrc="/Faisal-fornow.png"
        />
      </main>
    </LayoutWrapper>
  );
}

