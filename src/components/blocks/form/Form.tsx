import { Button } from "@/ui/button/Button";
import { Field } from "@/ui/field/Field";

import Link from "next/link";

export const Form = () => {
  return (
    <section className="w-3/4 mx-auto flex flex-col gap-10 text-center">
      <div>
        <h1 className="text-gray-800 text-4xl font-bold pt-4 pb-2">Next Auth</h1>
        <p className="w-3/4 mx-auto text-gray-400 text-sm">Hello there! Sign In to see how it works</p>
      </div>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-y-2">
          <Field type="email" name="email" icon="HiAtSymbol" placeholder="Email" />
          <Field isPassword name="password" icon="HiFingerPrint" placeholder="Password" />
        </div>
        <Button title="Login" type="submit" />
        <div className="flex flex-col gap-y-2">
          <Button title="Sign in with Google" type="submit" image="/google.svg" />
          <Button title="Sign In with Github" type="submit" image="/github.svg" />
        </div>
      </form>
      <p className="text-center text-gray-400 text-xs select-none">
        don&apos;t have an account yet?
        <Link href="/register" className="text-blue-500 hover:text-blue-700 ml-2">
          Sign Up
        </Link>
      </p>
    </section>
  );
};
