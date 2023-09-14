import NodeRSA from "node-rsa";

export const parseJwt = (token: string) => {
  const base64Url = token?.split(".")[1];
  const base64 = base64Url?.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map((c) => {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
};

export const encryptPassword = (
  message: NodeRSA.Data,
  publicKey: NodeRSA.Key
) => {
  const keys = new NodeRSA(publicKey, "pkcs8-public");
  keys.setOptions({
    encryptionScheme: "pkcs1",
  });
  return keys.encrypt(message, "base64");
};

export const getBasicAuth = (
  username: string,
  password: NodeRSA.Data,
  publicKey: NodeRSA.Key
) => {
  const encryptedPass = encryptPassword(password, publicKey);
  return `Basic ${window.btoa(`${username}:${encryptedPass}`)}`;
};
