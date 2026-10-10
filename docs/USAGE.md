# SDK Usage

After building or installing the reviewed local package:

```ts
import { BrowserProvider } from 'ethers';
import { connectMainnet, ethToWei, QairosApiClient } from '@qairos-app/evm-sdk';

const api = new QairosApiClient(window.location.origin);
const session = await api.walletSession();
// Connection and login signatures are explicit application actions.
// Never auto-request a signature or send on page load.
const provider = new BrowserProvider(window.ethereum);
const signer = await provider.getSigner();
const contracts = await connectMainnet(signer);
const value = ethToWei('0.001');
// First simulate: await contracts.QairosVault.deposit.staticCall({ value }).
// Show contract, function, from, amount and gas before any explicit user-approved send.
// A transaction hash is pending, not proof of success.
```

`contractInterface(name)` is also available for offline encoding/decoding.
All ABI integers are wei or contract-native integer units unless explicitly documented.
For logout, use the session's current CSRF token; ledger writes use the token returned by the ledger response.
Never serialize an authenticated session or signing credential into browser storage.
