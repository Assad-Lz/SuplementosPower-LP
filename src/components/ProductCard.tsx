import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  category: string;
}

const ProductCard = ({ name, description, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      <CardContent className="p-0">
        <div className="relative overflow-hidden aspect-square bg-muted">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
            {category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
          Saiba Mais
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
