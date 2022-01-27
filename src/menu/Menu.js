import {useState} from 'react';
import './menu.css';
import bag from './images/bag.svg';
import notepad from './images/book.svg';
import records from './images/diary.svg';
import phone from './images/phone.svg';
import arrow from './images/arrow.svg';
const Menu = () => {
  const [visible,setVisible] = useState({open:'',close:'hidden'});
  const check = () => {
    if(visible.open === '') {
      setVisible({open:'hidden',close:''});
    }
    else
    {
      setVisible({open:'',close:'hidden'});
    }
  }
    return (
      <>
        <ul className={`open-bar ${visible.close}`}>
          <li className="phone">
            <img src={phone} alt="bag" className="bag-img" />
            <p className="phone-text text">Mobile</p>
            <p className="phone-dot dot">1</p>
          </li>
          <li className="notepad">
            <img src={notepad} alt="notepad" className="notepad-img" />
            <p className="notepad-text text">Notepad</p>
          </li>
          <li className="records">
            <img src={records} alt="records" className="records-img" />
            <p className="records-text text">Records</p>
          </li>
          <li className="arrow" onClick={check}>
            <img src={arrow} alt="arrow" />
          </li>
        </ul>
        <ul className={`closed-bar ${visible.open}`}>
          <li className="bag" onClick={check}>
            <img src={bag} alt="bag" className="bag-img" />
            <p className="bag-text">bag</p>
            <p className="bag-dot dot">1</p>
          </li>
        </ul>
      </>
    );
};

export default Menu;