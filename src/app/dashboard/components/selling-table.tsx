import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const productsData = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
    amount: 4754.5,
  },
  {
    name: "Half Sleeve  Shirt",
    price: 39.99,
    quantity: 64,
    amount: 2559.36,
  },
  {
    name: "Lightweight Jacket",
    price: 20.0,
    quantity: 184,
    amount: 3680.0,
  },
  {
    name: "Marco Shoes",
    price: 79.49,
    quantity: 64,
    amount: 1965.81,
  },
];

const SellingTable = () => {
  return (
    <Card className="bg-muted flex h-full w-full flex-col gap-0 border-0 shadow-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">
          Top Selling Products
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-muted-foreground font-normal">
                Name
              </TableHead>
              <TableHead className="text-muted-foreground font-normal">
                Price
              </TableHead>
              <TableHead className="text-muted-foreground font-normal">
                Quantity
              </TableHead>
              <TableHead className="text-muted-foreground font-normal">
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productsData.map((product, index) => (
              <TableRow key={index}>
                <TableCell className="font-normal">{product.name}</TableCell>
                <TableCell className="font-normal">
                  ${product.price.toFixed(2)}
                </TableCell>
                <TableCell className="font-normal">
                  {product.quantity}
                </TableCell>
                <TableCell className="font-normal">
                  $
                  {product.amount.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SellingTable;
