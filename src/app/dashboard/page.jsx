import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import MyBookings from "@/components/dashboard/MyBookings";
import MyProfile from "@/components/dashboard/MyProfile";

export const metadata = {
  title: "Dashboard | DocAppoint",
  description: "Manage your appointments and profile.",
};

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login?callbackUrl=/dashboard");
  }

  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 tracking-tight mb-8">
          Welcome,{" "}
          <span className="text-teal-500">{session.user.name}</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <MyBookings userEmail={session.user.email} />
          </div>
          <div className="lg:col-span-1">
            <MyProfile user={session.user} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
