'use client'
import Head from 'next/head';
import IframeResizer from '@iframe-resizer/react';
import Script from 'next/script';

const WidgetComponent = () => {
    return (
        <div className="mx-12 sm:mx-24 md:mx-24 md:ml-44 xl:mx-72 flex justify-center h-screen w-full">
            <iframe
                id="widgetApiIframe"
                width="100%"
                height="100%"
                allowtransparency="true"
                scrolling="yes"
                className="border-none"
                src="https://loader.to/api/widget?adUrl=https://myAdurl.com"
            />
            <script async src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.9/iframeResizer.min.js" />
            <script async >
                {`
      IframeResize({ log: false }, '#widgetApiIframe')
    `}
            </script>
        </div>
    );
};

export default WidgetComponent;
