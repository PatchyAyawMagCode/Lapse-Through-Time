import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DatasetViewer } from "@/components/dataset-viewer";

export default function Nature() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <DatasetViewer
          title="Nature"
          subtitle="Navigate through time"
          contentTitle="From Seed to Tree"
          contentDescription="Watch the remarkable journey of growth in nature. From a tiny seed breaking through soil to a towering tree reaching for the sky, experience the patient but powerful force of natural growth and transformation."
        />
      </main>
      <Footer />
    </div>
  );
}
