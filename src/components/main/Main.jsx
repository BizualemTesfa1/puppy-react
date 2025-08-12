import "./Main.css"
import banner from "../../assets/images/banner-puppies.jpg"
import puppyOne from "../../assets/images/puppy-1.jpg"
import puppyTwo from "../../assets/images/puppy-2.jpg"

const Main = () => {
  return (
    <div>
       <section id="banner">
      <div><img src={banner} /></div>
    </section>
    {/*  my puppies  */}
    <section class="puppies-section puppies">
      <div class="puppy-1">
        <img src={puppyOne} />
      </div>
      <div class="missing-puppy">
        <p>Puppy missing here!!!</p>
      </div>
      <div class="puppy-2">
        <img src={puppyTwo} />
      </div>
    </section>
    {/* fixed puppies  */}
    <section></section> 
    </div>
  )
}

export default Main