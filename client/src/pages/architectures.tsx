import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DatasetViewer } from "@/components/dataset-viewer";

export default function Architectures() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <DatasetViewer
          title="Architectures"
          subtitle="Navigate through time"
          contentTitle="Building Through Time"
          contentDescription="Witness the construction of iconic structures from foundation to completion. See how architectural marvels rise from the ground, showcasing human ingenuity, engineering prowess, and the evolution of building techniques across different eras."
        />
      </main>
      <Footer />
    </div>
  );
}
