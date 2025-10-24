import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Cpu, Dna, Leaf, Building2 } from "lucide-react";

export default function Visualize() {
  const datasets = [
    {
      id: "technology",
      title: "Technology",
      description: "From Mainframes to AI",
      icon: Cpu,
      color: "bg-blue-500",
      hoverColor: "hover:border-blue-500",
    },
    {
      id: "biology",
      title: "Biology",
      description: "Style and Cultural Evolutions",
      icon: Dna,
      color: "bg-amber-500",
      hoverColor: "hover:border-amber-500",
    },
    {
      id: "nature",
      title: "Nature",
      description: "From a Seed to a Tree",
      icon: Leaf,
      color: "bg-green-500",
      hoverColor: "hover:border-green-500",
    },
    {
      id: "architectures",
      title: "Architectures",
      description: "See How things got Built",
      icon: Building2,
      color: "bg-gray-600",
      hoverColor: "hover:border-gray-600",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 min-h-[calc(100vh-4rem)]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Choose Your Journey
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select a dataset to explore different aspects of historical change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {datasets.map((dataset) => {
              const IconComponent = dataset.icon;
              return (
                <Card
                  key={dataset.id}
                  className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${dataset.hoverColor} group`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`${dataset.color} p-4 rounded-xl transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-purple-600 transition-colors">
                        {dataset.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {dataset.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              More datasets coming soon via Cultures, Biology, and more
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
