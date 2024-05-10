import forge from 'node-forge';
import { http_public_key } from '../configs';

const pki = forge.pki;

export const cifra = plaintext => {
  const serverPublicKey = pki.publicKeyFromPem(http_public_key);

  //   var seed = new forge.util.ByteBuffer(password, 'utf8');
  const encryptedKey = forge.util.encode64(
    serverPublicKey.encrypt(plaintext, 'RSA-OAEP', {
      md: forge.md.sha512.create(),
      mgf1: {
        md: forge.md.sha512.create(),
      },
    }),
  );

  return encryptedKey;
};

export default forge;
