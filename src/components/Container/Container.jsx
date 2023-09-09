import PropTypes from 'prop-types';
import s from './Container.module.css';

export default function Container({ children }) {
    return <div className={s.containerW}>{children}</div>;
}

Container.propTypes = {
    children: PropTypes.node,
}