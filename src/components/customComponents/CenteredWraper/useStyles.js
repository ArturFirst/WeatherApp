import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center'
    }
}));

export default useStyles;