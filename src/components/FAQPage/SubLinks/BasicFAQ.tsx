import React from 'react';
import { InputLabel } from '@mui/material';
import { StyledField, useFAQPageStyles } from '../FAQPage.styles';

interface IBasicFAQProps {
  darkTheme: boolean;
  FAQFieldsValues: { question: string; answer: string };
  setFAQFieldsValues: (obj: any) => void;
}

export const BasicFAQ: React.FC<IBasicFAQProps> = ({
  darkTheme,
  setFAQFieldsValues,
  FAQFieldsValues,
}) => {
  const { classes, cx } = useFAQPageStyles();

  const handleFAQFieldsChange = (e: React.ChangeEvent) => {
    setFAQFieldsValues((prevState: any) => {
      return {
        ...prevState,
        [e.target.id]: (e.target as HTMLInputElement).value,
      };
    });
  };

  return (
    <>
      <InputLabel
        htmlFor="question"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        <div>Питання</div>
        <StyledField
          id="question"
          variant="outlined"
          sx={{ width: '100%', mt: '16px' }}
          required
          darkTheme={darkTheme}
          value={FAQFieldsValues.question}
          onChange={handleFAQFieldsChange}
        />
      </InputLabel>
      <InputLabel
        htmlFor="answer"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Відповідь
        <StyledField
          id="answer"
          variant="outlined"
          sx={{ width: '100%', mt: '16px' }}
          darkTheme={darkTheme}
          multiline
          rows={10}
          value={FAQFieldsValues.answer}
          onChange={handleFAQFieldsChange}
        />
      </InputLabel>
    </>
  );
};
