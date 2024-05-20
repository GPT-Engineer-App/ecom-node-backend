import React, { useState, useEffect } from "react";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";

export function Order() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({ productId: "", quantity: 1 });

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleOrder = () => {
    fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Order placed successfully!");
      });
  };

  return (
    <VStack spacing={4}>
      <Text fontSize="2xl">Place an Order</Text>
      <Input placeholder="Product ID" value={order.productId} onChange={(e) => setOrder({ ...order, productId: e.target.value })} />
      <Input placeholder="Quantity" type="number" value={order.quantity} onChange={(e) => setOrder({ ...order, quantity: e.target.value })} />
      <Button onClick={handleOrder}>Order</Button>
    </VStack>
  );
}
