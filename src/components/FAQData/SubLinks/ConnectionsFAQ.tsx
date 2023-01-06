import React from 'react';
import { InputLabel } from '@mui/material';
import { useFAQDataStyles } from '../FAQData.styles';
import { MultipleSelectChip } from '../../ProductData/SubLinks/Connections';

interface IConnectionsFAQProps {
  darkTheme: boolean;
  FAQFieldsValues: {
    page: string[];
  };
  setFAQFieldsValues: (obj: any) => void;
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export const ConnectionsFAQ: React.FC<IConnectionsFAQProps> = ({
  darkTheme,
  FAQFieldsValues,
  setFAQFieldsValues,
}) => {
  const handleMultipleSelectChange = (id: string, newValue: string[]) => {
    setFAQFieldsValues((prevState: any) => {
      return {
        ...prevState,
        [id]: newValue,
      };
    });
  };

  const { classes, cx } = useFAQDataStyles();
  return (
    <>
      <InputLabel
        htmlFor="page"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Сторінка
        <MultipleSelectChip
          darkTheme={darkTheme}
          list={names}
          id="page"
          handleMultipleSelectChange={handleMultipleSelectChange}
          value={FAQFieldsValues.page}
        />
      </InputLabel>
    </>
  );
};
