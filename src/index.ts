import { Contract, Interface, parseEther, type ContractRunner } from 'ethers';
import { CONTRACT_ABIS } from './abis.js';
export { QairosApiClient, QairosApiError } from './api.js';
export type { WalletSession, WalletLogin, WalletChallenge } from './api.js';
export const CHAIN_ID = 1n;
export const CONTRACT_ADDRESSES = {
  "QairosOracle": "0x3039E2c775d37225f6DaAcaaD858A88d6ABBD9D2",
  "QairosCanary": "0xd16f9099888AA56b328c91B90ca5FeA0531c4B9f",
  "QairosArk": "0x41D5FF38ca6a8d185D05306d836D5BE986Ee47d7",
  "QairosVault": "0xd207cF263bF288aDd199ca6777b413A68494961a",
  "QairosMarket": "0xeD77cA63F7eCB92F6569d4b6c6F9A8a9CEe139E5",
  "QairosInsurance": "0x2D90C8ADB951f3f9286ac239ff7e3d641d057902"
} as const;
export type ContractName = keyof typeof CONTRACT_ADDRESSES;
export function contractInterface(name: ContractName): Interface {
  if (!(name in CONTRACT_ADDRESSES)) throw new Error('Unknown Qairos contract.');
  return new Interface(CONTRACT_ABIS[name]);
}
export function ethToWei(value: string): bigint {
  if (!/^(0|[1-9]\d*)(\.\d{1,18})?$/.test(value) || value.length > 96) throw new Error('Use a non-negative exact decimal with at most 18 places.');
  return parseEther(value);
}
export async function connectMainnet(runner: ContractRunner): Promise<Record<ContractName, Contract>> {
  if (!runner.provider || (await runner.provider.getNetwork()).chainId !== CHAIN_ID) throw new Error('Ethereum Mainnet provider required.');
  return Object.fromEntries(Object.entries(CONTRACT_ADDRESSES).map(([name, address]) =>
    [name, new Contract(address, CONTRACT_ABIS[name], runner)])) as Record<ContractName, Contract>;
}
