// theme
import { ThemeProvider } from 'styled-components';
import theme from './theme';

// styles
import GlobalStyles from './GlobalStyles.style';
import { Container } from './components/Container.style';

// components
import Header from './components/Header/Header';
import Notification from './components/Notification/Notification';

// data
import data from './data';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <Header />
          {data.map()}
          <Notification unseen={true}/>
          <Notification unseen={false} />
        </Container>
      </>
    </ThemeProvider>

  );
}

export default App;
