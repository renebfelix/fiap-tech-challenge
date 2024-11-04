export function moneyCurrency(value: number | undefined){
    const number = value ?? 0;
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);
}
