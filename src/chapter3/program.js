const calculateAverageMarks = (studentsInfo) => {
	let sumOfGrades = 0;
	Object.values(studentsInfo).forEach(marks => {
		if (marks >= 0 && marks <= 100)
			sumOfGrades += marks;
		else
			throw new Error('Marks should be between 0 and 100.');
	});
	return sumOfGrades / (Object.values(studentsInfo)).length;
}

export const printGrades = (studentsInfo) => {
	const averageMarks = calculateAverageMarks(studentsInfo);
	console.log('The average marks are: ', averageMarks);
	console.log('The overall grade is: ', getGrade(averageMarks));
	Object.entries(studentsInfo).forEach((studentDetails) => {
		const grade = getGrade(studentDetails[1]);
		console.log(`${studentDetails[0]}'s grade: `, grade);
	});
}

const getGrade = (averageMarks) => {
	let grade;
	if (averageMarks < 60 && averageMarks >= 0)
		grade = 'F';
	else if (averageMarks >= 60 && averageMarks < 70)
		grade = 'D';
	else if (averageMarks >= 70 && averageMarks < 80)
		grade = 'C';
	else if (averageMarks >= 80 && averageMarks < 90)
		grade = 'B';
	else if (averageMarks >= 90 && averageMarks <= 100)
		grade = 'A';
	else
		grade = 'E';
	return grade;
}