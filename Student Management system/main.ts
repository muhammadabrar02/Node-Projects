class student{
    name: string;
    studentId: string;
    courses: string[];
    balance: number;

    constructor(name:string,studentId:string){
        this.name = name;
        this.studentId = studentId;
        this.courses=[];
        this.balance=0;
    }
    enroll(course:string){
        this.courses.push(course);

    }
    viewbalance(){
        console.log(`Balance for ${this.name}: $${this.balance}`);
    }
    payTuition(amount:number){
        this.balance -=amount;
        console.log(`Payment for ${amount}for this ${this.name}`);
    }
    showstatus(){
        console.log(`Name: ${this.name}`);
        console.log(`StudentId: ${this.studentId}`);
        console.log(`CourseEnrolled: ${this.courses.join(',')}`);
        console.log(`Balance: $${this.balance}`);

    }
}
    function generateStudentId(){
        return Math.floor(500+ Math.random()*5000).toString();
    }
const student_t=new student("Abrar",generateStudentId());
student_t.enroll('Mathematics');
student_t.enroll('Physics');
student_t.viewbalance();
student_t.payTuition(500);
student_t.viewbalance();
student_t.viewbalance();

