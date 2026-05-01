import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session);

  const user = session?.user;

  if (!user) {
    redirect("/auth/signin");
    return <div>Please sign in tio the Dashboard</div>;
  }

  return (
    <div>
      <h2>Dashboard Page</h2>
    </div>
  );
};

export default DashboardPage;
