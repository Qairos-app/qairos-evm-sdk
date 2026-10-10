# GitHub Packages

Package: `@qairos-app/evm-sdk`, version 0.1.0.
Registry: https://npm.pkg.github.com
Repository: https://github.com/Qairos-app/qairos-evm-sdk

The initial package is published privately and linked to this repository. Access requires permission to the package and a credential with read:packages.
Registry publication is verified separately from GitHub release creation. See the delivery report for the actual publication result.
No package is published to npmjs.org by this process.

Configure the consumer's private npm configuration using an environment reference, never a literal token:

```ini
@qairos-app:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Provide NODE_AUTH_TOKEN through your secret manager. Do not include it in a command argument or commit it.
Then install with `pnpm add @qairos-app/evm-sdk@0.1.0`.
Alternatively install the reviewed .tgz attached to the GitHub release; this does not require registry publication.
Release workflows generate packages but do not automatically publish a registry version.
