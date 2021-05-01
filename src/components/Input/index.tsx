import React, {
  InputHTMLAttributes, useState, useCallback, useRef, useEffect,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  icon: React.ComponentType<IconBaseProps>;
  type: string;
  id: string;
  value: string;
  placeholder: string;
  setValue: (value: string) => void;
}

export function Input({
  name,
  label,
  icon: Icon,
  type,
  id,
  value,
  setValue,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);

  const { fieldName, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(
    () => {
      setIsFocused(false);
      setIsField(!!inputRef.current?.value);
    },
    [],
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFocused={isFocused} isField={isField}>
      <label htmlFor={id} className="containerLabel"><span>{label}</span></label>

      <div className="iconInput">{Icon && <Icon size={20} />}</div>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <Error>
          <span>{error}</span>
        </Error>
      )}
    </Container>
  );
}
