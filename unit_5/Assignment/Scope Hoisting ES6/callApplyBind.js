function teacher(standard, nos) {
    this.standard = standard
    this.nos = nos
}

function person(standard, nos, name, subject) {
    this.name = name
    this.subject = subject
    teacher.call(this, standard, nos)
}


let teachers = {
    ajeet : new person(11, 15, "Ajeet", "Commerce"),
    jatin : new person(11, 18, "Jatin", "Science"),
    shubham : new person(10, 20, "Shubham", "Maths")
};
