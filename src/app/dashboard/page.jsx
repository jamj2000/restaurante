import { auth } from "@/auth";
import { logout } from "@/lib/actions";
import { obtenerUsuarios } from "@/lib/data/users";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import ListaUsuarios from "@/components/users/lista";


async function Dashboard() {
  const sesion = await auth();
  if (!sesion) redirect("/auth/login");

  const isAdminSession = sesion.user?.role == 'ADMIN'

  return (
    <div className="p-4 md:p-10">
      <h1 className="text-3xl font-bold">Panel de usuario</h1>
      <img
        src={sesion.user.image || "/images/default-user.png"}
        className="size-40"
      />
      <p>Nombre de usuario: {sesion.user.name}</p>
      <p>Correo: {sesion.user.email}</p>

      {sesion &&
        <form className="bg-black text-white inline-block py-2 px-4 rounded-md">
          <button formAction={logout}>Logout</button>
        </form>
      }


      {isAdminSession &&
        <div className="mt-6">
          <h1 className="text-xl font-bold mt-15">Lista de usuarios</h1>
          <Suspense fallback={"cargando ..."}>
            <ListaUsuarios session={sesion} promesaUsuarios={obtenerUsuarios()} />
          </Suspense>
        </div>
      }







    </div>
  )
}

export default Dashboard;
