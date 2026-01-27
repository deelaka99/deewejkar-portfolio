/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 * This allows us to inject custom HTML into the head of every page.
 */

import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    // Standard favicon
    <link key="favicon-ico" rel="icon" href="/favicon.ico" />,

    // PNG favicons for different sizes
    <link
      key="favicon-16"
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon-16x16.png"
    />,
    <link
      key="favicon-32"
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon-32x32.png"
    />,

    // Apple Touch Icon
    <link
      key="apple-touch-icon"
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-touch-icon.png"
    />,

    // Android Chrome icons
    <link
      key="android-192"
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/android-chrome-192x192.png"
    />,
    <link
      key="android-512"
      rel="icon"
      type="image/png"
      sizes="512x512"
      href="/android-chrome-512x512.png"
    />,

    // Web App Manifest
    <link key="manifest" rel="manifest" href="/site.webmanifest" />,

    // Theme color for mobile browsers
    <meta key="theme-color" name="theme-color" content="#663399" />,
  ]);
};
