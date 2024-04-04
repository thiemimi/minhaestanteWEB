import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Explorar() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="explorar"/>
      <h1>Explorar</h1>
    </main>
  );
}
