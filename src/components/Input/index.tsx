import React, {
  InputHTMLAttributes, useState, useCallback, useRef, useEffect,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { Container, Error } from './styles';
import { Link } from 'react-router-dom';

import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  icon?: React.ComponentType<IconBaseProps>;
  id: string;
  placeholder: string;
}

export function Input({
  name,
  label,
  icon: Icon,
  id,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);
  const [changeEya, setChangeEya] = useState(true);


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
      {name === 'password' ? (
        <input
          id={id}
          name={id}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          type={changeEya ? 'password' : 'text'}
          {...rest}
        />
      ) :
        <input
          id={id}
          name={id}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          {...rest}
        />
      }
      {
        name === 'password' && (
          <Link to="" className="button-eye" onClick={() => { setChangeEya(!changeEya) }}>
            {
              changeEya ? <RiEyeFill size="20" fill="#9b9b9b" /> : <RiEyeOffFill size="20" fill="#9b9b9b" />
            }

          </Link>
        )
      }

      {error && (
        <Error>
          <span>{error}</span>
        </Error>
      )}
    </Container>
  );
}
