// theme
import { ThemeProvider } from 'styled-components';
import theme from './theme';

// styles
import GlobalStyles from './GlobalStyles.style';
import { Container } from './components/Container.style';
import Header from './components/Header/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <Container>
          <Header />
        </Container>
      </>
    </ThemeProvider>

  );
}

export default App;
