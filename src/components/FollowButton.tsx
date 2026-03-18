import { Instagram, Youtube, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.12 8.12 0 004.76 1.52V6.76a4.85 4.85 0 01-.99-.07z" />
  </svg>
);

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
      name: "TikTok",
      icon: TikTokIcon,
      url: "https://www.tiktok.com/@dricadivina",
      color: "hover:text-gray-900",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/dricadivina",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="text-sm uppercase font-semibold hover:text-primary transition-colors duration-200"
        >
          Seguir
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
