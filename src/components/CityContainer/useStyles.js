import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
      flex: '1 1 auto',
    },
    container: {
      maxWidth: '100%',
      minHeight: '100vh',
      margin: 'auto',
      backgroundColor: '#e1e5eb',
      paddingTop: '8vh',
    },
  }));

  export default useStyles;