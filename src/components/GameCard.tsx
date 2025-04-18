import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface GameCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  className?: string;
}

const GameCard = ({
  title,
  description,
  imageUrl,
  tags,
  className,
}: GameCardProps) => {
  return (
    <Card className={cn("overflow-hidden border-warthunder-accent/30 bg-warthunder-dark hover:border-warthunder-accent transition-all duration-300", className)}>
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-all hover:scale-105 duration-500"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-warthunder-accent text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-warthunder-accent/20 text-warthunder-light">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;