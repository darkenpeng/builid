import React from 'react';
import { useQuery } from 'react-query';
import MainCartModal from '../components/Cart/MainCartModal';
import CartProvider from '../store/CartProvider';
import SelectTopping from '../components/SelectTopping/SelectTopping';
import SubCartModal from '../components/Cart/SubCartModal';
import './MainAndShop.module.css';

const fetchBackendData = async () => {
  const response = await fetch('https://greek-yogurt-order-app-17351-default-rtdb.firebaseio.com/data.json');
  const data = await response.json();
  return data;
};

const MainAndShop = () => {
  const { data: backendData, status } = useQuery('backendData', fetchBackendData);

  const [selectedCategory, setSelectedCategory] = useState('ca2');
  const [mainCartIsShown, setMainCartIsShown] = useState(false);
  const [subCartIsShown, setSubCartIsShown] = useState(false);
  const [selectModalIsShown, setSelectModalIsShown] = useState(false);

  const showMainCartHandler = () => {
    setMainCartIsShown(true);
  };

  const hideMainCartHandler = () => {
    setMainCartIsShown(false);
  };

  const showSubCartHandler = () => {
    setSubCartIsShown(true);
  };

  const hideSubCartHandler = () => {
    setSubCartIsShown(false);
  };

  const showSelectModalHandler = () => {
    setSelectModalIsShown(true);
  };

  const hideSelectModalHandler = () => {
    setSelectModalIsShown(false);
  };

  if (status === 'loading' || status === 'idle') {
    return <div>Loading...</div>;
  }

  return (
    <CartProvider>
      {mainCartIsShown && <MainCartModal hideMainCartHandler={hideMainCartHandler} />}
      <main>
        {subCartIsShown && <SubCartModal hideSubCartHandler={hideSubCartHandler} />}
        <SelectTopping
          selectModalIsShown={selectModalIsShown}
          showSelectModalHandler={showSelectModalHandler}
          hideSelectModalHandler={hideSelectModalHandler}
          showSubCartHandler={showSubCartHandler}
          backendData={backendData}
          setSelectedCategory={setSelectedCategory}
        />
      </main>
    </CartProvider>
  );
};

export default MainAndShop;
