import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const SigninForms = () => {
  return (
    <div className="flex w-[18rem] flex-col gap-6">
      <h2 className="kanit-regular text-[2.5rem]">Join today.</h2>

      <div className="flex flex-col gap-2">
        <div
          className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white py-[2px]"
          onClick={() => signIn("google")}
        >
          <Image
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt=""
            width={35}
            height={35}
          />
          <span className="font-medium text-gray-500">Sign up with Google</span>
        </div>

        <div
          className="flex cursor-pointer items-center justify-center gap-4 rounded-full bg-white py-1.5"
          onClick={() =>
            alert(
              "Sorry, this service is temporarily unavailable. Please try again later or use other methods.",
            )
          }
        >
          <div>
            <Image
              src="https://seeklogo.com/images/A/apple-logo-E3DBF3AE34-seeklogo.com.png"
              alt=""
              width={20}
              height={20}
            />
          </div>
          <span className="kanit-regular text-black">Sign up with Apple</span>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="w-full border border-gray-800"></div>
          <span className="font-light">or</span>
          <div className="w-full border border-gray-800"></div>
        </div>

        <div
          className="flex cursor-pointer items-center justify-center gap-4 rounded-full bg-[#0096f4] py-2"
          onClick={() =>
            alert(
              "Sorry, this service is temporarily unavailable. Please try again later or use other methods.",
            )
          }
        >
          <span className="text-base font-semibold">Create account</span>
        </div>

        <p className="text-xs text-gray-500">
          By signing up, you agree to the{" "}
          <span className="cursor-pointer text-[#0096f4] hover:text-[#3cb4ff]">
            Terms of Service
          </span>{" "}
          and
          <span className="cursor-pointer text-[#0096f4] hover:text-[#3cb4ff]">
            {" "}
            Privacy Policy
          </span>
          , including{" "}
          <span className="cursor-pointer text-[#0096f4] hover:text-[#3cb4ff]">
            Cookie Use
          </span>
          .
        </p>

        <div className="mt-12 flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Already have an account?</h3>

          <div
            className="flex cursor-pointer items-center justify-center gap-4 rounded-full border border-gray-600 py-2"
            onClick={() =>
              alert(
                "Sorry, this service is temporarily unavailable. Please try again later or use other methods.",
              )
            }
          >
            <span className="text-base font-semibold text-[#0096f4]">
              Sign in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForms;
