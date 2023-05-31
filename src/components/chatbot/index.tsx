import React, { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    if (!(window as any).kommunicate) {
      (function (d, m) {
        var kommunicateSettings = {
          "appId":"28f8a38af7c17f4a7a64681afe01b6a0f","popupWidget":true,"automaticChatOpenOnNavigation":true
        };
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0];
        h.appendChild(s);
        (window as any).kommunicate = m;
        m._globals = kommunicateSettings;
      })(document, (window as any).kommunicate || {});
    }
  }, []);

  return <div></div>;
};

export default ChatBot;
