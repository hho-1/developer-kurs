import SideBar from "@/components/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <SideBar />
      {children}
    </section>
  );
}
