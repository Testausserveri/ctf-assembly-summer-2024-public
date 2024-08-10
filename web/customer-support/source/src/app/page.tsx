"use client";
import SupportChat from "@/components/support-chat";
import { Button } from "@/components/ui/button";
import ProductImage from "@/images/product-image.png";
import { Banknote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export default function HomePage() {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={ProductImage.src}
          alt="Product Image"
          width={600}
          height={600}
          className="aspect-square w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-4xl font-bold">Premium CTF Flag</h1>
        <p className="text-lg text-muted-foreground">
          Are you tired of capturing boring, run-of-the-mill flags? Say goodbye
          to mundane and hello to marvelous with our Premium CTF Flag! Crafted
          by the finest artisans from the mystical land of Hackeronia, this flag
          is not just a sequence of characters - it's a game-changer.
          <br /> <br />
          Warning: May cause extreme competitiveness, uncontrollable laughter,
          and a sudden rise in social media followers. Use responsibly and
          always capture with style.
        </p>
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">🕵️‍♂️</span>
            <span>
              Stealth Mode: When you capture this flag, it vanishes from sight,
              leaving your rivals puzzled and questioning their network security
              protocols.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">🌀</span>
            <span>
              Mind-Bending Design: The flag's visual design is a cryptographic
              enigma, mesmerizing opponents and causing temporary system
              overload. Warning: May result in DDoS attacks on their cognitive
              functions.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">🎵</span>
            <span>
              Victory Anthem Activation: Upon capture, the flag hacks the sound
              system to blast "We Are the Champions" by Queen, ensuring everyone
              in the network knows you've pwned the competition.
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-4xl font-bold">⭐⭐⭐⭐⭐</span>
          <span className="text-lg text-muted-foreground">
            Based on 100+ reviews
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-4xl font-bold">∞ €</span>
          <Button
            size="lg"
            onClick={() =>
              toast.error("Poor detected", {
                icon: <Banknote className="h-full w-full" />,
                description:
                  "You do not have the sufficient funds to buy this item.",
                action: {
                  label: "Contact Support",
                  onClick: () => setChatOpen(true),
                },
              })
            }
          >
            Buy Now
          </Button>
        </div>
      </div>
      <SupportChat chatOpen={chatOpen} setChatOpen={setChatOpen} />
    </div>
  );
}
