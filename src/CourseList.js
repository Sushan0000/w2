import Course from "./Course";

function CourseList({ courses }) {
	return (
		<div>
			{courses.map((course) => (
				<Course
					name={course.name}
					courseId={course.courseId}
					studentPositions={course.studentPositions}
				/>
			))}
		</div>
	);
}

export default CourseList;
