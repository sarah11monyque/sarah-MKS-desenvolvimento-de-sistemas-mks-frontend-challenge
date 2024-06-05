'use client'

import {createGlobalStyle } from "styled-components";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body >{children}</body>
    </html>
  );
}

export const GlobalStyle = createGlobalStyle`
  *, html, body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`