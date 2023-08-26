import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Description from './components/Description';
import Name from './components/Name';
import Image from './components/Image';
import Price from './components/Price';
import { Product } from './Database/Product';
import Cards from './components/Cards';

function App() {
  return (
   <>
   <Description />
   <Image />
   <Price />
   <Name />

   {
    Product.map(sp => <Cards productData = {sp} key={sp.productName}  /> )
   }
  
{/* {
  Product.map(function (sp){
    return <Cards key={sp.productName} />
  }) 
} */}

   </>
  );
}

export default App;
