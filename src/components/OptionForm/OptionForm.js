import styles from './OptionForm.module.scss';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../Button/Button';
import PropTypes from 'prop-types';


const OptionForm = ({colors, sizes, currentSize, currentColor, setCurrentSize, setCurrentColor, clickHandler}) => {

    return(

<form onSubmit={clickHandler}>
          <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize}/>
          <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor}/>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
</form>
    )
}

OptionForm.propTypes={
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.object.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default OptionForm; 