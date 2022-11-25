import { makeStyles } from 'tss-react/mui';

export const useHeaderStyles = makeStyles<void>()((theme, _params, classes) => ({
    appbar: {
        background: '#ffffff',
        color: '#232D42',
    },
    logo: {
        display: 'flex',
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
        transition: 'all linear 250ms',
        '&:hover': {
            textDecoration: 'none',
            transform: 'scale(1.1)',
            color: 'inherit',
        },
    },
    credentials: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    headerIcon: {
        width: '40px',
        height: '40px',
        [theme.breakpoints.down('sm')]: {
            width: '35px',
            height: '35px',
        },
    },
}));
