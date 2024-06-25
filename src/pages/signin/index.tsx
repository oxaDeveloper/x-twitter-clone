import Image from "next/image";
import React from "react";
import SigninForms from "~/components/SigninForms";

const SignIn = () => {
  return (
    <div className="flex min-h-screen items-center justify-between px-20">
      <div className="flex w-[40rem] justify-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
          alt=""
          width={400}
          height={400}
        />
      </div>

      <div className="flex flex-col gap-10">
        <h1 className="kanit-regular text-[5rem]">Happening now</h1>

        <SigninForms />
      </div>
    </div>
  );
};

export default SignIn;
