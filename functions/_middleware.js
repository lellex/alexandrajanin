import staticFormsPlugin from "@cloudflare/pages-plugin-static-forms";

export const onRequest = async (context) => {
  return staticFormsPlugin({
    respondWith: async ({ formData }) => {
      if (formData.get("bot-field")) {
        return new Response(null, { status: 400 });
      }

      const prenom = formData.get("prenom") || "";
      const email = formData.get("email") || "";
      const typeProjet = formData.get("type-projet") || "";
      const message = formData.get("message") || "";

      await context.env.EMAIL.send({
        from: "contact@alexandrajanin.fr",
        to: "alexjanin@pm.me",
        replyTo: email,
        subject: `Nouveau contact de ${prenom}`,
        text: `Prénom : ${prenom}\nEmail : ${email}\nType de projet : ${typeProjet}\n\nMessage :\n${message}`,
      });

      return Response.redirect("/contact/merci/", 302);
    },
  })(context);
};
