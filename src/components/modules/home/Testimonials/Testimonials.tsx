import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NMContainer from "@/components/ui/core/NMContainer";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "BasaFinder helped me find my dream apartment in no time! Highly recommended.",
    image: "/user1.jpg",
  },
  {
    name: "Jane Smith",
    feedback:
      "I found a great landlord through BasaFinder. The process was smooth and hassle-free!",
    image: "/user2.jpg",
  },
  {
    name: "John Doe",
    feedback:
      "BasaFinder helped me find my dream apartment in no time! Highly recommended.",
    image: "/user1.jpg",
  },
  {
    name: "Jane Smith",
    feedback:
      "I found a great landlord through BasaFinder. The process was smooth and hassle-free!",
    image: "/user2.jpg",
  },
  {
    name: "John Doe",
    feedback:
      "BasaFinder helped me find my dream apartment in no time! Highly recommended.",
    image: "/user1.jpg",
  },
];
const Testimonials = () => {
  return (
    <NMContainer className="my-28">
      <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
      <div className="grid items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="shadow-lg rounded-lg">
            <CardHeader className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardTitle>{testimonial.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-justify">
                {testimonial.feedback}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </NMContainer>
  );
};

export default Testimonials;
