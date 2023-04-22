import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import '../styles/slider.scss';

const Slider = () => {
  return (
    <div className="ContainerS">
      <div>
        <div className="Arrow Left">
          <ArrowLeftOutlined />
        </div>
      </div>
      <div>
        <div className="Arrow Right">
          <ArrowRightOutlined />
        </div>
      </div>
    </div>
  );
};

export default Slider;
