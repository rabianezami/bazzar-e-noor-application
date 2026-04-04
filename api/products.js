
export default async function handler(_, res) {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}