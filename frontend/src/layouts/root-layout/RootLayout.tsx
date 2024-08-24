import RootMainHeader from "@/components/root-main-header";
import RootMainFooter from "@/components/root-main-footer";
import RootRoutes from "@/routes/RootRoutes";

export const RootLayout = () => {

  return (
    <main className="min-h-screen">
      <RootMainHeader />
      <section className="min-h-screen">
        <RootRoutes />
      </section>
      <RootMainFooter />
    </main>
  );
};



