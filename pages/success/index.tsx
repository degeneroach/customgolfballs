import useBoundStore from "@/store/boundStore";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const SuccessPage = () => {
  const router = useRouter();
  
  useEffect(() => {
    const delayTime = 1000;

    const timeoutId = setTimeout(() => {
      router.push("/");
    }, delayTime);

    return () => clearTimeout(timeoutId);
  }, [router]);

  return (
    <>
      <div>SuccessPage</div>
      <button onClick={() => router.push("/")}>BACK HOME</button>
    </>
  );
};

export default SuccessPage;
