import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Circles
      height="100"
      width="100"
      color="#d1d1d1"
      ariaLabel="circles-loading"
      wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
