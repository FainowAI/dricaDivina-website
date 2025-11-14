import { Play } from "lucide-react";

const episodes = [
  {
    number: "Ep. 11",
    title: "Autocuidado sem culpa",
  },
  {
    number: "Ep. 20",
    title: "Beleza realista no dia a dia",
  },
];

const Podcast = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-8 mb-4">
            <div className="h-px bg-border w-32"></div>
            <h2 className="text-4xl font-bold uppercase">Podcast</h2>
            <div className="h-px bg-border w-32"></div>
          </div>
          <p className="text-lg text-muted-foreground">
            Conversas sinceras sobre vida, bem-estar e propósito.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {episodes.map((episode, index) => (
            <div key={index} className="bg-card border border-accent rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <button className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Play className="h-6 w-6 ml-1" fill="currentColor" />
                </button>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{episode.number}</p>
                  <h3 className="font-bold text-lg">{episode.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-full font-semibold">
            Mais podcasts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
