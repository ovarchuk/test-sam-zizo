'use client';
import Image from 'next/image';
import { useState } from 'react';
import { countWordTypes } from '@/logic/dictionary';
import cn from 'classnames';

export default function Home() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<{ [key: string]: number }>({});
  const handleClick = () => {
    setResult(countWordTypes(text));
  };

  const renderResult = () => {
    return (
      <ul>
        {Object.keys(result).map((key) => (
          <li key={key}>
            <span className={cn({ inactive: !result[key] })}>
              {key + ': ' + result[key]}
            </span>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <main className='main'>
      <div className='container'>
        <h6>Please type your text here</h6>
        <textarea
          className='inputText'
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button disabled={!text} onClick={handleClick}>
          Submit
        </button>
        <div className='resultContainer'>
          <h6>Result:</h6>
          {renderResult()}
        </div>
      </div>
    </main>
  );
}
