import { Metadata } from "next";
import loginImg from "@/assets/login-image.jpg";
import Image from "next/image";
import Link from "next/link";
import SignupForm from "./SignUpForm";
import Meteors from "@/components/ui/meteors";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function page() {
  return (
    <main className="relative overflow-hidden flex h-screen items-center justify-center p-5">
      <Meteors number={30} />
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl z-50">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">
              Sign up to <span className="text-primary">Buzz</span>inga
            </h1>
            <p className="tracking-widest text-muted-foreground">
              A place where you can talk to other{" "}
              <span className="italic">nerd</span> programmers.
            </p>
          </div>
          <div className="items-center space-y-5">
            <SignupForm />
            <div className="flex items-center justify-center gap-2 tracking-wider">
              Already have an account?
              <Link
                href={"/login"}
                className="block text-center hover:text-primary hover:underline"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>

        <Image
          src={loginImg}
          alt="loginImg"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
