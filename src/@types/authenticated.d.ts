declare global {
  export namespace Authenticated {
    export interface Authentication {
      accessToken: string;
      authenticated: boolean;
      expires: number;
      refreshToken: string;
    }
    export interface UserDetails {
      id: string;
      createdAt: string;
      updatedAt: string;
      name: string;
      username: string;
    }
    export interface AuthenticatedUser {
      id: string;
      createdAt: string;
      updatedAt: string;
      name: string;
      username: string;
    }
  }
}

export {};
