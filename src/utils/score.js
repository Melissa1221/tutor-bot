// grades.js

export const calculateGrade = (questions, userAnswers) => {
    let correctAnswersCount = 0;

    questions.forEach((question, index) => {
        if (question.answer === userAnswers[index]) {
            correctAnswersCount++;
        }
    });

    const pointsPerQuestion = 20 / questions.length;
    const grade = correctAnswersCount * pointsPerQuestion;
    return Math.round(grade); // Redondear la calificación a un número entero
};
