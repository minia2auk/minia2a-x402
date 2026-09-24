#!/usr/bin/env node
// minia2a-x402 — the x402-named entry point to the minia2a.uk MCP server.
//
// This package carries no server code of its own. It imports minia2a-mcp, which is
// the canonical package and the single source of truth for the tools; the import
// itself calls main() and connects the stdio transport.
//
// The alias exists because the official MCP registry pins a server record's name to
// the npm package's `mcpName` field. A record named uk.minia2a/minia2a-x402 is
// rejected unless an npm package declares that exact mcpName, and minia2a-mcp's
// mcpName is already taken by uk.minia2a/minia2a-mcp — changing it would break the
// existing published record and every link to it.
import "minia2a-mcp/dist/index.js";
