import { redirect, RedirectType } from 'next/navigation';

export default function Home() {
  redirect('/todos', 'replace' as RedirectType);
}
