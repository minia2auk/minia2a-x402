# minia2a-x402

**The x402-named entry point to the [minia2a.uk](https://minia2a.uk) MCP server.**

This package contains no server code. It is a thin alias: it depends on
[`minia2a-mcp`](https://www.npmjs.com/package/minia2a-mcp), the canonical package,
and imports it. Same tools, same version, one source of truth.

```bash
npx minia2a-x402
```

is equivalent to

```bash
npx minia2a-mcp
```

## Why the alias exists

The official MCP registry pins a server record's name to the `mcpName` field of the
npm package that backs it. Publishing a record named `uk.minia2a/minia2a-x402` while
pointing at `minia2a-mcp` fails validation:

```
NPM package ownership validation failed.
Expected mcpName 'uk.minia2a/minia2a-x402', got 'uk.minia2a/minia2a-mcp'
```

`minia2a-mcp`'s `mcpName` is already claimed by the existing record
`uk.minia2a/minia2a-mcp`. Changing it would break that record and everything linking
to it, so the second name is an **addition**, not a rename.

If you only want the server, install [`minia2a-mcp`](https://www.npmjs.com/package/minia2a-mcp).

## What the server does

minia2a.uk is a pay-per-call API marketplace for AI agents: ~1,700 endpoints, settled
in USDC on Base over [x402](https://x402.org). Every signed wallet gets 5 free trial
calls — no registration, no account, no API key.

Tools exposed over stdio:

| Tool | Purpose |
|---|---|
| `minia2a_list_services` | Browse the catalog by category or search text |
| `minia2a_get_service` | Price, endpoint, input schema for one service |
| `minia2a_call_service` | Call a service; handles the HTTP 402 payment flow |
| `minia2a_register` | Register a self-custody wallet for publishing (trials need no registration) |
| `minia2a_check_endpoint` | Validate any x402 endpoint for agent auto-mode readiness |
| `minia2a_get_stats` | Live platform statistics |

## Install

```json
{
  "mcpServers": {
    "minia2a": {
      "command": "npx",
      "args": ["-y", "minia2a-x402"]
    }
  }
}
```

## Links

- Marketplace — https://minia2a.uk
- Catalog — https://minia2a.uk/catalog
- Canonical package — https://www.npmjs.com/package/minia2a-mcp
- Issues — https://github.com/minia2auk/minia2a-mcp/issues

MIT
