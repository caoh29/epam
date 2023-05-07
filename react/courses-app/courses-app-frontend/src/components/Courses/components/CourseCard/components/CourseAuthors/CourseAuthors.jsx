import  { Fragment } from "react";
function CourseAuthors({ authors }) {

    return (
        <Fragment>
            {authors.length > 1 ? authors.map((author) => (
            <span key={author.id}>{author.name}, </span>
            )) : authors.map((author) => <span key={author.id}>{author.name}</span>)}
        </Fragment>
    );
};

export default CourseAuthors;