import { Youtube, Twitch, MessagesSquare } from "lucide-react";

interface FooterProps {
  youtubeUrl: string;
  twitchUrl: string;
  telegramUrl: string;
}

const Footer = ({ youtubeUrl, twitchUrl, telegramUrl }: FooterProps) => {
  return (
    <footer className="bg-warthunder-dark border-t border-warthunder-accent/20 py-8">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img src="/favicon.svg" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-warthunder-accent">WAR THUNDER</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href={youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-warthunder-accent/20 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5 text-warthunder-accent" />
            </a>
            <a 
              href={twitchUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-warthunder-accent/20 transition-colors"
              aria-label="Twitch"
            >
              <Twitch className="h-5 w-5 text-warthunder-accent" />
            </a>
            <a 
              href={telegramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-warthunder-accent/20 transition-colors"
              aria-label="Telegram"
            >
              <MessagesSquare className="h-5 w-5 text-warthunder-accent" />
            </a>
          </div>
        </div>
        
        <div className="text-center text-warthunder-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} War Thunder Fan Site. Все права защищены.</p>
          <p className="mt-1">
            War Thunder является зарегистрированной торговой маркой Gaijin Entertainment.
            Этот сайт не связан с Gaijin Entertainment и не спонсируется ими.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;