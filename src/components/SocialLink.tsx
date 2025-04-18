import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Youtube, Twitch, MessagesSquare } from "lucide-react";

interface SocialLinkProps {
  platform: "youtube" | "twitch" | "telegram";
  url: string;
  className?: string;
}

const iconMap = {
  youtube: Youtube,
  twitch: Twitch,
  telegram: MessagesSquare,
};

const labelMap = {
  youtube: "YouTube",
  twitch: "Twitch",
  telegram: "Telegram",
};

const SocialLink = ({ platform, url, className }: SocialLinkProps) => {
  const Icon = iconMap[platform];
  
  return (
    <Button
      variant="outline"
      size="lg"
      className={cn(
        "flex items-center gap-2 text-lg py-6 hover:bg-warthunder-accent hover:text-warthunder-foreground transition-all duration-300",
        className
      )}
      asChild
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Icon className="h-6 w-6" />
        <span>{labelMap[platform]}</span>
      </a>
    </Button>
  );
};

export default SocialLink;