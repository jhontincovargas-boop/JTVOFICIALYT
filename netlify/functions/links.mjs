import { getStore } from "@netlify/blobs";

const defaultLinks = {
  youtube: "",
  whatsapp: "",
  archivo: "",
  freeRecomendado: "",
  vip: ""
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

function validLink(value) {
  if (value === "") return true;
  try {
    const url = new URL(value);
    return url.protocol === "https:";
  } catch {
    return false;
  }
}

export default async (request) => {
  const store = getStore("jtv-oficial");
  if (request.method === "GET") {
    const links = await store.get("links", { type: "json" }) || defaultLinks;
    return json({ links });
  }

  if (request.method !== "POST") {
    return json({ error: "Método no permitido." }, 405);
  }

  const adminPassword = process.env.JTV_ADMIN_PASSWORD;
  if (!adminPassword) {
    return json({ error: "Falta configurar JTV_ADMIN_PASSWORD en las variables de entorno de Netlify." }, 503);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Solicitud inválida." }, 400);
  }

  if (typeof body.password !== "string" || body.password !== adminPassword) {
    return json({ error: "Contraseña incorrecta." }, 401);
  }

  const keys = ["youtube", "whatsapp", "archivo", "freeRecomendado", "vip"];
  const links = {};
  for (const key of keys) {
    const value = typeof body.links?.[key] === "string" ? body.links[key].trim() : "";
    if (!validLink(value)) {
      return json({ error: `El enlace de ${key} debe comenzar con https://` }, 400);
    }
    links[key] = value;
  }

  await store.setJSON("links", links);
  return json({ ok: true });
};
