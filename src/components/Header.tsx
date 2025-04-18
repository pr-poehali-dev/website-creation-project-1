import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface HeaderProps {
  youtubeUrl: string;
  twitchUrl: string;
  telegramUrl: string;
}

const Header = ({ youtubeUrl, twitchUrl, telegramUrl }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-warthunder-accent/20 bg-warthunder-dark/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center gap-2">
          <img src="/favicon.svg" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-warthunder-accent">WAR THUNDER</span>
        </div>
        
        <nav className="hidden md:flex ml-auto items-center gap-6">
          <a 
            href="#about" 
            className="text-warthunder-foreground/70 hover:text-warthunder-accent transition-colors"
          >
            О игре
          </a>
          <a 
            href="#vehicles" 
            className="text-warthunder-foreground/70 hover:text-warthunder-accent transition-colors"
          >
            Техника
          </a>
          <a 
            href="#guides" 
            className="text-warthunder-foreground/70 hover:text-warthunder-accent transition-colors"
          >
            Гайды
          </a>
          <a 
            href={youtubeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-warthunder-foreground/70 hover:text-warthunder-accent transition-colors"
          >
            YouTube
          </a>
          <a 
            href={twitchUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-warthunder-foreground/70 hover:text-warthunder-accent transition-colors"
          >
            Twitch
          </a>
          <a 
            href={telegramUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-warthunder-foreground/70 hover:text-warthunder-accent transition-colors"
          >
            Telegram
          </a>
        </nav>
        
        <Button variant="outline" size="icon" className="ml-auto md:hidden border-warthunder-accent/30">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;