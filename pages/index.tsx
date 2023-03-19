import type { NextPage } from "next";
import { Meta } from "@/layout/Meta";
import { LiveImage } from "@/ui/liveImage/LiveImage";
import { Form } from "@/blocks/form/Form";

const Login: NextPage = () => {
  return (
    <Meta title="Login" description="Hello there! Sign In to see how it works" image="/loginPreview.jpg">
      <div className="h-screen w-screen bg-blue-500 items-center flex justify-center">
        <div className="bg-slate-50 xl:h-2/3 xl:w-3/5 m-auto w-screen h-screen grid md:grid-cols-2 overflow-hidden xl:shadow-md shadow-none xl:rounded-md rounded-none">
          <div className="md:flex hidden flex-col justify-evenly">
            <div className="bg-slate-200 h-full w-full flex items-center justify-center">
              <LiveImage />
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
            <Form />
          </div>
        </div>
      </div>
    </Meta>
  );
};

export default Login;
