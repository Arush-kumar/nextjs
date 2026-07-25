import Image from "next/image";
import Card from "@/components/Card"
import someAction from "./actions/something";

export default function Home() {
  return (
    <div>
      <Card title="Card 1" description="This is card 1" />
      <Card title="Card 2" description="This is card 2" />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded cursor-pointer mt-2"
        onClick={someAction}
      >click me</button>

    </div>
  );
}
