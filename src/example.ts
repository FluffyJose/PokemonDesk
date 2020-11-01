function concat(first: string, second: string): string {
    return first + second
  }

  interface HomeWorkInterface {
    howIDoIt: string,
    simeArray: (string | number)[],
    withData: {howIDoIt: string, simeArray: (string | number)[]}[]
  
  }  
  
  const MyHometask: HomeWorkInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
  }
  
  interface MyArray<T> {
    [N: number]: T;
  
    reduce<U>(fn: (prev: U, current: T, index: number, arr: T[]) => U, init: U): U;
  }

  