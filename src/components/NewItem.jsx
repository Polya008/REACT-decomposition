import React from 'react';
// добавление новой новости
export default function NewItem({item}) {
    const {logo, title, href}=item
  return (
    <div>
      <image src = {logo}></image>
      <a href={href}>{title}</a>
    </div>
  );
}