import React, { useEffect } from "react";
import { useUserContext } from "@services/userContext/UserContext";

const ChatBot = () => {
  const { isLoggedIn, user } = useUserContext();

  useEffect(() => {
    if (isLoggedIn && user) {
      if (!(window as any).kommunicate) {
        (function (d, m) {
          var kommunicateSettings = {
            appId: "28f8a38af7c17f4a7a64681afe01b6a0f",
            popupWidget: true,
            automaticChatOpenOnNavigation: true,
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
    }
  }, [isLoggedIn, user]); //The useEffect hook is used to initialize Kommunicate only if both isLoggedIn and user are truthy.

  return isLoggedIn && user ? <div></div> : null;
};

export default ChatBot;
