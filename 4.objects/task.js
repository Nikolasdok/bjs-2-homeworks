function Student(name, gender, age) {
// Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
}
  let student3 = new Student ("Vasy", "flame", "20");
  let student4 = new Student ("vasiliya", "male", "21");
  let alex = new Student('Alex', 'male', 34);


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }

  Student.prototype.addMark = function (mark) {
    if(this.marks === undefined){ 
      this.marks = [mark]; 
    } else {
      this.marks.push(mark);
    }
  }


  Student.prototype.addMarks = function (...mark) {
    if (this.marks === undefined) {
      this.marks = mark;
    } else {
      this.marks.push(...mark);
    }
  }

  alex.addMarks(1,2,3);
  alex.addMarks(4,5,6);
  
  Student.prototype.getAverage = function () {
    return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;;
  }
alex.getAverage();

  

  
  Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
  
    this.excluded = reason;
  }