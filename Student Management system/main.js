var student = /** @class */ (function () {
    function student(name, studentId) {
        this.name = name;
        this.studentId = studentId;
        this.courses = [];
        this.balance = 0;
    }
    student.prototype.enroll = function (course) {
        this.courses.push(course);
    };
    student.prototype.viewbalance = function () {
        console.log("Balance for ".concat(this.name, ": $").concat(this.balance));
    };
    student.prototype.payTuition = function (amount) {
        this.balance -= amount;
        console.log("Payment for ".concat(amount, "for this ").concat(this.name));
    };
    student.prototype.showstatus = function () {
        console.log("Name: ".concat(this.name));
        console.log("StudentId: ".concat(this.studentId));
        console.log("CourseEnrolled: ".concat(this.courses.join(',')));
        console.log("Balance: $".concat(this.balance));
    };
    return student;
}());
function generateStudentId() {
    return Math.floor(500 + Math.random() * 5000).toString();
}
var student_t = new student("Abrar", generateStudentId());
student_t.enroll('Mathematics');
student_t.enroll('Physics');
student_t.viewbalance();
student_t.payTuition(500);
student_t.viewbalance();
student_t.viewbalance();
