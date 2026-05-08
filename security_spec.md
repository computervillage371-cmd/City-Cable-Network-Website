# Security Specification for City Cable Network

## Data Invariants
1. **Public Submissions**: Anyone can submit a "Connection Application".
2. **Read Protection**: No one except authorized admins can read submitted applications.
3. **Admin Verification**: Admins are verified via the `/admins/{userId}` document.
4. **Immutability**: Once an application is submitted, it cannot be modified or deleted by the public.
5. **Initial State**: New applications must always start with `status == 'pending'`.

## The Dirty Dozen Payloads

### 1. Identity Spoofing (Create Application for Others)
- **Action**: Public Create
- **Payload**: `{ name: "Attacker", phone: "011", plan: "10Mbps", address: "Home", status: "pending", createdAt: request.time }`
- **Result**: `ALLOW` (Public can submit)

### 2. Status Escalation (Pre-setting status to 'completed')
- **Action**: Public Create
- **Payload**: `{ status: "completed", ... }`
- **Result**: `DENY` (Must be 'pending')

### 3. PII Leak (Unauthorized Read)
- **Action**: Public List / Get
- **Result**: `DENY`

### 4. Admin Impersonation (Self-promotion)
- **Action**: Public Create to `/admins/attackerId`
- **Payload**: `{ email: "attacker@gmail.com", role: "super-admin" }`
- **Result**: `DENY`

### 5. Shadow Update (Adding hidden fields)
- **Action**: Public Create
- **Payload**: `{ name: "John", phone: "123", plan: "10", address: "X", status: "pending", createdAt: request.time, isAdmin: true }`
- **Result**: `DENY` (Strict key check)

### 6. Resource Poisoning (Large Strings)
- **Action**: Public Create
- **Payload**: `{ name: "A".repeat(2000), ... }`
- **Result**: `DENY` (Size check)

... and so on.

## Test Runner (Logic Mapping)
- `isValidApplication()` checks fields and size.
- `isAdmin()` checks if user doc exists in `/admins/`.
- `isOwner(userId)` (not needed for apps as they are private to admin).
