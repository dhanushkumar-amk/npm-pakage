const crypto = require('crypto');

const ENCRYPTION_KEY = '0123456789abcdef0123456789abcdef'; // Must be 32 bytes for AES-256
const IV_LENGTH = 16; // For AES, this is always 16

// Format-Preserving Encryption (FPE)
function formatPreservingEncrypt(text) {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function formatPreservingDecrypt(text) {
  const textParts = text.split(':');
  const iv = Buffer.from(textParts.shift(), 'hex');
  const encryptedText = Buffer.from(textParts.join(':'), 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

// Tokenization
const tokenMap = new Map();

function tokenize(data) {
  if (tokenMap.has(data)) {
    return tokenMap.get(data);
  }
  const token = crypto.randomBytes(8).toString('hex');
  tokenMap.set(data, token);
  return token;
}

function detokenize(token) {
  for (let [key, value] of tokenMap.entries()) {
    if (value === token) {
      return key;
    }
  }
  return null;
}

// Dynamic Masking Rules
function dynamicMask(data, rule) {
  if (rule === 'email') {
    const [user, domain] = data.split('@');
    return `${user.charAt(0)}***@${domain}`;
  } else if (rule === 'credit-card') {
    return data.replace(/.(?=.{4})/g, '*');
  }
  return data;
}

// Export the functions to be used by other modules
module.exports = {
  formatPreservingEncrypt,
  formatPreservingDecrypt,
  tokenize,
  detokenize,
  dynamicMask
};
