import { PlantInfo } from "./components/PlantInfo";

function App() {
    // Simulação de dados que viriam do QR Code
    // Em produção, esses dados viriam de um parâmetro de URL ou API
    const plantData = {
        scientificName: "Monstera deliciosa",
        commonName: "Costela-de-Adão",
        family: "Araceae",
        height: "2-3 metros",
        origin: "Florestas tropicais do México e América Central",
        description: "Planta tropical de grande porte, conhecida por suas folhas perfuradas características. É uma trepadeira epífita que na natureza cresce sobre árvores em busca de luz.",
        characteristics: [
            "Folhas grandes com perfurações naturais (fenestração)",
            "Raízes aéreas que auxiliam na fixação e absorção de umidade",
            "Requer luz indireta e solo bem drenado",
            "Tolerante a ambientes internos com boa luminosidade",
            "Frutos comestíveis quando completamente maduros"
        ],
        imageUrl: "https://images.unsplash.com/photo-1775050647164-ae2695fef055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBwbGFudCUyMHNwZWNpbWVuJTIwbGVhZnxlbnwxfHx8fDE3NzYzNTIxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    };

    return <PlantInfo plant={plantData} />;
}

export default App;