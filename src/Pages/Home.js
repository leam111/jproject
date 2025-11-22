import ProductCard from '../components/ProductCard';
import photo0 from '../assets/photo0.jpg';
import photo4 from '../assets/photo4.jpeg';
import photo5 from '../assets/photo5.jpeg';
import photo6 from '../assets/photo6.jpeg';
import photo7 from '../assets/photo7.jpeg';
import photo8 from '../assets/photo8.jpeg';
import photo9 from '../assets/photo9.jpeg';
import photo10 from '../assets/photo10.jpeg';
import photo11 from '../assets/photo11.jpeg'
import photo13 from '../assets/photo13.jpeg'
import photo14 from '../assets/photo14.jpeg'
import photo from '../assets/ringstack.jpeg'

export default function Home() {
  const featured = [
    {
      id: 1,
      name: "Bubble Rainbow ",
      price: 99,
      image:photo0 ,
    },
    {
      id: 2,
      name: "Floral Drops Earring",
      price: 49,
      image: photo11,
    },{
      id: 3,
      name: "Pink Gemstone Stud",
      price: 59,
      image: photo8,
    },
{
      id: 4,
      name: "Phoenix Earring",
      price: 49,
      image: photo9,
    },
{
      id: 5,
      name: "Butterfly Bangle",
      price: 49,
      image:photo4,
    },{
      id: 6,
      name: "Heart T-Bracelet",
      price: 49,
      image: photo5,
    },{
      id: 7,
      name: "Heart Bangle",
      price: 49,
      image: photo6,
    },
    {
 id: 8,
      name: "Blue Crystal Bracelet",
      price: 49,
      image: photo7,
      
    },{

 id: 9,
      name: "Ring Stack ",
      price: 55,
      image: photo,


    },{

 id: 10,
      name: "Blue Wings Earring ",
      price: 70,
      image: photo10,


    },{

 id: 11,
      name: "Pink Drop Earring",
      price: 59,
      image: photo13,


    }
    ,{
 id: 12,
      name: "P-Cascade Earrings",
      price: 65,
      image: photo14,



    }

,

  ];

  return (
    <div style={{ padding: "20px",textAlign:'center'}}>
      <h2>Welcome to KaLéa</h2>
      <p>Find the best deals on your favorite Jewlery !</p>

      <div
        style={{
          display: "flex",justifyContent:'center',
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {featured.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
