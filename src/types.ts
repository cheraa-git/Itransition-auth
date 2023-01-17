export interface User {
  id: string
  name: string
  email: string
  registrationTimestamp: string
  lastLoginTimestamp: string
  status: 'blocked' | 'active'
}
