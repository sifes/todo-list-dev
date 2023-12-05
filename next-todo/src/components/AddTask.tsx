'use client';
import { useStore } from '@/store/useStore';
import React from 'react';

interface AddTaskProps {}

export const AddTask: React.FC<AddTaskProps> = ({}) => {
  const { count, increment, decrement } = useStore();
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          increment();
        }}
      >
        add
      </button>
    </div>
  );
};
