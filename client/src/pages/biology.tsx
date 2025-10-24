import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DatasetViewer } from "@/components/dataset-viewer";

export default function Biology() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <DatasetViewer
          title="Biology"
          subtitle="Navigate through time"
          contentTitle="Evolution of Life"
          contentDescription="Explore the fascinating journey of biological evolution and cultural adaptations. From the earliest organisms to modern species, witness the incredible transformations that have shaped life on Earth over millions of years."
        />
      </main>
      <Footer />
    </div>
  );
}
