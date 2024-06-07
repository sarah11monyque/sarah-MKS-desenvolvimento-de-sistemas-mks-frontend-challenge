'use client'
import styled, {createGlobalStyle } from "styled-components";
import { Montserrat } from 'next/font/google'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className={montserrat.className}>
      <GlobalStyle />
      <Body>
        {children}
      </Body>
    </html>
  );
}

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

const GlobalStyle = createGlobalStyle`
  *, html, body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    min-height: 100vh;
  }

  h1, h2, span {
    font-family: var(--font-montserrat);
  }

`

const Body = styled.body({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
})