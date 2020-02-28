import NavBar from '../components/Navbar';
import TokenInfo from '../components/TokenInfo';
const logo = "/images/illogiclogo.png";


import AddressProvider from '../components/AddressProvider';

const Home = () => {
  return (
    <AddressProvider>
      <div className='flex flex-col'>
        <NavBar logo={logo}/>
        <TokenInfo />
      </div>
    </AddressProvider>
  )
}

export default Home;
