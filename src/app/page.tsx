import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Explorar() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="explorar"/>
      <h1>Explorar</h1>
    </main>
  );
}
