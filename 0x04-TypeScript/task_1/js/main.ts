interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]. ${lastName}`;
}

interface studentClassConstructor {
  new (firstName: string, lastName: string): studentClassInterface;
}

interface studentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements studentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}


