import React, { useState } from 'react'
import productData from "../products.json"
import SelectedCategory from '../Components/seletedCategory';

const title = <h2>Pesquise <span>Aqui</span></h2>
const desc = "Nos temos uma variedade de produto";
const Bannerlist = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("")
  const [filteredProducts,setFilteredProducts] = useState(productData)
 // console.log(productData) //

 // search functionality //

  const handleSearch = e => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm)

    const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredProducts(filtered);
  }
  return <div className="banner-section style-4">
          <div className="container">
             <div className="banner-content">
                {title}
                 <form>
                  <SelectedCategory seLect={"all"}/>
                  <input type="text" name="search" id="search" placeholder="Pesquise seus produtos aqui" value={searchInput} onChange={handleSearch}/>
                  <button type="submit">
                    <i className="icofont-search"></i>
                  </button>
                 </form>
                 <p>{desc}</p>
                 <ul className=" lab-ul">
                  {
                     searchInput && filteredProducts.map((product, i) => <li key={i}>
                         <Link to={`/shop/${product.id}`}>{product.name}</Link>
                     </li>)
                  }
                 </ul>
             </div>
          </div> 
  </div>
}

export default Banner;