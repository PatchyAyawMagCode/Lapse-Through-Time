import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DatasetViewer } from "@/components/dataset-viewer";

export default function Technology() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <DatasetViewer
          title="Technology"
          subtitle="Navigate through time"
          contentTitle="Digital Dawn"
          contentDescription="The personal computer revolution was in full swing. Home computers, video games, and early networks were transforming how people worked, learned, and entertained themselves."
        />
      </main>
      <Footer />
    </div>
  );
}
