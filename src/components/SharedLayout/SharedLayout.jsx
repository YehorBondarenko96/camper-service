import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// import { setScreenWidth, setScreenHeight } from '../../redux/slice';
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers, searchForBackground } from '../../redux/opertions';
import { selectPage, selectIsLoading } from '../../redux/selectors';
import { Loader } from '../Loader/Loader';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCampers(page));
    dispatch(searchForBackground());
  }, [dispatch, page]);
  
  // const forOrientation = () => {
  //       setTimeout(() => {
  //         dispatch(setScreenWidth(window.innerWidth));
  //         dispatch(setScreenHeight(window.innerHeight));
  //       }, 100);
  //   };

    // forOrientation();

    // window.removeEventListener('orientationchange', forOrientation);

    // useEffect(() => {
    //     window.addEventListener('orientationchange', forOrientation);
    // });

  return (
    <>
      {isLoading ? <Loader /> : 
        <>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </>
      }
    </>
  );
};

export default SharedLayout;
