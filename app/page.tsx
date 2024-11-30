import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Description from "./content/Description";

export default function Home() {
  return (
    <div>
      <Card className="p-3 border-none rounded-lg text-center shadow-none bg-[#FFFFFF5C] dark:bg-[#FFFFFF14]">
        Hello, je suis developpeur fullstack à Strasbourg!
      </Card>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Yerli Süleyman</h1>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        </div>
        <Avatar className="w-24 h-24">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-bold">Description</h2>
        <Description />
      </div>
    </div>
  );
}
