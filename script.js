const login = async () => {
  await auth0.loginWithRedirect({
    redirect_uri: window.location.origin
  });
};
