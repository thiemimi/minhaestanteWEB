import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Estante() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="estante"/>
      <h1>Estante</h1>
    </main>
  );
}
