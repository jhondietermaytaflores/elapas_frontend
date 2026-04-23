interface JwtPayload {
    sub?: number;
    ci?: string;
    rol?: string;
    iat?: number;
    exp?: number;
}

export function parseJwt(token: string): JwtPayload | null {
    try {
        const base64Payload = token.split(".")[1];
        if (!base64Payload) return null;

        const payload = JSON.parse(atob(base64Payload));
        return payload;
    } catch {
        return null;
    }
}

export function getCiFromToken(token: string): string | null {
    const payload = parseJwt(token);
    return payload?.ci ?? null;
}