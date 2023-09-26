import classNames from "classnames/bind";
import styles from './AccountItems.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItems(){
    return (
        <div className={cx('wrapper')}>
            <img src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/338162435_990916921876112_3479081223903907578_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=z-4yhETI-0kAX_t9inN&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfATMjs3gprWKieuHMfSmBZydfQOLlfJJcEsZO2TstYKsg&oe=65138D69" alt="Dung" className={cx('avatar')}/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyen Van A
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')}></FontAwesomeIcon>
                </h4>
                <span className={cx('usename')}>nguyn@vana</span>
            </div>
        </div>
    );
}

export default AccountItems;