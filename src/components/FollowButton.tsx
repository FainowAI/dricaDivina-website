import { Instagram, Youtube, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const FollowButton = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/dricadivina",
      color: "hover:text-pink-600",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/dricadivina",
      color: "hover:text-red-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/dricadivina",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/dricadivina",
      color: "hover:text-sky-500",
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="text-sm uppercase font-semibold hover:text-primary transition-colors duration-200"
        >
          Follow
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-3">
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground mb-3">Siga nas redes sociais</p>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary transition-colors duration-200 ${social.color}`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FollowButton;
