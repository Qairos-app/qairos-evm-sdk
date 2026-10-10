# Qairos EVM SDK

**Typed Ethereum contract interfaces and a browser-compatible Qairos API client.**

[Source](https://github.com/Qairos-app/qairos-evm-sdk) · [Releases](https://github.com/Qairos-app/qairos-evm-sdk/releases) · [Support](mailto:support@qairos.tech)

## Status
Version `0.1.0` is an experimental standalone distribution. Contracts have not been independently audited.
Quantum monitoring does not guarantee safety, and ordinary EVM wallet signatures are not post-quantum.
Local validation results are included with the initial release; no CI success, npm publication or Mainnet write is implied without separate evidence.

## Features
- Published chain-1 address metadata and compiled ABIs for six contracts.
- Exact decimal ETH-to-wei conversion and Mainnet runner validation.
- Typed wallet nonce, verification, session and logout client methods.
- ESM JavaScript and TypeScript declarations; no bundled credentials or signer.

## Quick start
Requirements: Node.js 24, pnpm 10.26.1.

```sh
git clone https://github.com/Qairos-app/qairos-evm-sdk.git
cd qairos-evm-sdk
pnpm install --frozen-lockfile
pnpm run validate
pnpm run release:package
```

## Boundaries and configuration
The API client is intended for a browser sharing the API's HTTPS origin; a Node caller must supply its own authorized cookie-aware transport. It does not sign messages or transactions. Use a wallet provider and explicitly review every send. npm registry publication is not enabled automatically and requires namespace ownership. No WalletConnect relay, secret storage or quantum-resistant Ethereum authentication is supplied.

## Quality and releases
Run `pnpm run validate`. Run `pnpm run release:package` to create the versioned `.tgz` and SHA-256 checksum.
Follow [docs/RELEASE.md](docs/RELEASE.md) before tagging. GitHub releases and npm registry publication are separate operations.
See [docs/DIAGNOSTICS.md](docs/DIAGNOSTICS.md) for reproducible checks and [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for component boundaries.

## Community
- [Contributing](CONTRIBUTING.md)
- [Code of conduct](CODE_OF_CONDUCT.md)
- [Security reporting](SECURITY.md)
- [Support](SUPPORT.md)
- [Governance](GOVERNANCE.md)
- [Changelog](CHANGELOG.md)

## License
MIT for Qairos-authored source; retain upstream and per-file notices. See [LICENSE](LICENSE) and [NOTICE](NOTICE).
Brand assets do not grant endorsement or trademark rights.
