export default oauth.googleEventHandler({
  async onSuccess(event, { user, tokens }) {
    // Set user session or handle success
    await setUserSession(event, {
      user: {
        id: user.id,
        email: user.email,
        urlFoto: user.picture,
        nome: String(user.name).trim(),
      },
    });

    console.log("teste", user);
    
    
    return sendRedirect(event, "/");
  },
  onError(event, error) {
    console.error("Google auth error:", error.message);
    return sendRedirect(event, "/");
  },
});
