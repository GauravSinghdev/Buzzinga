import { Metadata } from "next";
import signupImg from "@/assets/signup-image.jpg";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "./LoginForm";
import Meteors from "@/components/ui/meteors";

export const metadata: Metadata = {
  title: "Login",
};

export default function page() {
  return (
    <main className="relative flex h-screen items-center justify-center p-5 overflow-hidden">
      <Meteors number={30} />
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl z-50">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Log in to <span className="text-primary">Buzz</span>inga</h1>
            <p className="text-muted-foreground tracking-widest">
              A place where you can talk to other <span className="italic">nerd</span> programmers.
            </p>
          </div>
          <div className="space-y-5 items-center">
            <LoginForm />
            <div className="flex items-center justify-center gap-2 tracking-wider">
              Create a new account?
              <Link
                href={"/signup"}
                className="block text-center hover:underline hover:text-primary"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>

        <Image
          src={signupImg}
          alt="signupimg"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
