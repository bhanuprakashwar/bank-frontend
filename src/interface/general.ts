export interface ValidationRule {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    email?: boolean;
}
export interface Credentials {
    userName: string,
    password: string,
}
export interface Register {
    userName: string,
    password: string,
    confirmPassword?: string,
    emailId: string,
    gender: string,
}
export interface APIToken {
    token: string,
    user: string,
}
