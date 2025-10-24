import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Cpu, Dna, Leaf, Building2 } from "lucide-react";
import { Link } from "wouter";

export default function Visualize() {
  const datasets = [
    {
      id: "technology",
      title: "Technology",
      description: "From Mainframes to AI",
      icon: Cpu,
      color: "bg-blue-500",
      hoverColor: "hover:border-blue-500",
      hoverTextColor: "group-hover:text-blue-500",
    },
    {
      id: "biology",
      title: "Biology",
      description: "Style and Cultural Evolutions",
      icon: Dna,
      color: "bg-amber-500",
      hoverColor: "hover:border-amber-500",
      hoverTextColor: "group-hover:text-amber-500",
    },
    {
      id: "nature",
      title: "Nature",
      description: "From a Seed to a Tree",
      icon: Leaf,
      color: "bg-green-500",
      hoverColor: "hover:border-green-500",
      hoverTextColor: "group-hover:text-green-500",
    },
    {
      id: "architectures",
      title: "Architectures",
      description: "See How things got Built",
      icon: Building2,
      color: "bg-gray-600",
      hoverColor: "hover:border-gray-600",
      hoverTextColor: "group-hover:text-gray-600",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/visualize-hero.gif')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
          
          <div className="relative z-10 text-center px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              Choose Your Journey
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Select a dataset to explore different aspects of historical change
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {datasets.map((dataset) => {
              const IconComponent = dataset.icon;
              return (
                <Link key={dataset.id} href={`/dataset/${dataset.id}`}>
                  <Card
                    className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${dataset.hoverColor} group`}
                    data-testid={`card-dataset-${dataset.id}`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`${dataset.color} p-4 rounded-xl transition-transform duration-300 group-hover:scale-110`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-semibold mb-1 transition-colors ${dataset.hoverTextColor}`}>
                          {dataset.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {dataset.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
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
