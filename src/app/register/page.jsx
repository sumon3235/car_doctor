import Image from "next/image"
import registerImg from "../../../public/assets/images/login/login.svg"
import RegisterForm from "@/Components/RegisterForm";

const Register = () => {
  return (
    <main className="min-h-[90vh] bg-slate-50 px-4 py-10 sm:px-6 lg:pb-24 lg:pt-32">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Use the existing registration illustration as the visual focus. */}
        <div className="flex justify-center">
          <Image
            src={registerImg}
            alt="Create a Car Doctor account"
            className="h-auto w-full max-w-md"
            priority
          />
        </div>

        {/* Keep the registration form separate from the page layout. */}
        <RegisterForm />
      </div>
    </main>
  );
};

export default Register;