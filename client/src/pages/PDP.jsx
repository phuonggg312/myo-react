import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PDP() {
  const { id } = useParams();
  return (
    <>
      <Header />
      <main style={{padding:16}}>PDP page #{id}</main>
      <Footer />
    </>
  );
}
