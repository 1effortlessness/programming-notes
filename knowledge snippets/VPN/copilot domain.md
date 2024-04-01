# URLs to Add to Allowlist

For optimal interaction with GitHub Copilot and its remote machine learning model, as well as update checks, it is recommended to include the following domain URLs in your allowlist. These should be marked as trusted in the user interface or deployment scripts.

## Domains and/or URLs

- https://github.com/login/* - Purpose: Authentication
- https://api.github.com/user - Purpose: User Management
- https://api.github.com/copilot_internal/* - Purpose: User Management
- https://copilot-telemetry.githubusercontent.com/telemetry - Purpose: Telemetry
- https://default.exp-tas.com/ - Purpose: Telemetry
- https://copilot-proxy.githubusercontent.com/ - Purpose: Copilot Suggested API Service
- https://origin-tracker.githubusercontent.com - Purpose: Copilot Suggested API Service
- https://*.githubcopilot.com - Purpose: Copilot Suggested API Service

[github copilot urls](https://docs.github.com/zh/enterprise-cloud@latest/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot)