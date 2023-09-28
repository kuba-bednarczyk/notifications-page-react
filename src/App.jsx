// theme
import { ThemeProvider } from 'styled-components';
import theme from './theme';

// styles
import GlobalStyles from './GlobalStyles.style';
import { Container } from './components/Container.style';

// components
import Header from './components/Header/Header';
import Notification from './components/Notification/Notification';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <Container>
          <Header />
          <Notification />
        </Container>
      </>
    </ThemeProvider>

  );
}

export default App;
