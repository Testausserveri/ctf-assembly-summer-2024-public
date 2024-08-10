"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useChat } from "ai/react";
import { Headset, Send, X } from "lucide-react";
import { useEffect } from "react";

export default function SupportChat({
  chatOpen,
  setChatOpen,
}: {
  chatOpen: boolean;
  setChatOpen: (open: boolean) => void;
}) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    setMessages,
  } = useChat();
  useEffect(() => {
    if (chatOpen && messages.length === 0) {
      append({
        role: "user",
        content: "I'm too poor to buy the flag. Do I have any other options?",
      }).catch(console.error);
    } else if (!chatOpen && messages.length > 0) {
      setTimeout(() => setMessages([]), 300);
    }
  }, [messages, chatOpen, append, setMessages]);
  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 flex w-full max-w-md origin-bottom overflow-hidden rounded-lg shadow-lg transition-transform duration-300",
        chatOpen ? "scale-y-1" : "scale-y-0",
      )}
    >
      <Card className="overflow-hidden border-0 transition-all duration-1000">
        <CardHeader className="flex items-center justify-between rounded-t-lg bg-primary px-6 py-4 text-primary-foreground">
          <div className="flex items-center gap-3">
            <Headset className="h-6 w-6" />
            <h3 className="text-lg font-medium">Support</h3>
            <Button
              className="absolute right-0 bg-transparent"
              onClick={() => setChatOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="max-h-[400px] overflow-y-auto p-6">
          <div className="space-y-4">
            {messages.map((m) =>
              m.role === "user" ? (
                <div
                  key={m.id}
                  className="ml-auto flex w-max max-w-[75%] flex-col gap-2 rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground"
                >
                  <p>{m.content}</p>
                </div>
              ) : (
                <div
                  key={m.id}
                  className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg bg-muted px-3 py-2 text-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="font-medium">Agent</div>
                  </div>
                  <p>{m.content}</p>
                </div>
              ),
            )}
          </div>
        </CardContent>
        <form onSubmit={handleSubmit}>
          <CardFooter className="flex items-center gap-2 rounded-b-md bg-muted px-4 py-3">
            <Input
              type="text"
              placeholder="Type your message..."
              className="flex-1"
              value={input}
              onChange={handleInputChange}
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
