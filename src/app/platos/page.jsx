import Platos from "@/components/platos/lista";
import Link from "next/link";
import { Suspense } from "react";

function PaginaPlatos() {
  return (
    <div className="p-4 md:p-10">
      <Link href="/" className="text-5xl">
        🏡
      </Link>
      <h1 className="text-3xl font-bold mb-4">LISTA DE PLATOS</h1>

      <Suspense fallback={"Obteniendo plato ..."}>
        <Platos />
      </Suspense>
    </div>
  );
}

export default PaginaPlatos;
