import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { usePosts } from "@/hooks/usePosts";
import { useDebounce } from "@/hooks/useDebounce";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
    Command,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command";

export function NavbarSearch() {
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const debouncedSearch = useDebounce(searchQuery, 300);
    const navigate = useNavigate();

    const { data, isLoading } = usePosts({
        search: debouncedSearch,
        limit: 5,
    });

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const handleSelect = (slug: string) => {
        setOpen(false);
        setSearchQuery("");
        navigate(`/artigo/${slug}`);
    };

    return (
        <>
            <Button
                variant="ghost"
                className="h-11 w-11 p-0 hover:bg-accent/10 hover:text-primary transition-all"
                aria-label="Buscar artigos"
                onClick={() => setOpen(true)}
            >
                <Search className="h-4 w-4 md:h-5 md:w-5" />
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="overflow-hidden p-0 shadow-lg [&>button]:hidden sm:max-w-[600px]">
                    <DialogTitle className="sr-only">Pesquisar artigos</DialogTitle>
                    <Command
                        shouldFilter={false}
                        className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
                    >
                        <CommandInput
                            placeholder="Pesquisar artigos..."
                            value={searchQuery}
                            onValueChange={setSearchQuery}
                        />
                        <CommandList>
                            <CommandEmpty>
                                {isLoading ? "Buscando..." : "Nenhum artigo encontrado."}
                            </CommandEmpty>
                            {(data?.posts?.length ?? 0) > 0 && (
                                <CommandGroup heading="Artigos">
                                    {data?.posts.map((post) => (
                                        <CommandItem
                                            key={post.id}
                                            value={post.id}
                                            onSelect={() => handleSelect(post.slug)}
                                            className="cursor-pointer"
                                        >
                                            <Search className="mr-2 h-4 w-4 opacity-50" />
                                            <span>{post.title}</span>
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            )}
                        </CommandList>
                    </Command>
                </DialogContent>
            </Dialog>
        </>
    );
}
