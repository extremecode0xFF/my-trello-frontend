import React from 'react';
import './card.scss';

interface C {
  title: string;
}

export default function Card({ title }: C): React.ReactElement {
  return <li className="card">{title}</li>;
}
