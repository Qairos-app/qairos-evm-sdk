import test from 'node:test';
import assert from 'node:assert/strict';
import { ethToWei, contractInterface, connectMainnet, QairosApiClient, QairosApiError } from '../dist/index.js';
test('exact wei conversion and input rejection', () => {
  assert.equal(ethToWei('0.000000000000000001'), 1n);
  assert.equal(ethToWei('1'), 1000000000000000000n);
  for (const value of ['-1', '1e3', '0.0000000000000000001', 'NaN']) assert.throws(() => ethToWei(value));
});
test('compiled contract ABI encodes deposit and rejects an invalid contract', () => {
  assert.equal(contractInterface('QairosVault').encodeFunctionData('deposit'), '0xd0e30db0');
  assert.throws(() => contractInterface('Missing'));
});
test('wrong network cannot connect contracts', async () => {
  await assert.rejects(connectMainnet({ provider: { getNetwork: async () => ({ chainId: 5n }) } }), /Mainnet/);
});
test('HTTP client sends cookie-bound CSRF and never persists a token', async () => {
  let sent;
  const client = new QairosApiClient('https://qairos.tech', async (url, init) => {
    sent = { url: String(url), init }; return new Response(null, { status: 204 });
  });
  await client.logout('ephemeral-test-csrf');
  assert.equal(sent.url, 'https://qairos.tech/api/wallet/session');
  assert.equal(sent.init.credentials, 'include');
  assert.equal(sent.init.headers['X-CSRF-Token'], 'ephemeral-test-csrf');
  assert.throws(() => new QairosApiClient('http://evil.example'));
});
test('upstream failures are explicit', async () => {
  const client = new QairosApiClient('https://qairos.tech', async () => new Response('{}', { status: 503 }));
  await assert.rejects(client.walletSession(), error => error instanceof QairosApiError && error.status === 503);
});
