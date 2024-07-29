import { memo, useEffect, useState } from 'react';

const Child = memo((props) => {
  console.log('Child render');
  return <span>{props.name}</span>
});

export default function Testing() {
  const [angka, setAngka] = useState({angka: null});

  useEffect(() => {
    const interval = setInterval(() => {
      setAngka({angka: Math.random()})
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  });

  console.log('parent render!');

  return (<Child name='wahyu' />);
}