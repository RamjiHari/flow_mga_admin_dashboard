import { useSelector } from 'react-redux';

// import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider,ThemeProvider } from '@mui/material';

// routing
// defaultTheme
import themes from 'common/themes';

// project imports
import NavigationScroll from 'common/layout/NavigationScroll';
import AppRoot from 'AppRoot';
import { useTheme } from '@mui/material/styles';



// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <AppRoot/>
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
