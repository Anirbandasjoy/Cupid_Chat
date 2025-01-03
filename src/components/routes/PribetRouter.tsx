"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Loading from "../auth/loading/Loading";
import { useHandleGetCurrentUserQuery } from "@/redux/features/user/userApi";

const PribetRoute = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useHandleGetCurrentUserQuery();
  const userInfo = data?.payload;
  const router = useRouter();

  useEffect(() => {
    if (!userInfo?.email) {
      router.push("/login");
    } else {
    }
  }, [userInfo, router]);

  if (isLoading) {
    return <Loading />;
  }

  return <>{userInfo?.email ? children : null}</>;
};

export default PribetRoute;
