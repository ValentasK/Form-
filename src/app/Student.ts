export class Student{
    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public age: number,
        public sex: string,
        public nationality?: string
    )
    {}
}