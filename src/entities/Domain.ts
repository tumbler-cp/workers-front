export enum Color {
    GREEN,
    BLUE,
    ORANGE,
    WHITE
}

export enum Status {
    FIRED,
    HIRED,
    RECOMMENDED_FOR_PROMOTION,
    PROBATION
}

export enum Position {
    MANAGER,
    LABORER,
    HEAD_OF_DIVISION,
    LEAD_DEVELOPER,
    BAKER
}

export interface Location {
    id: number,
    x: number,
    y: number,
    name: string
}

export interface Address {
    id: number,
    zipCode: string
}

export interface Person {
    id: number,
    eyeColor: Color,
    hairColor: Color,
    location: Location,
    height: number,
    weight: number,
    passportId: string
}

export interface Organization {
    id: number,
    officialAddress: Address,
    annualTurnover: number,
    employeesCount: number,
    fullName: string,
    rating: number
}

export interface Coordinates {
    id: number,
    x: number,
    y: number
}

export interface Worker {
    id: number,
    name: string,
    coordinates: Coordinates,
    creationDate: Date,
    organization: Organization,
    salary: number,
    rating: number,
    position: Position,
    status: Status,
    person: Person
}