export interface WalletSession { address: string | null; csrfToken: string | null; expiresAt: string | null }
export interface WalletLogin { address: string; csrfToken: string; expiresAt: string }
export interface WalletChallenge { message: string }
export class QairosApiError extends Error {
  constructor(public readonly status: number) { super('Qairos API request failed (' + status + ').'); this.name = 'QairosApiError'; }
}
export class QairosApiClient {
  private readonly base: URL;
  constructor(origin: string, private readonly transport: typeof fetch = fetch) {
    const base = new URL(origin);
    if (base.username || base.password || base.search || base.hash || !['', '/'].includes(base.pathname)) throw new Error('Provide an origin without credentials or path.');
    if (base.protocol !== 'https:' && !(base.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(base.hostname))) throw new Error('HTTPS is required outside localhost.');
    this.base = base;
  }
  private async request<T>(path: string, method = 'GET', body?: object, csrf?: string): Promise<T> {
    const response = await this.transport(new URL('/api' + path, this.base), {
      method, credentials: 'include', cache: 'no-store', signal: AbortSignal.timeout(10000),
      headers: { Accept: 'application/json', ...(body ? { 'Content-Type': 'application/json' } : {}), ...(csrf ? { 'X-CSRF-Token': csrf } : {}) },
      ...(body ? { body: JSON.stringify(body) } : {})
    });
    if (!response.ok) throw new QairosApiError(response.status);
    return (response.status === 204 ? undefined : await response.json()) as T;
  }
  walletSession(): Promise<WalletSession> { return this.request('/wallet/session'); }
  nonce(address: string): Promise<WalletChallenge> { return this.request('/wallet/nonce', 'POST', { address }); }
  verify(signature: string): Promise<WalletLogin> { return this.request('/wallet/verify', 'POST', { signature }); }
  logout(csrf: string): Promise<void> { return this.request('/wallet/session', 'DELETE', undefined, csrf); }
  mainnetStatus(): Promise<unknown> { return this.request('/mainnet/status'); }
}
