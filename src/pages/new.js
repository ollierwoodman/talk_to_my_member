import EmailBuilder from "@/components/EmailBuilder";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeadTag from "@/components/HeadTag";

export default function New() {
  return (
    <>
      <HeadTag title="Generate email" />
      <Header path="/new" />
      <main className="bg-purple-100 px-4 py-4 lg:px-32">
        <EmailBuilder />
      </main>
      <Footer />
    </>
  );
}
