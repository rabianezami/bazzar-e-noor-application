// فایل: /api/products.js
export default async function handler(_, res) {
  try {
  
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    const data = await response.json();

  
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    res.status(200).json(data);
  } catch (err) {
    console.error("ERROR in /api/products:", err);

  
    const mockProducts = [
      { id: 1, title: "Test Product", price: 10, image: "/logo.png", qty: 1 },
      { id: 2, title: "Another Product", price: 20, image: "/logo.png", qty: 1 },
    ];

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(mockProducts);
  }
}