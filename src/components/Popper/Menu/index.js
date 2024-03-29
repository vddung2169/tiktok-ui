import Tippy from '@tippyjs/react//headless';

import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MeniItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MeniItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive={true}
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
