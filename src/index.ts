export function greet(name: string): string {
    return `Hola, ${name}!`;
}

// Para uso directo en navegador global
if (typeof window !== "undefined") {
    (window as any).greet = greet;
}