import ProductCard from '../components/ProductCard'

import '../assets/ProductCard.css'
import photo23 from '../assets/sun3.jpeg'
import photo26 from '../assets/sun1.jpeg'
import photo2 from '../assets/sun4.jpeg'
import photol from '../assets/sunnies.jpeg'
import lastphoto from '../assets/lp.jpeg'


export default function Products() {
  const products = [
    {
      id: 1,
      name: "Luna Shade",
      price: 259,
      image: photo23 ,
    },
    {
      id: 2,
      name: "Nora Frames",
      price: 350,
      image: photo26,
    },
    {
      id: 3,
      name: "Astra Sunnies",
      price: 180,
      image: photol,
    },
    {
      id: 4,
      name: "Sora Lens",
      price: 300,
      image: photo2,
    },
{
      id: 5,
      name: "KaLéa Classic",
      price: 280,
      image: lastphoto,
    },




  ];

  return (
    <div style={{ padding: "20px" ,textAlign:'center'}}>
      <h2 className="titleproduct">Our Accessories</h2>
      <p class="discount">20% OFF</p>

      
      <div
        style={{
          display: "flex",justifyContent:'center',
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
