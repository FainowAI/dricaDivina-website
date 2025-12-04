import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState("pt-BR");

  const languages = [
    { code: "pt-BR", label: "Português (BR)", flag: "🇧🇷" },
    { code: "en", label: "English", flag: "🇺🇸" },
  ];

  const handleLanguageChange = (code: string) => {
    setCurrentLanguage(code);
    // Aqui você pode adicionar lógica para mudar o idioma do site
    console.log("Language changed to:", code);
  };

  const currentLang = languages.find((lang) => lang.code === currentLanguage);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-11 w-11 p-0 hover:bg-accent/10 hover:text-primary transition-all"
          aria-label="Selecionar idioma"
        >
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`cursor-pointer ${
              currentLanguage === lang.code ? "bg-secondary" : ""
            }`}
          >
            <span className="mr-2">{lang.flag}</span>
            <span className="text-sm">{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
