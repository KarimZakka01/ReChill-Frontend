import Footer from '@components/footer';
import { Header } from '@components/header';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import './root.styles.css';
import ChatBot from '@components/chatbot';


export interface IRootProps {}

export default function Root(props: IRootProps) {
  return (
    <div className="app-container">
      <Header />
      <ChatBot/>
      <Outlet />
      <Footer />
      
    </div>
  );
}
