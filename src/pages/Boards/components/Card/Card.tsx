import React from 'react';
import './card.scss';

export default function Card({ title }: { title: string }): React.ReactElement {
  return <li className="card">{title}</li>;
}
