import NavBar from '../components/Navbar';
import TokenInfo from '../components/TokenInfo';
import ReadMore from '../components/ReadMore';
import TokenData from '../components/TokenData';
import AddressProvider from '../components/AddressProvider';

const logo = "/images/illogiclogo.png";

const Home = () => {
  return (
    <AddressProvider>
      <div className='flex flex-col'>
        <NavBar logo={logo} />
        <TokenInfo />
        <ReadMore />        
        <TokenData />
      </div>
    </AddressProvider>
  )
}

export default Home;
