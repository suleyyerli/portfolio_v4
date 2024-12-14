import { Card } from "@/components/ui/card";

export default function VeilleTechno() {
  return (
    <div>
      <h2 className="font-mplus-rounded text-lg font-bold mb-2 border-b-4 inline-block border-lightText/80 dark:border-darkText/30 hover:brillance transition-colors ">
        Veille Technologique
      </h2>
      <p className=" text-lightText/80 dark:text-darkText/80">
        Comment suivre l&apos;évolution des technologies ? Je
      </p>
      <div className="mt-4 "></div>
      <div>
        <Card className="p-4">
          <ul>
            <li>
              <h3>React</h3>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
