import router from "./router";

(async function () {
  // const domain = window.env.AUTH0_DOMAIN;
  // const client_id = window.env.CLIENT_ID;
  // const redirect_uri = window.env.APP_URL;
  
  const domain = 'https://dev-izkfk8s2.eu.auth0.com';
  const client_id = 'FbtD5voa2yRSUwqXH34wv173hXKkHR4x';
  const redirect_uri = 'https://expenses-api';

  window.auth0Client = await createAuth0Client({
    domain,
    client_id,
    redirect_uri,
    cacheLocation: "localstorage",
  });

  // handle user navigation
  window.addEventListener("hashchange", router);
  window.addEventListener("load", router);

  //handle user reload of browser
  if (sessionStorage.getItem("reload")) await router();
  sessionStorage.setItem("reload", "true");
})();
