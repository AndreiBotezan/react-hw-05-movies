import Logo from './Logo/Logo';
import Navigation from 'components/AppBar/Navigation/Navigation';
import s from './AppBar.module.css';

export default function AppBar() {
    return (
      <header className={s.header}>
        <div className={s.navigation}>
          <Logo link={'/react-hw-05-movies'} />
          <div className={s.menu}>
            <Navigation link={'/react-hw-05-movies'} title={'Home'} />
            <Navigation link={'/react-hw-05-movies/movies'} title={'Movies'} />
          </div>
        </div>
      </header>
    );
}