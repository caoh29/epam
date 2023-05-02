import  { Fragment } from "react";
function CourseAuthors({ authors }) {

    return (
        <Fragment>
            {authors.map((author) => (
            <span key={author.id}>{author.name} </span>
            ))}
        </Fragment>
    );
};

export default CourseAuthors;