// theme
import { ThemeProvider } from 'styled-components';
import theme from './theme';

// styles
import GlobalStyles from './GlobalStyles.style';
import { Container } from './components/Container.style';

// components
import Header from './components/Header/Header';
import NotificationsContainer from './components/NotificationsContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <Header />
          <NotificationsContainer />
        </Container>
      </>
    </ThemeProvider>

  );
}

export default App;
