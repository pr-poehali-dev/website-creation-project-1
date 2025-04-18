import GameCard from "@/components/GameCard";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  // Замените на свои реальные ссылки
  const socialLinks = {
    youtube: "https://youtube.com/your-channel",
    twitch: "https://twitch.tv/your-channel",
    telegram: "https://t.me/your-channel"
  };

  const vehicleCards = [
    {
      title: "Танки",
      description: "Обзор наземной техники и лучшие тактики для танковых сражений",
      imageUrl: "/placeholder.svg",
      tags: ["Наземка", "Стратегия", "Гайды"]
    },
    {
      title: "Авиация",
      description: "Всё об истребителях, бомбардировщиках и правильных манёврах",
      imageUrl: "/placeholder.svg",
      tags: ["Авиация", "Воздушный бой", "Тактика"]
    },
    {
      title: "Флот",
      description: "Морские сражения, эсминцы, крейсеры и подводные лодки",
      imageUrl: "/placeholder.svg",
      tags: ["Флот", "Морской бой", "Обзоры"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        youtubeUrl={socialLinks.youtube}
        twitchUrl={socialLinks.twitch}
        telegramUrl={socialLinks.telegram}
      />

      <main className="flex-1">
        <Hero 
          youtubeUrl={socialLinks.youtube}
          twitchUrl={socialLinks.twitch}
          telegramUrl={socialLinks.telegram}
        />

        <section id="about" className="py-16 bg-warthunder-DEFAULT">
          <div className="container px-4">
            <h2 className="text-4xl mb-8 text-warthunder-accent text-center">О ИГРЕ WAR THUNDER</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="mb-4">
                War Thunder — компьютерная многопользовательская онлайн-игра, посвященная боевой авиации, 
                бронетехнике и флоту времён Второй мировой войны и послевоенного периода.
              </p>
              <p>
                Здесь я делюсь своим игровым опытом, стратегиями и провожу увлекательные стримы. 
                Присоединяйтесь к нашему сообществу!
              </p>
            </div>
          </div>
        </section>

        <Separator className="border-warthunder-accent/30" />

        <section id="vehicles" className="py-16">
          <div className="container px-4">
            <h2 className="text-4xl mb-8 text-warthunder-accent text-center">ТЕХНИКА</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {vehicleCards.map((card, index) => (
                <GameCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                  tags={card.tags}
                />
              ))}
            </div>
          </div>
        </section>

        <Separator className="border-warthunder-accent/30" />

        <section id="guides" className="py-16 bg-warthunder-DEFAULT">
          <div className="container px-4">
            <h2 className="text-4xl mb-8 text-warthunder-accent text-center">ГАЙДЫ И ОБЗОРЫ</h2>
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p>
                Регулярно публикую гайды и обзоры техники на своём YouTube канале и стримы на Twitch.
                Также делюсь полезной информацией в Telegram.
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <a 
                href={socialLinks.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-warthunder-accent text-warthunder-foreground rounded-md hover:bg-warthunder-accent/80 transition-colors"
              >
                Смотреть на YouTube
              </a>
              <a 
                href={socialLinks.twitch} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-warthunder-dark text-warthunder-foreground border border-warthunder-accent/50 rounded-md hover:bg-warthunder-accent/20 transition-colors"
              >
                Присоединиться к стримам
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer 
        youtubeUrl={socialLinks.youtube}
        twitchUrl={socialLinks.twitch}
        telegramUrl={socialLinks.telegram}
      />
    </div>
  );
};

export default Index;