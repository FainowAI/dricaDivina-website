import { Play } from "lucide-react";

const videos = [
  { title: "Vlog: Um dia comigo — dicas de looks" },
  { title: "Maquiagem com! linha de verão" },
  { title: "Escreve de Viagens em cada de maio" },
  { title: "Rotina de cuidados com a pele" },
];

const YouTube = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold uppercase mb-4">YouTube</h2>
          <p className="text-lg opacity-90">
            Vídeos semanais com dicas, tutoriais e bastidores da minha rotina.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <div className="aspect-video bg-primary-foreground/10 rounded-lg flex items-center justify-center border-2 border-primary-foreground/20">
              <button className="w-20 h-20 rounded-full bg-primary-foreground/20 border-2 border-primary-foreground flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Play className="h-8 w-8 ml-1" fill="currentColor" />
              </button>
            </div>
            <p className="mt-4 font-semibold">Vlog: Um dia comigo — dicas de looks</p>
          </div>
          
          <div className="lg:col-span-2 space-y-4">
            {videos.slice(1).map((video, index) => (
              <div key={index} className="flex gap-4 items-center p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <button className="w-12 h-12 rounded-full bg-primary-foreground/20 border border-primary-foreground flex items-center justify-center flex-shrink-0">
                  <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
                </button>
                <p className="text-sm font-medium">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTube;
