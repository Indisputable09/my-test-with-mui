import * as React from 'react';
import { Paper, Popper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { GridCellParams } from '@mui/x-data-grid';
import { useTableComponentStyles } from './TableComponent.styles';

function isOverflown(element: {
  scrollHeight: number;
  scrollWidth: number;
  clientHeight: number;
  clientWidth: number;
}) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

interface CellExpandProps {
  value: string;
  width: number;
}

const useCellExpandStyles = makeStyles<void>()((theme, _params, classes) => ({
  root: {
    alignItems: 'center',
    lineHeight: '24px',
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    '& .MuiRating-root': {
      marginRight: theme.spacing(1),
    },
    '& .cellValue': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
}));

interface ICellExpandProps {
  darkTheme: boolean;
}

const CellExpand = React.memo(function CellExpand(
  props: CellExpandProps & ICellExpandProps
) {
  const { width, value, darkTheme } = props;
  const wrapper = React.useRef<HTMLDivElement | null>(null);
  const cellDiv = React.useRef(null);
  const cellValue = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { classes } = useCellExpandStyles();
  const [showFullCell, setShowFullCell] = React.useState(false);
  const [showPopper, setShowPopper] = React.useState(false);

  const showCell = React.useCallback(() => {
    setShowFullCell(true);
  }, []);
  const hideCell = React.useCallback(() => {
    setShowFullCell(false);
  }, []);

  React.useEffect(() => {
    if (cellDiv.current) {
      setAnchorEl(cellDiv.current);
    }
  }, []);
  React.useEffect(() => {
    if (cellValue && cellValue.current) {
      const isCurrentlyOverflown = isOverflown(cellValue.current!);
      setShowPopper(isCurrentlyOverflown);
    }
  }, [width]);

  const { classes: tableClasses, cx } = useTableComponentStyles();

  return (
    <div
      ref={wrapper}
      className={classes.root}
      onMouseEnter={showCell}
      onMouseLeave={hideCell}
    >
      <div
        ref={cellDiv}
        style={{
          height: 1,
          width,
          display: 'block',
          position: 'absolute',
          top: 0,
        }}
      />
      <div ref={cellValue} className="cellValue">
        {value}
      </div>
      {showPopper && (
        <Popper
          id={'123'}
          open={showFullCell && anchorEl != null}
          anchorEl={anchorEl}
          style={{ width, paddingLeft: -17 }}
        >
          <Paper
            elevation={1}
            // style={{ minHeight: wrapper.current!.offsetHeight - 2 }}
          >
            <div
              className={cx(tableClasses.cellExpand, darkTheme ? 'dark' : null)}
            >
              {value}
            </div>
          </Paper>
        </Popper>
      )}
    </div>
  );
});

interface ICellExpandComponentProps {
  params: GridCellParams;
  darkTheme: boolean;
}

export const CellExpandComponent: React.FC<
  ICellExpandComponentProps
> = props => {
  const { params, darkTheme } = props;
  return (
    <CellExpand
      value={params.value ? params.value.toString() : ''}
      width={Number(params.colDef.width)}
      darkTheme={darkTheme}
    />
  );
};
