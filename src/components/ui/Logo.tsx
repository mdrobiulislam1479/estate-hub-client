import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <Image src={"/logo.png"} alt="logo" width={50} height={50} />
      <span className="text-2xl font-bold text-gray-300">
        Estate
        <span className="bg-linear-to-r from-purple-500 to-violet-700 bg-clip-text text-transparent">
          Hub
        </span>
      </span>
    </Link>
  );
};

export default Logo;
