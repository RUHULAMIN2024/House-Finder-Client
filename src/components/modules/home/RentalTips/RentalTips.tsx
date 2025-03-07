import { Card, CardContent } from "@/components/ui/card";
import NMContainer from "@/components/ui/core/NMContainer";
const tips = [
  "Check the neighborhood before signing the lease.",
  "Always read the rental agreement carefully.",
  "Compare rental prices to ensure you're getting a fair deal.",
  "Communicate clearly with your landlord about maintenance needs.",
  "Check the neighborhood before signing the lease.",
];

const RentalTips = () => {
  return (
    <NMContainer>
      <h2 className="text-3xl font-bold mb-10">Rental Tips</h2>
      <div className="grid grid-cols-1 justify-center  md:grid-cols-3 lg:grid-cols-5 gap-3">
        {tips.map((tip, index) => (
          <Card key={index} className="shadow-lg rounded-lg p-4">
            <CardContent>
              <p className="text-gray-700">{tip}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </NMContainer>
  );
};

export default RentalTips;
