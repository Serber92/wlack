import { useEffect } from 'react';

export default () => {
  useEffect(() => {
    const script = document.createElement('script');
    const scriptText = document.createTextNode(`
      (function (w,d,s,o,f,js,fjs) {
      w['wlack-widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
      js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
      js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
      }(window, document, 'script', 'mw', 'https://example.com/widget.js'));
      mw('appid', 'API_KEY');
    `);

    script.appendChild(scriptText);
    document.head.appendChild(script);
  }, []);

  return <div />;
};
