"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Loading from "../auth/loading/Loading";
import { useHandleGetCurrentUserQuery } from "@/redux/features/user/userApi";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, isError } = useHandleGetCurrentUserQuery();
  const userInfo = data?.payload;
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!data?.success || isError)) {
      router.push("/login");
    }
  }, [data?.success, isError, isLoading, router]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !userInfo) {
    return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;
