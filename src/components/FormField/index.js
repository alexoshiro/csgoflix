import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const FormField = ({
  label, value, onChange, name, type,
}) => {
  const fieldId = `id_${name}`;
  const isTextarea = type === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  return (
    <S.FormFieldWrapper>
      <S.Label htmlFor={fieldId}>
        <S.Input
          as={tag}
          id={fieldId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          hasValue={hasValue}
        />
        <S.Label.Text>
          {label}
          :
        </S.Label.Text>
      </S.Label>
    </S.FormFieldWrapper>
  );
};

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
};
export default FormField;
