import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Content from './components/Content';

export default function Home() {
  return (
    <>
      <Navbar />
      <Content />
    </>
  );
}
