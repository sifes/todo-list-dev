import React from 'react';
import BackIcon from '@/assets/back.svg';
import { useRouter } from 'next/navigation';

export const BackBtn: React.FC = () => {
  const router = useRouter();
  return (
    <button className="note-page__back btn--transparent" onClick={() => router.push('/todos')}>
      <img src={BackIcon.src} alt="back to page with todos" />
    </button>
  );
};
