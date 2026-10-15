/**
 * Application & Deployment Configuration
 */

export const APP_URL = (
  import.meta.env.VITE_APP_URL ||
  "https://on-chain-certificate-issuer-1g7f.vercel.app/"
).trim();

export function getVerificationUrl(certificateId?: string | number): string {
  const base = APP_URL.endsWith("/") ? APP_URL : `${APP_URL}/`;
  return certificateId ? `${base}?id=${certificateId}` : base;
}