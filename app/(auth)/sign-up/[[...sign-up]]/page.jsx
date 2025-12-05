import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50">
      {/* Left Side Image */}
      <div
        className="hidden md:block bg-cover bg-center"
        style={{ backgroundImage: "url(./sign.webp)" }}
      ></div>

      {/* Right Side Signup Form */}
      <div className="flex items-center justify-center p-8">
        <SignUp signInUrl="sign-in" forceRedirectUrl="/dashboard"/>
      </div>
    </div>
  );
}
