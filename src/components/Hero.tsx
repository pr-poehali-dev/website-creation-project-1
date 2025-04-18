import { Button } from "@/components/ui/button";
import SocialLink from "./SocialLink";

interface HeroProps {
  youtubeUrl: string;
  twitchUrl: string;
  telegramUrl: string;
}

const Hero = ({ youtubeUrl, twitchUrl, telegramUrl }: HeroProps) => {
  return (
    <div className="relative overflow-hidden min-h-[600px] flex items-center">
      {/* Фоновое изображение с наложением */}
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg"
          alt="War Thunder"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>
      
      <div className="container relative z-10 py-16 mx-auto text-center">
        <h1 className="text-6xl mb-4 text-warthunder-accent tracking-wider">
          WAR THUNDER
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-8 text-warthunder-foreground">
          Добро пожаловать на мой фан-сайт War Thunder! Здесь я делюсь стратегиями, 
          обзорами техники и провожу увлекательные стримы.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <SocialLink 
            platform="youtube" 
            url={youtubeUrl} 
            className="w-60 border-warthunder-accent"
          />
          <SocialLink 
            platform="twitch" 
            url={twitchUrl} 
            className="w-60 border-warthunder-accent"
          />
          <SocialLink 
            platform="telegram" 
            url={telegramUrl} 
            className="w-60 border-warthunder-accent"
          />
        </div>
        
        <Button className="mt-12 bg-warthunder-accent hover:bg-warthunder-accent/80 text-warthunder-foreground px-8 py-6 text-lg">
          Узнать больше
        </Button>
      </div>
    </div>
  );
};

export default Hero;