import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent } from './App';
export { allRoutes, getSeo, headMarkup, SITE_URL } from './seo';
export function render(url: string) {
  return renderToString(<StaticRouter location={url}><AppContent /></StaticRouter>);
}

export { SHARE_TEXTS } from "./components/FloatingActions";
