import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Wrapper from 'components/Wrapper/Wrapper';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BarLoader from 'react-spinners/BarLoader';
import ScrollToTop from 'react-scroll-up';
import styles from './services/styles';
import sprite from './images/icons.svg';

const HomePage = lazy(() => import('components/HomePage/HomePage'));
const MoviesPage = lazy(() => import('components/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('components/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('components/MovieDetailsPage/Cast/Cast'));
const Reviews = lazy(() =>import('components/MovieDetailsPage/Reviews/Reviews'));

export default function App() {
  return (
    <Wrapper>
      <AppBar />
      <Section>
        <Routes>
          <Route
            path="/react-hw-05-movies"
            element={
              <Container>
                <Suspense fallback={<BarLoader color="#00f" />}>
                  <HomePage />
                </Suspense>
              </Container>
            }
          />
          <Route
            path="/react-hw-05-movies/movies"
            element={
              <Container>
                <Suspense fallback={<BarLoader color="#00f" />}>
                  <MoviesPage />
                </Suspense>
              </Container>
            }
          />
          <Route
            path="/react-hw-05-movies/movies/:movieId"
            element={
              <Container>
                <Suspense fallback={<BarLoader color="#00f" />}>
                  <MovieDetailsPage />
                </Suspense>
              </Container>
            }
          >
            <Route
              path="/react-hw-05-movies/movies/:movieId/cast"
              element={
                <Suspense fallback={<BarLoader color="#00f" />}>
                  <Cast />
                </Suspense>
              }
            />
            <Route
              path="/react-hw-05-movies/movies/:movieId/reviews"
              element={
                <Suspense fallback={<BarLoader color="#00f" />}>
                  <Reviews />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Section>

      <ScrollToTop showUnder={100} style={styles.upButton}>
        <svg style={{ fill: '#00f' }} width="16" height="16" aria-label="logo">
          <use href={`${sprite}#arrow-up`}></use>
        </svg>
      </ScrollToTop>
      <ToastContainer autoClose={3000} theme="colored" />
    </Wrapper>
  );
}
