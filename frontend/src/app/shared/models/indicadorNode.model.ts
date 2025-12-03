export  interface Indicator {
    value: string; // el NUM
    label: string; // el NAME
    children?: Indicator[];
}