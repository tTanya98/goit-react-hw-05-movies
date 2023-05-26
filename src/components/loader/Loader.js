import DotLoader from 'react-spinners/ClipLoader';
import sty from './Loader.module.css';

export default function Loader() {
  return (
    <div className={sty.overlay}>
      <DotLoader size={250} color={'#461646'} className={sty.loader} />
    </div>
  );
}