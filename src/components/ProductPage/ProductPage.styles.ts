import { makeStyles } from 'tss-react/mui';

export const useProductPageStyles = makeStyles<void>()(
  (theme, _params, classes) => ({
    productTitle: { fontSize: '3rem', mb: '20px' },
    panel: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonsBlock: { display: 'flex', gap: '16px' },
    button: { display: 'flex', justifyContent: 'center', height: '34px' },
    linksList: { display: 'flex', gap: '32px' },
    linksListItem: { width: 'inherit' },
    linksListText: {
      fontSize: '15px',
      '&.active': {
        color: '#3A57E8',
        '&:after': {
          content: `''`,

          width: '100%',
          position: 'absolute',
          left: 0,
          top: 'calc(100% + 6px)',

          borderBottom: '2px solid #3A57E8',
        },
      },
    },
  })
);

export const useBasicPageStyles = makeStyles<void>()(
  (theme, _params, classes) => ({
    basicDescriptionField: {
      [`& fieldset`]: {
        borderRadius: '0 0 4px 4px',
      },
    },
  })
);
