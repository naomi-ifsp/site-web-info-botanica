import { Leaf, Ruler, TreeDeciduous, MapPin } from "lucide-react";

interface PlantData {
    scientificName: string;
    commonName: string;
    family: string;
    height: string;
    origin: string;
    description: string;
    characteristics: string[];
    imageUrl: string;
}

interface PlantInfoProps {
    plant: PlantData;
}

export function PlantInfo({ plant }: PlantInfoProps) {
    return (
        <div className="min-h-screen bg-background">
            {/* Header com gradiente */}
            <div className="bg-gradient-to-br from-primary via-secondary to-accent p-6 pb-16">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                        <Leaf className="w-4 h-4 text-white" />
                        <span className="text-white text-sm">Informação Botânica</span>
                    </div>
                </div>
            </div>

            {/* Conteúdo principal */}
            <div className="px-4 -mt-12 pb-8">
                {/* Card da imagem */}
                <div className="bg-card rounded-xl overflow-hidden shadow-lg mb-4">
                    <img
                        src={plant.imageUrl}
                        alt={plant.commonName}
                        className="w-full h-64 object-cover"
                    />
                </div>

                {/* Nome científico e popular */}
                <div className="bg-card rounded-xl p-5 shadow-md mb-4">
                    <div className="flex items-start gap-3 mb-3">
                        <div className="bg-primary/10 p-2 rounded-lg mt-1">
                            <TreeDeciduous className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                            <p className="text-muted-foreground text-sm">Nome Científico</p>
                            <h2 className="text-primary italic">{plant.scientificName}</h2>
                        </div>
                    </div>

                    <div className="border-t border-border pt-3">
                        <p className="text-muted-foreground text-sm">Nome Popular</p>
                        <h3 className="text-foreground">{plant.commonName}</h3>
                    </div>
                </div>

                {/* Informações técnicas */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-card rounded-xl p-4 shadow-md">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="bg-secondary/10 p-1.5 rounded-lg">
                                <Ruler className="w-4 h-4 text-secondary" />
                            </div>
                            <span className="text-muted-foreground text-xs">Altura</span>
                        </div>
                        <p className="text-foreground">{plant.height}</p>
                    </div>

                    <div className="bg-card rounded-xl p-4 shadow-md">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="bg-accent/10 p-1.5 rounded-lg">
                                <Leaf className="w-4 h-4 text-accent" />
                            </div>
                            <span className="text-muted-foreground text-xs">Família</span>
                        </div>
                        <p className="text-foreground">{plant.family}</p>
                    </div>
                </div>

                {/* Origem */}
                <div className="bg-card rounded-xl p-5 shadow-md mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="bg-primary/10 p-1.5 rounded-lg">
                            <MapPin className="w-4 h-4 text-primary" />
                        </div>
                        <h4 className="text-foreground">Origem</h4>
                    </div>
                    <p className="text-muted-foreground">{plant.origin}</p>
                </div>

                {/* Descrição */}
                <div className="bg-card rounded-xl p-5 shadow-md mb-4">
                    <h4 className="text-foreground mb-2">Descrição</h4>
                    <p className="text-muted-foreground leading-relaxed">{plant.description}</p>
                </div>

                {/* Características */}
                <div className="bg-card rounded-xl p-5 shadow-md">
                    <h4 className="text-foreground mb-3">Características</h4>
                    <div className="space-y-2">
                        {plant.characteristics.map((char, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <p className="text-muted-foreground flex-1">{char}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Rodapé */}
                <div className="mt-6 text-center">
                    <p className="text-muted-foreground text-xs">
                        Informações coletadas via QR Code
                    </p>
                </div>
            </div>
        </div>
    );
}