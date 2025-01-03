"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Loading from "../auth/loading/Loading";
import { useHandleGetCurrentUserQuery } from "@/redux/features/user/userApi";

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useHandleGetCurrentUserQuery();
  const userInfo = data?.payload;
  const router = useRouter();

  useEffect(() => {
    if (!userInfo?.email) {
      router.push("/login");
      return;
    }
    if (userInfo?.role !== "admin") {
      router.push("/");
      return;
    }
  }, [userInfo, router]);

  if (isLoading) {
    return <Loading />;
  }

  return <>{userInfo?.role === "admin" ? children : null}</>;
};

export default AdminRoute;
