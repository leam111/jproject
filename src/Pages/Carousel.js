import './carousel.css'
import p1 from '../assets/photo32.jpeg'
import p2 from '../assets/photo39.jpeg'
import p3 from '../assets/photo6.jpeg'
import p4 from '../assets/watch1.jpg'
import p5 from '../assets/photo0.jpg'
import p6 from '../assets/photo2.jpeg'
import p7 from '../assets/photo21.jpeg'
import p8 from '../assets/photo9.jpeg'






const Carousel =()=>{

return(<>


<div className="carousel">


<div className="group">
<img className="carouselcards" src={p1}/>
<img className="carouselcards" src={p2}/>
<img className="carouselcards" src={p3}/>
<img className="carouselcards" src={p4}/>
<img className="carouselcards" src={p5}/>
<img className="carouselcards" src={p6}/>
<img className="carouselcards" src={p7}/>
<img className="carouselcards" src={p8}/>

</div>


<div className="group" aria-hidden>
<img className="carouselcards" src={p1}/>
<img className="carouselcards" src={p2}/>
<img className="carouselcards" src={p3}/>
<img className="carouselcards" src={p4}/>
<img className="carouselcards" src={p5}/>
<img className="carouselcards" src={p6}/>
<img className="carouselcards" src={p7}/>
<img className="carouselcards" src={p8}/>

</div>


</div>









</>)








}
export default Carousel;