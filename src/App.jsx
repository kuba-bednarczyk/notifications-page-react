import data from './data';

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
          {data.map((data) => (
            <Notification data={data} key={data.id} />
          ))}
        </Container>
      </>
    </ThemeProvider>

  );
}

export default App;
