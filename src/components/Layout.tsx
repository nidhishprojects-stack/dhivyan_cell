import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { UserInfoBar } from "./UserInfoBar";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <UserInfoBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
