import ButtonComponents from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-2/12">
        <p>Button</p>
      </div>
      <div className="grow">
        <ButtonComponents/>
      </div>
    </div>
  );
}
