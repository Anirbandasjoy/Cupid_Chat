"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Loading from "../auth/loading/Loading";
import { useHandleGetCurrentUserQuery } from "@/redux/features/user/userApi";

const PribetRoute = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, isError } = useHandleGetCurrentUserQuery();
  console.log({ data });
  const userInfo = data?.payload;
  console.log({ userInfo });
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !data?.success) {
      router.push("/login");
    }
  }, [data, isLoading, router]);

  if (isLoading) {
    return <Loading />;
  }

  return <>{userInfo ? children : null}</>;
};

export default PribetRoute;
